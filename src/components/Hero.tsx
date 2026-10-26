"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { YoutubeIcon, InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import { ArrowDown, Music, Play, Phone, MapPin, Sparkles, ArrowUpRight } from "lucide-react";

interface HeroProps {
  onOpenVideo: (videoId: string, title: string) => void;
}

export default function Hero({ onOpenVideo }: HeroProps) {
  const { profile, musicRelease } = PORTFOLIO_DATA;

  return (
    <section className="relative min-h-[92vh] pt-36 pb-20 flex items-center justify-center border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* Hostinger Asymmetric Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Bold Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Category / Discipline Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#d4af37]">
                Singer • Model • Vlogger • Media Promoter
              </span>
            </div>

            {/* Main Name Heading in Playfair Serif */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-black tracking-tight text-white leading-[1.05] mb-2">
              Mani Sandhu
            </h1>

            {/* Punjabi Script Subtitle */}
            <div className="text-xl sm:text-2xl font-serif text-[#d4af37]/80 font-medium mb-6">
              ਮਨੀ ਸੰਧੂ <span className="text-sm font-sans text-gray-500 font-normal ml-2">/ Media House Ludhiana</span>
            </div>

            {/* Story Paragraph */}
            <p className="text-sm sm:text-base text-gray-300 max-w-xl font-normal leading-relaxed mb-8">
              Independent Punjabi artist and creator. Singer of the single <span className="text-white font-semibold">"Broken Heart"</span>, creator of viral comedy sketches, and host of artist promotional interviews at <span className="text-[#d4af37]">Mani Sandhu Media House</span> in Ludhiana, Punjab.
            </p>

            {/* Music Single Track Strip */}
            <div className="p-4 rounded-2xl bg-[#14161f] border border-white/10 max-w-lg mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#d4af37]/15 text-[#d4af37] flex items-center justify-center shrink-0">
                  <Music className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                    Latest Song Release
                  </div>
                  <div className="text-sm font-bold text-white">"Broken Heart" — Mani Sandhu</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={profile.socials.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1 transition-all"
                >
                  <span>Spotify</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={profile.socials.jiosaavn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 text-xs font-medium transition-all"
                >
                  <span>JioSaavn</span>
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#works"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#d4af37] hover:bg-[#c5a059] text-black font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>Explore Works</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="tel:9872999854"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[#d4af37]/40 font-semibold text-xs uppercase tracking-wider transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Call: 98729 99854</span>
              </a>

              <a
                href={profile.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors p-2"
                aria-label="YouTube Channel"
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Hostinger-Style Large Framed Portrait */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Frame Container */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#12141c] shadow-2xl p-2.5">
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-black">
                  <img
                    src={profile.profileImage}
                    alt="Mani Sandhu Original Profile Photo"
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
                  />
                  {/* Subtle Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-[#d4af37] uppercase">
                    Artist Archive • 2026
                  </div>

                  {/* Bottom Portrait Caption */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-white font-serif font-bold text-base">Mani Sandhu</div>
                      <div className="text-[11px] text-gray-400">Media House • Ludhiana (PB)</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-emerald-400 font-bold uppercase">Available</div>
                      <div className="text-[11px] text-gray-300">Promotions &amp; PR</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Accent Card underneath */}
              <div className="mt-3 px-4 py-2.5 rounded-xl bg-[#111319] border border-white/5 flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                  Ludhiana, Punjab, India
                </span>
                <span className="font-mono text-[#d4af37]">@ManiSandhuOfficial786</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
