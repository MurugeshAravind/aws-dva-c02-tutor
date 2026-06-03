// ============================================================
// FILE: src/lib/storage.ts
//
// Uses localStorage when available (your deployed app) and silently
// falls back to in-memory when it isn't (SSR, private modes, sandboxes).
// Same code path runs everywhere — callers never need to care.
// ============================================================

const memStore: Record<string, unknown> = {};

let useLS = false;
try {
  window.localStorage.setItem("__t", "1");
  window.localStorage.removeItem("__t");
  useLS = true;
} catch {
  useLS = false;
}

export const store = {
  get<T>(k: string): T | null {
    try {
      if (useLS) {
        const v = window.localStorage.getItem(k);
        return v == null ? null : (JSON.parse(v) as T);
      }
    } catch {
      /* fall through to memory */
    }
    return k in memStore ? (memStore[k] as T) : null;
  },

  set(k: string, v: unknown): void {
    try {
      if (useLS) {
        window.localStorage.setItem(k, JSON.stringify(v));
        return;
      }
    } catch {
      /* fall through to memory */
    }
    memStore[k] = v;
  },
};