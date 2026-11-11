"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import VideoModal from "@/components/VideoModal";
import { MUSIC_ITEMS, GalleryItem } from "@/data/gallery-data";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { usePortfolio } from "@/context/PortfolioContext";
import { YoutubeIcon } from "@/components/Icons";
import {
  Music,
  Disc,
  Play,
  Pause,
  ExternalLink,
  Lock,
  ArrowUpRight,
} from "lucide-react";

export default function MusicPage() {
  const {
    musicItems,
    musicTracks,
    currentPlayingTrack,
    isPlaying,
    togglePlayTrack,
    resolveCoverUrl,
    profile,
  } = usePortfolio();
  const displayItems = musicItems && musicItems.length > 0 ? musicItems : MUSIC_ITEMS;

  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [videoModal, setVideoModal] = useState<{
    isOpen: boolean;
    videoId: string;
    title: string;
  }>({
    isOpen: false,
    videoId: "",
    title: "",
  });

  const musicVideos = PORTFOLIO_DATA.videos.filter((v) => v.category === "music");

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

  return (
    <main className="min-h-screen bg-[#07080c] text-[#e5e7eb] flex flex-col relative selection:bg-[#d4af37]/40 selection:text-white">
      <Navbar />

      {/* Editorial Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-start gap-4 border-b border-white/10 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#fef3c7] text-xs font-mono uppercase tracking-widest">
            <Disc className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>[ 04 • MANI SANDHU RECORDS &amp; DISCOGRAPHY ]</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl leading-tight">
            Official Song Releases &amp; <span className="italic font-normal text-[#d4af37]">Video Catalogue</span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            Explore the full musical archive under Mani Sandhu Records — featuring{" "}
            <strong className="text-white">&quot;Mirza&quot;</strong> (Dedicated to Ustad Surinder Shinda Ji),{" "}
            <strong className="text-white">&quot;Guddiyan Patole&quot;</strong>,{" "}
            <strong className="text-white">&quot;Ki Dam Da Bharosa Yaar&quot;</strong>, and{" "}
            <strong className="text-white">&quot;Shiv Shiv Shambhu&quot;</strong> alongside studio booth sessions and original release posters.
          </p>

          {/* Featured Spotify + Official Channel Strip */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 mt-2 items-center bg-[#12141c]/90 border border-[#d4af37]/30 rounded-2xl p-5">
            <div className="lg:col-span-5 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#1db954] font-bold block">
                Featured On Spotify
              </span>
              <h3 className="font-serif text-2xl font-black text-white">
                Mirza &bull; Mani Sandhu
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Dedicated to the late Shromani Gayak Ustad Surinder Shinda Ji. Producer Kaur Billo &bull; Music Davinder Kainth.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href={profile.socials.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1db954] hover:bg-[#1aa34a] text-black font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <Music className="w-3.5 h-3.5" />
                  <span>Open Spotify</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.youtube.com/@manisandhurecords"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white border border-red-500/40 font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <YoutubeIcon className="w-3.5 h-3.5" />
                  <span>@manisandhurecords</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-xl overflow-hidden border border-white/10 bg-black">
                <iframe
                  src="https://open.spotify.com/embed/track/191LuVev3fckmIVgAOr77l?utm_source=generator&theme=0"
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Spotify Mirza Mani Sandhu"
                />
              </div>
            </div>
          </div>

          {/* Interactive Discography Player Table */}
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
                  <span>Upload / Manage Songs &rarr;</span>
                </Link>
                <span className="text-xs text-gray-400 font-mono">
                  {musicTracks.length} Playable Tracks
                </span>
              </div>
            </div>

            <div className="divide-y divide-white/5">
              {musicTracks.map((track) => {
                const isCurrent = currentPlayingTrack?.id === track.id;
                const isCurrentPlaying = isCurrent && isPlaying;
                const cover = resolveCoverUrl(track.coverSrc);

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
                        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform cursor-pointer ${
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

                      <img
                        src={cover}
                        alt={track.title}
                        className="w-11 h-11 rounded-lg object-cover border border-white/10 shrink-0 hidden sm:block"
                      />

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-serif text-base font-bold text-white">
                            {track.title}
                          </h4>
                          {track.isActiveForSite && (
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#d4af37] text-black font-extrabold uppercase">
                              Featured Theme
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

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-400 sm:text-right">
                      {track.youtubeUrl && (
                        <a
                          href={track.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-600/15 hover:bg-red-600 text-red-300 hover:text-white transition-colors"
                        >
                          <YoutubeIcon className="w-3 h-3" />
                          <span>YouTube</span>
                        </a>
                      )}
                      {track.spotifyUrl && (
                        <a
                          href={track.spotifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1db954]/15 hover:bg-[#1db954] text-emerald-300 hover:text-black transition-colors"
                        >
                          <Music className="w-3 h-3" />
                          <span>Spotify</span>
                        </a>
                      )}
                      <span>{track.duration || "Official"}</span>
                      <button
                        onClick={() => togglePlayTrack(track)}
                        className="text-[#d4af37] hover:underline font-semibold cursor-pointer"
                      >
                        {isCurrentPlaying ? "Playing..." : "Play Song →"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Official YouTube Music Videos Grid */}
          <div className="w-full pt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-black text-white">
                Official YouTube <span className="text-[#d4af37] italic font-normal">Music Videos</span>
              </h2>
              <a
                href="https://www.youtube.com/@manisandhurecords"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-red-400 hover:text-white flex items-center gap-1"
              >
                <span>All Videos on YouTube</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {musicVideos.map((vid) => (
                <div
                  key={vid.id}
                  className="group rounded-2xl overflow-hidden bg-[#12141c] border border-white/10 hover:border-[#d4af37]/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div
                      onClick={() =>
                        setVideoModal({
                          isOpen: true,
                          videoId: vid.youtubeId || vid.youtubeUrl,
                          title: vid.title,
                        })
                      }
                      className="relative aspect-video bg-black overflow-hidden cursor-pointer"
                    >
                      <img
                        src={vid.thumbnail}
                        alt={vid.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                        <div className="w-11 h-11 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 fill-white ml-0.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-white">
                        {vid.duration}
                      </span>
                    </div>
                    <div className="p-4">
                      <span className="text-[10px] font-mono text-[#d4af37] uppercase tracking-wider block mb-1">
                        {vid.categoryLabel}
                      </span>
                      <h3 className="font-serif text-sm font-bold text-white line-clamp-2">
                        {vid.title}
                      </h3>
                    </div>
                  </div>
                  <div className="px-4 pb-4 pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                    <button
                      onClick={() =>
                        setVideoModal({
                          isOpen: true,
                          videoId: vid.youtubeId || vid.youtubeUrl,
                          title: vid.title,
                        })
                      }
                      className="text-[#d4af37] font-bold hover:underline cursor-pointer"
                    >
                      Watch Video
                    </button>
                    <a
                      href={vid.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white flex items-center gap-1"
                    >
                      <YoutubeIcon className="w-3.5 h-3.5 text-red-500" />
                      <span>YouTube</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-8">
          {filterOptions.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all cursor-pointer ${
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

      {/* YouTube Video Modal */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={() => setVideoModal((prev) => ({ ...prev, isOpen: false }))}
        videoId={videoModal.videoId}
        title={videoModal.title}
      />
    </main>
  );
}
