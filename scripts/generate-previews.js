/*
  Generate previews and favicons for all sites in porndude.db
  - Visits each URL with a headless browser and captures a screenshot
  - Attempts to discover and download the favicon
  - Saves assets under public/images/sites/<id-slug>/
  - Updates sites.previewImageURL and sites.iconURL in porndude.db
*/

const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');
const { URL } = require('url');
const puppeteer = require('puppeteer-core');
const Database = require('better-sqlite3');

function ensureDirectoryExists(directoryPath) {
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }
}

function slugify(input) {
  return String(input)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
    .substring(0, 60);
}

function getFileExtensionFromContentType(contentTypeHeader) {
  if (!contentTypeHeader) return 'ico';
  const contentType = String(contentTypeHeader).split(';')[0].trim();
  switch (contentType) {
    case 'image/png':
      return 'png';
    case 'image/jpeg':
    case 'image/jpg':
      return 'jpg';
    case 'image/svg+xml':
      return 'svg';
    case 'image/x-icon':
    case 'image/vnd.microsoft.icon':
      return 'ico';
    case 'image/webp':
      return 'webp';
    default:
      return 'ico';
  }
}

function downloadBinaryToFile(resourceUrl, destinationFilePath) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(resourceUrl);
    const lib = urlObj.protocol === 'http:' ? http : https;
    const request = lib.get(
      resourceUrl,
      { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; PreviewBot/1.0)' } },
      (response) => {
        if (
          response.statusCode &&
          response.statusCode >= 300 &&
          response.statusCode < 400 &&
          response.headers.location
        ) {
          // Follow one redirect
          const redirectUrl = new URL(response.headers.location, resourceUrl).toString();
          response.resume();
          downloadBinaryToFile(redirectUrl, destinationFilePath).then(resolve).catch(reject);
          return;
        }
        if (!response.statusCode || response.statusCode >= 400) {
          reject(new Error(`Failed to download ${resourceUrl}: ${response.statusCode}`));
          return;
        }

        const writeStream = fs.createWriteStream(destinationFilePath);
        response.pipe(writeStream);
        writeStream.on('finish', () =>
          writeStream.close(() => resolve(response.headers['content-type'])),
        );
        writeStream.on('error', reject);
      },
    );
    request.on('error', reject);
    request.end();
  });
}

async function discoverFaviconUrl(page, baseUrl) {
  try {
    const hrefs = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('link[rel]'));
      const relPriority = new Map([
        ['icon', 1],
        ['shortcut icon', 2],
        ['apple-touch-icon', 3],
        ['apple-touch-icon-precomposed', 4],
        ['mask-icon', 5],
        ['fluid-icon', 6],
      ]);
      return links
        .map((link) => ({
          rel: link.getAttribute('rel') || '',
          href: link.getAttribute('href') || '',
        }))
        .filter((it) => it.href)
        .sort((a, b) => (relPriority.get(a.rel) || 99) - (relPriority.get(b.rel) || 99))
        .map((it) => it.href);
    });

    for (const href of hrefs) {
      try {
        const resolved = new URL(href, baseUrl).toString();
        return resolved;
      } catch (_) {
        // ignore invalid URL
      }
    }
  } catch (_) {
    // ignore
  }

  try {
    const { origin } = new URL(baseUrl);
    return new URL('/favicon.ico', origin).toString();
  } catch (_) {
    return null;
  }
}

async function tryNavigate(page, targetUrl) {
  const normalized = targetUrl.match(/^https?:\/\//i) ? targetUrl : `https://${targetUrl}`;
  try {
    await page.goto(normalized, { waitUntil: 'networkidle2', timeout: 45000 });
    return normalized;
  } catch (_) {
    // Fallback to http
    const httpUrl = normalized.replace(/^https:\/\//i, 'http://');
    await page.goto(httpUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
    return httpUrl;
  }
}

async function main() {
  const projectRoot = path.resolve(__dirname, '..');
  const dbPath = path.resolve(projectRoot, 'porndude.db');
  const publicBaseDir = path.resolve(projectRoot, 'public', 'images', 'sites');
  ensureDirectoryExists(publicBaseDir);

  const db = new Database(dbPath);
  // Select up to top 15 sites per category by positionInCategory (ties by id),
  // and skip any site that already has a previewImageURL set
  const sites = db
    .prepare(
      `
      SELECT s.id, s.name, s.url
      FROM sites s
      WHERE (s.previewImageURL IS NULL OR TRIM(s.previewImageURL) = '')
        AND (
          SELECT COUNT(*)
          FROM sites s2
          WHERE s2.categoryId = s.categoryId
            AND (
              COALESCE(s2.positionInCategory, 2147483647) < COALESCE(s.positionInCategory, 2147483647)
              OR (
                COALESCE(s2.positionInCategory, 2147483647) = COALESCE(s.positionInCategory, 2147483647)
                AND s2.id < s.id
              )
            )
        ) < 15
      ORDER BY s.categoryId, COALESCE(s.positionInCategory, 2147483647) ASC, s.id ASC
    `,
    )
    .all();

  // Try common Chrome/Chromium executable locations on macOS
  const candidateExecutables = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  ];
  const chromeExecutablePath = candidateExecutables.find((p) => fs.existsSync(p));
  if (!chromeExecutablePath) {
    throw new Error('Could not find Chrome/Chromium executable. Please install Google Chrome.');
  }

  const browser = await puppeteer.launch({
    headless: true,
    executablePath: chromeExecutablePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });
  await page.setUserAgent(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  );

  const updateStmt = db.prepare('UPDATE sites SET previewImageURL = ?, iconURL = ? WHERE id = ?');

  for (const site of sites) {
    const slug = `${site.id}-${slugify(site.name)}`;
    const siteDir = path.resolve(publicBaseDir, slug);
    ensureDirectoryExists(siteDir);

    const previewFileName = 'preview.jpg';
    const previewFsPath = path.resolve(siteDir, previewFileName);
    const previewPublicPath = `/images/sites/${slug}/${previewFileName}`;

    let iconPublicPath = null;

    try {
      const visitedUrl = await tryNavigate(page, site.url);

      // Screenshot
      await page.screenshot({ path: previewFsPath, type: 'jpeg', quality: 80, fullPage: false });

      // Favicon
      const faviconUrl = await discoverFaviconUrl(page, visitedUrl);
      if (faviconUrl) {
        const tempPath = path.resolve(siteDir, 'favicon.tmp');
        const contentType = await downloadBinaryToFile(faviconUrl, tempPath).catch(() => null);
        if (contentType) {
          const ext = getFileExtensionFromContentType(contentType);
          const iconFileName = `favicon.${ext}`;
          const iconFsPath = path.resolve(siteDir, iconFileName);
          fs.renameSync(tempPath, iconFsPath);
          iconPublicPath = `/images/sites/${slug}/${iconFileName}`;
        } else {
          if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
        }
      }
    } catch (err) {
      console.error(`Failed to process site id=${site.id} url=${site.url}:`, err.message || err);
    }

    try {
      updateStmt.run(previewPublicPath, iconPublicPath, site.id);
      console.log(
        `Updated site id=${site.id} -> screenshot=${previewPublicPath} icon=${iconPublicPath || 'n/a'}`,
      );
    } catch (err) {
      console.error(`DB update failed for site id=${site.id}:`, err.message || err);
    }
  }

  await browser.close();
  db.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
