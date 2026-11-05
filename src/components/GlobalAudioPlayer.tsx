"use client";

import React from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { Play, Pause, X, Music, Volume2 } from "lucide-react";

export default function GlobalAudioPlayer() {
  const {
    currentPlayingTrack,
    isPlaying,
    playbackProgress,
    currentTimeFormatted,
    durationFormatted,
    togglePlayTrack,
    pauseTrack,
    seekTrack,
  } = usePortfolio();

  if (!currentPlayingTrack) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-[460px] z-50 bg-[#0f1118]/95 backdrop-blur-2xl border border-[#d4af37]/40 rounded-2xl shadow-2xl shadow-black/90 p-3.5 animate-in slide-in-from-bottom-6 duration-300">
      <div className="flex items-center gap-3">
        {/* Album Artwork */}
        <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-black shrink-0 border border-white/10">
          <img
            src={
              currentPlayingTrack.coverSrc ||
              "/images/portfolio/m2_064_portfolio_studio-fashion.jpeg"
            }
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
              {currentPlayingTrack.category || "Official Music"}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <h4 className="text-xs font-bold text-white truncate font-serif">
            {currentPlayingTrack.title}
          </h4>
          <span className="text-[11px] text-gray-400 truncate block">
            {currentPlayingTrack.artist}
          </span>
        </div>

        {/* Play / Pause Toggle Button */}
        <button
          onClick={() => togglePlayTrack(currentPlayingTrack)}
          className="w-10 h-10 rounded-full bg-[#d4af37] hover:bg-[#b38f2a] text-black flex items-center justify-center shrink-0 transition-all hover:scale-105 shadow-lg shadow-[#d4af37]/20"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 fill-black" />
          ) : (
            <Play className="w-5 h-5 fill-black ml-0.5" />
          )}
        </button>

        {/* Close Button */}
        <button
          onClick={pauseTrack}
          className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center shrink-0 transition-colors"
          title="Stop & Close Player"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Progress Bar & Scrubber */}
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
      </div>
    </div>
  );
}
