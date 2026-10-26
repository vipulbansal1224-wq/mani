"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Quote, Star } from "lucide-react";

export default function TestimonialsSection() {
  const { testimonials } = PORTFOLIO_DATA;

  return (
    <section className="relative py-24 bg-[#07080c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>Industry Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Words from <span className="text-gold-gradient">Collaborators</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-white/5 flex flex-col justify-between relative group hover:border-amber-500/30"
            >
              <Quote className="w-8 h-8 text-amber-500/30 mb-4" />
              <p className="text-sm text-gray-300 leading-relaxed italic mb-6">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-amber-500/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{item.name}</h4>
                  <p className="text-xs text-amber-400 font-medium">{item.role}</p>
                  <p className="text-[11px] text-gray-500">{item.association}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
