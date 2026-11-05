"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { usePortfolio, MusicTrackItem } from "@/context/PortfolioContext";
import {
  Lock,
  Unlock,
  Music,
  Play,
  Pause,
  Upload,
  Trash2,
  Check,
  Disc,
  Radio,
  Sparkles,
  ArrowRight,
  ExternalLink,
  RefreshCw,
  Sliders,
  Volume2,
  FileAudio,
  Crown,
  LogOut,
  X,
  Layers,
  Edit3,
} from "lucide-react";

export default function MusicPanelPage() {
  const {
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
    togglePlayTrack,
    seekTrack,
    isAdminLoggedIn,
    loginAdmin,
    logoutAdmin,
  } = usePortfolio();

  // Auth local state
  const [passcode, setPasscode] = useState("");
  const [authError, setAuthError] = useState(false);

  // New track form state
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [audioDataUrl, setAudioDataUrl] = useState<string>("");
  const [audioDurationStr, setAudioDurationStr] = useState<string>("3:30");
  const [trackTitle, setTrackTitle] = useState("");
  const [trackArtist, setTrackArtist] = useState("Mani Sandhu");
  const [trackCategory, setTrackCategory] = useState("Punjabi Single");
  const [trackYear, setTrackYear] = useState("2024");
  const [trackCoverUrl, setTrackCoverUrl] = useState("/images/portfolio/m2_064_portfolio_studio-fashion.jpeg");
  const [trackCoverPreview, setTrackCoverPreview] = useState<string | null>(null);
  const [setAsActive, setSetAsActive] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // External MP3 URL input option
  const [externalAudioUrl, setExternalAudioUrl] = useState("");

  // Edit Track State
  const [editingTrack, setEditingTrack] = useState<MusicTrackItem | null>(null);
  const [editingAudioFile, setEditingAudioFile] = useState<File | null>(null);
  const [editingAudioDataUrl, setEditingAudioDataUrl] = useState<string>("");
  const [editingCoverPreview, setEditingCoverPreview] = useState<string | null>(null);
  const [isUpdatingTrack, setIsUpdatingTrack] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Login handler
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(passcode);
    if (!success) {
      setAuthError(true);
    } else {
      setAuthError(false);
      setPasscode("");
    }
  };

  // Audio file selection
  const handleAudioFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAudioFile(file);
      if (!trackTitle) {
        // Auto set title from filename
        const cleanName = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
        setTrackTitle(cleanName);
      }

      // Read audio data URL
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setAudioDataUrl(result);

        // Try getting duration
        try {
          const tempAudio = new Audio(result);
          tempAudio.addEventListener("loadedmetadata", () => {
            if (tempAudio.duration) {
              const m = Math.floor(tempAudio.duration / 60);
              const s = Math.floor(tempAudio.duration % 60);
              setAudioDurationStr(`${m}:${s < 10 ? "0" : ""}${s}`);
            }
          });
        } catch {
          // fallback
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Cover image selection
  const handleCoverFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setTrackCoverPreview(result);
        setTrackCoverUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Form submission
  const handleTrackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const finalAudioSrc = audioDataUrl || externalAudioUrl;
    if (!finalAudioSrc) {
      alert("Please upload an MP3 audio file or provide a direct MP3 link.");
      return;
    }

    if (!trackTitle.trim()) {
      alert("Please enter the song title.");
      return;
    }

    setIsUploading(true);
    try {
      const newTrack = await addMusicTrack(
        {
          title: trackTitle.trim(),
          artist: trackArtist.trim() || "Mani Sandhu",
          category: trackCategory,
          year: trackYear,
          audioSrc: finalAudioSrc,
          coverSrc: trackCoverUrl,
          duration: audioDurationStr,
          views: "Official Track",
          isActiveForSite: setAsActive,
        },
        audioDataUrl || undefined
      );

      setUploadSuccess(true);
      // Reset form
      setAudioFile(null);
      setAudioDataUrl("");
      setExternalAudioUrl("");
      setTrackTitle("");
      if (fileInputRef.current) fileInputRef.current.value = "";

      // Auto start playing uploaded track for instant preview
      togglePlayTrack(newTrack);

      setTimeout(() => setUploadSuccess(false), 4000);
    } catch (err) {
      console.error(err);
      alert("Failed to upload music track. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  // Edit Track Handlers
  const handleEditTrackAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setEditingAudioFile(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setEditingAudioDataUrl(result);
        if (editingTrack) {
          setEditingTrack({ ...editingTrack, audioSrc: result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditTrackCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setEditingCoverPreview(result);
        if (editingTrack) {
          setEditingTrack({ ...editingTrack, coverSrc: result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditTrackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTrack) return;
    setIsUpdatingTrack(true);
    try {
      await updateMusicTrack(
        editingTrack.id,
        editingTrack,
        editingAudioDataUrl || undefined,
        editingCoverPreview || undefined
      );
      setEditingTrack(null);
      setEditingAudioFile(null);
      setEditingAudioDataUrl("");
      setEditingCoverPreview(null);
      alert("Song audio and details updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update song.");
    } finally {
      setIsUpdatingTrack(false);
    }
  };

  // PASSCODE LOCK SCREEN
  if (!isAdminLoggedIn) {
    return (
      <main className="min-h-screen bg-[#07080c] flex items-center justify-center p-4 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-md bg-[#0f1118]/90 border border-[#d4af37]/40 rounded-3xl p-8 backdrop-blur-2xl shadow-2xl relative z-10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#d4af37] via-[#f59e0b] to-[#ff2a5f] p-0.5 mx-auto mb-4 flex items-center justify-center shadow-lg shadow-[#d4af37]/30">
              <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                <Music className="w-7 h-7 text-[#d4af37]" />
              </div>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37] font-bold">
              Mani Sandhu Media House
            </span>
            <h1 className="font-serif text-2xl font-black text-white mt-1">
              Music Production Panel
            </h1>
            <p className="text-xs text-gray-400 mt-2">
              Koyi bhi MP3 song upload karke website par chalaan layi password enter karo.
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-2">
                Enter Music Studio Passcode
              </label>
              <input
                type="password"
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  setAuthError(false);
                }}
                placeholder="Enter security passcode"
                className="w-full px-4 py-3 bg-black/60 border border-white/15 focus:border-[#d4af37] rounded-xl text-white font-mono tracking-widest text-center text-lg placeholder:text-gray-600 focus:outline-none transition-colors"
                autoFocus
              />
              {authError && (
                <p className="text-xs text-rose-400 mt-2 text-center font-mono">
                  Incorrect passcode! Kripya sahi password enter karo.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-[#d4af37] to-[#f59e0b] hover:from-[#b38f2a] hover:to-[#d97706] text-black font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-[#d4af37]/20 flex items-center justify-center gap-2"
            >
              <Unlock className="w-4 h-4" />
              <span>Unlock Music Studio</span>
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
            <Link href="/" className="hover:text-white flex items-center gap-1">
              &larr; Back to Live Site
            </Link>
            <Link href="/admin" className="text-[#d4af37] hover:underline flex items-center gap-1">
              Admin Panel &rarr;
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // MUSIC DASHBOARD
  return (
    <main className="min-h-screen bg-[#07080c] text-[#e5e7eb] pb-24">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#0a0c12]/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#d4af37] to-[#f59e0b] p-0.5 flex items-center justify-center">
              <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                <Music className="w-5 h-5 text-[#d4af37]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-black text-white text-base">
                  MUSIC PRODUCTION STUDIO
                </span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 border border-[#d4af37]/40 text-[10px] font-mono text-[#fef3c7] font-bold">
                  MP3 AUDIO ACTIVE
                </span>
              </div>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                Mani Sandhu Records &bull; Official Audio Studio
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 text-xs font-medium flex items-center gap-2 transition-colors"
            >
              <Layers className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Admin Panel (Photos)</span>
            </Link>

            <Link
              href="/"
              target="_blank"
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-gray-200 flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              <span className="hidden sm:inline">View Live Site</span>
            </Link>

            <button
              onClick={logoutAdmin}
              className="px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-xs text-rose-300 flex items-center gap-1.5 transition-colors"
              title="Logout"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Lock</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        {/* ACTIVE SITE SONG SPOTLIGHT BANNER */}
        {activeSiteTrack && (
          <div className="bg-gradient-to-r from-[#171923] via-[#0f1118] to-[#1a1628] border-2 border-[#d4af37]/60 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl shadow-black/80">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              <div className="flex items-center gap-5 w-full md:w-auto">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-black border-2 border-[#d4af37]/50 shrink-0 shadow-lg shadow-[#d4af37]/20">
                  <img
                    src={activeSiteTrack.coverSrc || "/images/portfolio/m2_064_portfolio_studio-fashion.jpeg"}
                    alt={activeSiteTrack.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1 left-1 bg-black/80 rounded-md p-1">
                    <Crown className="w-3.5 h-3.5 text-[#d4af37]" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#fef3c7] text-[10px] font-mono uppercase font-bold tracking-wider">
                    <Sparkles className="w-3 h-3 text-[#d4af37]" />
                    <span>Official Live Website Theme Song</span>
                  </div>
                  <h2 className="font-serif font-black text-xl sm:text-2xl text-white">
                    {activeSiteTrack.title}
                  </h2>
                  <p className="text-xs text-gray-300">
                    Singer: <span className="text-[#d4af37] font-semibold">{activeSiteTrack.artist}</span> &bull; {activeSiteTrack.category} ({activeSiteTrack.year})
                  </p>
                  <p className="text-[11px] text-gray-400 font-mono">
                    This song plays live for all visitors across manisandhu.online!
                  </p>
                </div>
              </div>

              {/* Play / Pause Big Button */}
              <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                <button
                  onClick={() => togglePlayTrack(activeSiteTrack)}
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#f59e0b] hover:from-[#b38f2a] hover:to-[#d97706] text-black font-extrabold text-xs uppercase tracking-widest flex items-center gap-2.5 shadow-xl shadow-[#d4af37]/30 transition-all hover:scale-105"
                >
                  {isPlaying && currentPlayingTrack?.id === activeSiteTrack.id ? (
                    <>
                      <Pause className="w-4 h-4 fill-black" />
                      <span>Pause Song</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-black" />
                      <span>Listen / Test Live</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Live Audio Scrubber if playing this active track */}
            {currentPlayingTrack?.id === activeSiteTrack.id && (
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3 text-xs font-mono text-gray-300">
                <span>{currentTimeFormatted}</span>
                <div
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const pos = (e.clientX - rect.left) / rect.width;
                    seekTrack(pos * 100);
                  }}
                  className="flex-1 h-2 bg-white/15 hover:h-2.5 rounded-full cursor-pointer relative overflow-hidden transition-all"
                >
                  <div
                    className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[#d4af37] to-[#f59e0b] rounded-full"
                    style={{ width: `${playbackProgress}%` }}
                  />
                </div>
                <span>{durationFormatted}</span>
              </div>
            )}
          </div>
        )}

        {/* UPLOAD NEW MP3 SECTION */}
        <div className="bg-[#0f1118] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="border-b border-white/10 pb-4 flex items-center justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#fef3c7] text-[10px] font-mono uppercase tracking-widest font-bold">
                <Upload className="w-3 h-3 text-[#d4af37]" />
                <span>Upload New Audio / Song</span>
              </div>
              <h2 className="font-serif font-black text-2xl text-white mt-1">
                Upload MP3 Song File to Site
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Apna koi bhi geet ya MP3 audio file select karo. Eh sidha website te load ho jaavegi te bajna shuru ho jaavegi.
              </p>
            </div>
          </div>

          {uploadSuccess && (
            <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-medium flex items-center gap-2">
              <Check className="w-4 h-4 shrink-0" />
              <span>MP3 song uploaded and activated successfully! Check below to listen.</span>
            </div>
          )}

          <form onSubmit={handleTrackSubmit} className="space-y-6">
            {/* Audio File Input Picker */}
            <div className="border-2 border-dashed border-[#d4af37]/50 hover:border-[#d4af37] rounded-2xl p-8 text-center bg-black/40 relative cursor-pointer transition-all">
              <input
                ref={fileInputRef}
                type="file"
                accept="audio/*,.mp3,.wav,.m4a,.aac"
                onChange={handleAudioFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />
              <FileAudio className="w-12 h-12 text-[#d4af37] mx-auto mb-3" />
              <h3 className="font-serif font-black text-lg text-white">
                Choose MP3 Audio File (Click or Drag File)
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Supports MP3, WAV, AAC, M4A from your mobile or PC
              </p>

              {audioFile && (
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold">
                  <Check className="w-4 h-4" />
                  <span>Selected: {audioFile.name} ({(audioFile.size / (1024 * 1024)).toFixed(2)} MB)</span>
                </div>
              )}
            </div>

            {/* Direct Audio URL alternative */}
            <div>
              <label className="block text-[11px] font-mono text-gray-400 mb-1">
                Or enter Direct MP3 Audio URL (SoundCloud / External Host / CDN)
              </label>
              <input
                type="text"
                value={externalAudioUrl}
                onChange={(e) => setExternalAudioUrl(e.target.value)}
                placeholder="https://example.com/songs/my-song.mp3"
                className="w-full px-4 py-2.5 bg-black/60 border border-white/10 rounded-xl text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            {/* Song Metadata Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-2">
                  Song Title *
                </label>
                <input
                  type="text"
                  required
                  value={trackTitle}
                  onChange={(e) => setTrackTitle(e.target.value)}
                  placeholder="e.g. Broken Heart 2"
                  className="w-full px-4 py-3 bg-black/60 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-2">
                  Singer / Artist Name
                </label>
                <input
                  type="text"
                  value={trackArtist}
                  onChange={(e) => setTrackArtist(e.target.value)}
                  placeholder="Mani Sandhu"
                  className="w-full px-4 py-3 bg-black/60 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-2">
                  Genre / Category
                </label>
                <select
                  value={trackCategory}
                  onChange={(e) => setTrackCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-black/60 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-[#d4af37]"
                >
                  <option value="Punjabi Single">Punjabi Single</option>
                  <option value="Duet Classic">Duet Classic (with Kaur Billo)</option>
                  <option value="Folk Tribute">Folk Tribute (Surinder Shinda Ji)</option>
                  <option value="Devotional">Devotional Classic</option>
                  <option value="Party Swag">Party Swag</option>
                  <option value="Sad Romantic">Sad Romantic</option>
                </select>
              </div>
            </div>

            {/* Year & Cover Photo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-2">
                  Release Year
                </label>
                <input
                  type="text"
                  value={trackYear}
                  onChange={(e) => setTrackYear(e.target.value)}
                  placeholder="2024"
                  className="w-full px-4 py-3 bg-black/60 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-2">
                  Song Cover Photo (Optional)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCoverFileChange}
                  className="w-full px-4 py-2.5 bg-black/60 border border-white/15 rounded-xl text-xs text-gray-300 file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-[#d4af37] file:text-black hover:file:bg-[#b38f2a]"
                />
              </div>
            </div>

            {/* Set as Active Switch */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-black/40 border border-white/10">
              <input
                type="checkbox"
                id="setActiveCheckbox"
                checked={setAsActive}
                onChange={(e) => setSetAsActive(e.target.checked)}
                className="w-5 h-5 rounded accent-[#d4af37] cursor-pointer"
              />
              <label htmlFor="setActiveCheckbox" className="text-xs text-gray-200 cursor-pointer">
                <span className="font-bold text-white block">Set as Active Theme Song for Website</span>
                <span className="text-gray-400 text-[11px]">
                  When checked, this song will be the primary track that plays when visitors visit manisandhu.online.
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isUploading}
              className="w-full py-4 bg-gradient-to-r from-[#d4af37] to-[#f59e0b] hover:from-[#b38f2a] hover:to-[#d97706] text-black font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-[#d4af37]/20 flex items-center justify-center gap-2"
            >
              {isUploading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Saving &amp; Activating Audio...</span>
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4" />
                  <span>Upload &amp; Publish Song To Website</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* ALL TRACKS CATALOGUE */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37] font-bold">
                Audio Library
              </span>
              <h2 className="font-serif font-black text-xl text-white">
                Website Songs &amp; Discography ({musicTracks.length} Tracks)
              </h2>
            </div>

            <button
              onClick={() => {
                if (confirm("Reset music tracks back to defaults?")) {
                  resetTracksToDefault();
                  alert("Music library reset to defaults!");
                }
              }}
              className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-rose-500/20 border border-white/10 hover:border-rose-500/40 text-gray-400 hover:text-rose-300 text-xs transition-colors flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Tracks</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {musicTracks.map((track) => {
              const isCurrent = currentPlayingTrack?.id === track.id;
              const isCurrentPlaying = isCurrent && isPlaying;
              const isSiteTheme = track.isActiveForSite;

              return (
                <div
                  key={track.id}
                  className={`bg-[#0f1118] border rounded-2xl p-4 transition-all flex items-center gap-4 ${
                    isSiteTheme
                      ? "border-[#d4af37] bg-gradient-to-r from-[#171923] to-[#0f1118]"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Cover */}
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-black shrink-0 border border-white/10">
                    <img
                      src={track.coverSrc || "/images/portfolio/m2_064_portfolio_studio-fashion.jpeg"}
                      alt={track.title}
                      className="w-full h-full object-cover"
                    />
                    {isCurrentPlaying && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-ping" />
                      </div>
                    )}
                  </div>

                  {/* Track Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[#d4af37] font-bold uppercase tracking-wider truncate">
                        {track.category} &bull; {track.year}
                      </span>
                      {isSiteTheme && (
                        <span className="px-2 py-0.5 rounded-full bg-[#d4af37] text-black font-extrabold text-[9px] font-mono uppercase tracking-wider flex items-center gap-1">
                          <Crown className="w-2.5 h-2.5" />
                          <span>Active Site Theme</span>
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-white truncate font-serif mt-0.5">
                      {track.title}
                    </h4>
                    <p className="text-xs text-gray-400 truncate">
                      {track.artist}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <button
                      onClick={() => togglePlayTrack(track)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        isCurrentPlaying
                          ? "bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/30 scale-105"
                          : "bg-white/10 text-white hover:bg-[#d4af37] hover:text-black"
                      }`}
                      title={isCurrentPlaying ? "Pause" : "Play"}
                    >
                      {isCurrentPlaying ? (
                        <Pause className="w-4 h-4 fill-current" />
                      ) : (
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      )}
                    </button>

                    <button
                      onClick={() => {
                        setEditingTrack(track);
                        setEditingAudioFile(null);
                        setEditingAudioDataUrl("");
                        setEditingCoverPreview(null);
                      }}
                      className="px-2.5 py-1.5 rounded-lg bg-[#d4af37]/15 hover:bg-[#d4af37]/30 border border-[#d4af37]/40 text-[#fef3c7] hover:text-white transition-all text-xs font-semibold flex items-center gap-1.5"
                      title="Change Song / Replace MP3 Audio / Edit Info"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>Change / Edit</span>
                    </button>

                    {!isSiteTheme && (
                      <button
                        onClick={() => setActiveSiteTrack(track.id)}
                        className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-[#d4af37]/20 border border-white/10 hover:border-[#d4af37]/40 text-xs text-gray-300 hover:text-[#fef3c7] transition-colors"
                        title="Set this song to play on the homepage"
                      >
                        Set Active
                      </button>
                    )}

                    <button
                      onClick={() => {
                        if (confirm(`Delete song "${track.title}"?`)) {
                          deleteMusicTrack(track.id);
                        }
                      }}
                      className="p-2 rounded-lg bg-white/5 hover:bg-rose-500/20 text-gray-400 hover:text-rose-400 transition-colors"
                      title="Delete Track"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* EDIT / CHANGE TRACK MODAL */}
      {editingTrack && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <form
            onSubmit={handleEditTrackSubmit}
            className="w-full max-w-xl bg-[#0f1118] border-2 border-[#d4af37]/50 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Music className="w-5 h-5 text-[#d4af37]" />
                <h3 className="font-serif font-black text-lg text-white">
                  Change / Edit Song: {editingTrack.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setEditingTrack(null)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Replace Audio File Section */}
            <div className="p-4 rounded-2xl bg-black/50 border border-white/15 space-y-3">
              <label className="block text-xs font-mono uppercase text-[#d4af37] font-bold tracking-wider">
                1. Change / Replace MP3 Audio File
              </label>
              <div className="border border-dashed border-[#d4af37]/40 hover:border-[#d4af37] rounded-xl p-4 text-center bg-black/40 relative cursor-pointer">
                <input
                  type="file"
                  accept="audio/*,.mp3,.wav,.m4a"
                  onChange={handleEditTrackAudioChange}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <FileAudio className="w-8 h-8 text-[#d4af37] mx-auto mb-1.5" />
                <p className="text-xs font-bold text-white">
                  Click to choose new MP3 song from your mobile / computer
                </p>
                <p className="text-[10px] text-gray-400 mt-0.5">MP3, WAV, M4A, AAC</p>
              </div>

              {editingAudioFile && (
                <div className="p-2.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>New Audio Selected: {editingAudioFile.name} (ready to save)</span>
                </div>
              )}

              <div>
                <label className="block text-[10px] font-mono text-gray-400 mb-1">
                  Or enter direct MP3 audio URL
                </label>
                <input
                  type="text"
                  placeholder="https://example.com/song.mp3"
                  value={editingTrack.audioSrc.startsWith("idb_audio_") || editingTrack.audioSrc.startsWith("data:") ? "" : editingTrack.audioSrc}
                  onChange={(e) =>
                    setEditingTrack({ ...editingTrack, audioSrc: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-black/60 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>
            </div>

            {/* Metadata Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-1">
                  Song Title
                </label>
                <input
                  type="text"
                  required
                  value={editingTrack.title}
                  onChange={(e) =>
                    setEditingTrack({ ...editingTrack, title: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-black/60 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-1">
                  Singer / Artist
                </label>
                <input
                  type="text"
                  required
                  value={editingTrack.artist}
                  onChange={(e) =>
                    setEditingTrack({ ...editingTrack, artist: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-black/60 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-1">
                  Category / Genre
                </label>
                <input
                  type="text"
                  value={editingTrack.category}
                  onChange={(e) =>
                    setEditingTrack({ ...editingTrack, category: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-black/60 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-1">
                  Release Year
                </label>
                <input
                  type="text"
                  value={editingTrack.year}
                  onChange={(e) =>
                    setEditingTrack({ ...editingTrack, year: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-black/60 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>
            </div>

            {/* Cover Art Changer */}
            <div>
              <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-1">
                Change Album Cover Photo
              </label>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-black border border-white/10 shrink-0">
                  <img
                    src={editingCoverPreview || editingTrack.coverSrc || "/images/portfolio/m2_064_portfolio_studio-fashion.jpeg"}
                    alt={editingTrack.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleEditTrackCoverChange}
                  className="flex-1 px-3 py-1.5 bg-black/60 border border-white/10 rounded-lg text-xs text-gray-300 file:mr-2 file:py-1 file:px-2.5 file:rounded-md file:border-0 file:text-[11px] file:bg-[#d4af37] file:text-black hover:file:bg-[#b38f2a]"
                />
              </div>
            </div>

            {/* Set Active Checkbox */}
            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="editTrackActiveCheck"
                checked={editingTrack.isActiveForSite || false}
                onChange={(e) =>
                  setEditingTrack({ ...editingTrack, isActiveForSite: e.target.checked })
                }
                className="w-4 h-4 rounded accent-[#d4af37] cursor-pointer"
              />
              <label htmlFor="editTrackActiveCheck" className="text-xs text-gray-300 cursor-pointer">
                Set as Active Theme Song for Website
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => setEditingTrack(null)}
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isUpdatingTrack}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f59e0b] hover:from-[#b38f2a] hover:to-[#d97706] text-black font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
              >
                {isUpdatingTrack ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Saving Song...</span>
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Save Song &amp; Audio Updates</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}
