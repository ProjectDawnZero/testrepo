import fs from 'fs';
import path from 'path';
import Database from 'better-sqlite3';

const dbDir = path.join(process.cwd(), 'database');
const dbPath = path.join(dbDir, 'sites.db');

if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE
    referenceLink TEXT NOT NULL
    position INTEGER
  );

  CREATE TABLE IF NOT EXISTS sites (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    positionInCategory INTEGER,
    name TEXT NOT NULL,
    url TEXT NOT NULL,
    previewImageURL TEXT,
    iconURL TEXT,
    description TEXT,
    categoryId INTEGER,
    FOREIGN KEY (categoryId) REFERENCES categories(id)
  );
`);

const insertCategory = db.prepare('INSERT INTO categories (name, slug) VALUES (?, ?)');
const insertSite = db.prepare(
  'INSERT INTO sites (name, url, description, categoryId, rating, complianceNotice) VALUES (?, ?, ?, ?, ?, ?)',
);

// Only seed if empty
const { count } = db.prepare('SELECT COUNT(*) as count FROM categories').get() as { count: number };
if (count === 0) {
  const categories = [
    { name: 'Adult Videos', slug: 'adult-videos' },
    { name: 'Live Cams', slug: 'live-cams' },
  ];
  const sites = [
    {
      name: 'Example Adult Site',
      url: 'https://example-adult-site.com',
      description: 'A legal, high-quality adult video platform with verified content.',
      categoryId: 1,
      rating: 4.5,
      complianceNotice: 'Complies with 18 U.S.C. § 2257.',
    },
    {
      name: 'Example Cam Site',
      url: 'https://example-cam-site.com',
      description: 'Live adult webcam platform with age-verified performers.',
      categoryId: 2,
      rating: 4.7,
      complianceNotice: 'Complies with 18 U.S.C. § 2257.',
    },
  ];

  const insertAll = db.transaction(() => {
    categories.forEach((cat) => insertCategory.run(cat.name, cat.slug));
    sites.forEach((site) =>
      insertSite.run(
        site.name,
        site.url,
        site.description,
        site.categoryId,
        site.rating,
        site.complianceNotice,
      ),
    );
  });

  insertAll();
  console.log('Database initialized with seed data');
} else {
  console.log('Database already contains data; skipping seed');
}

db.close();
