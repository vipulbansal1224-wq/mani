"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { YoutubeIcon, InstagramIcon } from "@/components/Icons";
import { Phone, Mail, MapPin, ArrowUp, Music } from "lucide-react";

export default function Footer() {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050608] text-gray-400 text-xs border-t border-white/5 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-amber-500 to-amber-300 overflow-hidden">
                <img
                  src={profile.profileImage}
                  alt="Mani Sandhu"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-wide">
                  MANI SANDHU
                </span>
                <span className="block text-[11px] text-amber-400 font-semibold tracking-wider uppercase">
                  ਮਨੀ ਸੰਧੂ • Media House Ludhiana
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              Independent Punjabi Singer ('Broken Heart'), Model, Actor, Vlogger, and Host. Channel: Mani Sandhu Media House (@ManiSandhuOfficial786).
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile.socials.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-600/10 hover:bg-emerald-600 border border-emerald-500/20 text-emerald-400 hover:text-white flex items-center justify-center transition-all"
                aria-label="Spotify"
              >
                <Music className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-red-600/10 hover:bg-red-600 border border-red-500/20 text-red-500 hover:text-white flex items-center justify-center transition-all"
                aria-label="YouTube Channel"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-pink-600/10 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-pink-600 border border-pink-500/20 text-pink-400 hover:text-white flex items-center justify-center transition-all"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Mani Sandhu
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-amber-400 transition-colors">
                  Music &amp; Songs ('Broken Heart')
                </a>
              </li>
              <li>
                <a href="#youtube" className="hover:text-amber-400 transition-colors">
                  YouTube Videos &amp; Comedy Skits
                </a>
              </li>
              <li>
                <a href="#media-house" className="hover:text-amber-400 transition-colors">
                  Media House Promotions
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">
                  Official Photos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact &amp; Interviews
                </a>
              </li>
            </ul>
          </div>

          {/* Contact lines */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Numbers</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Ludhiana, Punjab, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Interviews: +91 98729 99854</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Promotions: +91 94788 39486</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{profile.officialEmail}</span>
              </div>
              <div className="flex items-center gap-2">
                <YoutubeIcon className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>youtube.com/@ManiSandhuOfficial786</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[11px]">
          <div>
            &copy; 2026 Mani Sandhu • Mani Sandhu Media House. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/vipulbansal1224-wq/mani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
            >
              GitHub: vipulbansal1224-wq/mani
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-all cursor-pointer"
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
