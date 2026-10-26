"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Music, Mic, Video, Play, ExternalLink, CheckCircle2, Sparkles } from "lucide-react";

interface ProjectsProps {
  onOpenVideo: (videoId: string, title: string) => void;
}

export default function ProjectsSection({ onOpenVideo }: ProjectsProps) {
  const { workCategories } = PORTFOLIO_DATA;

  return (
    <section id="work" className="relative py-24 bg-[#07080c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Creative Work &amp; Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              Music, Media &amp; <span className="text-gold-gradient">Content</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm sm:text-base max-w-md">
            From his single 'Broken Heart' to artist promotion interviews and Punjabi comedy sketches at Mani Sandhu Media House.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workCategories.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col group"
            >
              {/* Banner Image / Media Preview */}
              <div className="relative h-60 sm:h-64 overflow-hidden bg-black">
                <img
                  src={item.bannerUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d14] via-[#0b0d14]/50 to-transparent"></div>

                {/* Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-black uppercase tracking-wider shadow-md">
                    {item.type}
                  </span>
                </div>

                {/* Title inside banner */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-black text-white">{item.title}</h3>
                  <p className="text-amber-400 text-xs font-semibold">{item.role}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 mb-6">
                    {item.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-gray-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => onOpenVideo(item.id, item.title)}
                    className="flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-amber-400" />
                    <span>Watch Preview</span>
                  </button>

                  <a
                    href={item.link || "https://www.youtube.com/@ManiSandhuOfficial786"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-white transition-colors"
                  >
                    <span>{item.linkText || "View Details"}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
