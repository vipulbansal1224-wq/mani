"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { ALL_GALLERY_ITEMS, GalleryItem } from "@/data/gallery-data";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { setMediaAsset, getMediaAsset, deleteMediaAsset, clearAllMediaAssets } from "@/utils/indexed-db";

export const ADMIN_PASSCODE = "alto7528";

export interface MusicTrackItem {
  id: string;
  title: string;
  artist: string;
  category: string;
  year: string;
  audioSrc: string; // URL or indexedDB key or base64
  coverSrc?: string;
  duration?: string;
  views?: string;
  isActiveForSite?: boolean;
}

export const DEFAULT_TRACKS: MusicTrackItem[] = [
  {
    id: "track-1",
    title: "Broken Heart",
    artist: "Mani Sandhu",
    category: "Punjabi Single",
    year: "2024",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    coverSrc: "/images/portfolio/m2_064_portfolio_studio-fashion.jpeg",
    duration: "3:42",
    views: "1.4M+ Views",
    isActiveForSite: true,
  },
  {
    id: "track-2",
    title: "MIRZA (Tribute to Ustad Surinder Shinda Ji)",
    artist: "Mani Sandhu",
    category: "Folk Tribute",
    year: "2024",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    coverSrc: "/images/music/m2_007_legends_surinder-shinda.jpeg",
    duration: "4:15",
    views: "Special Tribute",
    isActiveForSite: false,
  },
  {
    id: "track-3",
    title: "Guddi Ishqe Di",
    artist: "Surinder Shinda & Kaur Billo (Promotions Mani Sandhu)",
    category: "Duet Classic",
    year: "Golden Track",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    coverSrc: "/images/music/m2_084_legends_surinder-shinda.jpeg",
    duration: "4:30",
    views: "Historic Release",
    isActiveForSite: false,
  },
  {
    id: "track-4",
    title: "Payi Chall Dhakk",
    artist: "Mani Sandhu & Satta Singh",
    category: "Punjabi Swag",
    year: "2024",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    coverSrc: "/images/music/m2_080_music_posters.jpeg",
    duration: "3:18",
    views: "Hit Track",
    isActiveForSite: false,
  },
  {
    id: "track-5",
    title: "Nakhrey Da Mull",
    artist: "Mani Sandhu UK (Blessings Kaur Billo)",
    category: "Mehak Punjab Di",
    year: "2024",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    coverSrc: "/images/music/m1_050_music_posters.jpeg",
    duration: "3:35",
    views: "UK Special",
    isActiveForSite: false,
  },
  {
    id: "track-6",
    title: "Rusiya Kyu Ponahariyah",
    artist: "Mani Sandhu (Producer Kaur Billo)",
    category: "Devotional",
    year: "2024",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    coverSrc: "/images/music/m1_053_music_posters.jpeg",
    duration: "5:10",
    views: "Devotional Classic",
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
  addMusicTrack: (track: Omit<MusicTrackItem, "id">, audioDataUrl?: string) => Promise<MusicTrackItem>;
  updateMusicTrack: (
    id: string,
    updates: Partial<MusicTrackItem>,
    audioDataUrl?: string,
    coverDataUrl?: string
  ) => Promise<void>;
  deleteMusicTrack: (id: string) => void;
  setActiveSiteTrack: (id: string) => void;
  resetTracksToDefault: () => void;

  // Audio Playback
  currentPlayingTrack: MusicTrackItem | null;
  isPlaying: boolean;
  playbackProgress: number; // 0 to 100
  currentTimeFormatted: string;
  durationFormatted: string;
  audioError: string | null;
  clearAudioError: () => void;
  playTrack: (track: MusicTrackItem) => void;
  pauseTrack: () => void;
  togglePlayTrack: (track?: MusicTrackItem) => void;
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
  PROFILE: "mani_profile_data_v2",
  TRACKS: "mani_music_tracks_v2",
  AUTH: "mani_admin_session_auth",
};

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(ALL_GALLERY_ITEMS);
  const [profile, setProfile] = useState<typeof PORTFOLIO_DATA.profile>(PORTFOLIO_DATA.profile);
  const [musicTracks, setMusicTracks] = useState<MusicTrackItem[]>(DEFAULT_TRACKS);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Audio Playback states
  const [currentPlayingTrack, setCurrentPlayingTrack] = useState<MusicTrackItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackProgress, setPlaybackProgress] = useState(0);
  const [currentTimeFormatted, setCurrentTimeFormatted] = useState("0:00");
  const [durationFormatted, setDurationFormatted] = useState("0:00");
  const [audioError, setAudioError] = useState<string | null>(null);

  const clearAudioError = () => setAudioError(null);

  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  // Initialize from LocalStorage + IndexedDB on mount
  useEffect(() => {
    try {
      // Auth check
      const authSession = sessionStorage.getItem(STORAGE_KEYS.AUTH) || localStorage.getItem(STORAGE_KEYS.AUTH);
      if (authSession === "authenticated_alto7528") {
        setIsAdminLoggedIn(true);
      }

      // Profile restore
      const savedProfile = localStorage.getItem(STORAGE_KEYS.PROFILE);
      if (savedProfile) {
        setProfile((prev) => ({ ...prev, ...JSON.parse(savedProfile) }));
      }

      // Gallery restore
      const savedGallery = localStorage.getItem(STORAGE_KEYS.GALLERY);
      if (savedGallery) {
        const parsed: GalleryItem[] = JSON.parse(savedGallery);
        setGalleryItems(parsed);
      }

      // Tracks restore
      const savedTracks = localStorage.getItem(STORAGE_KEYS.TRACKS);
      if (savedTracks) {
        const parsed: MusicTrackItem[] = JSON.parse(savedTracks);
        setMusicTracks(parsed);
      }
    } catch (e) {
      console.warn("Storage hydration note:", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Audio element management
  useEffect(() => {
    if (typeof window === "undefined") return;

    const audio = new Audio();
    audioElementRef.current = audio;

    const handleTimeUpdate = () => {
      if (!audio.duration) return;
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

    const handleError = () => {
      console.warn("Audio playback error, falling back");
      setIsPlaying(false);
      setAudioError("Audio playback error. Please upload your MP3 song file in the Music Panel.");
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
    };
  }, []);

  // Audio play/pause controls
  const playTrack = async (track: MusicTrackItem) => {
    setAudioError(null);
    setCurrentPlayingTrack(track);

    let src = track.audioSrc;
    // Check if it's an indexedDB key
    if (src.startsWith("idb_audio_")) {
      const stored = await getMediaAsset(src);
      if (stored) {
        src = stored;
      } else {
        setAudioError("Uploaded MP3 not found. Please upload your MP3 in the Music Panel.");
        setIsPlaying(false);
        return;
      }
    }

    if (audioElementRef.current) {
      audioElementRef.current.src = src;
      audioElementRef.current.load();
      audioElementRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setAudioError(null);
        })
        .catch((e) => {
          console.warn("Autoplay blocked or playback error:", e);
          setIsPlaying(false);
          setAudioError("Unable to play track. Please upload your MP3 song file in the Music Panel.");
        });
    }
  };

  const pauseTrack = () => {
    if (audioElementRef.current) {
      audioElementRef.current.pause();
    }
    setIsPlaying(false);
  };

  const togglePlayTrack = (track?: MusicTrackItem) => {
    const target = track || currentPlayingTrack || activeSiteTrack || musicTracks[0];
    if (!target) return;

    if (currentPlayingTrack?.id === target.id && isPlaying) {
      pauseTrack();
    } else {
      playTrack(target);
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
      finalSrc = fileDataUrl; // Data URL for immediate display
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
      // Store in localStorage without oversized data urls if possible
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
    let finalUpdates = { ...updates };
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
    localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(updated));
    deleteMediaAsset(`idb_img_${id}`);
  };

  const bulkAddImages = async (
    items: Array<{ item: Omit<GalleryItem, "id">; fileDataUrl?: string }>
  ) => {
    const newItems: GalleryItem[] = [];
    for (const entry of items) {
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
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(updated));
  };

  const resetProfileToDefault = () => {
    setProfile(PORTFOLIO_DATA.profile);
    localStorage.removeItem(STORAGE_KEYS.PROFILE);
  };

  // Music Actions
  const addMusicTrack = async (
    trackData: Omit<MusicTrackItem, "id">,
    audioDataUrl?: string
  ): Promise<MusicTrackItem> => {
    const id = `track-custom-${Date.now()}`;
    let finalAudioSrc = trackData.audioSrc;

    if (audioDataUrl) {
      const key = `idb_audio_${id}`;
      await setMediaAsset(key, audioDataUrl);
      finalAudioSrc = audioDataUrl;
    }

    const newTrack: MusicTrackItem = {
      ...trackData,
      id,
      audioSrc: finalAudioSrc,
      isActiveForSite: trackData.isActiveForSite || false,
    };

    let updated = [newTrack, ...musicTracks];
    if (newTrack.isActiveForSite) {
      updated = updated.map((t) => (t.id === newTrack.id ? t : { ...t, isActiveForSite: false }));
    }

    setMusicTracks(updated);
    try {
      // Don't save huge audio data URLs in localStorage, strip or save metadata
      const cleanTracks = updated.map((t) => ({
        ...t,
        audioSrc: t.audioSrc.length > 500 ? `idb_audio_${t.id}` : t.audioSrc,
      }));
      localStorage.setItem(STORAGE_KEYS.TRACKS, JSON.stringify(cleanTracks));
    } catch (err) {
      console.warn("Storage error on music track save:", err);
    }

    return newTrack;
  };

  const updateMusicTrack = async (
    id: string,
    updates: Partial<MusicTrackItem>,
    audioDataUrl?: string,
    coverDataUrl?: string
  ) => {
    let finalAudioSrc = updates.audioSrc;
    if (audioDataUrl) {
      const key = `idb_audio_${id}`;
      await setMediaAsset(key, audioDataUrl);
      finalAudioSrc = audioDataUrl;
    }

    let finalCoverSrc = updates.coverSrc;
    if (coverDataUrl) {
      const coverKey = `idb_cover_${id}`;
      await setMediaAsset(coverKey, coverDataUrl);
      finalCoverSrc = coverDataUrl;
    }

    let updated = musicTracks.map((t) => {
      if (t.id === id) {
        return {
          ...t,
          ...updates,
          ...(finalAudioSrc ? { audioSrc: finalAudioSrc } : {}),
          ...(finalCoverSrc ? { coverSrc: finalCoverSrc } : {}),
        };
      }
      return t;
    });

    if (updates.isActiveForSite) {
      updated = updated.map((t) => (t.id === id ? t : { ...t, isActiveForSite: false }));
    }

    setMusicTracks(updated);

    if (currentPlayingTrack?.id === id) {
      const updatedCurrent = updated.find((t) => t.id === id);
      if (updatedCurrent) {
        setCurrentPlayingTrack(updatedCurrent);
        if (finalAudioSrc && audioElementRef.current) {
          audioElementRef.current.src = finalAudioSrc;
        }
      }
    }

    try {
      const cleanTracks = updated.map((t) => ({
        ...t,
        audioSrc: t.audioSrc.length > 500 ? `idb_audio_${t.id}` : t.audioSrc,
      }));
      localStorage.setItem(STORAGE_KEYS.TRACKS, JSON.stringify(cleanTracks));
    } catch (err) {
      console.warn("Storage error on music track update:", err);
    }
  };

  const deleteMusicTrack = (id: string) => {
    if (currentPlayingTrack?.id === id) {
      pauseTrack();
      setCurrentPlayingTrack(null);
    }
    const updated = musicTracks.filter((t) => t.id !== id);
    setMusicTracks(updated);
    localStorage.setItem(STORAGE_KEYS.TRACKS, JSON.stringify(updated));
    deleteMediaAsset(`idb_audio_${id}`);
  };

  const setActiveSiteTrack = (id: string) => {
    const updated = musicTracks.map((t) => ({
      ...t,
      isActiveForSite: t.id === id,
    }));
    setMusicTracks(updated);
    localStorage.setItem(STORAGE_KEYS.TRACKS, JSON.stringify(updated));
  };

  const resetTracksToDefault = () => {
    setMusicTracks(DEFAULT_TRACKS);
    localStorage.removeItem(STORAGE_KEYS.TRACKS);
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
        addMusicTrack,
        updateMusicTrack,
        deleteMusicTrack,
        setActiveSiteTrack,
        resetTracksToDefault,

        currentPlayingTrack,
        isPlaying,
        playbackProgress,
        currentTimeFormatted,
        durationFormatted,
        audioError,
        clearAudioError,
        playTrack,
        pauseTrack,
        togglePlayTrack,
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
