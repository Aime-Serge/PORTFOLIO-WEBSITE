// src/utils/storage.ts
import { ZodSchema } from "zod";

/**
 * Save any serializable value to localStorage.
 */
export const saveJSON = <T>(key: string, data: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch {
    // Ignore if storage is not accessible
  }
};

/**
 * Load JSON from localStorage and validate it with a Zod schema.
 * Returns the parsed & validated value, or null if invalid/missing.
 */
export const loadJSON = <T>(key: string, schema: ZodSchema<T>): T | null => {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    const result = schema.safeParse(parsed);

    return result.success ? result.data : null;
  } catch {
    return null;
  }
};

/**
 * Remove a key from localStorage.
 */
export const removeJSON = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch {
    // Ignore if storage is not accessible
  }
};
