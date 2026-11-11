export function extractYouTubeId(url?: string | null): string | null {
  if (!url) return null;
  const trimmed = url.trim();
  if (!trimmed) return null;

  // Bare 11-char video ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  const patterns = [
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/watch\?(?:[^#]*&)?v=([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/(?:embed|shorts|v|live)\/([a-zA-Z0-9_-]{11})/,
    /youtube-nocookie\.com\/embed\/([a-zA-Z0-9_-]{11})/,
  ];

  for (const regex of patterns) {
    const match = trimmed.match(regex);
    if (match?.[1]) return match[1];
  }
  return null;
}

export function extractSpotifyTrackId(url?: string | null): string | null {
  if (!url) return null;
  const trimmed = url.trim();
  if (!trimmed) return null;

  const webMatch = trimmed.match(
    /open\.spotify\.com\/(?:intl-[a-zA-Z-]+\/)?(?:embed\/)?track\/([a-zA-Z0-9]{15,30})/
  );
  if (webMatch?.[1]) return webMatch[1];

  const uriMatch = trimmed.match(/^spotify:track:([a-zA-Z0-9]{15,30})$/);
  if (uriMatch?.[1]) return uriMatch[1];

  return null;
}

export function getYouTubeThumbnail(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
}

export function getAudioMimeType(filename?: string, rawType?: string): string {
  const normalizedRaw = (rawType || "").toLowerCase().trim();
  if (
    normalizedRaw.startsWith("audio/") &&
    normalizedRaw !== "audio/x-mpeg" &&
    normalizedRaw !== "audio/x-wav"
  ) {
    return normalizedRaw === "audio/mp3" ? "audio/mpeg" : normalizedRaw;
  }

  const ext = (filename || "").split(".").pop()?.toLowerCase() || "";
  const map: Record<string, string> = {
    mp3: "audio/mpeg",
    mpeg: "audio/mpeg",
    mpga: "audio/mpeg",
    m4a: "audio/mp4",
    mp4: "audio/mp4",
    aac: "audio/aac",
    wav: "audio/wav",
    ogg: "audio/ogg",
    oga: "audio/ogg",
    opus: "audio/opus",
    flac: "audio/flac",
    webm: "audio/webm",
  };
  return map[ext] || "audio/mpeg";
}

export function normalizeAudioBlob(input: File | Blob, fallbackName?: string): Blob {
  const name = input instanceof File ? input.name : fallbackName || "track.mp3";
  const mime = getAudioMimeType(name, input.type);
  if (input.type === mime) return input;
  return new Blob([input], { type: mime });
}

export type AudioSourceKind = "idb" | "youtube" | "spotify" | "direct" | "empty";

export interface ClassifiedAudioSource {
  kind: AudioSourceKind;
  src: string;
  externalId?: string;
}

export function classifyAudioSource(src?: string | null): ClassifiedAudioSource {
  const cleaned = (src || "").trim();
  if (!cleaned) return { kind: "empty", src: "" };

  if (cleaned.startsWith("idb_audio_")) {
    return { kind: "idb", src: cleaned, externalId: cleaned };
  }

  const ytId = extractYouTubeId(cleaned);
  if (ytId) {
    return { kind: "youtube", src: cleaned, externalId: ytId };
  }

  const spId = extractSpotifyTrackId(cleaned);
  if (spId) {
    return { kind: "spotify", src: cleaned, externalId: spId };
  }

  return { kind: "direct", src: cleaned };
}
