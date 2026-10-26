"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Tv, Play, CheckCircle2, Users, Calendar, ExternalLink, Sparkles } from "lucide-react";

interface ProjectsProps {
  onOpenVideo: (videoId: string, title: string) => void;
}

export default function ProjectsSection({ onOpenVideo }: ProjectsProps) {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="relative py-24 bg-[#07080c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Tv className="w-3.5 h-3.5" />
              <span>Filmography &amp; Television</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              Featured <span className="text-gold-gradient">Screen Work</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm sm:text-base max-w-md">
            From national telecasts on Star Plus &amp; Colors TV to independent media productions and digital series.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col group"
            >
              {/* Banner Image / Media Preview */}
              <div className="relative h-60 sm:h-72 overflow-hidden bg-zinc-900">
                <img
                  src={proj.bannerUrl}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d14] via-[#0b0d14]/40 to-transparent"></div>

                {/* Network Tag Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-black shadow-lg shadow-amber-500/30 uppercase tracking-wider">
                    {proj.network}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-gray-200 border border-white/10">
                    {proj.type}
                  </span>
                </div>

                {/* Title inside banner bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-black text-white tracking-wide">{proj.title}</h3>
                  <p className="text-amber-400 text-xs font-semibold">{proj.role}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {proj.description}
                  </p>

                  {/* Co-Stars if present */}
                  {proj.coStars && proj.coStars.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        <Users className="w-3.5 h-3.5 text-amber-400" />
                        <span>Notable Co-Stars &amp; Cast:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {proj.coStars.map((star, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-lg text-xs bg-white/5 border border-white/10 text-gray-200 font-medium"
                          >
                            {star}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Highlights list */}
                  <div className="space-y-2 mb-6">
                    {proj.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-gray-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => onOpenVideo(proj.id, `${proj.title} - ${proj.network} Feature`)}
                    className="flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-amber-400" />
                    <span>Watch On-Set BTS</span>
                  </button>

                  <a
                    href={proj.youtubeLink || "https://www.youtube.com/@ManiSandhuOfficial786"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    <span>Channel Video</span>
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
