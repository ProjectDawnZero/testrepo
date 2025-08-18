const path = require('path');
const fs = require('fs');
const Database = require('better-sqlite3');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const DB_PATH = path.join(__dirname, '..', 'sites.db');

function getDb() {
  return new Database(DB_PATH);
}

async function cleanupPreviews() {
  const db = getDb();

  const sitesWithPreviews = db
    .prepare(
      `SELECT id, previewImageURL FROM sites WHERE previewImageURL IS NOT NULL AND TRIM(previewImageURL) != ''`,
    )
    .all();

  const updateStmt = db.prepare('UPDATE sites SET previewImageURL = NULL WHERE id = ?');

  for (const site of sitesWithPreviews) {
    const relativePath = site.previewImageURL.startsWith('/')
      ? site.previewImageURL.substring(1)
      : site.previewImageURL;
    const imagePath = path.join(PUBLIC_DIR, relativePath);

    if (!fs.existsSync(imagePath)) {
      updateStmt.run(site.id);
      console.log(
        `Cleaned up previewImageURL for site ID: ${site.id}. Image not found at ${imagePath}`,
      );
    }
  }

  db.close();
  console.log('Cleanup complete.');
}

cleanupPreviews();
