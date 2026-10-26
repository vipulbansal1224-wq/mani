"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { YoutubeIcon } from "@/components/Icons";
import { Play, Eye, Clock, ExternalLink, Flame, Sparkles } from "lucide-react";

interface YouTubeSectionProps {
  onOpenVideo: (videoId: string, title: string) => void;
}

export default function YouTubeSection({ onOpenVideo }: YouTubeSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { videos, profile } = PORTFOLIO_DATA;

  const categories = [
    { key: "all", label: "All Videos" },
    { key: "music", label: "Music & Songs" },
    { key: "interview", label: "Interviews & PR" },
    { key: "comedy", label: "Comedy & Skits" },
    { key: "vlog", label: "Travel & Vlogs" }
  ];

  const filteredVideos =
    selectedCategory === "all"
      ? videos
      : videos.filter((v) => v.category === selectedCategory);

  return (
    <section id="youtube" className="relative py-24 bg-[#090a10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Real YouTube Channel Cover Banner Showcase */}
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-red-500/20 mb-16 shadow-2xl">
          {/* Cover banner background */}
          <div className="relative h-44 sm:h-64 w-full overflow-hidden bg-black">
            <img
              src={profile.bannerImage}
              alt="Mani Sandhu Media House Official YouTube Banner"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090a10] via-black/30 to-transparent"></div>
          </div>

          {/* Channel Info Row */}
          <div className="p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative -mt-16 sm:-mt-20 z-10">
            <div className="flex flex-col sm:flex-row items-center sm:items-end text-center sm:text-left gap-5">
              {/* Profile Avatar */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-1 bg-gradient-to-tr from-red-600 via-amber-500 to-yellow-300 shadow-2xl flex-shrink-0 overflow-hidden bg-black">
                <img
                  src={profile.profileImage}
                  alt="Mani Sandhu Channel Avatar"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                  <h3 className="text-2xl sm:text-3xl font-black text-white">Mani Sandhu Media House</h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 font-semibold">
                    @ManiSandhuOfficial786
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
                  Official YouTube channel for Punjabi songs, comedy skits, artist interviews, and media promotions in Ludhiana, Punjab.
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-2 text-xs text-amber-400 font-semibold">
                  <span>Contact for Interviews: 9872999854</span>
                  <span>•</span>
                  <span>Promotions: 9478839486</span>
                </div>
              </div>
            </div>

            <a
              href={profile.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-sm bg-red-600 hover:bg-red-500 text-white shadow-xl shadow-red-600/30 transition-all hover:scale-105 active:scale-95 shrink-0"
            >
              <YoutubeIcon className="w-5 h-5" />
              <span>Subscribe to Channel</span>
            </a>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Flame className="w-3.5 h-3.5" />
              <span>Featured Videos &amp; Tracks</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              Channel <span className="text-gold-gradient">Highlights</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.key
                    ? "bg-amber-500 text-black shadow-md shadow-amber-500/20"
                    : "bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((vid) => (
            <div
              key={vid.id}
              className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-amber-500/40 flex flex-col group"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden bg-black">
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                {/* Duration Badge */}
                <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[10px] font-mono font-semibold text-gray-200 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span>{vid.duration}</span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-amber-500/90 text-black text-[10px] font-bold uppercase tracking-wider">
                  {vid.categoryLabel}
                </div>

                {/* Play Button Overlay */}
                <button
                  onClick={() => onOpenVideo(vid.youtubeId || "video", vid.title)}
                  className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-amber-500/90 hover:bg-amber-400 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 shadow-xl cursor-pointer"
                  aria-label="Play video"
                >
                  <Play className="w-5 h-5 fill-black ml-0.5" />
                </button>
              </div>

              {/* Video Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white line-clamp-2 mb-2 group-hover:text-amber-400 transition-colors">
                    {vid.title}
                  </h4>
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">
                    {vid.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-amber-400 font-medium">{vid.views}</span>

                  <a
                    href={vid.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-red-400 hover:text-red-300 font-semibold"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View on YouTube */}
        <div className="mt-12 text-center">
          <a
            href={profile.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-amber-500/30 transition-all"
          >
            <YoutubeIcon className="w-4 h-4 text-red-500" />
            <span>Visit @ManiSandhuOfficial786 on YouTube</span>
          </a>
        </div>
      </div>
    </section>
  );
}
