"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Tv, Mic, Video, Award, CheckCircle, MapPin, Sparkles, Building2 } from "lucide-react";

export default function AboutSection() {
  const { profile } = PORTFOLIO_DATA;

  const corePillars = [
    {
      icon: Tv,
      title: "Television & Drama",
      description: "Proven presence on Star Plus ('Sayonee') and Colors TV ('Tu Juliet Jatt Di'), delivering nuanced, energetic performances."
    },
    {
      icon: Mic,
      title: "Talk Shows & Podcasts",
      description: "Host of spiritual dialogues (Bhai Varinder Singh Nirman) and artist spotlight interviews exploring culture, faith, and music."
    },
    {
      icon: Building2,
      title: "Media House Studio",
      description: "Founder of Mani Sandhu Media House in Ludhiana—offering soundstage, 4K filming, podcast suites, and artist launchpads."
    },
    {
      icon: Video,
      title: "Digital Creator & Skits",
      description: "Creator of viral comedic sketches, relatable Punjabi lifestyle shorts, and international travel vlogs across the UK & UAE."
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#08090d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Artist &amp; Producer</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">
            About <span className="text-gold-gradient">Mani Sandhu</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Bridging the vibrant heart of Punjab with national television drama and contemporary digital media.
          </p>
        </div>

        {/* Grid: Bio Story + Visual Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Portrait & Highlights Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 glass-panel shadow-2xl p-2">
              <div className="relative h-96 sm:h-[450px] rounded-2xl overflow-hidden bg-gradient-to-t from-black via-zinc-900 to-zinc-800 flex items-center justify-center">
                {/* Visual Representation Graphic */}
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-black/40 to-transparent"></div>

                {/* Floating badge inside portrait */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-lg">Mani Sandhu</div>
                      <div className="text-xs text-amber-400 font-medium">Actor • Host • Media Producer</div>
                    </div>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-300">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      Ludhiana, PB
                    </span>
                    <span className="text-amber-400 font-semibold">Available for Projects</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Accompanying Studio Badge */}
            <div className="mt-4 p-4 rounded-2xl glass-card flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                MS
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Mani Sandhu Media House</h4>
                <p className="text-xs text-gray-400">Headquarters &amp; 4K Recording Studio in Ludhiana, Punjab</p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 leading-tight">
              A Passionate Voice in <span className="text-amber-400">Punjabi Culture</span> &amp; National Entertainment
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
              {profile.bioLong.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Quick Feature Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {corePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl glass-card border border-white/5 hover:border-amber-500/30 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-white text-sm">{pillar.title}</h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-normal">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
