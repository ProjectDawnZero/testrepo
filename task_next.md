Refer the table definitions in [sqllight db](porndude.db) below

```
-- categories definition

CREATE TABLE categories (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            slug TEXT NOT NULL UNIQUE,
            referenceLink TEXT NOT NULL,
            position INTEGER
        );
-- sites definition

CREATE TABLE sites (
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
```

Refactor the website to use this as a datasource, only show 'sites' with 'previewImageURL' in the website
