"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import { MUSIC_ITEMS, GalleryItem } from "@/data/gallery-data";
import { usePortfolio } from "@/context/PortfolioContext";
import { Music, Disc, Mic2, Play, Pause, Volume2, Sparkles, ExternalLink, Lock } from "lucide-react";

export default function MusicPage() {
  const { musicItems, musicTracks, currentPlayingTrack, isPlaying, togglePlayTrack } = usePortfolio();
  const displayItems = musicItems && musicItems.length > 0 ? musicItems : MUSIC_ITEMS;

  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filterOptions = [
    { id: "all", label: "All Music Assets", count: displayItems.length },
    {
      id: "posters",
      label: "Official Song Posters",
      count: displayItems.filter((i) => i.subCategory === "posters").length,
    },
    {
      id: "studio-recording",
      label: "Vocal Studio Booth",
      count: displayItems.filter((i) => i.subCategory === "studio-recording").length,
    },
    {
      id: "branding",
      label: "Label Branding",
      count: displayItems.filter((i) => i.subCategory === "branding").length,
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? displayItems
      : displayItems.filter((i) => i.subCategory === activeFilter);

  const discographyTracks = [
    {
      title: "Broken Heart",
      singers: "Mani Sandhu",
      label: "Mani Sandhu Records",
      role: "Singer • Director",
      views: "1.4M+ Views",
      year: "2024",
      highlight: "Breakout Hit Single",
    },
    {
      title: "MIRZA (Tribute)",
      singers: "Mani Sandhu",
      label: "Mani Sandhu Records",
      role: "Tribute to Ustad Surinder Shinda Ji",
      views: "Special Tribute",
      year: "2024",
      highlight: "With Maninder Shinda",
    },
    {
      title: "Guddi Ishqe Di",
      singers: "Surinder Shinda & Kaur Billo",
      label: "Jashan Recordz",
      role: "Promotions: Mani Sandhu",
      views: "Superhit Duet",
      year: "Golden Track",
      highlight: "Historic Folk Release",
    },
    {
      title: "Nakhrey Da Mull",
      singers: "Mani Sandhu UK",
      label: "H1Y Entertainment",
      role: "Singer • UK Special (Blessings Kaur Billo)",
      views: "New Year Program",
      year: "2024",
      highlight: "Mehak Punjab Di",
    },
    {
      title: "Payi Chall Dhakk",
      singers: "Mani Sandhu & Satta Singh",
      label: "Mani Sandhu Records & Satta Music",
      role: "Singer • Producer",
      views: "Viral Track",
      year: "2024",
      highlight: "Promotions Mani Sandhu",
    },
    {
      title: "Rusiya Kyu Ponahariyah",
      singers: "Mani Sandhu (Producer Kaur Billo)",
      label: "Mani Sandhu Records",
      role: "Singer",
      views: "Devotional Classic",
      year: "2024",
      highlight: "Project Honey Hardeep",
    },
    {
      title: "De De Dil",
      singers: "Mani Sandhu",
      label: "Ashwani Verma Records & Kaur Billo",
      role: "Singer",
      views: "Party Track",
      year: "2024",
      highlight: "Presents Kaur Billo",
    },
    {
      title: "Sanam Bewafa",
      singers: "Mani Sandhu ft. Simran Pathan",
      label: "Mani Sandhu Records",
      role: "Singer • Lead",
      views: "Romantic Ballad",
      year: "2024",
      highlight: "Blessings Kaur Billo",
    },
  ];

  return (
    <main className="min-h-screen bg-[#07080c] text-[#e5e7eb] flex flex-col relative selection:bg-[#d4af37]/40 selection:text-white">
      <Navbar />

      {/* Editorial Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-start gap-4 border-b border-white/10 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#fef3c7] text-xs font-mono uppercase tracking-widest">
            <Disc className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>[ 04 • MUSIC & DISCOGRAPHY ]</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl leading-tight">
            Official Song Releases &amp; <span className="italic font-normal text-[#d4af37]">Studio Sessions</span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            The full musical archive under Mani Sandhu Records and allied music labels. Explore the original high-resolution release posters, vocal recording sessions with high-end condenser microphones and pop filters, and the official discography catalogue.
          </p>

          {/* Interactive Discography Table */}
          <div className="w-full mt-4 bg-[#12141c]/80 rounded-2xl border border-white/10 overflow-hidden">
            <div className="px-6 py-4 bg-white/5 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#d4af37] font-bold flex items-center gap-2">
                <Music className="w-4 h-4" /> Live Music Player &amp; Audio Library
              </span>
              <div className="flex items-center gap-3">
                <Link
                  href="/music-panel"
                  className="px-3 py-1 rounded-lg bg-[#d4af37]/20 hover:bg-[#d4af37]/30 border border-[#d4af37]/40 text-[#fef3c7] text-xs font-bold font-mono uppercase flex items-center gap-1.5 transition-colors"
                >
                  <Lock className="w-3 h-3 text-[#d4af37]" />
                  <span>Upload MP3 (alto7528) &rarr;</span>
                </Link>
                <span className="text-xs text-gray-400 font-mono">
                  {musicTracks.length} Playable Tracks
                </span>
              </div>
            </div>

            <div className="divide-y divide-white/5">
              {musicTracks.map((track, idx) => {
                const isCurrent = currentPlayingTrack?.id === track.id;
                const isCurrentPlaying = isCurrent && isPlaying;

                return (
                  <div
                    key={track.id}
                    className={`px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors ${
                      isCurrentPlaying ? "bg-[#d4af37]/10" : "hover:bg-white/[0.03]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => togglePlayTrack(track)}
                        className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                          isCurrentPlaying
                            ? "bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/30 scale-105"
                            : "bg-white/10 text-white hover:bg-[#d4af37] hover:text-black"
                        }`}
                        title={isCurrentPlaying ? "Pause song" : "Play song"}
                      >
                        {isCurrentPlaying ? (
                          <Pause className="w-4 h-4 fill-current" />
                        ) : (
                          <Play className="w-4 h-4 fill-current ml-0.5" />
                        )}
                      </button>

                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-serif text-base font-bold text-white">
                            {track.title}
                          </h4>
                          {track.isActiveForSite && (
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#d4af37] text-black font-extrabold uppercase">
                              Active Theme
                            </span>
                          )}
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-gray-300">
                            {track.category}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400">
                          {track.artist} &bull; {track.year}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-gray-400 sm:text-right">
                      <span>{track.duration || "Official"}</span>
                      <button
                        onClick={() => togglePlayTrack(track)}
                        className="text-[#d4af37] hover:underline font-semibold"
                      >
                        {isCurrentPlaying ? "Playing..." : "Play Song &rarr;"}
                      </button>
                    </div>
                  </div>
                );
              })}
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
