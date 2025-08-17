// Lightweight wrapper utilities for better-sqlite3
import Database from 'better-sqlite3';

export interface Category {
  id: number;
  name: string;
  slug: string;
  referenceLink: string;
  position: number | null;
}

export interface Site {
  id: number;
  positionInCategory: number | null;
  name: string;
  url: string;
  previewImageURL: string;
  iconURL: string | null;
  description: string | null;
  categoryId: number;
}

export function getDb() {
  return new Database('porndude.db', { readonly: true });
}

export function getAllCategories(): Category[] {
  const db = getDb();
  const stmt = db.prepare(
    'SELECT id, name, slug, referenceLink, position FROM categories ORDER BY position ASC',
  );
  const categories = stmt.all() as Category[];
  db.close();
  return categories;
}

export function getAllCategoriesWithSites(): Category[] {
  const db = getDb();
  const stmt = db.prepare(
    `SELECT c.id, c.name, c.slug, c.referenceLink, c.position
     FROM categories c
     WHERE EXISTS (
       SELECT 1 FROM sites s
       WHERE s.categoryId = c.id
         AND s.previewImageURL IS NOT NULL
         AND TRIM(s.previewImageURL) != ''
     )
     ORDER BY c.position ASC`,
  );
  const categories = stmt.all() as Category[];
  db.close();
  return categories;
}

export function getCategoryBySlug(slug: string): Category | null {
  const db = getDb();
  const stmt = db.prepare(
    'SELECT id, name, slug, referenceLink, position FROM categories WHERE slug = ?',
  );
  const category = stmt.get(slug) as Category | undefined;
  db.close();
  return category || null;
}

export function getSitesByCategoryId(categoryId: number): Site[] {
  const db = getDb();
  const stmt = db.prepare(
    `SELECT id, positionInCategory, name, url, previewImageURL, iconURL, description, categoryId
     FROM sites
     WHERE categoryId = ? AND previewImageURL IS NOT NULL AND TRIM(previewImageURL) != ''
     ORDER BY positionInCategory ASC`,
  );
  const sites = stmt.all(categoryId) as Site[];
  db.close();
  return sites;
}

export function getTopSitesByCategoryId(categoryId: number, limit: number): Site[] {
  const db = getDb();
  const stmt = db.prepare(
    `SELECT id, positionInCategory, name, url, previewImageURL, iconURL, description, categoryId
     FROM sites
     WHERE categoryId = ? AND previewImageURL IS NOT NULL AND TRIM(previewImageURL) != ''
     ORDER BY positionInCategory ASC
     LIMIT ?`,
  );
  const sites = stmt.all(categoryId, limit) as Site[];
  db.close();
  return sites;
}

export function getSiteById(id: number): Site | null {
  const db = getDb();
  const stmt = db.prepare(
    `SELECT id, positionInCategory, name, url, previewImageURL, iconURL, description, categoryId
     FROM sites WHERE id = ? AND previewImageURL IS NOT NULL AND TRIM(previewImageURL) != ''`,
  );
  const site = stmt.get(id) as Site | undefined;
  db.close();
  return site || null;
}

export function getAllSiteIdsWithPreview(): number[] {
  const db = getDb();
  const rows = db
    .prepare(
      `SELECT id FROM sites WHERE previewImageURL IS NOT NULL AND TRIM(previewImageURL) != ''`,
    )
    .all() as { id: number }[];
  db.close();
  return rows.map((r) => r.id);
}
