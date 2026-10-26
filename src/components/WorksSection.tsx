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
    <section id="works" className="py-24 border-b border-white/5 bg-[#0e1017]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#d4af37] mb-3">
              03 / Creative Works &amp; Videos
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
              Selected Works
            </h2>
          </div>

          {/* Minimalist Filters (Hostinger Pill Style) */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat.key
                    ? "bg-[#d4af37] text-black"
                    : "bg-white/5 hover:bg-white/10 text-gray-300 border border-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Works Grid (Hostinger Clean Masonry Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((item, idx) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between rounded-2xl overflow-hidden bg-[#12141c] border border-white/5 hover:border-[#d4af37]/30 transition-all"
            >
              <div>
                {/* Media Artwork */}
                <div className="relative aspect-16/10 overflow-hidden bg-black">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  {/* Duration Tag */}
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-gray-300">
                    {item.duration}
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#d4af37] uppercase">
                    {item.categoryLabel}
                  </div>

                  {/* Play Button Overlay */}
                  <button
                    onClick={() => onOpenVideo(item.youtubeId || "video", item.title)}
                    className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#d4af37] text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-xl cursor-pointer"
                    aria-label="Play video"
                  >
                    <Play className="w-5 h-5 fill-black ml-0.5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5">
                    {String(idx + 1).padStart(2, "0")} / Video Feature
                  </div>
                  <h3 className="text-base font-serif font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => onOpenVideo(item.youtubeId || "video", item.title)}
                  className="text-xs font-semibold text-[#d4af37] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-[#d4af37]" />
                  <span>Preview</span>
                </button>

                <a
                  href={item.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 hover:text-white flex items-center gap-1"
                >
                  <span>YouTube</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
