"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Music, Play, Radio, Headphones, ExternalLink, ArrowUpRight } from "lucide-react";

export default function MusicSection() {
  const { musicRelease, profile } = PORTFOLIO_DATA;

  return (
    <section id="music" className="py-24 border-b border-white/5 bg-[#0b0c10]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#d4af37] mb-3">
              02 / Music &amp; Releases
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
              Featured Single
            </h2>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm max-w-md">
            Stream Mani Sandhu's official Punjabi release across global music platforms.
          </p>
        </div>

        {/* Music Spotlight Card (Hostinger Player Style) */}
        <div className="rounded-3xl bg-[#12141c] border border-white/10 p-6 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Track Artwork */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl">
                <img
                  src={profile.profileImage}
                  alt="Broken Heart Track Artwork"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                {/* Floating badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-emerald-400 font-bold uppercase">
                  Official Single
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Artist</div>
                  <div className="text-xl font-serif font-bold text-white">Mani Sandhu</div>
                </div>
              </div>
            </div>

            {/* Right Column: Track Details & Platform Buttons */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Now Streaming Worldwide</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-3">
                  "Broken Heart"
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-lg">
                  {musicRelease.description} A poignant, soulful musical track conveying heartbreak and passion, composed and performed with genuine Punjabi emotion.
                </p>

                {/* Waveform graphic */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 mb-8 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 flex-1 h-8">
                    {[40, 65, 30, 80, 50, 95, 70, 45, 85, 60, 90, 75, 40, 70, 55, 80, 60, 40, 75, 90, 45, 60, 30, 80, 50].map((h, idx) => (
                      <span
                        key={idx}
                        className="flex-1 bg-[#d4af37]/60 rounded-full transition-all"
                        style={{ height: `${h}%` }}
                      ></span>
                    ))}
                  </div>
                  <span className="text-xs font-mono text-gray-400 shrink-0 ml-3">Punjabi Folk &bull; Pop</span>
                </div>
              </div>

              {/* Streaming Platforms */}
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
                  Listen On Official Platforms:
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={profile.socials.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1db954] hover:bg-[#1aa34a] text-black font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    <Music className="w-4 h-4" />
                    <span>Spotify</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={profile.socials.jiosaavn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-white/10"
                  >
                    <Radio className="w-4 h-4 text-[#d4af37]" />
                    <span>JioSaavn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={profile.socials.wynk}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-white/10"
                  >
                    <Headphones className="w-4 h-4 text-[#d4af37]" />
                    <span>Wynk Music</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
