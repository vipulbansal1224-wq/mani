"use client";

import React from "react";
import { X, ExternalLink, Play, Film } from "lucide-react";
import { YoutubeIcon } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { extractYouTubeId } from "@/utils/media-links";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  title: string;
}

export default function VideoModal({ isOpen, onClose, videoId, title }: VideoModalProps) {
  if (!isOpen) return null;

  const validYtId = extractYouTubeId(videoId);
  const watchUrl = validYtId
    ? `https://youtu.be/${validYtId}`
    : PORTFOLIO_DATA.profile.socials.youtubeRecords || PORTFOLIO_DATA.profile.socials.youtube;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full rounded-3xl overflow-hidden glass-panel border border-white/20 shadow-2xl p-4 sm:p-6 bg-[#0b0d14]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
              <Film className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1">{title}</h3>
              <p className="text-xs text-amber-400">Mani Sandhu Records &bull; Media House</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Real Embedded YouTube Player when valid ID */}
        {validYtId ? (
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-xl">
            <iframe
              src={`https://www.youtube.com/embed/${validYtId}?autoplay=1&rel=0&playsinline=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        ) : (
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
                Watch this complete video on Mani Sandhu Records &amp; @ManiSandhuOfficial786.
              </p>
              <a
                href={watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/30 transition-all hover:scale-105"
              >
                <YoutubeIcon className="w-4 h-4" />
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* Footer info */}
        <div className="pt-4 mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
          <span>Channels: @manisandhurecords &bull; @ManiSandhuOfficial786</span>
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white border border-red-500/30 font-semibold transition-all"
          >
            <YoutubeIcon className="w-3.5 h-3.5" />
            <span>Open on YouTube</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
