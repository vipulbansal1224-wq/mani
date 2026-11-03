"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowUpRight, Crown, Camera, User, Disc, Clapperboard } from "lucide-react";
import {
  CATEGORY_COUNTS,
  LEGENDS_ITEMS,
  SHOOTS_ITEMS,
  PORTFOLIO_ITEMS,
  MUSIC_ITEMS,
  BTS_ITEMS,
} from "@/data/gallery-data";

export default function CuratedGalleriesSection() {
  const galleries = [
    {
      id: "legends",
      title: "Legends & Mentors Archive",
      punjabiTitle: "ਸੁਰਿੰਦਰ ਛਿੰਦਾ ਅਤੇ ਕੌਰ ਬਿੱਲੋ",
      count: `${CATEGORY_COUNTS.legends} Historic Photographs`,
      href: "/legends",
      icon: Crown,
      description:
        "Treasured memories, studio vocal recordings, rooftop shoots, and tribute releases with Late Ustad Surinder Shinda Ji, Singer Kaur Billo, Mika Singh, Gurpreet Ghuggi, and Sardar Sohi.",
      previews: [
        "/images/legends/m1_000_legends_surinder-shinda.jpeg",
        "/images/legends/m1_083_legends_surinder-shinda.jpeg",
        "/images/legends/m1_027_legends_surinder-shinda.jpeg",
        "/images/legends/m2_030_legends_surinder-shinda.jpeg",
      ],
      badge: "Historic & Rare",
    },
    {
      id: "shoots",
      title: "Music Video Shoots & Models",
      punjabiTitle: "ਮਾਡਲ ਸ਼ੂਟ ਅਤੇ ਵੀਡੀਓਜ਼",
      count: `${CATEGORY_COUNTS.shoots} Cinematic Stills`,
      href: "/shoots",
      icon: Camera,
      description:
        "Romantic song sequences, leading co-stars (including Simran Pathan in 'Sanam Bewafa'), Punjabi traditional and western model shoots, and palatial haveli locations.",
      previews: [
        "/images/shoots/m2_004_shoots_model-shoots.jpeg",
        "/images/shoots/m2_098_shoots_model-shoots.jpeg",
        "/images/shoots/m1_007_shoots_model-shoots.jpeg",
        "/images/shoots/m1_008_shoots_model-shoots.jpeg",
      ],
      badge: "Video Song Sets",
    },
    {
      id: "portfolio",
      title: "Solo Modeling & London Tour",
      punjabiTitle: "ਫੈਸ਼ਨ ਪੋਰਟਫੋਲੀਓ ਅਤੇ ਯੂਕੇ",
      count: `${CATEGORY_COUNTS.portfolio} High-Fashion Looks`,
      href: "/portfolio",
      icon: User,
      description:
        "The tailored mustard yellow bespoke blazer, black pinstripe executive suits, traditional Dastar & Kurta Pajama, and an extensive UK tour covering London's Tower Bridge and Buckingham Palace.",
      previews: [
        "/images/portfolio/m2_064_portfolio_studio-fashion.jpeg",
        "/images/portfolio/m2_024_portfolio_london-tour.jpeg",
        "/images/portfolio/m2_027_portfolio_london-tour.jpeg",
        "/images/portfolio/m2_045_portfolio_traditional.jpeg",
      ],
      badge: "Editorial & Travel",
    },
    {
      id: "music",
      title: "Song Releases & Discography",
      punjabiTitle: "ਗਾਣੇ ਅਤੇ ਸਟੂਡੀਓ ਰਿਕਾਰਡਿੰਗ",
      count: `${CATEGORY_COUNTS.music} Official Posters & Studio`,
      href: "/music",
      icon: Disc,
      description:
        "Original posters for 'Broken Heart', 'Mirza' (Surinder Shinda Tribute), 'Guddi Ishqe Di', 'Nakhrey Da Mull', 'Payi Chall Dhakk', alongside vocal booth sessions.",
      previews: [
        "/images/music/m2_007_legends_surinder-shinda.jpeg",
        "/images/music/m2_084_legends_surinder-shinda.jpeg",
        "/images/music/m2_080_music_posters.jpeg",
        "/images/music/m1_050_music_posters.jpeg",
      ],
      badge: "Discography",
    },
    {
      id: "bts",
      title: "Behind The Scenes & Production",
      punjabiTitle: "ਕੈਮਰਾ, ਲਾਈਟਾਂ ਅਤੇ ਟੀਮ",
      count: `${CATEGORY_COUNTS.bts} Set Moments`,
      href: "/bts",
      icon: Clapperboard,
      description:
        "Full cast and technical crew under fairy lights with Kaur Billo, camera rails, director video playback monitors, and courtyard vanity styling chairs.",
      previews: [
        "/images/bts/m2_000_bts_crew-sets.jpeg",
        "/images/bts/m1_065_bts_vanity-makeup.jpeg",
        "/images/bts/m1_072_bts_crew-sets.jpeg",
        "/images/bts/m2_066_bts_crew-sets.jpeg",
      ],
      badge: "Filmmaking Life",
    },
  ];

  return (
    <section id="galleries" className="py-24 border-b border-white/10 bg-[#08090e] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-[#d4af37]/5 via-transparent to-[#f59e0b]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[11px] uppercase font-mono tracking-widest text-[#fef3c7] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>[ 02 • COMPREHENSIVE ARCHIVE DIRECTORY ]</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight leading-tight">
              Curated <span className="text-[#d4af37] italic font-normal">Galleries &amp; Pages</span>
            </h2>
          </div>

          <div className="text-sm text-gray-400 max-w-md">
            All 200 real photographs from the official archives systematically organized across five dedicated gallery collections. Click any collection below to explore every shot in high resolution.
          </div>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Card 1: Legends Archive (Featured Large Card) */}
          <div className="lg:col-span-7 rounded-2xl bg-gradient-to-br from-[#131520] to-[#0c0e14] border border-[#d4af37]/40 p-6 sm:p-8 relative overflow-hidden shadow-2xl flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#fef3c7] text-xs font-mono font-bold uppercase tracking-wider">
                  {galleries[0].badge}
                </span>
                <span className="text-xs font-mono text-[#d4af37]">
                  {galleries[0].count}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <Crown className="w-5 h-5 text-[#d4af37]" />
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-[#fef3c7] transition-colors">
                  {galleries[0].title}
                </h3>
              </div>

              <span className="block text-sm font-serif text-[#d4af37] mb-3">
                {galleries[0].punjabiTitle}
              </span>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                {galleries[0].description}
              </p>
            </div>

            {/* 4 Image Previews */}
            <div className="grid grid-cols-4 gap-2 mb-6">
              {galleries[0].previews.map((src, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl overflow-hidden bg-black/50 border border-white/10 group-hover:border-[#d4af37]/40 transition-colors"
                >
                  <img
                    src={src}
                    alt="Preview"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            <Link
              href={galleries[0].href}
              className="inline-flex items-center justify-between px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b38f2a] text-black font-bold text-xs uppercase tracking-wider hover:shadow-xl hover:shadow-[#d4af37]/20 transition-all"
            >
              <span>Explore All 54 Legends Archives</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 2: Shoots (Models & Stills) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#12141c] border border-white/10 p-6 sm:p-8 relative overflow-hidden shadow-xl flex flex-col justify-between group hover:border-[#d4af37]/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-xs font-mono font-bold uppercase tracking-wider">
                  {galleries[1].badge}
                </span>
                <span className="text-xs font-mono text-[#d4af37]">
                  {galleries[1].count}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <Camera className="w-5 h-5 text-[#d4af37]" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#fef3c7] transition-colors">
                  {galleries[1].title}
                </h3>
              </div>

              <span className="block text-xs font-serif text-[#d4af37] mb-3">
                {galleries[1].punjabiTitle}
              </span>

              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                {galleries[1].description}
              </p>
            </div>

            <div className="grid grid-cols-4 gap-2 mb-6">
              {galleries[1].previews.map((src, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl overflow-hidden bg-black/50 border border-white/10"
                >
                  <img
                    src={src}
                    alt="Preview"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            <Link
              href={galleries[1].href}
              className="inline-flex items-center justify-between px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs uppercase tracking-wider transition-all"
            >
              <span>Explore All 41 Shoots</span>
              <ArrowUpRight className="w-4 h-4 text-[#d4af37]" />
            </Link>
          </div>

          {/* Card 3: Solo Portfolio & London */}
          <div className="lg:col-span-4 rounded-2xl bg-[#12141c] border border-white/10 p-6 sm:p-7 relative overflow-hidden shadow-xl flex flex-col justify-between group hover:border-[#d4af37]/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-gray-300 text-[11px] font-mono font-bold uppercase tracking-wider">
                  {galleries[2].badge}
                </span>
                <span className="text-[11px] font-mono text-[#d4af37]">
                  {galleries[2].count}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-1">
                <User className="w-4 h-4 text-[#d4af37]" />
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#fef3c7] transition-colors">
                  {galleries[2].title}
                </h3>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                {galleries[2].description}
              </p>
            </div>

            <div className="grid grid-cols-4 gap-1.5 mb-5">
              {galleries[2].previews.map((src, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg overflow-hidden bg-black/50 border border-white/10"
                >
                  <img
                    src={src}
                    alt="Preview"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <Link
              href={galleries[2].href}
              className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs uppercase tracking-wider transition-all"
            >
              <span>Explore 68 Solo Looks</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#d4af37]" />
            </Link>
          </div>

          {/* Card 4: Song Releases & Discography */}
          <div className="lg:col-span-4 rounded-2xl bg-[#12141c] border border-white/10 p-6 sm:p-7 relative overflow-hidden shadow-xl flex flex-col justify-between group hover:border-[#d4af37]/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-gray-300 text-[11px] font-mono font-bold uppercase tracking-wider">
                  {galleries[3].badge}
                </span>
                <span className="text-[11px] font-mono text-[#d4af37]">
                  {galleries[3].count}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-1">
                <Disc className="w-4 h-4 text-[#d4af37]" />
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#fef3c7] transition-colors">
                  {galleries[3].title}
                </h3>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                {galleries[3].description}
              </p>
            </div>

            <div className="grid grid-cols-4 gap-1.5 mb-5">
              {galleries[3].previews.map((src, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg overflow-hidden bg-black/50 border border-white/10"
                >
                  <img
                    src={src}
                    alt="Preview"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <Link
              href={galleries[3].href}
              className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs uppercase tracking-wider transition-all"
            >
              <span>Explore 20 Music Assets</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#d4af37]" />
            </Link>
          </div>

          {/* Card 5: Behind The Scenes */}
          <div className="lg:col-span-4 rounded-2xl bg-[#12141c] border border-white/10 p-6 sm:p-7 relative overflow-hidden shadow-xl flex flex-col justify-between group hover:border-[#d4af37]/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-gray-300 text-[11px] font-mono font-bold uppercase tracking-wider">
                  {galleries[4].badge}
                </span>
                <span className="text-[11px] font-mono text-[#d4af37]">
                  {galleries[4].count}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-1">
                <Clapperboard className="w-4 h-4 text-[#d4af37]" />
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#fef3c7] transition-colors">
                  {galleries[4].title}
                </h3>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                {galleries[4].description}
              </p>
            </div>

            <div className="grid grid-cols-4 gap-1.5 mb-5">
              {galleries[4].previews.map((src, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg overflow-hidden bg-black/50 border border-white/10"
                >
                  <img
                    src={src}
                    alt="Preview"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <Link
              href={galleries[4].href}
              className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs uppercase tracking-wider transition-all"
            >
              <span>Explore 17 Set Moments</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#d4af37]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
