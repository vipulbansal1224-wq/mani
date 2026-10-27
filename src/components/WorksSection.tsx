"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Play, Clock, ArrowUpRight } from "lucide-react";
import { YoutubeIcon } from "@/components/Icons";

interface WorksSectionProps {
  onOpenVideo: (videoId: string, title: string) => void;
}

export default function WorksSection({ onOpenVideo }: WorksSectionProps) {
  const { videos, profile } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: "All Works" },
    { key: "music", label: "Music & Songs" },
    { key: "interview", label: "Interviews & PR" },
    { key: "comedy", label: "Comedy Skits" },
    { key: "vlog", label: "Travel & Vlogs" }
  ];

  const filteredVideos =
    activeCategory === "all"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  return (
    <section id="works" className="py-24 border-b border-white/10 bg-[#07080c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[11px] uppercase tracking-[0.25em] font-bold text-red-400 mb-3">
              <span>03 / Creative Works &amp; Punjabi Catalogue</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
              Selected <span className="text-punjabi-fire">Works &amp; Videos</span>
            </h2>
          </div>

          {/* High-Contrast Stage Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat.key
                    ? "btn-fire shadow-md shadow-red-500/30"
                    : "bg-[#10131f] hover:bg-white/10 text-gray-300 border border-white/10 hover:border-white/20"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Works Grid with High-Contrast Stage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((item, idx) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between rounded-2xl overflow-hidden stage-card shadow-xl"
            >
              <div>
                {/* Media Artwork */}
                <div className="relative aspect-16/10 overflow-hidden bg-black">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                  {/* Duration Tag */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono text-gray-200 border border-white/10">
                    {item.duration}
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold text-[#f59e0b] uppercase">
                    {item.categoryLabel}
                  </div>

                  {/* Play Button Overlay with Pulsing Glow */}
                  <button
                    onClick={() => onOpenVideo(item.youtubeId || "video", item.title)}
                    className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-gradient-to-tr from-[#ff2a5f] to-[#f59e0b] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-2xl shadow-red-500/50 cursor-pointer"
                    aria-label="Play video"
                  >
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-[10px] font-mono text-red-400 font-bold uppercase tracking-widest mb-1.5 flex items-center gap-2">
                    <span>{String(idx + 1).padStart(2, "0")} / Video Feature</span>
                    <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                    <span className="text-gray-400">{item.views} views</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white mb-2.5 group-hover:text-[#ff2a5f] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="px-6 pb-6 pt-3 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onOpenVideo(item.youtubeId || "video", item.title)}
                  className="text-xs font-bold text-[#f59e0b] group-hover:text-[#ff2a5f] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Video</span>
                </button>

                <a
                  href={item.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <YoutubeIcon className="w-3.5 h-3.5 text-red-500" />
                  <span>YouTube</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
