"use client";

import React, { useState, useEffect, useRef } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { YoutubeIcon, InstagramIcon } from "@/components/Icons";
import { ArrowDown, Music, Play, Pause, Phone, MapPin, Sparkles, ArrowUpRight, Volume2, VolumeX, Flame } from "lucide-react";

interface HeroProps {
  onOpenVideo: (videoId: string, title: string) => void;
}

export default function Hero({ onOpenVideo }: HeroProps) {
  const { profile, musicRelease } = PORTFOLIO_DATA;
  const [isPlayingBeat, setIsPlayingBeat] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const beatIntervalRef = useRef<number | null>(null);

  // Clean Web Audio API Punjabi rhythm synthesizer loop
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
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      let step = 0;
      const chords = [220, 261.63, 329.63, 392]; // Am7 harmonic notes

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

      // 120 BPM 16-step Punjabi groove pulse
      const interval = window.setInterval(() => {
        if (!ctx) return;
        // Dhol kick on beat 0, 4, 8, 12
        if (step % 4 === 0) {
          playDrumHit(140, 0.22, 0.25);
        }
        // Snappy slap on 2, 6, 10, 14
        if (step % 4 === 2) {
          playDrumHit(280, 0.12, 0.15);
        }
        // Rhythmic harmonic accent
        if (step % 2 === 0) {
          const note = chords[(step / 2) % chords.length];
          playChordNote(note);
        }
        step = (step + 1) % 16;
      }, 125);

      beatIntervalRef.current = interval;
      setIsPlayingBeat(true);
    } catch {
      // AudioContext fallback
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
    <section className="relative min-h-[94vh] pt-32 pb-20 flex items-center justify-center border-b border-white/10 overflow-hidden">
      {/* Concert Spotlight Beam from top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#ff2a5f]/15 via-[#f59e0b]/5 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold High-Contrast Concert Editorial */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Live Artist Concert Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 w-fit mb-5 shadow-lg shadow-red-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff2a5f]"></span>
              </span>
              <span className="text-[11px] uppercase tracking-[0.22em] font-bold text-red-300">
                Live Concert &bull; Punjabi Vocals &bull; Media House
              </span>
              <Flame className="w-3.5 h-3.5 text-[#f59e0b] ml-0.5" />
            </div>

            {/* Main Name Heading */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-black tracking-tight text-white leading-[1.02] mb-3">
              Mani <span className="text-punjabi-fire">Sandhu</span>
            </h1>

            {/* Punjabi Script Subtitle with Amber Glow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-amber-gold">
                ਮਨੀ ਸੰਧੂ
              </span>
              <span className="text-xs uppercase font-mono tracking-widest px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-400">
                Voice of Punjab &bull; Ludhiana
              </span>
            </div>

            {/* Story Paragraph */}
            <p className="text-sm sm:text-base text-gray-300 max-w-xl font-normal leading-relaxed mb-7">
              Electrifying Punjabi singer of the hit track <span className="text-white font-semibold underline decoration-[#ff2a5f] underline-offset-4">"Broken Heart"</span>, creator of viral comedy skits, and host of premier artist promotional interviews at <span className="text-[#f59e0b] font-semibold">Mani Sandhu Media House</span>, Ludhiana.
            </p>

            {/* Live Audio Beat & Track Showcase Strip */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0f121d] border border-white/10 max-w-xl mb-8 relative overflow-hidden stage-card">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  {/* Rotating mini vinyl / beat trigger button */}
                  <button
                    onClick={toggleBeat}
                    className={`relative w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isPlayingBeat ? "animate-spin-vinyl shadow-lg shadow-red-500/40" : "hover:scale-105"
                    } bg-gradient-to-tr from-[#ff2a5f] to-[#f59e0b] text-white p-0.5 cursor-pointer`}
                    title={isPlayingBeat ? "Pause Beats" : "Play Live Beats Preview"}
                  >
                    <div className="w-full h-full rounded-full bg-[#0a0c14] flex items-center justify-center">
                      {isPlayingBeat ? (
                        <Pause className="w-5 h-5 text-[#ff2a5f]" />
                      ) : (
                        <Play className="w-5 h-5 text-[#f59e0b] fill-[#f59e0b] ml-0.5" />
                      )}
                    </div>
                  </button>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-red-400">
                        {isPlayingBeat ? "Live Punjabi Groove Playing" : "Official Single"}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    </div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>"Broken Heart" &bull; Mani Sandhu</span>
                    </div>
                  </div>
                </div>

                {/* Streaming links */}
                <div className="flex items-center gap-2">
                  <a
                    href={profile.socials.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-[#1db954] hover:bg-[#1aa34a] text-black text-xs font-bold flex items-center gap-1 transition-transform hover:scale-105"
                  >
                    <span>Spotify</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <a
                    href={profile.socials.jiosaavn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 text-xs font-medium transition-colors"
                  >
                    <span>JioSaavn</span>
                  </a>
                </div>
              </div>

              {/* Dynamic 24-Bar Soundwave Visualizer */}
              <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between gap-3">
                <div className="flex items-end gap-1 flex-1 h-6">
                  {[20, 45, 75, 30, 95, 60, 40, 85, 50, 70, 90, 35, 80, 55, 65, 90, 40, 75, 50, 85, 30, 60, 95, 40].map((baseHeight, idx) => {
                    const waveClass = idx % 4 === 0 ? "wave-bar-1" : idx % 4 === 1 ? "wave-bar-2" : idx % 4 === 2 ? "wave-bar-3" : "wave-bar-4";
                    return (
                      <span
                        key={idx}
                        className={`flex-1 rounded-full transition-all ${
                          isPlayingBeat ? `bg-gradient-to-t from-[#ff2a5f] to-[#f59e0b] ${waveClass}` : "bg-white/15"
                        }`}
                        style={{ height: isPlayingBeat ? "100%" : `${baseHeight}%` }}
                      ></span>
                    );
                  })}
                </div>
                <button
                  onClick={toggleBeat}
                  className="flex items-center gap-1 text-[11px] font-mono text-gray-400 hover:text-white transition-colors cursor-pointer shrink-0"
                >
                  {isPlayingBeat ? (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                      <span className="text-red-400">Audio ON</span>
                    </>
                  ) : (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-gray-500" />
                      <span>Click to preview beat</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Energetic High-Contrast CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#works"
                className="btn-fire inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all"
              >
                <span>Explore Works &amp; Songs</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="tel:9872999854"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-[#ff2a5f]/60 font-semibold text-xs uppercase tracking-wider transition-all group"
              >
                <Phone className="w-3.5 h-3.5 text-[#f59e0b] group-hover:scale-110 transition-transform" />
                <span>Call: 98729 99854</span>
              </a>

              <a
                href={profile.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-red-600/15 hover:bg-red-600 border border-red-500/30 text-red-400 hover:text-white flex items-center justify-center transition-all shadow-lg hover:shadow-red-500/40"
                aria-label="YouTube Channel"
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Stage-Lit High-Voltage Portrait */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Vibrant Backlight Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#ff2a5f] via-[#ff6b35] to-[#f59e0b] opacity-30 blur-xl"></div>

              {/* Main Frame Container */}
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#121520] shadow-2xl p-2.5">
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-black group">
                  <img
                    src={profile.profileImage}
                    alt="Mani Sandhu Official Portrait"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Stage Lighting Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                  {/* Top Concert Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-widest text-[#f59e0b] uppercase font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    <span>Artist Archive &bull; 2026</span>
                  </div>

                  {/* Floating Music Vinyl Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#ff2a5f]">
                    <Music className="w-5 h-5 animate-pulse" />
                  </div>

                  {/* Bottom Stage Details Banner */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-between">
                    <div>
                      <div className="text-white font-serif font-black text-lg">Mani Sandhu</div>
                      <div className="text-[11px] text-gray-300 font-medium">Singer &bull; Media House Ludhiana</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Available</div>
                      <div className="text-[11px] text-[#f59e0b] font-mono font-semibold">Shows &amp; PR</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage Location strip underneath */}
              <div className="mt-3 px-4 py-3 rounded-xl bg-[#0f121d] border border-white/10 flex items-center justify-between text-xs text-gray-300">
                <span className="flex items-center gap-2 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#ff2a5f]" />
                  Ludhiana, Punjab, India
                </span>
                <span className="font-mono text-[#f59e0b] font-semibold">@ManiSandhuOfficial786</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
