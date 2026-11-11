"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePortfolio } from "@/context/PortfolioContext";
import { extractSpotifyTrackId, extractYouTubeId } from "@/utils/media-links";
import {
  Play,
  Pause,
  X,
  Volume2,
  VolumeX,
  AlertCircle,
  Music,
  ExternalLink,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { YoutubeIcon } from "@/components/Icons";

export default function GlobalAudioPlayer() {
  const {
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
    resolveCoverUrl,
    togglePlayTrack,
    switchPlayerMode,
    closePlayer,
    seekTrack,
  } = usePortfolio();

  const [isExpanded, setIsExpanded] = useState(true);

  if (!currentPlayingTrack) return null;

  const ytId =
    extractYouTubeId(currentPlayingTrack.youtubeUrl) ||
    extractYouTubeId(currentPlayingTrack.audioSrc);
  const spId =
    extractSpotifyTrackId(currentPlayingTrack.spotifyUrl) ||
    extractSpotifyTrackId(currentPlayingTrack.audioSrc);

  const coverUrl = resolveCoverUrl(currentPlayingTrack.coverSrc);

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-[460px] z-50 bg-[#0f1118]/95 backdrop-blur-2xl border border-[#d4af37]/40 rounded-2xl shadow-2xl shadow-black/90 p-3.5 animate-in slide-in-from-bottom-6 duration-300">
      {/* Header Row */}
      <div className="flex items-center gap-3">
        {/* Album Artwork */}
        <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-black shrink-0 border border-white/10">
          <img
            src={coverUrl}
            alt={currentPlayingTrack.title}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isPlaying ? "scale-105" : ""
            }`}
          />
          {isPlaying && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
            </div>
          )}
        </div>

        {/* Track Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37] font-bold truncate">
              {playerMode === "youtube"
                ? "YouTube Player"
                : playerMode === "spotify"
                  ? "Spotify Player"
                  : currentPlayingTrack.category || "Audio Player"}
            </span>
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isPlaying ? "bg-emerald-400 animate-pulse" : "bg-gray-500"
              }`}
            />
          </div>
          <h4 className="text-xs font-bold text-white truncate font-serif">
            {currentPlayingTrack.title}
          </h4>
          <span className="text-[11px] text-gray-400 truncate block">
            {currentPlayingTrack.artist}
          </span>
        </div>

        {/* Mode Switch / Play Controls */}
        {playerMode === "audio" ? (
          <button
            onClick={() => togglePlayTrack(currentPlayingTrack)}
            className="w-10 h-10 rounded-full bg-[#d4af37] hover:bg-[#b38f2a] text-black flex items-center justify-center shrink-0 transition-all hover:scale-105 shadow-lg shadow-[#d4af37]/20 cursor-pointer"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-black" />
            ) : (
              <Play className="w-5 h-5 fill-black ml-0.5" />
            )}
          </button>
        ) : (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
            title={isExpanded ? "Minimize player" : "Expand player"}
          >
            {isExpanded ? (
              <Minimize2 className="w-4 h-4" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </button>
        )}

        {/* Close Button */}
        <button
          onClick={closePlayer}
          className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
          title="Stop & Close Player"
          aria-label="Close Player"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Mode Switcher Bar (switch seamlessly between MP3 Preview / YouTube / Spotify) */}
      {(ytId || spId) && (
        <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
          {!currentPlayingTrack.audioSrc.startsWith("https://youtu") &&
            !currentPlayingTrack.audioSrc.startsWith("https://open.spotify") &&
            currentPlayingTrack.audioSrc && (
              <button
                onClick={() => switchPlayerMode("audio")}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase transition-colors cursor-pointer ${
                  playerMode === "audio"
                    ? "bg-[#d4af37] text-black"
                    : "bg-white/5 hover:bg-white/10 text-gray-300"
                }`}
              >
                MP3 Audio
              </button>
            )}

          {ytId && (
            <button
              onClick={() => switchPlayerMode("youtube", ytId)}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase flex items-center gap-1 transition-colors cursor-pointer ${
                playerMode === "youtube"
                  ? "bg-red-600 text-white"
                  : "bg-red-500/15 hover:bg-red-500/30 text-red-300"
              }`}
            >
              <YoutubeIcon className="w-3 h-3" />
              <span>YouTube Video</span>
            </button>
          )}

          {spId && (
            <button
              onClick={() => switchPlayerMode("spotify", spId)}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase flex items-center gap-1 transition-colors cursor-pointer ${
                playerMode === "spotify"
                  ? "bg-[#1db954] text-black"
                  : "bg-[#1db954]/15 hover:bg-[#1db954]/30 text-emerald-300"
              }`}
            >
              <Music className="w-3 h-3" />
              <span>Spotify</span>
            </button>
          )}
        </div>
      )}

      {/* Embedded YouTube Player */}
      {playerMode === "youtube" && embedId && isExpanded && (
        <div className="mt-3 rounded-xl overflow-hidden border border-white/10 bg-black aspect-video">
          <iframe
            key={`yt-${embedId}`}
            src={`https://www.youtube.com/embed/${embedId}?autoplay=1&rel=0&playsinline=1`}
            title={currentPlayingTrack.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      )}

      {/* Embedded Spotify Player */}
      {playerMode === "spotify" && embedId && isExpanded && (
        <div className="mt-3 rounded-xl overflow-hidden border border-white/10 bg-black">
          <iframe
            key={`sp-${embedId}`}
            src={`https://open.spotify.com/embed/track/${embedId}?utm_source=generator&theme=0`}
            title={currentPlayingTrack.title}
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="w-full border-0"
          />
        </div>
      )}

      {/* Progress Bar & Volume (Native Audio Mode) */}
      {playerMode === "audio" && (
        <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center gap-2.5 text-[10px] font-mono text-gray-400">
          <span>{currentTimeFormatted}</span>
          <div
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pos = (e.clientX - rect.left) / rect.width;
              seekTrack(pos * 100);
            }}
            className="flex-1 h-1.5 bg-white/10 hover:h-2 rounded-full cursor-pointer relative overflow-hidden transition-all"
          >
            <div
              className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[#d4af37] to-[#f59e0b] rounded-full"
              style={{ width: `${playbackProgress}%` }}
            />
          </div>
          <span>{durationFormatted}</span>

          {/* Volume Mute/Unmute + Compact Control */}
          <button
            onClick={() => setVolume(volume > 0 ? 0 : 1)}
            className="p-1 rounded hover:bg-white/10 text-gray-300 hover:text-white cursor-pointer"
            title={volume > 0 ? "Mute" : "Unmute"}
          >
            {volume > 0 ? (
              <Volume2 className="w-3.5 h-3.5 text-[#d4af37]" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-rose-400" />
            )}
          </button>
        </div>
      )}

      {/* Audio Error Banner */}
      {audioError && (
        <div className="mt-2.5 p-2 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-between gap-2 text-[11px] text-amber-200">
          <div className="flex items-center gap-1.5 min-w-0">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate">{audioError}</span>
          </div>
          {ytId ? (
            <button
              onClick={() => switchPlayerMode("youtube", ytId)}
              className="shrink-0 px-2 py-0.5 rounded bg-red-600 text-white font-bold text-[10px] uppercase hover:bg-red-500 cursor-pointer flex items-center gap-1"
            >
              <span>Play YouTube</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </button>
          ) : (
            <Link
              href="/music-panel"
              className="shrink-0 px-2 py-0.5 rounded bg-amber-400 text-black font-bold text-[10px] uppercase hover:bg-amber-300"
            >
              Music Panel
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
