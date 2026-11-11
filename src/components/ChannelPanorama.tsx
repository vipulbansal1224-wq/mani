"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { YoutubeIcon } from "@/components/Icons";
import { ArrowUpRight } from "lucide-react";

export default function ChannelPanorama() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="channel" className="py-24 border-b border-white/10 bg-[#07080c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[11px] uppercase font-mono tracking-widest text-[#fef3c7] mb-3">
              <span>[ 07 • OFFICIAL CHANNEL &amp; MEDIA PRESENCE ]</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
              YouTube Channel <span className="text-punjabi-fire">Cover &amp; Hub</span>
            </h2>
          </div>

          <a
            href={profile.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 hover:text-white transition-colors"
          >
            <span>Visit @ManiSandhuOfficial786</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Panoramic Banner Showcase */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-black stage-card">
          {/* Real YouTube Cover Image */}
          <div className="relative aspect-21/9 w-full overflow-hidden">
            <img
              src={profile.bannerImage}
              alt="Mani Sandhu Media House YouTube Cover Banner"
              className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
          </div>

          {/* Overlay Channel Info Bar */}
          <div className="p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 bg-[#0d0f17] border-t border-white/10">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-[#d4af37] to-[#f59e0b] blur-xs"></div>
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-black p-0.5 shrink-0 bg-black">
                  <img
                    src={profile.profileImage}
                    alt="Mani Sandhu"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-white">Mani Sandhu Media House &amp; Records</h3>
                <p className="text-xs text-gray-300">@manisandhurecords &bull; @ManiSandhuOfficial786 &bull; Ludhiana (PB)</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={profile.socials.youtubeRecords || "https://www.youtube.com/@manisandhurecords"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#d4af37] hover:bg-[#b38f2a] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#d4af37]/20 hover:scale-105 active:scale-95"
              >
                <YoutubeIcon className="w-4 h-4" />
                <span>@manisandhurecords</span>
              </a>

              <a
                href={profile.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-red-600/30 hover:scale-105 active:scale-95"
              >
                <YoutubeIcon className="w-4 h-4" />
                <span>Media House YT</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
