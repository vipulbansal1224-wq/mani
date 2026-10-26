"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Film, Mic, Video, Sparkles, Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export default function MediaHouseSection() {
  const { services, profile } = PORTFOLIO_DATA;

  const iconMap: Record<string, React.ElementType> = {
    Film,
    Mic,
    Video,
    Sparkles,
  };

  return (
    <section id="media-house" className="relative py-24 bg-[#07080c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Video className="w-3.5 h-3.5" />
            <span>Production Hub &amp; Creative Studio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">
            Mani Sandhu <span className="text-gold-gradient">Media House</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Headquartered in Ludhiana, Punjab. We specialize in television acting casting, celebrity podcast recordings, high-definition video production, and commercial brand PR.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((srv, idx) => {
            const Icon = iconMap[srv.icon] || Video;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-white/5 hover:border-amber-500/30 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500/20 to-amber-500/5 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-6">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-1">
                    What We Deliver:
                  </div>
                  {srv.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio Equipment & Contact Callout */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-amber-500/20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4" />
              <span>Studio Location: Ludhiana, Punjab</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Need a 4K Studio, Podcast Space, or Actor Collaboration?
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Book our Ludhiana studio for multi-camera video podcasts, voice dubbing, or collaborate directly with actor &amp; anchor Mani Sandhu for television, brand, and media campaigns.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href="tel:+919872999854"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-sm bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-amber-500/30 transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>+91 98729 99854</span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-lg shadow-amber-500/20 transition-all"
            >
              <span>Book Studio &amp; Dates</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
