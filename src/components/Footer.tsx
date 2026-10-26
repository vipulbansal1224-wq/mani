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
    <footer className="bg-[#08090d] text-gray-400 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Massive Typographic Wordmark (Hostinger Minimalist Luxury Style) */}
        <div className="pb-16 border-b border-white/5">
          <div className="text-4xl sm:text-7xl lg:text-9xl font-serif font-black tracking-tight text-white/10 select-none text-center lg:text-left leading-none uppercase">
            Mani Sandhu
          </div>
        </div>

        {/* Links & Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-white/5">
          {/* Col 1: Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#d4af37]/40 p-0.5">
                <img
                  src={profile.profileImage}
                  alt="Mani Sandhu"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <div className="font-serif font-bold text-white text-base">Mani Sandhu</div>
                <div className="text-[10px] uppercase tracking-widest text-[#d4af37]">Media House &bull; Ludhiana</div>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Singer of "Broken Heart", content creator, actor, model, vlogger, and media promoter. Operating out of Ludhiana, Punjab.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile.socials.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all text-gray-400"
                aria-label="Spotify"
              >
                <Music className="w-3.5 h-3.5" />
              </a>
              <a
                href={profile.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-red-600 hover:text-white flex items-center justify-center transition-all text-gray-400"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-all text-gray-400"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase font-bold tracking-widest text-white">Navigation</div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-[#d4af37] transition-colors">
                  About Artist
                </a>
              </li>
              <li>
                <a href="#music" className="hover:text-[#d4af37] transition-colors">
                  Single: "Broken Heart"
                </a>
              </li>
              <li>
                <a href="#works" className="hover:text-[#d4af37] transition-colors">
                  Selected Works &amp; Skits
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">
                  Media House Promotions
                </a>
              </li>
              <li>
                <a href="#channel" className="hover:text-[#d4af37] transition-colors">
                  YouTube Channel Cover
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#d4af37] transition-colors">
                  Contact &amp; Bookings
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Inquiries */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs uppercase font-bold tracking-widest text-white">Direct Contacts</div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Ludhiana, Punjab, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Interviews: +91 98729 99854</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Promotions: +91 94788 39486</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{profile.officialEmail}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            &copy; 2026 Mani Sandhu &bull; Mani Sandhu Media House. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/vipulbansal1224-wq/mani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4af37] hover:underline"
            >
              GitHub: vipulbansal1224-wq/mani
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
