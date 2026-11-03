"use client";

import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Tag, Download, ExternalLink } from "lucide-react";
import { GalleryItem } from "@/data/gallery-data";

interface ImageLightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export default function ImageLightbox({
  item,
  items,
  onClose,
  onSelect,
}: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    if (item) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [item, items]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-8 animate-in fade-in duration-200">
      {/* Top action bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#fef3c7] text-xs font-mono uppercase tracking-wider font-semibold">
            {item.category.toUpperCase()} • {currentIndex + 1} / {items.length}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={item.src}
            download
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            title="Download high-resolution image"
          >
            <Download className="w-5 h-5" />
          </a>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-500/80 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Prev / Next navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/60 hover:bg-[#d4af37] text-white hover:text-black border border-white/10 flex items-center justify-center transition-all"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/60 hover:bg-[#d4af37] text-white hover:text-black border border-white/10 flex items-center justify-center transition-all"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content wrapper */}
      <div className="max-w-6xl w-full max-h-[90vh] flex flex-col lg:flex-row gap-6 items-center justify-center">
        {/* Image Display */}
        <div className="relative flex-1 max-h-[75vh] lg:max-h-[85vh] flex items-center justify-center overflow-hidden rounded-xl bg-black/50 border border-white/10 shadow-2xl">
          <img
            src={item.src}
            alt={item.title}
            className="max-w-full max-h-[75vh] lg:max-h-[85vh] object-contain select-none"
          />
        </div>

        {/* Sidebar Info */}
        <div className="w-full lg:w-80 flex flex-col justify-between p-4 bg-[#12141c]/90 rounded-xl border border-white/10 max-h-[85vh] overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#d4af37]">
                Official Archive
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-[10px] uppercase font-mono text-gray-400">
                {item.originalFolder}
              </span>
            </div>

            <h3 className="font-serif text-xl font-bold text-white mb-2 leading-snug">
              {item.title}
            </h3>

            <p className="text-xs text-gray-300 leading-relaxed mb-4">
              {item.description}
            </p>

            {item.tags && item.tags.length > 0 && (
              <div className="mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block mb-1.5 flex items-center gap-1">
                  <Tag className="w-3 h-3 text-[#d4af37]" /> Tags
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] bg-white/5 border border-white/10 text-gray-300 font-mono"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
            <span>Mani Sandhu Media House</span>
            <span className="text-[#d4af37]">Ludhiana &bull; UK</span>
          </div>
        </div>
      </div>
    </div>
  );
}
