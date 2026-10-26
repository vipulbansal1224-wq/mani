"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Music, Mic, Video, Sparkles, MapPin, Phone } from "lucide-react";

export default function AboutSection() {
  const { profile } = PORTFOLIO_DATA;

  const corePillars = [
    {
      icon: Music,
      title: "Singing & Tracks",
      description: "Singer of the Punjabi single 'Broken Heart' streaming on Spotify, JioSaavn, and Wynk Music."
    },
    {
      icon: Mic,
      title: "Media Promotions & PR",
      description: "Conducting promotional interviews and features for emerging Punjabi singers, artists, and creators."
    },
    {
      icon: Video,
      title: "Mani Sandhu Media House",
      description: "Operating out of Ludhiana, Punjab for video production, podcast talks, and music releases."
    },
    {
      icon: Sparkles,
      title: "Acting & Comedy Skits",
      description: "Creating situational comedy sketches and viral shorts on YouTube (@ManiSandhuOfficial786) and Instagram."
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#08090d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artist &amp; Creator Profile</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">
            About <span className="text-gold-gradient">Mani Sandhu</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Singer, Model, Actor, Vlogger &amp; Media Promoter from Ludhiana, Punjab.
          </p>
        </div>

        {/* Grid: Original Photos + Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Original Photo Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Real Profile Photo Card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 glass-panel shadow-2xl p-3">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={profile.profileImage}
                  alt="Mani Sandhu Original Profile Photo"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-bold text-sm">Mani Sandhu</h4>
                    <p className="text-[11px] text-amber-400">Singer • Vlogger • Host</p>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                    Ludhiana, PB
                  </span>
                </div>
              </div>
            </div>

            {/* Real YouTube Cover Banner Snippet */}
            <div className="p-3 rounded-2xl glass-card border border-white/10 overflow-hidden">
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>YouTube Channel Cover Art</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/5 aspect-21/9 bg-black">
                <img
                  src={profile.bannerImage}
                  alt="Mani Sandhu YouTube Cover Banner"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 leading-tight">
              Creating Music, Comedy &amp; <span className="text-amber-400">Media Promotions</span> from Punjab
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
              {profile.bioLong.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Direct Contact for Promotions */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call For Interviews &amp; Media Promotions</span>
                </h4>
                <p className="text-xs text-gray-300 mt-1">
                  Connect on 9872999854 or 9478839486 for music promotion, song interviews, and collaborations.
                </p>
              </div>
              <a
                href={profile.socials.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all shrink-0"
              >
                WhatsApp Now
              </a>
            </div>

            {/* Core Pillars */}
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
