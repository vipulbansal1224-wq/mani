"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { YoutubeIcon, InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import { Play, MapPin, Sparkles, Music, Phone, ArrowUpRight } from "lucide-react";

interface HeroProps {
  onOpenVideo: (videoId: string, title: string) => void;
}

export default function Hero({ onOpenVideo }: HeroProps) {
  const { profile, musicRelease } = PORTFOLIO_DATA;

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background YouTube Cover Banner Image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={profile.bannerImage}
          alt="Mani Sandhu Cover Banner"
          className="w-full h-full object-cover object-center opacity-25 filter blur-[1px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080c]/80 via-[#07080c]/90 to-[#07080c]"></div>
      </div>

      {/* Decorative ambient lights */}
      <div className="absolute top-1/4 -left-32 ambient-glow-gold opacity-30"></div>
      <div className="absolute top-1/3 -right-32 ambient-glow-red opacity-25"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Real Profile Photo from YouTube Cover / Avatar */}
        <div className="relative mb-6 group">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1.5 bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 shadow-2xl shadow-amber-500/30 overflow-hidden group-hover:scale-105 transition-transform">
            <img
              src={profile.profileImage}
              alt="Mani Sandhu Original Photo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="absolute bottom-1 right-2 px-2.5 py-0.5 rounded-full bg-amber-500 text-black text-[10px] font-black uppercase tracking-wider shadow-md">
            Mani Sandhu
          </span>
        </div>

        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-4 shadow-lg shadow-amber-500/10">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Singer • Actor • Model • Vlogger • Media Promoter</span>
        </div>

        {/* Punjabi Script Accent */}
        <div className="text-amber-500/90 font-serif tracking-widest text-lg sm:text-xl font-bold uppercase mb-1">
          {profile.punjabiName}
        </div>

        {/* Name Heading */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white mb-4 uppercase">
          MANI <span className="text-gold-gradient">SANDHU</span>
        </h1>

        {/* Title & Media House */}
        <p className="text-base sm:text-xl font-medium text-gray-300 max-w-3xl mb-3 leading-relaxed">
          Mani Sandhu Media House • Ludhiana, Punjab
        </p>

        {/* Location & Contact strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-gray-400 mb-6 font-medium">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-amber-400" />
            Ludhiana (Punjab)
          </span>
          <span className="text-gray-600">•</span>
          <a href="tel:9872999854" className="hover:text-amber-400 transition-colors">
            Interviews &amp; Promotions: +91 98729 99854
          </a>
          <span className="text-gray-600">•</span>
          <a href="tel:9478839486" className="hover:text-amber-400 transition-colors">
            +91 94788 39486
          </a>
        </div>

        {/* Short Authentic Bio */}
        <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mb-8 leading-relaxed">
          {profile.bioShort}
        </p>

        {/* Music Single Feature Card ("Broken Heart") */}
        <div className="w-full max-w-xl p-4 rounded-2xl glass-card border border-emerald-500/30 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Music className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
                Official Single Track
              </div>
              <h3 className="text-sm font-bold text-white">"Broken Heart" by Mani Sandhu</h3>
              <p className="text-[11px] text-gray-400">Available on Spotify, JioSaavn &amp; Wynk</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profile.socials.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1"
            >
              <span>Spotify</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href={profile.socials.jiosaavn}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 text-xs font-semibold transition-all flex items-center gap-1"
            >
              <span>JioSaavn</span>
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
          <a
            href={profile.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm bg-red-600 hover:bg-red-500 text-white shadow-xl shadow-red-600/30 transition-all hover:scale-105"
          >
            <YoutubeIcon className="w-4 h-4" />
            <span>YouTube: @ManiSandhuOfficial786</span>
          </a>

          <a
            href={profile.socials.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 transition-all hover:scale-105"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>WhatsApp: 9872999854</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-amber-500/30 transition-all"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Contact for Promotions</span>
          </a>
        </div>

        {/* Stats bar */}
        <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-5 gap-3">
          {profile.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl glass-card flex flex-col items-center justify-center text-center"
            >
              <div className="text-base sm:text-lg font-black text-amber-400 mb-0.5">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-[11px] text-gray-400 uppercase tracking-wider font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
