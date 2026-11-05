"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { YoutubeIcon, InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import { usePortfolio } from "@/context/PortfolioContext";
import {
  ArrowDown,
  Music,
  Play,
  Pause,
  Phone,
  MapPin,
  Sparkles,
  ArrowUpRight,
  Volume2,
  VolumeX,
  Award,
  Crown,
} from "lucide-react";

interface HeroProps {
  onOpenVideo?: (videoId: string, title: string) => void;
}

export default function Hero({ onOpenVideo }: HeroProps) {
  const { profile, activeSiteTrack, currentPlayingTrack, isPlaying, togglePlayTrack } = usePortfolio();
  const [isPlayingBeat, setIsPlayingBeat] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const beatIntervalRef = useRef<number | null>(null);

  const isCurrentActivePlaying = isPlaying && currentPlayingTrack?.id === activeSiteTrack?.id;

  const handleHeroAudioToggle = () => {
    if (activeSiteTrack) {
      togglePlayTrack(activeSiteTrack);
    } else {
      toggleBeat();
    }
  };

  // Web Audio API Punjabi rhythm synthesizer loop
  const toggleBeat = () => {
    if (isPlayingBeat) {
      if (beatIntervalRef.current) clearInterval(beatIntervalRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
      setIsPlayingBeat(false);
      return;
    }

    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      let step = 0;
      const chords = [220, 261.63, 329.63, 392];

      const playDrumHit = (freq: number, decay: number, gainVal: number) => {
        if (!ctx || ctx.state === "suspended") ctx.resume();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + decay);
        gain.gain.setValueAtTime(gainVal, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + decay);
        osc.start();
        osc.stop(ctx.currentTime + decay);
      };

      const playChordNote = (freq: number) => {
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      };

      const interval = window.setInterval(() => {
        if (!ctx) return;
        if (step % 4 === 0) playDrumHit(140, 0.22, 0.25);
        if (step % 4 === 2) playDrumHit(280, 0.12, 0.15);
        if (step % 2 === 0) {
          const note = chords[(step / 2) % chords.length];
          playChordNote(note);
        }
        step = (step + 1) % 16;
      }, 125);

      beatIntervalRef.current = interval;
      setIsPlayingBeat(true);
    } catch {
      setIsPlayingBeat(true);
    }
  };

  useEffect(() => {
    return () => {
      if (beatIntervalRef.current) clearInterval(beatIntervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close().catch(() => {});
    };
  }, []);

  return (
    <section className="relative min-h-[95vh] pt-32 pb-20 flex items-center justify-center border-b border-white/10 overflow-hidden">
      {/* Warm Gold Editorial Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#d4af37]/15 via-[#f59e0b]/5 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Credentials */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 w-fit mb-5 shadow-lg shadow-[#d4af37]/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"></span>
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] font-mono font-bold text-[#fef3c7]">
                Singer &bull; Producer &bull; Mani Sandhu Media House
              </span>
              <Crown className="w-3.5 h-3.5 text-[#d4af37] ml-0.5" />
            </div>

            {/* Main Name Heading */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-black tracking-tight text-white leading-[1.02] mb-3">
              {profile.name}
            </h1>

            {/* Punjabi Script & Location */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#fef3c7]">
                {profile.punjabiName}
              </span>
              <span className="text-xs uppercase font-mono tracking-widest px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300">
                {profile.location}
              </span>
            </div>

            {/* Credential Story */}
            <p className="text-sm sm:text-base text-gray-300 max-w-xl font-normal leading-relaxed mb-6">
              {profile.bioShort}
            </p>

            {/* Live Audio Beat & Track Showcase Strip */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#12141c] border border-white/10 max-w-xl mb-8 relative overflow-hidden shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <button
                    onClick={handleHeroAudioToggle}
                    className={`relative w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isCurrentActivePlaying || isPlayingBeat
                        ? "shadow-lg shadow-[#d4af37]/40 scale-105"
                        : "hover:scale-105"
                    } bg-gradient-to-tr from-[#d4af37] to-[#f59e0b] text-black p-0.5 cursor-pointer`}
                    title={isCurrentActivePlaying ? "Pause Audio" : "Play Featured Track"}
                  >
                    <div className="w-full h-full rounded-full bg-[#0a0c14] flex items-center justify-center">
                      {isCurrentActivePlaying || isPlayingBeat ? (
                        <Pause className="w-5 h-5 text-[#d4af37]" />
                      ) : (
                        <Play className="w-5 h-5 text-[#d4af37] fill-[#d4af37] ml-0.5" />
                      )}
                    </div>
                  </button>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#d4af37]">
                        {isCurrentActivePlaying ? "Playing Live" : "Featured Release"}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    </div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>&quot;{activeSiteTrack?.title || "Broken Heart"}&quot; &bull; {activeSiteTrack?.artist || "Mani Sandhu"}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="https://youtube.com/@ManiSandhuOfficial786"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-bold flex items-center gap-1 transition-transform hover:scale-105"
                  >
                    <YoutubeIcon className="w-3.5 h-3.5" />
                    <span>YouTube</span>
                  </a>
                  <Link
                    href="/music"
                    className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 text-xs font-medium transition-colors"
                  >
                    <span>All Songs</span>
                  </Link>
                </div>
              </div>

              {/* Soundwave Visualizer */}
              <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between gap-3">
                <div className="flex items-end gap-1 flex-1 h-5">
                  {[20, 45, 75, 30, 95, 60, 40, 85, 50, 70, 90, 35, 80, 55, 65, 90, 40, 75, 50, 85, 30, 60, 95, 40].map(
                    (baseHeight, idx) => (
                      <span
                        key={idx}
                        className={`flex-1 rounded-full transition-all ${
                          isPlayingBeat
                            ? "bg-gradient-to-t from-[#d4af37] to-[#f59e0b]"
                            : "bg-white/15"
                        }`}
                        style={{ height: isPlayingBeat ? "100%" : `${baseHeight}%` }}
                      ></span>
                    )
                  )}
                </div>
                <button
                  onClick={toggleBeat}
                  className="flex items-center gap-1 text-[11px] font-mono text-gray-400 hover:text-white transition-colors cursor-pointer shrink-0"
                >
                  {isPlayingBeat ? (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
                      <span className="text-[#d4af37]">Audio ON</span>
                    </>
                  ) : (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-gray-500" />
                      <span>Preview groove</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* CTA Navigation Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/legends"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b38f2a] text-black font-bold text-xs uppercase tracking-wider hover:shadow-xl hover:shadow-[#d4af37]/20 transition-all hover:scale-105"
              >
                <span>Legends Archive (54)</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="/shoots"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 font-semibold text-xs uppercase tracking-wider transition-all"
              >
                <span>Model Shoots (41)</span>
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 font-semibold text-xs uppercase tracking-wider transition-all"
              >
                <span>Solo Portfolio (68)</span>
              </Link>

              <a
                href="tel:+919872999854"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-[#d4af37] hover:text-black text-gray-200 border border-white/15 flex items-center justify-center transition-all"
                title="Call Mani Sandhu: +91 98729 99854"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Yellow Blazer Signature Portrait */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Backlight Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#d4af37] via-[#f59e0b] to-[#b38f2a] opacity-30 blur-2xl"></div>

              {/* Main Frame Container */}
              <div className="relative rounded-3xl overflow-hidden border border-[#d4af37]/30 bg-[#12141c] shadow-2xl p-2.5">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-black group">
                  <img
                    src="/images/portfolio/m2_064_portfolio_studio-fashion.jpeg"
                    alt="Mani Sandhu in mustard bespoke blazer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-widest text-[#d4af37] uppercase font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse"></span>
                    <span>Editorial Portrait &bull; 2026</span>
                  </div>

                  {/* Floating Music Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#d4af37]">
                    <Music className="w-5 h-5 animate-pulse" />
                  </div>

                  {/* Bottom Stage Details Banner */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-between">
                    <div>
                      <div className="text-white font-serif font-black text-lg">
                        Mani Sandhu
                      </div>
                      <div className="text-[11px] text-gray-300 font-medium">
                        Singer &bull; Media House Ludhiana
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                        Available
                      </div>
                      <div className="text-[11px] text-[#d4af37] font-mono font-semibold">
                        Shows &amp; PR
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Strip Underneath */}
              <div className="mt-3 px-4 py-3 rounded-xl bg-[#12141c] border border-white/10 flex items-center justify-between text-xs text-gray-300">
                <span className="flex items-center gap-2 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                  Ludhiana, Punjab &bull; London, UK
                </span>
                <span className="font-mono text-[#d4af37] font-semibold">
                  +91 98729 99854
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
