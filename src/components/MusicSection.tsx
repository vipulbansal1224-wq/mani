"use client";

import React, { useState, useEffect, useRef } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Music, Play, Pause, Radio, Headphones, ArrowUpRight, Volume2, Disc, Sparkles, Heart } from "lucide-react";

export default function MusicSection() {
  const { musicRelease, profile } = PORTFOLIO_DATA;
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackTime, setPlaybackTime] = useState(45);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const melodyIntervalRef = useRef<number | null>(null);

  // Clean Web Audio API Punjabi acoustic/rhythm synthesizer for "Broken Heart" preview
  const togglePlay = () => {
    if (isPlaying) {
      if (melodyIntervalRef.current) clearInterval(melodyIntervalRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
      setIsPlaying(false);
      return;
    }

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // Sad romantic Punjabi melody scale (B minor / Dorian pentatonic feeling)
      const scale = [246.94, 293.66, 329.63, 369.99, 440.0, 493.88];
      let noteIndex = 0;

      const playMelodyNote = (freq: number) => {
        if (!ctx || ctx.state === "suspended") ctx.resume();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle"; // warm mellow tone
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.6);
      };

      const interval = window.setInterval(() => {
        const note = scale[noteIndex % scale.length];
        playMelodyNote(note);
        noteIndex++;
        setPlaybackTime((prev) => (prev >= 210 ? 0 : prev + 1));
      }, 400);

      melodyIntervalRef.current = interval;
      setIsPlaying(true);
    } catch {
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      if (melodyIntervalRef.current) clearInterval(melodyIntervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close().catch(() => {});
    };
  }, []);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <section id="music" className="py-24 border-b border-white/10 bg-[#07080c] relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#ff2a5f]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[11px] uppercase tracking-[0.25em] font-bold text-red-400 mb-3">
              <Disc className="w-3.5 h-3.5 animate-spin-vinyl" />
              <span>02 / Punjabi Sounds &amp; Releases</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
              Featured Single: <span className="text-punjabi-fire">"Broken Heart"</span>
            </h2>
          </div>
          <p className="text-gray-300 text-xs sm:text-sm max-w-md leading-relaxed">
            Mani Sandhu's breakthrough Punjabi musical release expressing raw heartbreak, passion, and soulful folk melody.
          </p>
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
                    isPlaying ? "animate-spin-vinyl shadow-red-500/30 shadow-2xl" : "animate-spin-vinyl-paused"
                  }`}
                  style={{
                    backgroundImage: `repeating-radial-gradient(circle, #1a1a1a 0, #1a1a1a 2px, #0d0d0d 3px, #0d0d0d 4px)`,
                  }}
                >
                  {/* Outer Gold/Red Rim */}
                  <div className="w-[92%] h-[92%] rounded-full border border-amber-500/30 flex items-center justify-center">
                    <div className="w-[80%] h-[80%] rounded-full border border-white/10 flex items-center justify-center">
                      {/* Center Vinyl Label with Mani Sandhu Photo */}
                      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#ff2a5f] shadow-inner">
                        <img
                          src={profile.profileImage}
                          alt="Broken Heart Center Label"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-black border-2 border-white/80"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Play Button Overlay */}
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#ff2a5f] hover:bg-[#ff1e56] text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all z-20 cursor-pointer"
                  title={isPlaying ? "Pause Preview" : "Play 'Broken Heart' Audio Preview"}
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7" />
                  ) : (
                    <Play className="w-7 h-7 fill-white ml-1" />
                  )}
                </button>
              </div>

              {/* Status Indicator */}
              <div className="mt-6 flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${isPlaying ? "bg-emerald-400 animate-pulse" : "bg-gray-600"}`}></span>
                <span className="text-xs font-mono uppercase tracking-wider text-gray-300">
                  {isPlaying ? "Playing Melodic Acoustic Preview" : "Vinyl Player Standby"}
                </span>
              </div>
            </div>

            {/* Right Column: Track Info, Equalizer & Streaming Links */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 fill-red-400" />
                    Punjabi Heartbreak Anthem
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                    Official Release
                  </span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-serif font-black text-white mb-2">
                  "Broken Heart"
                </h3>
                <div className="text-sm font-sans text-gray-400 mb-5">
                  Performed by <span className="text-white font-bold">Mani Sandhu</span> &bull; Released globally on Spotify &amp; JioSaavn
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-xl">
                  {musicRelease.description} A deeply emotional composition with heartfelt Punjabi lyrics narrating love and sorrow, delivered with authentic vocal passion.
                </p>

                {/* Emotional Lyrics Teaser Box */}
                <div className="p-4 rounded-2xl bg-black/50 border border-white/10 mb-6 relative">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#f59e0b] font-bold mb-1">
                    Lyrics Snippet &bull; ਬੋਲ
                  </div>
                  <div className="text-sm font-serif italic text-gray-200">
                    "ਦਿਲ ਟੁੱਟਿਆ ਤੇਰੇ ਜਾਣ ਮਗਰੋਂ... ਯਾਦਾਂ ਤੇਰੀਆਂ ਨੇ ਘੇਰ ਲਿਆ।"
                  </div>
                  <div className="text-[11px] text-gray-400 mt-1">
                    (When you left, my heart shattered... Only memories stay behind.)
                  </div>
                </div>

                {/* Live 32-Bar Soundwave Equalizer */}
                <div className="p-4 rounded-2xl bg-black/60 border border-white/10 mb-6">
                  <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-2">
                    <span className="text-[#ff2a5f] font-bold flex items-center gap-1">
                      <Volume2 className="w-3.5 h-3.5" />
                      Sound Waveform
                    </span>
                    <span>{formatTime(playbackTime)} / 03:30</span>
                  </div>

                  {/* Dancing Waveform Bars */}
                  <div className="flex items-end gap-1 h-10 w-full">
                    {[35, 60, 25, 80, 45, 95, 70, 40, 85, 55, 90, 75, 30, 85, 65, 45, 95, 70, 50, 80, 60, 35, 90, 75, 40, 65, 85, 50, 95, 70, 40, 60].map((h, idx) => {
                      const waveClass = idx % 4 === 0 ? "wave-bar-1" : idx % 4 === 1 ? "wave-bar-2" : idx % 4 === 2 ? "wave-bar-3" : "wave-bar-4";
                      return (
                        <span
                          key={idx}
                          className={`flex-1 rounded-full transition-all ${
                            isPlaying
                              ? `bg-gradient-to-t from-[#ff2a5f] via-[#ff6b35] to-[#f59e0b] ${waveClass}`
                              : "bg-white/20"
                          }`}
                          style={{ height: isPlaying ? "100%" : `${h}%` }}
                        ></span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Streaming Platforms */}
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-300 font-bold mb-3 flex items-center gap-2">
                  <span>Stream The Full Song On Official Apps:</span>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <a
                    href={profile.socials.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1db954] hover:bg-[#1aa34a] text-black font-black text-xs uppercase tracking-wider transition-all hover:scale-105 shadow-lg shadow-emerald-900/30"
                  >
                    <Music className="w-4 h-4" />
                    <span>Play on Spotify</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={profile.socials.jiosaavn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#00bfa5]/20 hover:bg-[#00bfa5] text-[#00bfa5] hover:text-black font-bold text-xs uppercase tracking-wider transition-all border border-[#00bfa5]/40 hover:scale-105"
                  >
                    <Radio className="w-4 h-4" />
                    <span>Play on JioSaavn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={profile.socials.wynk}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white font-bold text-xs uppercase tracking-wider transition-all border border-red-500/40 hover:scale-105"
                  >
                    <Headphones className="w-4 h-4" />
                    <span>Play on Wynk</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
