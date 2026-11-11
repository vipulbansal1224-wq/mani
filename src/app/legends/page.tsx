"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import { LEGENDS_ITEMS, GalleryItem } from "@/data/gallery-data";
import { usePortfolio } from "@/context/PortfolioContext";
import { Sparkles, Heart, Mic, Award, Music2 } from "lucide-react";

export default function LegendsPage() {
  const { legendsItems } = usePortfolio();
  const displayItems = legendsItems && legendsItems.length > 0 ? legendsItems : LEGENDS_ITEMS;

  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filterOptions = [
    { id: "all", label: "All Archives", count: displayItems.length },
    {
      id: "surinder-shinda",
      label: "Ustad Surinder Shinda",
      count: displayItems.filter((i) => i.subCategory === "surinder-shinda").length,
    },
    {
      id: "kaur-billo",
      label: "Singer Kaur Billo",
      count: displayItems.filter((i) => i.subCategory === "kaur-billo").length,
    },
    {
      id: "celebrities",
      label: "Celebrity Stars",
      count: displayItems.filter((i) => i.subCategory === "celebrities").length,
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? displayItems
      : displayItems.filter((i) => i.subCategory === activeFilter);

  return (
    <main className="min-h-screen bg-[#07080c] text-[#e5e7eb] flex flex-col relative selection:bg-[#d4af37]/40 selection:text-white">
      <Navbar />

      {/* Editorial Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-start gap-4 border-b border-white/10 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#fef3c7] text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>[ 01 • LEGACY & MENTORSHIP ]</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl leading-tight">
            Collaborations with <span className="italic font-normal text-[#d4af37]">Surinder Shinda</span>, Kaur Billo & Stars
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            A rare and historic collection of moments capturing the creative brotherhood, studio recordings, and live stage legacy shared between Mani Sandhu and Punjabi folk royalty — the late legendary Ustad Surinder Shinda Ji, iconic vocalist Kaur Billo, and stalwarts like Mika Singh, Gurpreet Ghuggi, and Sardar Sohi.
          </p>

          {/* Tribute Highlights Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#12141d] to-[#0a0c12] border border-[#d4af37]/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Music2 className="w-24 h-24 text-[#d4af37]" />
              </div>
              <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[#d4af37]/20 text-[#fef3c7] mb-2 font-bold">
                Tribute To Shromani Gayak
              </span>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Ustad Surinder Shinda Ji (Late)
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-3">
                Featuring historic studio sessions, the official promotion of &quot;Guddi Ishqe Di&quot; (Jashan Recordz), the famous rooftop shoot, and the tribute cover track &quot;MIRZA&quot; launched in collaboration with Shinda Ji&apos;s son Maninder Shinda.
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://youtu.be/yccf8_b0K_c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/20 hover:bg-red-600 border border-red-500/40 text-red-200 hover:text-white text-[11px] font-semibold transition-colors"
                >
                  <span>Watch &quot;Mirza&quot; Tribute (YT)</span>
                </a>
                <a
                  href="https://open.spotify.com/track/191LuVev3fckmIVgAOr77l?si=VTh_fLOPSDe7EragP3Mbbg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1db954]/20 hover:bg-[#1db954] border border-[#1db954]/40 text-emerald-200 hover:text-black text-[11px] font-semibold transition-colors"
                >
                  <span>Listen on Spotify</span>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#12141d] to-[#0a0c12] border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Mic className="w-24 h-24 text-white" />
              </div>
              <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-white/10 text-gray-200 mb-2 font-bold">
                Vocalist &amp; Mentor
              </span>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Singer Kaur Billo
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-3">
                Documenting live stage duets, studio vocal sessions at condenser mics, latest hits &quot;Guddiyan Patole&quot; &amp; &quot;Ki Dam Da Bharosa Yaar&quot;, plus joint devotional releases like &quot;Rusiya Kyu Ponahariyah&quot;.
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://youtu.be/vJXjt5Hynbg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/20 hover:bg-red-600 border border-red-500/40 text-red-200 hover:text-white text-[11px] font-semibold transition-colors"
                >
                  <span>Guddiyan Patole (YT)</span>
                </a>
                <a
                  href="https://youtu.be/jffklZKGg_U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/15 hover:bg-[#d4af37] border border-[#d4af37]/40 text-[#fef3c7] hover:text-black text-[11px] font-semibold transition-colors"
                >
                  <span>Ki Dam Da Bharosa Yaar (YT)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-8">
          {filterOptions.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                activeFilter === f.id
                  ? "bg-[#d4af37] text-black font-bold shadow-lg shadow-[#d4af37]/20"
                  : "bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10"
              }`}
            >
              {f.label} ({f.count})
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-[#12141c] border border-white/10 hover:border-[#d4af37]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#d4af37]/10"
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-black/40">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Gradient overlay & details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37] mb-1">
                  {item.subCategory.replace("-", " ").toUpperCase()}
                </span>
                <h4 className="font-serif text-sm font-bold text-white group-hover:text-[#fef3c7] transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-[11px] text-gray-400 line-clamp-1 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.description}
                </p>
              </div>

              {/* Badges */}
              <div className="absolute top-3 left-3">
                <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-black/70 backdrop-blur-md text-gray-300 border border-white/10">
                  #{item.originalFolder}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {/* Reusable Lightbox */}
      <ImageLightbox
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onSelect={(item) => setSelectedItem(item)}
      />
    </main>
  );
}
