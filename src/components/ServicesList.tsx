"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { ArrowUpRight, Phone, CheckCircle2 } from "lucide-react";

export default function ServicesList() {
  const { services } = PORTFOLIO_DATA;

  return (
    <section id="services" className="py-24 border-b border-white/5 bg-[#0b0c10]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#d4af37] mb-3">
              04 / Capabilities &amp; Services
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
              Mani Sandhu Media House
            </h2>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm max-w-md">
            Providing artist interviews, song launches, media promotions, and creative collaborations in Ludhiana, Punjab.
          </p>
        </div>

        {/* Hostinger-Style Numbered Rows */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="py-10 group transition-all duration-300 hover:bg-white/[0.02]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Number */}
                <div className="lg:col-span-2">
                  <span className="font-mono text-sm tracking-widest text-[#d4af37] font-bold">
                    {String(idx + 1).padStart(2, "0")} /
                  </span>
                </div>

                {/* Title & Description */}
                <div className="lg:col-span-5">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-[#d4af37] transition-colors mb-3">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-md">
                    {srv.description}
                  </p>
                </div>

                {/* Deliverables / Tags */}
                <div className="lg:col-span-4 flex flex-wrap gap-2 items-center">
                  {srv.deliverables.map((item, dIdx) => (
                    <span
                      key={dIdx}
                      className="px-3 py-1 rounded-full text-xs bg-white/5 text-gray-300 border border-white/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Action Arrow */}
                <div className="lg:col-span-1 flex justify-end">
                  <a
                    href="#contact"
                    className="w-10 h-10 rounded-full border border-white/10 text-gray-400 group-hover:text-black group-hover:bg-[#d4af37] group-hover:border-[#d4af37] flex items-center justify-center transition-all"
                    aria-label={`Book ${srv.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Booking Strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl bg-[#141620] border border-white/10 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center font-bold">
              MS
            </div>
            <div>
              <div className="text-sm font-bold text-white">Call Direct for Media Promotions:</div>
              <div className="text-xs text-gray-400">Lines: +91 98729 99854 &bull; +91 94788 39486 (Ludhiana)</div>
            </div>
          </div>

          <a
            href="tel:9872999854"
            className="px-6 py-2.5 rounded-full bg-[#d4af37] text-black text-xs font-bold uppercase tracking-wider hover:bg-[#c5a059] transition-all"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
