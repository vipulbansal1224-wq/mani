"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Sparkles, Award, MapPin, Music, Heart, Video, ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  const milestones = [
    {
      year: "Rooted in Ludhiana",
      title: "Cultural Foundations & Folk Passion",
      desc: "Immersed in authentic Punjabi music traditions and cultural performances from early youth in Ludhiana.",
    },
    {
      year: "Mentorship by Legends",
      title: "Guidance from Ustad Surinder Shinda & Kaur Billo",
      desc: "Earned the personal mentorship of Late Ustad Surinder Shinda Ji and collaborated closely on recordings and promotions, alongside revered vocalist Singer Kaur Billo.",
    },
    {
      year: "Record Label & Media House",
      title: "Founding Mani Sandhu Records & Media House",
      desc: "Established a professional audio-visual production powerhouse handling track composition, video shoot direction, and media promotions.",
    },
    {
      year: "UK Tours & Global Vision",
      title: "International Reach & Song Releases",
      desc: "Expanded across the UK with projects like 'Nakhrey Da Mull' (Mehak Punjab Di 2024), UK tour photography, and multi-platform digital releases.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#07080c] text-[#e5e7eb] flex flex-col relative selection:bg-[#d4af37]/40 selection:text-white">
      <Navbar />

      {/* Hero Bio Banner */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-start gap-4 border-b border-white/10 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#fef3c7] text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>[ 06 • BIOGRAPHY & VISION ]</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl leading-tight">
            Rooted in Punjab, <span className="italic font-normal text-[#d4af37]">Crafted for the World</span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            Mani Sandhu is a multifaceted Punjabi singer, producer, model, and the creative force behind Mani Sandhu Media House and Mani Sandhu Records. Blessed with the rare privilege of working alongside legends of Punjabi folk music, his career spans viral hit singles, high-concept music video direction, and an expanding international footprint.
          </p>
        </div>

        {/* Two-Column Story with Real Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          {/* Left Column: Visual Portrait Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#12141c]">
              <img
                src="/images/portfolio/m2_064_portfolio_studio-fashion.jpeg"
                alt="Mani Sandhu in yellow bespoke blazer"
                className="w-full object-cover aspect-[4/5]"
              />
              <div className="p-5 bg-gradient-to-t from-black/90 to-black/30 absolute inset-x-0 bottom-0">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37] block">
                  Artistic Identity
                </span>
                <h4 className="font-serif text-lg font-bold text-white">
                  Mani Sandhu
                </h4>
                <p className="text-xs text-gray-300 mt-1">
                  Singer &bull; Producer &bull; Founder of Mani Sandhu Media House
                </p>
              </div>
            </div>

            {/* Historic Connection Card */}
            <div className="p-6 rounded-2xl bg-[#12141c] border border-[#d4af37]/30 flex flex-col gap-3">
              <span className="text-[10px] font-mono text-[#d4af37] uppercase tracking-wider font-bold">
                The Heritage Legacy
              </span>
              <h4 className="font-serif text-lg font-bold text-white">
                Under the Wings of Folk Royalty
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Few contemporary artists possess authentic bonds with Punjab&apos;s golden era icons. Mani Sandhu shared direct creative mentorship, vocal recordings, and personal moments with the late Ustad Surinder Shinda Ji and continues to produce alongside Singer Kaur Billo.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <Link
                  href="/legends"
                  className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] font-semibold hover:underline"
                >
                  <span>Explore 54 Historic Archives</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: In-Depth Narrative & Timeline */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-4 text-sm text-gray-300 leading-relaxed">
              <h3 className="font-serif text-2xl font-bold text-white">
                From Ludhiana Streets to London Stages
              </h3>
              <p>
                Operating out of Ludhiana, the beating heart of Punjab&apos;s cultural and industrial creativity, Mani Sandhu carved his reputation through genuine artistry. With his breakout single <strong className="text-white">&quot;Broken Heart&quot;</strong>, he captured millions of listeners on YouTube and streaming platforms.
              </p>
              <p>
                Recognizing the need for end-to-end creative control, he founded <strong className="text-white">Mani Sandhu Records</strong> and <strong className="text-white">Mani Sandhu Media House</strong>. Today, the banner oversees everything from recording studio vocal tracking, music video casting, and high-fashion model shoots to post-production and global digital distribution.
              </p>
            </div>

            {/* Milestones Timeline */}
            <div className="border-t border-white/10 pt-8">
              <h3 className="font-serif text-xl font-bold text-white mb-6">
                Key Milestones &amp; Evolution
              </h3>

              <div className="space-y-6">
                {milestones.map((m, idx) => (
                  <div
                    key={m.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <span className="px-2.5 py-1 rounded bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#fef3c7] font-mono text-[11px] font-bold shrink-0">
                      {m.year}
                    </span>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-white">
                        {m.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Values / Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-8">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Music className="w-5 h-5 text-[#d4af37] mb-2" />
                <h5 className="text-xs font-bold text-white uppercase tracking-wider">
                  Original Music
                </h5>
                <p className="text-[11px] text-gray-400 mt-1">
                  Crafting Punjabi folk, pop, and devotional numbers.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Video className="w-5 h-5 text-[#d4af37] mb-2" />
                <h5 className="text-xs font-bold text-white uppercase tracking-wider">
                  Cinematic Direction
                </h5>
                <p className="text-[11px] text-gray-400 mt-1">
                  Directing video songs with camera rigs and models.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Award className="w-5 h-5 text-[#d4af37] mb-2" />
                <h5 className="text-xs font-bold text-white uppercase tracking-wider">
                  Media House
                </h5>
                <p className="text-[11px] text-gray-400 mt-1">
                  Full artist promotions and event booking agency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
