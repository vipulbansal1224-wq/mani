"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Phone, MapPin, Sparkles, Music, Check } from "lucide-react";
import { YoutubeIcon, InstagramIcon } from "@/components/Icons";

export default function AboutSection() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 border-b border-white/5 bg-[#0e1017]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#d4af37] mb-3">
            01 / Profile &amp; Vision
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
            About Mani Sandhu
          </h2>
        </div>

        {/* Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Big Philosophy & Stats */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <blockquote className="text-xl sm:text-2xl font-serif text-gray-200 leading-snug mb-8 border-l-2 border-[#d4af37] pl-6 italic">
                "Promoting regional Punjabi talent, producing relatable comedy, and creating music straight from the heart."
              </blockquote>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                Mani Sandhu operates his creative platform and media studio from Ludhiana, Punjab. Known as a singer, content creator, and host, he provides full promotional coverage for upcoming music tracks and artists.
              </p>
            </div>

            {/* Clean Numbered Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-2xl font-serif font-bold text-[#d4af37]">01</div>
                <div className="text-[11px] text-gray-400 uppercase tracking-wider mt-1">Single Released</div>
              </div>
              <div>
                <div className="text-2xl font-serif font-bold text-white">Media</div>
                <div className="text-[11px] text-gray-400 uppercase tracking-wider mt-1">House Studio</div>
              </div>
              <div>
                <div className="text-2xl font-serif font-bold text-white">Ludhiana</div>
                <div className="text-[11px] text-gray-400 uppercase tracking-wider mt-1">Punjab Base</div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Key Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
              {profile.bioLong.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Direct Contact for Promotions Banner */}
            <div className="p-6 rounded-2xl bg-[#141620] border border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-1">
                    Promotions &amp; Interviews Desk
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Need your song or brand promoted in Punjab?
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    Direct Lines: <span className="text-gray-200 font-mono">+91 98729 99854</span> / <span className="text-gray-200 font-mono">+91 94788 39486</span>
                  </div>
                </div>

                <a
                  href={profile.socials.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#d4af37] hover:bg-[#c5a059] text-black text-xs font-bold uppercase tracking-wider transition-all shrink-0 text-center"
                >
                  WhatsApp Mani
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
