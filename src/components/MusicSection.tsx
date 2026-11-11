"use client";

import React from "react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { usePortfolio } from "@/context/PortfolioContext";
import { extractSpotifyTrackId, extractYouTubeId } from "@/utils/media-links";
import {
  Music,
  Play,
  Pause,
  Headphones,
  ArrowUpRight,
  Volume2,
  Disc,
  Heart,
  Lock,
} from "lucide-react";
import { YoutubeIcon } from "@/components/Icons";

export default function MusicSection() {
  const { musicRelease } = PORTFOLIO_DATA;
  const {
    profile,
    activeSiteTrack,
    currentPlayingTrack,
    isPlaying: isGlobalPlaying,
    togglePlayTrack,
    playTrack,
    resolveCoverUrl,
    currentTimeFormatted,
    durationFormatted,
  } = usePortfolio();

  const currentTrack = activeSiteTrack || {
    id: "track-1",
    title: "Mirza (Tribute to Ustad Surinder Shinda Ji)",
    artist: "Mani Sandhu",
    category: "Featured Single • Tribute",
    year: "2024",
    audioSrc: "https://p.scdn.co/mp3-preview/c07c47027dc750698b4583698a8e577423056bfe",
    youtubeUrl: "https://youtu.be/yccf8_b0K_c",
    spotifyUrl: "https://open.spotify.com/track/191LuVev3fckmIVgAOr77l?si=VTh_fLOPSDe7EragP3Mbbg&utm_source=copy-link",
    wynkUrl: "https://open.wynk.in/HAr66OrnELb",
    coverSrc: "https://i.ytimg.com/vi/yccf8_b0K_c/maxresdefault.jpg",
    duration: "2:45",
  };

  const isCurrentPlaying = isGlobalPlaying && currentPlayingTrack?.id === currentTrack.id;
  const coverUrl = resolveCoverUrl(currentTrack.coverSrc);

  const trackSpotifyUrl = currentTrack.spotifyUrl || profile.socials.spotify || musicRelease.spotifyUrl;
  const trackYoutubeUrl = currentTrack.youtubeUrl || musicRelease.youtubeUrl;
  const trackWynkUrl = currentTrack.wynkUrl || profile.socials.wynk || musicRelease.wynkUrl;
  const spotifyTrackId = extractSpotifyTrackId(trackSpotifyUrl);
  const youtubeVideoId = extractYouTubeId(trackYoutubeUrl);

  const handlePlayToggle = () => {
    togglePlayTrack(currentTrack);
  };

  return (
    <section id="music" className="py-24 border-b border-white/10 bg-[#07080c] relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[11px] uppercase font-mono tracking-widest text-[#fef3c7] mb-3">
              <Disc className="w-3.5 h-3.5 text-[#d4af37] animate-spin-vinyl" />
              <span>[ 04 • MANI SANDHU RECORDS &amp; RELEASES ]</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
              Featured Single: <span className="text-punjabi-fire">&quot;{currentTrack.title}&quot;</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
            <p className="text-gray-300 text-xs sm:text-sm max-w-md leading-relaxed md:text-right">
              Stream the latest releases from Mani Sandhu Records across Spotify, YouTube, and Wynk Music.
            </p>
            <Link
              href="/music-panel"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#fef3c7] text-xs font-mono font-bold hover:bg-[#d4af37]/30 transition-colors"
            >
              <Lock className="w-3 h-3 text-[#d4af37]" />
              <span>Upload / Manage Songs &rarr;</span>
            </Link>
          </div>
        </div>

        {/* Deluxe Stage Player Card */}
        <div className="rounded-3xl bg-[#0e111a] border border-white/10 p-6 sm:p-10 relative overflow-hidden stage-card shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Interactive Vinyl & Album Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72">
                {/* Vinyl Record Behind with Grooves */}
                <div
                  className={`absolute inset-0 rounded-full bg-[#111] border-4 border-[#222] shadow-2xl flex items-center justify-center transition-all ${
                    isCurrentPlaying
                      ? "animate-spin-vinyl shadow-[#d4af37]/25 shadow-2xl"
                      : "animate-spin-vinyl-paused"
                  }`}
                  style={{
                    backgroundImage: `repeating-radial-gradient(circle, #1a1a1a 0, #1a1a1a 2px, #0d0d0d 3px, #0d0d0d 4px)`,
                  }}
                >
                  {/* Outer Gold/Amber Rim */}
                  <div className="w-[92%] h-[92%] rounded-full border border-amber-500/30 flex items-center justify-center">
                    <div className="w-[80%] h-[80%] rounded-full border border-white/10 flex items-center justify-center">
                      {/* Center Vinyl Label */}
                      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#d4af37] shadow-inner">
                        <img
                          src={coverUrl}
                          alt={currentTrack.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-black border-2 border-[#d4af37]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Play Button Overlay */}
                <button
                  onClick={handlePlayToggle}
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-gradient-to-tr from-[#d4af37] to-[#f59e0b] hover:from-[#fef08a] hover:to-[#d4af37] text-black flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all z-20 cursor-pointer shadow-[#d4af37]/30"
                  title={isCurrentPlaying ? "Pause Audio" : `Play '${currentTrack.title}'`}
                >
                  {isCurrentPlaying ? (
                    <Pause className="w-7 h-7 text-black fill-black" />
                  ) : (
                    <Play className="w-7 h-7 fill-black text-black ml-1" />
                  )}
                </button>
              </div>

              {/* Status Indicator */}
              <div className="mt-6 flex items-center gap-2">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    isCurrentPlaying ? "bg-emerald-400 animate-pulse" : "bg-gray-600"
                  }`}
                ></span>
                <span className="text-xs font-mono uppercase tracking-wider text-gray-300">
                  {isCurrentPlaying ? "Playing Track Stream" : "Tap Play For Live Audio"}
                </span>
              </div>

              {/* Embedded Spotify Track Bar for Seamless Listening */}
              {spotifyTrackId && (
                <div className="mt-6 w-full max-w-xs rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                  <iframe
                    src={`https://open.spotify.com/embed/track/${spotifyTrackId}?utm_source=generator&theme=0`}
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="Spotify Track Embed"
                  />
                </div>
              )}
            </div>

            {/* Right Column: Track Info, Equalizer & Streaming Links */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#fef3c7] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
                    {currentTrack.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                    {currentTrack.year} Release
                  </span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-serif font-black text-white mb-2">
                  &quot;{currentTrack.title}&quot;
                </h3>
                <div className="text-sm font-sans text-gray-400 mb-5">
                  Performed by <span className="text-white font-bold">{currentTrack.artist}</span> &bull; Mani Sandhu Records
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-xl">
                  {musicRelease.description}
                </p>

                {/* Tribute Teaser Box */}
                <div className="p-4 rounded-2xl bg-black/50 border border-white/10 mb-6 relative">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#f59e0b] font-bold mb-1">
                    Folk Tribute &bull; ਸ਼੍ਰੋਮਣੀ ਗਾਇਕ ਉਸਤਾਦ ਸੁਰਿੰਦਰ ਸ਼ਿੰਦਾ ਜੀ
                  </div>
                  <div className="text-sm font-serif italic text-gray-200">
                    &quot;ਉਸਤਾਦ ਸੁਰਿੰਦਰ ਸ਼ਿੰਦਾ ਜੀ ਦੀ ਅਮਰ ਵਿਰਾਸਤ ਨੂੰ ਸਮਰਪਿਤ — ਮਿਰਜ਼ਾ।&quot;
                  </div>
                  <div className="text-[11px] text-gray-400 mt-1">
                    Music: Davinder Kainth &bull; Producer: Kaur Billo &bull; Project: Honey Hardeep
                  </div>
                </div>

                {/* Live Soundwave Equalizer */}
                <div className="p-4 rounded-2xl bg-black/60 border border-white/10 mb-6">
                  <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-2">
                    <span className="text-[#d4af37] font-bold flex items-center gap-1">
                      <Volume2 className="w-3.5 h-3.5" />
                      Live Audio Progress
                    </span>
                    <span>
                      {currentTimeFormatted} / {durationFormatted !== "0:00" ? durationFormatted : currentTrack.duration || "2:45"}
                    </span>
                  </div>

                  {/* Dancing Waveform Bars */}
                  <div className="flex items-end gap-1 h-10 w-full">
                    {[
                      35, 60, 25, 80, 45, 95, 70, 40, 85, 55, 90, 75, 30, 85, 65, 45, 95, 70, 50,
                      80, 60, 35, 90, 75, 40, 65, 85, 50, 95, 70, 40, 60,
                    ].map((h, idx) => {
                      const waveClass =
                        idx % 4 === 0
                          ? "wave-bar-1"
                          : idx % 4 === 1
                            ? "wave-bar-2"
                            : idx % 4 === 2
                              ? "wave-bar-3"
                              : "wave-bar-4";
                      return (
                        <span
                          key={idx}
                          className={`flex-1 rounded-full transition-all ${
                            isCurrentPlaying
                              ? `bg-gradient-to-t from-[#d4af37] via-[#f59e0b] to-[#fef08a] ${waveClass}`
                              : "bg-white/20"
                          }`}
                          style={{ height: isCurrentPlaying ? "100%" : `${h}%` }}
                        ></span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Streaming Platforms */}
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-300 font-bold mb-3 flex items-center gap-2">
                  <span>Stream Full Song &amp; Watch Video:</span>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={trackSpotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1db954] hover:bg-[#1aa34a] text-black font-black text-xs uppercase tracking-wider transition-all hover:scale-105 shadow-lg shadow-emerald-900/30"
                  >
                    <Music className="w-4 h-4" />
                    <span>Play on Spotify</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  {youtubeVideoId ? (
                    <button
                      onClick={() =>
                        playTrack({
                          ...currentTrack,
                          audioSrc: `https://youtu.be/${youtubeVideoId}`,
                        })
                      }
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 shadow-lg shadow-red-600/30 cursor-pointer"
                    >
                      <YoutubeIcon className="w-4 h-4" />
                      <span>Play Video Here</span>
                    </button>
                  ) : null}

                  <a
                    href={trackYoutubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider transition-all border border-white/15 hover:scale-105"
                  >
                    <YoutubeIcon className="w-4 h-4" />
                    <span>YouTube</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  {trackWynkUrl && (
                    <a
                      href={trackWynkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber-500/20 hover:bg-amber-500 text-amber-200 hover:text-black font-bold text-xs uppercase tracking-wider transition-all border border-amber-500/40 hover:scale-105"
                    >
                      <Headphones className="w-4 h-4" />
                      <span>Wynk Music</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
