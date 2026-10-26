"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { YoutubeIcon, InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import { Play, MapPin, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenVideo: (videoId: string, title: string) => void;
}

export default function Hero({ onOpenVideo }: HeroProps) {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Cinematic Glows */}
      <div className="absolute top-1/4 -left-40 ambient-glow-gold opacity-40"></div>
      <div className="absolute top-1/3 -right-40 ambient-glow-red opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none"></div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07080c]/60 to-[#07080c] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-amber-500/10">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>Star Plus • Colors TV • Punjabi Media Personality</span>
        </div>

        {/* Punjabi Calligraphy Accent */}
        <div className="text-amber-500/80 font-serif tracking-widest text-lg sm:text-xl font-bold uppercase mb-2">
          {profile.punjabiName}
        </div>

        {/* Main Name Heading */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 uppercase">
          MANI <span className="text-gold-gradient">SANDHU</span>
        </h1>

        {/* Role Sub-heading */}
        <p className="text-lg sm:text-2xl font-medium text-gray-300 max-w-3xl mb-4 leading-relaxed">
          Actor <span className="text-amber-400">•</span> Television Artist{" "}
          <span className="text-amber-400">•</span> Show Host{" "}
          <span className="text-amber-400">•</span> Founder, Mani Sandhu Media House
        </p>

        {/* Location & Studio hub */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-gray-400 mb-8 font-medium">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-amber-400" />
            Ludhiana, Punjab
          </span>
          <span className="text-gray-600">•</span>
          <span>Mumbai Film City</span>
          <span className="text-gray-600">•</span>
          <span>London Shoots</span>
        </div>

        {/* Description paragraph */}
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mb-10 leading-relaxed">
          Bringing cinematic stories, high-voltage television drama (Star Plus <span className="text-gray-200 font-semibold">'Sayonee'</span> &amp; Colors TV <span className="text-gray-200 font-semibold">'Tu Juliet Jatt Di'</span>), insightful spiritual podcasts, and viral entertainment to audiences across the globe.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={() => onOpenVideo("sayonee-bts", "Sayonee Star Plus & On-Set Showreel - Mani Sandhu")}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-xl shadow-amber-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-black" />
            <span>Watch Showreel</span>
          </button>

          <a
            href={profile.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-sm bg-red-600/15 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/40 shadow-lg shadow-red-600/20 transition-all hover:scale-105"
          >
            <YoutubeIcon className="w-4 h-4" />
            <span>YouTube: @ManiSandhuOfficial786</span>
          </a>

          <a
            href={profile.socials.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-sm bg-emerald-600/15 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/40 shadow-lg shadow-emerald-600/20 transition-all hover:scale-105"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>WhatsApp Mani</span>
          </a>
        </div>

        {/* Key Stats Bar */}
        <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {profile.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl glass-card flex flex-col items-center justify-center text-center"
            >
              <div className="text-xl sm:text-2xl font-black text-amber-400 mb-1">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs text-gray-400 uppercase tracking-wider font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
