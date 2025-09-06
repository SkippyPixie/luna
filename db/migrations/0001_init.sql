CREATE TABLE entries (
  id TEXT PRIMARY KEY,
  date TEXT NOT NULL,
  mood TEXT NOT NULL,
  tags TEXT,
  body TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ','now'))
);

CREATE TABLE exercises (
  id TEXT PRIMARY KEY,
  type TEXT NOT NULL,
  completed_at TEXT NOT NULL
);

CREATE TABLE settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);
