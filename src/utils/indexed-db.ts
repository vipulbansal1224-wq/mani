// IndexedDB helper for storing large binary assets (high-res images & MP3 audio Blobs)
const DB_NAME = "ManiSandhuMediaDB";
const DB_VERSION = 1;
const STORE_NAME = "media_assets";

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !window.indexedDB) {
      return reject(new Error("IndexedDB not available"));
    }
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function setMediaAsset(key: string, value: Blob | string): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(value, key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn("IndexedDB set failed, falling back:", err);
  }
}

export async function getMediaAsset(key: string): Promise<string | Blob | null> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  } catch {
    return null;
  }
}

export function dataUrlToBlob(dataUrl: string): Blob {
  const [header, base64Data] = dataUrl.split(",");
  const mimeMatch = header?.match(/:(.*?);/);
  const mime = mimeMatch?.[1] && mimeMatch[1] !== "application/octet-stream"
    ? mimeMatch[1]
    : "audio/mpeg";
  const byteCharacters = atob(base64Data || "");
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: mime });
}

export async function getPlayableMediaUrl(key: string): Promise<string | null> {
  const stored = await getMediaAsset(key);
  if (!stored) return null;

  if (stored instanceof Blob) {
    const typedBlob =
      stored.type && stored.type !== "application/octet-stream"
        ? stored
        : new Blob([stored], { type: "audio/mpeg" });
    return URL.createObjectURL(typedBlob);
  }

  if (typeof stored === "string") {
    if (stored.startsWith("data:")) {
      try {
        const blob = dataUrlToBlob(stored);
        return URL.createObjectURL(blob);
      } catch {
        return stored;
      }
    }
    return stored;
  }

  return null;
}

export async function deleteMediaAsset(key: string): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn("IndexedDB delete failed:", err);
  }
}

export async function clearAllMediaAssets(): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const req = store.clear();
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn("IndexedDB clear failed:", err);
  }
}
