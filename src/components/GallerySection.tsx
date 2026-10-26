"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, GalleryItem } from "@/data/portfolio-data";
import { Camera, X, Maximize2, Sparkles } from "lucide-react";

export default function GallerySection() {
  const { gallery } = PORTFOLIO_DATA;
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filters = [
    { key: "all", label: "All Photos" },
    { key: "youtube-cover", label: "YouTube Cover" },
    { key: "profile", label: "Profile Stills" },
    { key: "shoots", label: "Media House" },
  ];

  const filteredPhotos =
    activeFilter === "all"
      ? gallery
      : gallery.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="relative py-24 bg-[#08090d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Official Media Photos</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              Photo <span className="text-gold-gradient">Gallery</span>
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === f.key
                    ? "bg-amber-500 text-black shadow-md shadow-amber-500/25"
                    : "bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredPhotos.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 aspect-16/9 cursor-pointer bg-black"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>

              {/* Hover icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-white font-bold text-base mb-1">{item.title}</h4>
                <p className="text-gray-300 text-xs line-clamp-2">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden glass-panel border border-white/20 shadow-2xl p-3"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[70vh] rounded-2xl overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain max-h-[70vh]"
                />
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-xl font-bold text-white mb-2">{selectedPhoto.title}</h3>
                <p className="text-sm text-gray-300">{selectedPhoto.caption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
