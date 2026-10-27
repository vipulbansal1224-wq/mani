"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { YoutubeIcon, InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import { ArrowUp, Music, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050609] text-gray-400 pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Ambient footer glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-gradient-to-t from-[#ff2a5f]/10 via-[#f59e0b]/5 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Massive Typographic Wordmark with Concert Stage Atmosphere */}
        <div className="pb-16 border-b border-white/10">
          <div className="text-4xl sm:text-7xl lg:text-9xl font-serif font-black tracking-tight text-white/[0.08] hover:text-white/[0.18] transition-colors select-none text-center lg:text-left leading-none uppercase">
            Mani Sandhu
          </div>
        </div>

        {/* Links & Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-white/10">
          {/* Col 1: Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-[#ff2a5f] to-[#f59e0b] blur-xs"></div>
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-black p-0.5">
                  <img
                    src={profile.profileImage}
                    alt="Mani Sandhu"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="font-serif font-black text-white text-base">Mani Sandhu</div>
                <div className="text-[10px] uppercase tracking-widest text-[#f59e0b] font-bold">Media House &bull; Ludhiana (PB)</div>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed max-w-sm">
              Singer of Punjabi single "Broken Heart", content creator, actor, model, vlogger, and media promoter based in Ludhiana, Punjab.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile.socials.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#1db954] hover:text-black flex items-center justify-center transition-all text-gray-300 shadow-md"
                aria-label="Spotify"
              >
                <Music className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-red-600 hover:text-white flex items-center justify-center transition-all text-gray-300 shadow-md"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-pink-600 hover:text-white flex items-center justify-center transition-all text-gray-300 shadow-md"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#25D366] hover:text-black flex items-center justify-center transition-all text-gray-300 shadow-md"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase font-bold tracking-widest text-white">Quick Navigation</div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-[#ff2a5f] transition-colors">
                  01 / About Artist
                </a>
              </li>
              <li>
                <a href="#music" className="hover:text-[#ff2a5f] transition-colors flex items-center gap-2">
                  <span>02 / Single: "Broken Heart"</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                </a>
              </li>
              <li>
                <a href="#works" className="hover:text-[#ff2a5f] transition-colors">
                  03 / Selected Works &amp; Skits
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#ff2a5f] transition-colors">
                  04 / Media House Services
                </a>
              </li>
              <li>
                <a href="#channel" className="hover:text-[#ff2a5f] transition-colors">
                  05 / YouTube Channel Hub
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#ff2a5f] transition-colors">
                  06 / Contact &amp; Bookings
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Inquiries */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs uppercase font-bold tracking-widest text-white">Direct Booking Lines</div>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#ff2a5f]" />
                <span className="text-gray-200">Ludhiana, Punjab, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#f59e0b]" />
                <span>Interviews Desk: <a href="tel:9872999854" className="text-white hover:text-red-400 font-mono font-bold">+91 98729 99854</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#f59e0b]" />
                <span>Promotions Desk: <a href="tel:9478839486" className="text-white hover:text-red-400 font-mono font-bold">+91 94788 39486</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#ff2a5f]" />
                <span className="font-mono text-gray-200">{profile.officialEmail}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with Soundwave beat ticker */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-3">
            <div className="flex items-end gap-0.5 h-3">
              <span className="w-0.5 bg-[#ff2a5f] rounded-full wave-bar-1"></span>
              <span className="w-0.5 bg-[#ff6b35] rounded-full wave-bar-2"></span>
              <span className="w-0.5 bg-[#f59e0b] rounded-full wave-bar-3"></span>
            </div>
            <span>&copy; 2026 Mani Sandhu &bull; Mani Sandhu Media House Ludhiana</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/vipulbansal1224-wq/mani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f59e0b] hover:text-[#ff2a5f] transition-colors"
            >
              GitHub: vipulbansal1224-wq/mani
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all cursor-pointer border border-white/10"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#ff2a5f]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
