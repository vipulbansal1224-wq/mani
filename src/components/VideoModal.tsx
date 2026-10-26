"use client";

import React from "react";
import { X, ExternalLink, Play, Film } from "lucide-react";
import { YoutubeIcon } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  title: string;
}

export default function VideoModal({ isOpen, onClose, videoId, title }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full rounded-3xl overflow-hidden glass-panel border border-white/20 shadow-2xl p-4 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1">{title}</h3>
              <p className="text-xs text-amber-400">Mani Sandhu Media House Official</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display with Real YouTube Cover Art */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-black flex flex-col items-center justify-center border border-white/10">
          <img
            src="/mani-sandhu-banner.jpg"
            alt="Mani Sandhu Video Cover"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>

          <div className="relative z-10 text-center max-w-lg px-4 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center mb-4 shadow-xl shadow-red-600/40 animate-pulse">
              <Play className="w-7 h-7 fill-white ml-1" />
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-white mb-2">{title}</h4>
            <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
              Watch this complete video and more content on the official YouTube channel @ManiSandhuOfficial786.
            </p>
            <a
              href={PORTFOLIO_DATA.profile.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/30 transition-all hover:scale-105"
            >
              <YoutubeIcon className="w-4 h-4" />
              <span>Watch on YouTube Channel</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-4 mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-2">
          <span>Official Channel: youtube.com/@ManiSandhuOfficial786</span>
          <span className="text-amber-400">Mani Sandhu Media House • Ludhiana</span>
        </div>
      </div>
    </div>
  );
}
