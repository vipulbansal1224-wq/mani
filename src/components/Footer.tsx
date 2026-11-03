"use client";

import React from "react";
import Link from "next/link";
import { YoutubeIcon, InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import { ArrowUp, Music, Phone, MapPin, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050609] text-gray-400 pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Ambient footer glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-gradient-to-t from-[#d4af37]/10 via-[#f59e0b]/5 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Massive Typographic Wordmark */}
        <div className="pb-14 border-b border-white/10">
          <div className="text-4xl sm:text-7xl lg:text-9xl font-serif font-black tracking-tight text-white/[0.08] hover:text-white/[0.16] transition-colors select-none text-center lg:text-left leading-none uppercase">
            Mani Sandhu
          </div>
        </div>

        {/* Links & Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-white/10">
          {/* Col 1: Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-[#d4af37] to-[#f59e0b] blur-xs"></div>
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-black p-0.5 bg-black">
                  <img
                    src="/images/portfolio/m2_064_portfolio_studio-fashion.jpeg"
                    alt="Mani Sandhu"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="font-serif font-black text-white text-base">Mani Sandhu</div>
                <div className="text-[10px] uppercase tracking-widest text-[#d4af37] font-bold">
                  Media House &bull; Ludhiana (PB) &bull; UK
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed max-w-sm">
              Punjabi Singer (&quot;Broken Heart&quot;, &quot;Mirza&quot;, &quot;Nakhrey Da Mull&quot;, &quot;Payi Chall Dhakk&quot;), Producer, Actor, Model, and Director. Collaborated with legendary Ustad Surinder Shinda Ji and Singer Kaur Billo.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://youtube.com/@ManiSandhuOfficial786"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-red-600 hover:text-white flex items-center justify-center transition-all text-gray-300 shadow-md"
                aria-label="YouTube Channel"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919872999854"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#25D366] hover:text-black flex items-center justify-center transition-all text-gray-300 shadow-md"
                aria-label="WhatsApp Contact"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-pink-600 hover:text-white flex items-center justify-center transition-all text-gray-300 shadow-md"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Gallery Pages */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs uppercase font-bold tracking-widest text-white">
              Dedicated Galleries
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/legends"
                  className="hover:text-[#d4af37] transition-colors flex items-center justify-between"
                >
                  <span>Surinder Shinda &amp; Kaur Billo (Legends)</span>
                  <span className="text-[10px] font-mono text-[#d4af37]">54 Pics</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/shoots"
                  className="hover:text-[#d4af37] transition-colors flex items-center justify-between"
                >
                  <span>Music Video Shoots &amp; Models</span>
                  <span className="text-[10px] font-mono text-[#d4af37]">41 Pics</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-[#d4af37] transition-colors flex items-center justify-between"
                >
                  <span>Solo Fashion &amp; London Tour Series</span>
                  <span className="text-[10px] font-mono text-[#d4af37]">68 Pics</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/music"
                  className="hover:text-[#d4af37] transition-colors flex items-center justify-between"
                >
                  <span>Official Song Posters &amp; Discography</span>
                  <span className="text-[10px] font-mono text-[#d4af37]">20 Tracks</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/bts"
                  className="hover:text-[#d4af37] transition-colors flex items-center justify-between"
                >
                  <span>Behind The Scenes &amp; Film Crews</span>
                  <span className="text-[10px] font-mono text-[#d4af37]">17 Sets</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Booking */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase font-bold tracking-widest text-white">
              Studio &amp; Inquiries
            </div>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <a href="tel:+919872999854" className="hover:text-white">
                  +91 98729 99854
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <a href="tel:+919478839486" className="hover:text-white">
                  +91 94788 39486
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span>Ludhiana, Punjab, India &bull; UK</span>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-block px-3.5 py-1.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#fef3c7] hover:bg-[#d4af37] hover:text-black font-semibold text-[11px] transition-all"
                >
                  Book Artist / Shoot &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <div>
            &copy; 2026 Mani Sandhu Media House &bull; All Rights Reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
