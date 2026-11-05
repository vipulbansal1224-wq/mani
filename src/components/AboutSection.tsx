"use client";

import React from "react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { usePortfolio } from "@/context/PortfolioContext";
import { Phone, MapPin, Sparkles, Music, Check, Crown, ArrowUpRight } from "lucide-react";
import { YoutubeIcon, InstagramIcon } from "@/components/Icons";

export default function AboutSection() {
  const { profile } = usePortfolio();

  return (
    <section id="about" className="py-24 border-b border-white/10 bg-[#090b11] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[11px] uppercase font-mono tracking-[0.25em] font-bold text-[#fef3c7] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>03 / Profile &amp; Folk Legacy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
            About <span className="text-[#d4af37] italic font-normal">Mani Sandhu</span>
          </h2>
        </div>

        {/* Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Big Philosophy & Stats */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <blockquote className="text-xl sm:text-2xl font-serif text-gray-200 leading-snug mb-8 border-l-4 border-[#d4af37] pl-6 italic">
                &quot;Carrying forward the timeless blessings of Ustad Surinder Shinda Ji and Singer Kaur Billo while shaping the new sound of Punjabi music.&quot;
              </blockquote>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 font-normal">
                Operating between Ludhiana, Punjab and the United Kingdom, Mani Sandhu is a singer, producer, model, and director. Through Mani Sandhu Records and Media House, he delivers authentic Punjabi folk and contemporary pop productions.
              </p>

              {/* Special Tribute Callout */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#d4af37]/10 to-transparent border border-[#d4af37]/30 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#fef3c7] font-bold mb-1">
                  <Crown className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>The Golden Era Mentorship</span>
                </div>
                <p className="text-xs text-gray-300">
                  Shared creative brotherhood with Late Ustad Surinder Shinda Ji (&quot;Guddi Ishqe Di&quot;, &quot;Mirza&quot; tribute) and Singer Kaur Billo.
                </p>
                <Link
                  href="/legends"
                  className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] font-semibold mt-2 hover:underline"
                >
                  <span>View 54 Historic Photos</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-3xl font-serif font-black text-[#d4af37]">200</div>
                <div className="text-[10px] text-gray-300 uppercase tracking-wider font-semibold mt-1">
                  Real Photos
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-3xl font-serif font-black text-amber-400">Media</div>
                <div className="text-[10px] text-gray-300 uppercase tracking-wider font-semibold mt-1">
                  House Studio
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-3xl font-serif font-black text-white">UK &bull; PB</div>
                <div className="text-[10px] text-gray-300 uppercase tracking-wider font-semibold mt-1">
                  Global Reach
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Key Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
              {profile.bioLong.map((para, i) => (
                <p
                  key={i}
                  className="border-l-2 border-white/10 pl-4 hover:border-[#d4af37] transition-colors"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all"
                >
                  <span>Read Full Biography</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#d4af37]" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#d4af37] hover:bg-[#b38f2a] text-black font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <span>Book Mani Sandhu</span>
                </Link>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Ludhiana &bull; United Kingdom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
