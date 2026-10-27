"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Phone, MapPin, Sparkles, Music, Check } from "lucide-react";
import { YoutubeIcon, InstagramIcon } from "@/components/Icons";

export default function AboutSection() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 border-b border-white/10 bg-[#090b11] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[11px] uppercase tracking-[0.25em] font-bold text-red-400 mb-3">
            <span>01 / Profile &amp; Punjabi Vision</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
            About <span className="text-punjabi-fire">Mani Sandhu</span>
          </h2>
        </div>

        {/* Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Big Philosophy & Stats */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <blockquote className="text-xl sm:text-2xl font-serif text-gray-200 leading-snug mb-8 border-l-4 border-[#ff2a5f] pl-6 italic">
                "Promoting regional Punjabi talent, producing relatable comedy, and creating music straight from the heart."
              </blockquote>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 font-normal">
                Mani Sandhu operates his creative platform and media studio from Ludhiana, Punjab. Known as a singer, content creator, and host, he provides full promotional coverage for upcoming music tracks and artists.
              </p>
            </div>

            {/* Clean Numbered Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-3xl font-serif font-black text-punjabi-fire">01</div>
                <div className="text-[11px] text-gray-300 uppercase tracking-wider font-semibold mt-1">Single Released</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-3xl font-serif font-black text-amber-gold">Media</div>
                <div className="text-[11px] text-gray-300 uppercase tracking-wider font-semibold mt-1">House Studio</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-3xl font-serif font-black text-white">Ludhiana</div>
                <div className="text-[11px] text-gray-300 uppercase tracking-wider font-semibold mt-1">Punjab Base</div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Key Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
              {profile.bioLong.map((para, i) => (
                <p key={i} className="border-l-2 border-white/10 pl-4 hover:border-[#ff2a5f] transition-colors">{para}</p>
              ))}
            </div>

            {/* Direct Contact for Promotions Banner */}
            <div className="p-6 rounded-2xl bg-[#0f121d] border border-white/10 stage-card shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#f59e0b] mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#ff2a5f]" />
                    <span>Promotions &amp; Interviews Desk</span>
                  </div>
                  <div className="text-base font-bold text-white">
                    Need your song or brand promoted in Punjab?
                  </div>
                  <div className="text-xs text-gray-300 mt-1.5 flex flex-wrap gap-2 items-center">
                    <span>Direct Lines:</span>
                    <a href="tel:9872999854" className="text-white hover:text-red-400 font-mono font-bold underline">+91 98729 99854</a>
                    <span>/</span>
                    <a href="tel:9478839486" className="text-white hover:text-red-400 font-mono font-bold underline">+91 94788 39486</a>
                  </div>
                </div>

                <a
                  href={profile.socials.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-fire px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-all shrink-0 text-center font-bold"
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
