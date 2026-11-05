"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import { PORTFOLIO_ITEMS, GalleryItem } from "@/data/gallery-data";
import { usePortfolio } from "@/context/PortfolioContext";
import { User, Plane, Crown, Sparkles, Award } from "lucide-react";

export default function PortfolioPage() {
  const { portfolioItems } = usePortfolio();
  const displayItems = portfolioItems && portfolioItems.length > 0 ? portfolioItems : PORTFOLIO_ITEMS;

  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filterOptions = [
    { id: "all", label: "All Portfolio", count: displayItems.length },
    {
      id: "studio-fashion",
      label: "Studio Fashion & Suits",
      count: displayItems.filter((i) => i.subCategory === "studio-fashion").length,
    },
    {
      id: "london-tour",
      label: "London & UK Tour",
      count: displayItems.filter((i) => i.subCategory === "london-tour").length,
    },
    {
      id: "traditional",
      label: "Traditional Heritage",
      count: displayItems.filter((i) => i.subCategory === "traditional").length,
    },
    {
      id: "fitness-lifestyle",
      label: "Fitness & Street",
      count: displayItems.filter((i) => i.subCategory === "fitness-lifestyle").length,
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
            <User className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>[ 03 • SOLO PORTFOLIO & TRAVEL ]</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl leading-tight">
            High-Fashion Editorial & <span className="italic font-normal text-[#d4af37]">London Series</span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            A comprehensive showcase of Mani Sandhu&apos;s distinct sartorial persona — spanning high-fashion studio sessions in tailored mustard yellow blazers and pinstripe power suits, rooted Punjabi heritage looks in traditional Dastar and Kurta Pajama, and an extensive international UK tour documented across London&apos;s iconic River Thames, Tower Bridge, Buckingham Palace, and Birmingham.
          </p>

          {/* Highlights Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mt-2">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] font-mono text-[#d4af37] uppercase tracking-wider block mb-1">
                Signature Style
              </span>
              <h4 className="text-sm font-bold text-white">Mustard Yellow Blazer</h4>
              <p className="text-xs text-gray-400 mt-1">
                Iconic tailored suit with silver chain accessories and bold modern attitude.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] font-mono text-[#d4af37] uppercase tracking-wider block mb-1">
                Global Tour
              </span>
              <h4 className="text-sm font-bold text-white">London &amp; UK Travel</h4>
              <p className="text-xs text-gray-400 mt-1">
                Tower Bridge, Buckingham Palace gates, and Birmingham Christmas market.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] font-mono text-[#d4af37] uppercase tracking-wider block mb-1">
                Cultural Roots
              </span>
              <h4 className="text-sm font-bold text-white">Punjabi Dastar &amp; Kurta</h4>
              <p className="text-xs text-gray-400 mt-1">
                Majestic royal blue and black traditional kurtas shot at heritage havelis.
              </p>
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
