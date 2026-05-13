import * as SQLite from 'expo-sqlite';

const DATABASE_NAME = 'viralcut.db';

let cachedDb: SQLite.SQLiteDatabase | undefined;

export function getDatabase(): SQLite.SQLiteDatabase {
  if (!cachedDb) {
    cachedDb = SQLite.openDatabaseSync(DATABASE_NAME);
  }
  return cachedDb;
}

export async function closeDatabase(): Promise<void> {
  if (cachedDb) {
    await cachedDb.closeAsync();
    cachedDb = undefined;
  }
}
