"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { ArrowUpRight, Phone, CheckCircle2 } from "lucide-react";

export default function ServicesList() {
  const { services } = PORTFOLIO_DATA;

  return (
    <section id="services" className="py-24 border-b border-white/10 bg-[#080a10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[11px] uppercase font-mono tracking-widest text-[#fef3c7] mb-3">
              <span>[ 06 • CAPABILITIES &amp; MEDIA SERVICES ]</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
              Mani Sandhu <span className="text-punjabi-fire">Media House</span>
            </h2>
          </div>
          <p className="text-gray-300 text-xs sm:text-sm max-w-md leading-relaxed">
            Providing artist interviews, song launches, media promotions, and creative collaborations in Ludhiana, Punjab.
          </p>
        </div>

        {/* High-Contrast Numbered Rows */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="py-10 group transition-all duration-300 hover:bg-gradient-to-r hover:from-[#d4af37]/[0.05] hover:to-transparent px-4 sm:px-6 rounded-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Number */}
                <div className="lg:col-span-2">
                  <span className="font-mono text-lg tracking-widest text-[#d4af37] font-black">
                    {String(idx + 1).padStart(2, "0")} /
                  </span>
                </div>

                {/* Title & Description */}
                <div className="lg:col-span-5">
                  <h3 className="text-xl sm:text-2xl font-serif font-black text-white group-hover:text-[#d4af37] transition-colors mb-2.5">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-md">
                    {srv.description}
                  </p>
                </div>

                {/* Deliverables / Tags */}
                <div className="lg:col-span-4 flex flex-wrap gap-2 items-center">
                  {srv.deliverables.map((item, dIdx) => (
                    <span
                      key={dIdx}
                      className="px-3.5 py-1.5 rounded-full text-xs bg-white/5 group-hover:bg-[#d4af37]/15 group-hover:border-[#d4af37]/30 text-gray-200 group-hover:text-[#fef3c7] border border-white/10 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Action Arrow */}
                <div className="lg:col-span-1 flex justify-end">
                  <a
                    href="#contact"
                    className="w-11 h-11 rounded-full border border-white/15 text-gray-300 group-hover:text-black group-hover:bg-gradient-to-tr group-hover:from-[#d4af37] group-hover:to-[#b38f2a] group-hover:border-transparent flex items-center justify-center transition-all shadow-md group-hover:shadow-[#d4af37]/25"
                    aria-label={`Book ${srv.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Booking Strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 rounded-3xl bg-[#0f121d] border border-white/10 stage-card shadow-2xl gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#d4af37] to-[#b38f2a] text-black flex items-center justify-center font-black text-base shadow-lg shadow-[#d4af37]/25">
              MS
            </div>
            <div>
              <div className="text-base font-bold text-white">Call Direct for Media Promotions:</div>
              <div className="text-xs text-gray-300 mt-0.5">Lines: <span className="font-mono text-[#d4af37] font-bold">+91 98729 99854</span> &bull; <span className="font-mono text-[#d4af37] font-bold">+91 94788 39486</span> (Ludhiana)</div>
            </div>
          </div>

          <a
            href="tel:9872999854"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b38f2a] text-black text-xs uppercase tracking-wider transition-all font-bold hover:shadow-xl hover:shadow-[#d4af37]/25 hover:scale-105"
          >
            Call Desk Now
          </a>
        </div>
      </div>
    </section>
  );
}
