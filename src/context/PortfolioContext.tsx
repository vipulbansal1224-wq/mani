"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { ALL_GALLERY_ITEMS, GalleryItem } from "@/data/gallery-data";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import {
  setMediaAsset,
  getPlayableMediaUrl,
  deleteMediaAsset,
  clearAllMediaAssets,
  dataUrlToBlob,
} from "@/utils/indexed-db";
import {
  classifyAudioSource,
  extractSpotifyTrackId,
  extractYouTubeId,
  getYouTubeThumbnail,
  normalizeAudioBlob,
} from "@/utils/media-links";

export const ADMIN_PASSCODE = "alto7528";

export interface MusicTrackItem {
  id: string;
  title: string;
  artist: string;
  category: string;
  year: string;
  audioSrc: string; // direct MP3 URL, YouTube URL, Spotify URL, or idb_audio_<id>
  coverSrc?: string; // URL, static path, or idb_cover_<id>
  youtubeUrl?: string;
  spotifyUrl?: string;
  wynkUrl?: string;
  duration?: string;
  views?: string;
  isActiveForSite?: boolean;
}

export type PlayerMode = "audio" | "youtube" | "spotify";

export const DEFAULT_TRACKS: MusicTrackItem[] = [
  {
    id: "track-1",
    title: "Mirza (Tribute to Ustad Surinder Shinda Ji)",
    artist: "Mani Sandhu",
    category: "Featured Single • Tribute",
    year: "2024",
    audioSrc: "https://p.scdn.co/mp3-preview/c07c47027dc750698b4583698a8e577423056bfe",
    youtubeUrl: "https://youtu.be/yccf8_b0K_c",
    spotifyUrl: "https://open.spotify.com/track/191LuVev3fckmIVgAOr77l?si=VTh_fLOPSDe7EragP3Mbbg&utm_source=copy-link",
    wynkUrl: "https://open.wynk.in/HAr66OrnELb",
    coverSrc: "https://i.ytimg.com/vi/yccf8_b0K_c/maxresdefault.jpg",
    duration: "2:45",
    views: "102K+ Views",
    isActiveForSite: true,
  },
  {
    id: "track-2",
    title: "Ki Dam Da Bharosa Yaar",
    artist: "Kaur Billo (Mani Sandhu Records)",
    category: "Punjabi Folk Song",
    year: "2024",
    audioSrc: "https://youtu.be/jffklZKGg_U",
    youtubeUrl: "https://youtu.be/jffklZKGg_U",
    coverSrc: "https://i.ytimg.com/vi/jffklZKGg_U/maxresdefault.jpg",
    duration: "3:44",
    views: "118K+ Views",
    isActiveForSite: false,
  },
  {
    id: "track-3",
    title: "Guddiyan Patole",
    artist: "Kaur Billo (Mani Sandhu Records)",
    category: "New Year Special",
    year: "2025",
    audioSrc: "https://youtu.be/vJXjt5Hynbg",
    youtubeUrl: "https://youtu.be/vJXjt5Hynbg",
    coverSrc: "https://i.ytimg.com/vi/vJXjt5Hynbg/maxresdefault.jpg",
    duration: "3:45",
    views: "103K+ Views",
    isActiveForSite: false,
  },
  {
    id: "track-4",
    title: "Shiv Shiv Shambhu",
    artist: "Mani Sandhu",
    category: "Devotional Bhajan",
    year: "2024",
    audioSrc: "https://p.scdn.co/mp3-preview/b274df0436e0da79b0ba9d06b113c425c52fe439",
    youtubeUrl: "https://youtu.be/jrEQzNay_Ns",
    spotifyUrl: "https://open.spotify.com/track/4DQjIpQ0hbl30RKRIHD5gS",
    coverSrc: "https://i.ytimg.com/vi/jrEQzNay_Ns/maxresdefault.jpg",
    duration: "2:56",
    views: "126K+ Views",
    isActiveForSite: false,
  },
  {
    id: "track-5",
    title: "Rusiya Kyu Ponahariyah",
    artist: "Mani Sandhu (Producer Kaur Billo)",
    category: "Devotional Classic",
    year: "2024",
    audioSrc: "https://p.scdn.co/mp3-preview/20dfec62667628611dc98277d4cbdf3f97c0c254",
    spotifyUrl: "https://open.spotify.com/track/5w46B87lXU30l63Ag4fdiF",
    coverSrc: "/images/music/m1_053_music_posters.jpeg",
    duration: "5:10",
    views: "Devotional Hit",
    isActiveForSite: false,
  },
  {
    id: "track-6",
    title: "Nakhrey Da Mull",
    artist: "Mani Sandhu UK (Blessings Kaur Billo)",
    category: "Mehak Punjab Di",
    year: "2024",
    audioSrc: "https://p.scdn.co/mp3-preview/5759da86ef4bfe521fcb144cd57ed67566290ca7",
    spotifyUrl: "https://open.spotify.com/track/7fNgge2O0wgRYxzev4bMcO",
    coverSrc: "/images/music/m1_050_music_posters.jpeg",
    duration: "3:35",
    views: "UK Special",
    isActiveForSite: false,
  },
];

interface PortfolioContextType {
  // Gallery Items
  galleryItems: GalleryItem[];
  legendsItems: GalleryItem[];
  shootsItems: GalleryItem[];
  portfolioItems: GalleryItem[];
  musicItems: GalleryItem[];
  btsItems: GalleryItem[];
  categoryCounts: {
    total: number;
    legends: number;
    shoots: number;
    portfolio: number;
    music: number;
    bts: number;
  };

  // Gallery Actions
  addImage: (item: Omit<GalleryItem, "id">, fileDataUrl?: string) => Promise<GalleryItem>;
  updateImage: (id: string, updates: Partial<GalleryItem>, fileDataUrl?: string) => Promise<void>;
  deleteImage: (id: string) => void;
  bulkAddImages: (items: Array<{ item: Omit<GalleryItem, "id">; fileDataUrl?: string }>) => Promise<void>;
  resetImagesToDefault: () => void;

  // Profile Info
  profile: typeof PORTFOLIO_DATA.profile;
  updateProfile: (updates: Partial<typeof PORTFOLIO_DATA.profile>) => void;
  resetProfileToDefault: () => void;

  // Music Tracks
  musicTracks: MusicTrackItem[];
  activeSiteTrack: MusicTrackItem | null;
  resolvedCovers: Record<string, string>;
  resolveCoverUrl: (coverSrc?: string) => string;
  addMusicTrack: (
    track: Omit<MusicTrackItem, "id">,
    audioInput?: File | Blob | string,
    coverInput?: File | Blob | string,
    autoPlay?: boolean
  ) => Promise<MusicTrackItem>;
  updateMusicTrack: (
    id: string,
    updates: Partial<MusicTrackItem>,
    audioInput?: File | Blob | string,
    coverInput?: File | Blob | string
  ) => Promise<MusicTrackItem | null>;
  deleteMusicTrack: (id: string) => void;
  setActiveSiteTrack: (id: string) => void;
  resetTracksToDefault: () => void;

  // Audio / Media Playback
  currentPlayingTrack: MusicTrackItem | null;
  isPlaying: boolean;
  playerMode: PlayerMode;
  embedId: string | null;
  playbackProgress: number; // 0 to 100
  currentTimeFormatted: string;
  durationFormatted: string;
  volume: number;
  setVolume: (vol: number) => void;
  audioError: string | null;
  clearAudioError: () => void;
  playTrack: (track: MusicTrackItem, directPlayUrl?: string) => Promise<void>;
  pauseTrack: () => void;
  closePlayer: () => void;
  togglePlayTrack: (track?: MusicTrackItem, directPlayUrl?: string) => void;
  switchPlayerMode: (mode: PlayerMode, externalId?: string | null) => void;
  seekTrack: (percentage: number) => void;

  // Security / Auth
  isAdminLoggedIn: boolean;
  loginAdmin: (passcode: string) => boolean;
  logoutAdmin: () => void;

  // Global Sync Status
  isLoaded: boolean;
}

const PortfolioContext = createContext<PortfolioContextType | null>(null);

const STORAGE_KEYS = {
  GALLERY: "mani_gallery_items_v2",
  PROFILE: "mani_profile_data_v3",
  TRACKS: "mani_music_tracks_v3",
  LEGACY_TRACKS_V2: "mani_music_tracks_v2",
  AUTH: "mani_admin_session_auth",
};

function sanitizeTracksForStorage(tracks: MusicTrackItem[]): MusicTrackItem[] {
  return tracks.map((t) => ({
    ...t,
    audioSrc:
      t.audioSrc.startsWith("blob:") || t.audioSrc.startsWith("data:") || t.audioSrc.length > 600
        ? `idb_audio_${t.id}`
        : t.audioSrc,
    coverSrc:
      t.coverSrc && (t.coverSrc.startsWith("blob:") || t.coverSrc.startsWith("data:") || t.coverSrc.length > 600)
        ? `idb_cover_${t.id}`
        : t.coverSrc,
  }));
}

function persistTracksSafely(tracks: MusicTrackItem[]) {
  try {
    const cleanTracks = sanitizeTracksForStorage(tracks);
    localStorage.setItem(STORAGE_KEYS.TRACKS, JSON.stringify(cleanTracks));
  } catch (err) {
    console.warn("Storage quota error on music track save:", err);
  }
}

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(ALL_GALLERY_ITEMS);
  const [profile, setProfile] = useState<typeof PORTFOLIO_DATA.profile>(PORTFOLIO_DATA.profile);
  const [musicTracks, setMusicTracks] = useState<MusicTrackItem[]>(DEFAULT_TRACKS);
  const [resolvedCovers, setResolvedCovers] = useState<Record<string, string>>({});
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Audio / Embed Playback states
  const [currentPlayingTrack, setCurrentPlayingTrack] = useState<MusicTrackItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerMode, setPlayerMode] = useState<PlayerMode>("audio");
  const [embedId, setEmbedId] = useState<string | null>(null);
  const [playbackProgress, setPlaybackProgress] = useState(0);
  const [currentTimeFormatted, setCurrentTimeFormatted] = useState("0:00");
  const [durationFormatted, setDurationFormatted] = useState("0:00");
  const [volume, setVolumeState] = useState(1);
  const [audioError, setAudioError] = useState<string | null>(null);

  const clearAudioError = () => setAudioError(null);

  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const objectUrlCacheRef = useRef<Map<string, string>>(new Map());
  const playerModeRef = useRef<PlayerMode>("audio");

  useEffect(() => {
    playerModeRef.current = playerMode;
  }, [playerMode]);

  // Hydrate idb_cover_ keys whenever musicTracks updates
  useEffect(() => {
    let active = true;
    const keysToLoad = musicTracks
      .map((t) => t.coverSrc)
      .filter((c): c is string => Boolean(c && c.startsWith("idb_cover_") && !objectUrlCacheRef.current.has(c)));

    if (keysToLoad.length === 0) return;

    (async () => {
      const additions: Record<string, string> = {};
      for (const key of keysToLoad) {
        const url = await getPlayableMediaUrl(key);
        if (url && active) {
          objectUrlCacheRef.current.set(key, url);
          additions[key] = url;
        }
      }
      if (active && Object.keys(additions).length > 0) {
        setResolvedCovers((prev) => ({ ...prev, ...additions }));
      }
    })();

    return () => {
      active = false;
    };
  }, [musicTracks]);

  const resolveCoverUrl = (coverSrc?: string): string => {
    if (!coverSrc) return "/images/portfolio/m2_064_portfolio_studio-fashion.jpeg";
    if (coverSrc.startsWith("idb_cover_")) {
      return resolvedCovers[coverSrc] || objectUrlCacheRef.current.get(coverSrc) || "/images/portfolio/m2_064_portfolio_studio-fashion.jpeg";
    }
    return coverSrc;
  };

  // Initialize from LocalStorage + migrate any legacy custom uploads safely
  useEffect(() => {
    try {
      const authSession =
        sessionStorage.getItem(STORAGE_KEYS.AUTH) || localStorage.getItem(STORAGE_KEYS.AUTH);
      if (authSession === "authenticated_alto7528") {
        setIsAdminLoggedIn(true);
      }

      const savedProfile = localStorage.getItem(STORAGE_KEYS.PROFILE);
      if (savedProfile) {
        setProfile((prev) => ({ ...prev, ...JSON.parse(savedProfile) }));
      }

      const savedGallery = localStorage.getItem(STORAGE_KEYS.GALLERY);
      if (savedGallery) {
        const parsed: GalleryItem[] = JSON.parse(savedGallery);
        setGalleryItems(parsed);
      }

      const savedTracksV3 = localStorage.getItem(STORAGE_KEYS.TRACKS);
      if (savedTracksV3) {
        const parsed: MusicTrackItem[] = JSON.parse(savedTracksV3);
        setMusicTracks(parsed);
      } else {
        // Migrate genuinely user-uploaded tracks from v2 if present, while replacing old SoundHelix defaults
        const legacyV2 = localStorage.getItem(STORAGE_KEYS.LEGACY_TRACKS_V2);
        if (legacyV2) {
          const parsedLegacy: MusicTrackItem[] = JSON.parse(legacyV2);
          const customUserTracks = parsedLegacy.filter(
            (t) =>
              t.id.startsWith("track-custom-") ||
              t.audioSrc.startsWith("idb_audio_")
          );
          if (customUserTracks.length > 0) {
            const merged = [...customUserTracks, ...DEFAULT_TRACKS];
            const hasActiveCustom = customUserTracks.some((t) => t.isActiveForSite);
            const normalizedMerged = hasActiveCustom
              ? merged.map((t) =>
                  t.id.startsWith("track-custom-") || t.audioSrc.startsWith("idb_audio_")
                    ? t
                    : { ...t, isActiveForSite: false }
                )
              : merged;
            setMusicTracks(normalizedMerged);
            persistTracksSafely(normalizedMerged);
          }
        }
      }
    } catch (e) {
      console.warn("Storage hydration note:", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Native HTMLAudioElement setup
  useEffect(() => {
    if (typeof window === "undefined") return;

    const audio = new Audio();
    audio.preload = "auto";
    audioElementRef.current = audio;

    const handleTimeUpdate = () => {
      if (!audio.duration || Number.isNaN(audio.duration)) return;
      const progress = (audio.currentTime / audio.duration) * 100;
      setPlaybackProgress(progress);

      const curM = Math.floor(audio.currentTime / 60);
      const curS = Math.floor(audio.currentTime % 60);
      setCurrentTimeFormatted(`${curM}:${curS < 10 ? "0" : ""}${curS}`);

      const durM = Math.floor(audio.duration / 60);
      const durS = Math.floor(audio.duration % 60);
      setDurationFormatted(`${durM}:${durS < 10 ? "0" : ""}${durS}`);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setPlaybackProgress(0);
    };

    const handlePlaying = () => {
      setIsPlaying(true);
      setAudioError(null);
    };

    const handlePause = () => {
      if (playerModeRef.current === "audio") {
        setIsPlaying(false);
      }
    };

    const handleError = () => {
      // Ignore spurious events when src is intentionally cleared or embed player is active
      if (playerModeRef.current !== "audio") return;
      const attrSrc = audio.getAttribute("src");
      if (!attrSrc) return;

      console.warn("Audio playback error for src:", attrSrc, audio.error?.code);
      setIsPlaying(false);
      setAudioError("Could not play this audio source. Check your MP3 file or YouTube/Spotify link.");
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("playing", handlePlaying);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("error", handleError);

    return () => {
      audio.pause();
      audio.removeAttribute("src");
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("playing", handlePlaying);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("error", handleError);
    };
  }, []);

  const setVolume = (vol: number) => {
    const clamped = Math.max(0, Math.min(1, vol));
    setVolumeState(clamped);
    if (audioElementRef.current) {
      audioElementRef.current.volume = clamped;
    }
  };

  const stopNativeAudio = () => {
    const audio = audioElementRef.current;
    if (audio) {
      audio.pause();
      audio.removeAttribute("src");
    }
  };

  const playTrack = async (track: MusicTrackItem, directPlayUrl?: string) => {
    setAudioError(null);
    setCurrentPlayingTrack(track);

    const rawSource = directPlayUrl || track.audioSrc;
    const classified = classifyAudioSource(rawSource);

    // Handle YouTube URLs natively via embedded YouTube player
    if (classified.kind === "youtube" && classified.externalId) {
      stopNativeAudio();
      playerModeRef.current = "youtube";
      setPlayerMode("youtube");
      setEmbedId(classified.externalId);
      setPlaybackProgress(0);
      setCurrentTimeFormatted("0:00");
      setDurationFormatted(track.duration || "YouTube");
      setIsPlaying(true);
      return;
    }

    // Handle Spotify track URLs natively via embedded Spotify player
    if (classified.kind === "spotify" && classified.externalId) {
      stopNativeAudio();
      playerModeRef.current = "spotify";
      setPlayerMode("spotify");
      setEmbedId(classified.externalId);
      setPlaybackProgress(0);
      setCurrentTimeFormatted("0:00");
      setDurationFormatted(track.duration || "Spotify");
      setIsPlaying(true);
      return;
    }

    if (classified.kind === "empty") {
      // Fallback: if audioSrc is empty, check track.youtubeUrl or track.spotifyUrl
      const ytId = extractYouTubeId(track.youtubeUrl);
      if (ytId) {
        stopNativeAudio();
        playerModeRef.current = "youtube";
        setPlayerMode("youtube");
        setEmbedId(ytId);
        setIsPlaying(true);
        return;
      }
      const spId = extractSpotifyTrackId(track.spotifyUrl);
      if (spId) {
        stopNativeAudio();
        playerModeRef.current = "spotify";
        setPlayerMode("spotify");
        setEmbedId(spId);
        setIsPlaying(true);
        return;
      }
      setIsPlaying(false);
      setAudioError("No audio or link attached to this track. Upload an MP3 or add a link in Music Panel.");
      return;
    }

    // Direct audio / IndexedDB Blob audio
    playerModeRef.current = "audio";
    setPlayerMode("audio");
    setEmbedId(null);

    let resolvedUrl = directPlayUrl || "";

    if (!resolvedUrl && classified.kind === "idb") {
      const cached = objectUrlCacheRef.current.get(classified.src);
      if (cached) {
        resolvedUrl = cached;
      } else {
        const fetched = await getPlayableMediaUrl(classified.src);
        if (fetched) {
          objectUrlCacheRef.current.set(classified.src, fetched);
          resolvedUrl = fetched;
        } else {
          // If MP3 blob is on another device, smoothly fall back to track's YouTube or Spotify embed if available!
          const ytFallback = extractYouTubeId(track.youtubeUrl);
          if (ytFallback) {
            stopNativeAudio();
            playerModeRef.current = "youtube";
            setPlayerMode("youtube");
            setEmbedId(ytFallback);
            setIsPlaying(true);
            return;
          }
          const spFallback = extractSpotifyTrackId(track.spotifyUrl);
          if (spFallback) {
            stopNativeAudio();
            playerModeRef.current = "spotify";
            setPlayerMode("spotify");
            setEmbedId(spFallback);
            setIsPlaying(true);
            return;
          }
          setIsPlaying(false);
          setAudioError("Uploaded MP3 not found in this browser. Upload again or attach a YouTube/Spotify link.");
          return;
        }
      }
    } else if (!resolvedUrl) {
      if (classified.src.startsWith("data:")) {
        try {
          const blob = dataUrlToBlob(classified.src);
          resolvedUrl = URL.createObjectURL(blob);
          objectUrlCacheRef.current.set(`idb_audio_${track.id}`, resolvedUrl);
        } catch {
          resolvedUrl = classified.src;
        }
      } else {
        resolvedUrl = classified.src;
      }
    }

    const audio = audioElementRef.current;
    if (!audio) return;

    try {
      audio.volume = volume;
      audio.src = resolvedUrl;
      audio.load();
      await audio.play();
      setIsPlaying(true);
      setAudioError(null);
    } catch (err: unknown) {
      const domErr = err as { name?: string };
      console.warn("Playback notice:", err);
      setIsPlaying(false);
      if (domErr?.name === "NotAllowedError") {
        setAudioError("Tap Play below to start audio playback.");
      } else {
        setAudioError("Could not play this audio file. Try MP3/M4A format or paste a YouTube/Spotify link.");
      }
    }
  };

  const pauseTrack = () => {
    if (audioElementRef.current) {
      audioElementRef.current.pause();
    }
    setIsPlaying(false);
  };

  const closePlayer = () => {
    stopNativeAudio();
    setIsPlaying(false);
    setPlayerMode("audio");
    setEmbedId(null);
    setCurrentPlayingTrack(null);
    setAudioError(null);
  };

  const togglePlayTrack = (track?: MusicTrackItem, directPlayUrl?: string) => {
    const target = track || currentPlayingTrack || activeSiteTrack || musicTracks[0];
    if (!target) return;

    if (currentPlayingTrack?.id === target.id && playerMode === "audio" && isPlaying && !directPlayUrl) {
      pauseTrack();
    } else if (
      currentPlayingTrack?.id === target.id &&
      playerMode === "audio" &&
      audioElementRef.current?.getAttribute("src") &&
      !directPlayUrl
    ) {
      audioElementRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setAudioError(null);
        })
        .catch(() => playTrack(target));
    } else {
      playTrack(target, directPlayUrl);
    }
  };

  const switchPlayerMode = (mode: PlayerMode, externalId?: string | null) => {
    if (mode === "youtube" && externalId) {
      stopNativeAudio();
      playerModeRef.current = "youtube";
      setPlayerMode("youtube");
      setEmbedId(externalId);
      setIsPlaying(true);
      setAudioError(null);
      return;
    }
    if (mode === "spotify" && externalId) {
      stopNativeAudio();
      playerModeRef.current = "spotify";
      setPlayerMode("spotify");
      setEmbedId(externalId);
      setIsPlaying(true);
      setAudioError(null);
      return;
    }
    if (mode === "audio" && currentPlayingTrack) {
      playTrack(currentPlayingTrack);
    }
  };

  const seekTrack = (percentage: number) => {
    if (audioElementRef.current && audioElementRef.current.duration) {
      const targetTime = (percentage / 100) * audioElementRef.current.duration;
      audioElementRef.current.currentTime = targetTime;
      setPlaybackProgress(percentage);
    }
  };

  // Auth actions
  const loginAdmin = (code: string) => {
    if (code.trim() === ADMIN_PASSCODE) {
      setIsAdminLoggedIn(true);
      sessionStorage.setItem(STORAGE_KEYS.AUTH, "authenticated_alto7528");
      localStorage.setItem(STORAGE_KEYS.AUTH, "authenticated_alto7528");
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    sessionStorage.removeItem(STORAGE_KEYS.AUTH);
    localStorage.removeItem(STORAGE_KEYS.AUTH);
  };

  // Gallery Actions
  const addImage = async (
    itemData: Omit<GalleryItem, "id">,
    fileDataUrl?: string
  ): Promise<GalleryItem> => {
    const id = `custom-img-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`;
    let finalSrc = itemData.src;

    if (fileDataUrl) {
      const key = `idb_img_${id}`;
      await setMediaAsset(key, fileDataUrl);
      finalSrc = fileDataUrl;
    }

    const newItem: GalleryItem = {
      ...itemData,
      id,
      src: finalSrc,
      originalFolder: "admin-upload",
      originalIndex: galleryItems.length,
    };

    const updated = [newItem, ...galleryItems];
    setGalleryItems(updated);
    try {
      localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(updated));
    } catch {
      console.warn("Storage quota limit reached for localStorage gallery cache");
    }
    return newItem;
  };

  const updateImage = async (
    id: string,
    updates: Partial<GalleryItem>,
    fileDataUrl?: string
  ) => {
    const finalUpdates = { ...updates };
    if (fileDataUrl) {
      await setMediaAsset(`idb_img_${id}`, fileDataUrl);
      finalUpdates.src = fileDataUrl;
    }
    const updated = galleryItems.map((item) =>
      item.id === id ? { ...item, ...finalUpdates } : item
    );
    setGalleryItems(updated);
    try {
      localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(updated));
    } catch {
      console.warn("Storage quota limit reached for localStorage gallery cache");
    }
  };

  const deleteImage = (id: string) => {
    const updated = galleryItems.filter((item) => item.id !== id);
    setGalleryItems(updated);
    try {
      localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(updated));
    } catch {
      // ignore
    }
    deleteMediaAsset(`idb_img_${id}`);
  };

  const bulkAddImages = async (
    items: Array<{ item: Omit<GalleryItem, "id">; fileDataUrl?: string }>
  ) => {
    const newItems: GalleryItem[] = [];
    for (let i = 0; i < items.length; i++) {
      const entry = items[i];
      const id = `custom-img-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`;
      let finalSrc = entry.item.src;
      if (entry.fileDataUrl) {
        await setMediaAsset(`idb_img_${id}`, entry.fileDataUrl);
        finalSrc = entry.fileDataUrl;
      }
      newItems.push({
        ...entry.item,
        id,
        src: finalSrc,
        originalFolder: "admin-bulk-upload",
        originalIndex: galleryItems.length + newItems.length,
      });
    }

    const updated = [...newItems, ...galleryItems];
    setGalleryItems(updated);
    try {
      localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(updated));
    } catch (e) {
      console.warn("Local storage quota notice on bulk upload", e);
    }
  };

  const resetImagesToDefault = () => {
    setGalleryItems(ALL_GALLERY_ITEMS);
    localStorage.removeItem(STORAGE_KEYS.GALLERY);
    clearAllMediaAssets();
  };

  // Profile Actions
  const updateProfile = (updates: Partial<typeof PORTFOLIO_DATA.profile>) => {
    const updated = { ...profile, ...updates };
    setProfile(updated);
    try {
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(updated));
    } catch (err) {
      console.warn("Profile save error:", err);
    }
  };

  const resetProfileToDefault = () => {
    setProfile(PORTFOLIO_DATA.profile);
    localStorage.removeItem(STORAGE_KEYS.PROFILE);
  };

  // Helper to store Blob / File / DataURL safely into IndexedDB + ObjectURL cache
  const saveAudioAsset = async (
    trackId: string,
    audioInput: File | Blob | string
  ): Promise<{ idbKey: string; objectUrl: string }> => {
    const idbKey = `idb_audio_${trackId}`;
    let blob: Blob;
    if (audioInput instanceof Blob) {
      blob = normalizeAudioBlob(audioInput);
    } else if (audioInput.startsWith("data:")) {
      blob = dataUrlToBlob(audioInput);
    } else {
      blob = new Blob([audioInput], { type: "audio/mpeg" });
    }

    // Revoke previous cached URL for this key if present
    const prevUrl = objectUrlCacheRef.current.get(idbKey);
    if (prevUrl && prevUrl.startsWith("blob:")) {
      try {
        URL.revokeObjectURL(prevUrl);
      } catch {
        // ignore
      }
    }

    const objectUrl = URL.createObjectURL(blob);
    objectUrlCacheRef.current.set(idbKey, objectUrl);
    await setMediaAsset(idbKey, blob);
    return { idbKey, objectUrl };
  };

  const saveCoverAsset = async (
    trackId: string,
    coverInput: File | Blob | string
  ): Promise<{ idbKey: string; objectUrl: string }> => {
    const idbKey = `idb_cover_${trackId}`;
    let blobOrStr: Blob | string = coverInput;
    let objectUrl: string;

    if (coverInput instanceof Blob) {
      objectUrl = URL.createObjectURL(coverInput);
      blobOrStr = coverInput;
    } else if (coverInput.startsWith("data:")) {
      const blob = dataUrlToBlob(coverInput);
      blobOrStr = blob;
      objectUrl = URL.createObjectURL(blob);
    } else {
      objectUrl = coverInput;
    }

    const prevUrl = objectUrlCacheRef.current.get(idbKey);
    if (prevUrl && prevUrl.startsWith("blob:")) {
      try {
        URL.revokeObjectURL(prevUrl);
      } catch {
        // ignore
      }
    }

    objectUrlCacheRef.current.set(idbKey, objectUrl);
    setResolvedCovers((prev) => ({ ...prev, [idbKey]: objectUrl }));
    await setMediaAsset(idbKey, blobOrStr);
    return { idbKey, objectUrl };
  };

  // Music Actions
  const addMusicTrack = async (
    trackData: Omit<MusicTrackItem, "id">,
    audioInput?: File | Blob | string,
    coverInput?: File | Blob | string,
    autoPlay = false
  ): Promise<MusicTrackItem> => {
    const id = `track-custom-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
    let finalAudioSrc = (trackData.audioSrc || "").trim();
    let syncObjectUrl: string | undefined;

    // Prepare Blob + ObjectURL synchronously first so user gesture survives for playback
    let pendingAudioBlob: Blob | null = null;
    if (audioInput) {
      if (audioInput instanceof Blob) {
        pendingAudioBlob = normalizeAudioBlob(audioInput);
      } else if (audioInput.startsWith("data:")) {
        pendingAudioBlob = dataUrlToBlob(audioInput);
      }
      if (pendingAudioBlob) {
        const idbKey = `idb_audio_${id}`;
        syncObjectUrl = URL.createObjectURL(pendingAudioBlob);
        objectUrlCacheRef.current.set(idbKey, syncObjectUrl);
        finalAudioSrc = idbKey;
      }
    }

    // Derive external links & cover synchronously
    const ytId = extractYouTubeId(finalAudioSrc) || extractYouTubeId(trackData.youtubeUrl);
    const spId = extractSpotifyTrackId(finalAudioSrc) || extractSpotifyTrackId(trackData.spotifyUrl);

    let finalCoverSrc = trackData.coverSrc;
    const hasCustomCover = Boolean(coverInput || (finalCoverSrc && finalCoverSrc.startsWith("data:")));
    if (hasCustomCover) {
      finalCoverSrc = `idb_cover_${id}`;
    } else if (ytId && (!finalCoverSrc || finalCoverSrc.includes("m2_064_portfolio"))) {
      finalCoverSrc = getYouTubeThumbnail(ytId);
    }

    const newTrack: MusicTrackItem = {
      ...trackData,
      id,
      audioSrc: finalAudioSrc,
      coverSrc: finalCoverSrc,
      youtubeUrl: trackData.youtubeUrl || (ytId ? `https://youtu.be/${ytId}` : undefined),
      spotifyUrl: trackData.spotifyUrl || (spId ? `https://open.spotify.com/track/${spId}` : undefined),
      isActiveForSite: trackData.isActiveForSite || false,
    };

    // Trigger playback immediately before IndexedDB await so mobile browsers preserve user activation
    if (autoPlay) {
      void playTrack(newTrack, syncObjectUrl);
    }

    const dbTasks: Promise<unknown>[] = [];
    if (pendingAudioBlob) {
      dbTasks.push(setMediaAsset(`idb_audio_${id}`, pendingAudioBlob));
    }
    if (coverInput) {
      dbTasks.push(saveCoverAsset(id, coverInput));
    } else if (trackData.coverSrc && trackData.coverSrc.startsWith("data:")) {
      dbTasks.push(saveCoverAsset(id, trackData.coverSrc));
    }
    if (dbTasks.length > 0) {
      await Promise.all(dbTasks);
    }

    let updated = [newTrack, ...musicTracks];
    if (newTrack.isActiveForSite) {
      updated = updated.map((t) => (t.id === newTrack.id ? t : { ...t, isActiveForSite: false }));
    }

    setMusicTracks(updated);
    persistTracksSafely(updated);

    return newTrack;
  };

  const updateMusicTrack = async (
    id: string,
    updates: Partial<MusicTrackItem>,
    audioInput?: File | Blob | string,
    coverInput?: File | Blob | string
  ): Promise<MusicTrackItem | null> => {
    let finalAudioSrc = updates.audioSrc;
    let newSyncAudioUrl: string | undefined;
    if (audioInput) {
      const { idbKey, objectUrl } = await saveAudioAsset(id, audioInput);
      finalAudioSrc = idbKey;
      newSyncAudioUrl = objectUrl;
    }

    const ytId = extractYouTubeId(finalAudioSrc) || extractYouTubeId(updates.youtubeUrl);
    const spId = extractSpotifyTrackId(finalAudioSrc) || extractSpotifyTrackId(updates.spotifyUrl);

    let finalCoverSrc = updates.coverSrc;
    if (coverInput) {
      const { idbKey } = await saveCoverAsset(id, coverInput);
      finalCoverSrc = idbKey;
    } else if (finalCoverSrc && finalCoverSrc.startsWith("data:")) {
      const { idbKey } = await saveCoverAsset(id, finalCoverSrc);
      finalCoverSrc = idbKey;
    }

    let updatedTrackObj: MusicTrackItem | null = null;
    let updated = musicTracks.map((t) => {
      if (t.id === id) {
        const merged: MusicTrackItem = {
          ...t,
          ...updates,
          ...(finalAudioSrc !== undefined ? { audioSrc: finalAudioSrc } : {}),
          ...(finalCoverSrc !== undefined ? { coverSrc: finalCoverSrc } : {}),
          ...(ytId && !updates.youtubeUrl ? { youtubeUrl: `https://youtu.be/${ytId}` } : {}),
          ...(spId && !updates.spotifyUrl ? { spotifyUrl: `https://open.spotify.com/track/${spId}` } : {}),
        };
        updatedTrackObj = merged;
        return merged;
      }
      return t;
    });

    if (updates.isActiveForSite) {
      updated = updated.map((t) => (t.id === id ? t : { ...t, isActiveForSite: false }));
    }

    setMusicTracks(updated);
    persistTracksSafely(updated);

    if (currentPlayingTrack?.id === id && updatedTrackObj) {
      setCurrentPlayingTrack(updatedTrackObj);
      if (newSyncAudioUrl || updates.audioSrc) {
        void playTrack(updatedTrackObj, newSyncAudioUrl);
      }
    }

    return updatedTrackObj;
  };

  const deleteMusicTrack = (id: string) => {
    if (currentPlayingTrack?.id === id) {
      closePlayer();
    }
    const updated = musicTracks.filter((t) => t.id !== id);
    setMusicTracks(updated);
    persistTracksSafely(updated);
    deleteMediaAsset(`idb_audio_${id}`);
    deleteMediaAsset(`idb_cover_${id}`);
  };

  const setActiveSiteTrack = (id: string) => {
    const updated = musicTracks.map((t) => ({
      ...t,
      isActiveForSite: t.id === id,
    }));
    setMusicTracks(updated);
    persistTracksSafely(updated);
  };

  const resetTracksToDefault = () => {
    closePlayer();
    setMusicTracks(DEFAULT_TRACKS);
    localStorage.removeItem(STORAGE_KEYS.TRACKS);
    localStorage.removeItem(STORAGE_KEYS.LEGACY_TRACKS_V2);
  };

  const activeSiteTrack =
    musicTracks.find((t) => t.isActiveForSite) || musicTracks[0] || null;

  // Filtered views
  const legendsItems = galleryItems.filter((i) => i.category === "legends");
  const shootsItems = galleryItems.filter((i) => i.category === "shoots");
  const portfolioItems = galleryItems.filter((i) => i.category === "portfolio");
  const musicItems = galleryItems.filter((i) => i.category === "music");
  const btsItems = galleryItems.filter((i) => i.category === "bts");

  const categoryCounts = {
    total: galleryItems.length,
    legends: legendsItems.length,
    shoots: shootsItems.length,
    portfolio: portfolioItems.length,
    music: musicItems.length,
    bts: btsItems.length,
  };

  return (
    <PortfolioContext.Provider
      value={{
        galleryItems,
        legendsItems,
        shootsItems,
        portfolioItems,
        musicItems,
        btsItems,
        categoryCounts,

        addImage,
        updateImage,
        deleteImage,
        bulkAddImages,
        resetImagesToDefault,

        profile,
        updateProfile,
        resetProfileToDefault,

        musicTracks,
        activeSiteTrack,
        resolvedCovers,
        resolveCoverUrl,
        addMusicTrack,
        updateMusicTrack,
        deleteMusicTrack,
        setActiveSiteTrack,
        resetTracksToDefault,

        currentPlayingTrack,
        isPlaying,
        playerMode,
        embedId,
        playbackProgress,
        currentTimeFormatted,
        durationFormatted,
        volume,
        setVolume,
        audioError,
        clearAudioError,
        playTrack,
        pauseTrack,
        closePlayer,
        togglePlayTrack,
        switchPlayerMode,
        seekTrack,

        isAdminLoggedIn,
        loginAdmin,
        logoutAdmin,

        isLoaded,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}
