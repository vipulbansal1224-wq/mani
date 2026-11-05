"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import { BTS_ITEMS, GalleryItem } from "@/data/gallery-data";
import { usePortfolio } from "@/context/PortfolioContext";
import { Clapperboard, Sparkles, Video, Users } from "lucide-react";

export default function BtsPage() {
  const { btsItems } = usePortfolio();
  const displayItems = btsItems && btsItems.length > 0 ? btsItems : BTS_ITEMS;

  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filterOptions = [
    { id: "all", label: "All BTS Moments", count: displayItems.length },
    {
      id: "crew-sets",
      label: "Crew & Camera Sets",
      count: displayItems.filter((i) => i.subCategory === "crew-sets").length,
    },
    {
      id: "vanity-makeup",
      label: "Vanity & Styling",
      count: displayItems.filter((i) => i.subCategory === "vanity-makeup").length,
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
            <Clapperboard className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>[ 05 • BEHIND THE SCENES ]</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl leading-tight">
            Production Life &amp; <span className="italic font-normal text-[#d4af37]">Behind The Lens</span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            The sweat, craftsmanship, and camaraderie that goes into crafting every visual frame. Witness cinema camera rigs, lighting team setups, courtyard vanity grooming sessions, director monitor reviews, and ensemble wrap celebrations under sparkling fairy lights.
          </p>

          <div className="flex flex-wrap gap-3 mt-2">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300">
              <Users className="w-4 h-4 text-[#d4af37]" />
              <span>Full Production Crews &amp; Cast</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300">
              <Video className="w-4 h-4 text-[#d4af37]" />
              <span>Cinema Rigs, Rails &amp; Spotlights</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300">
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span>Vanity Grooming &amp; Styling Chairs</span>
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

      {/* Lightbox */}
      <ImageLightbox
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onSelect={(item) => setSelectedItem(item)}
      />
    </main>
  );
}
