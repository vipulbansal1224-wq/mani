"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { YoutubeIcon, InstagramIcon } from "@/components/Icons";
import { Phone, Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Television & Films", href: "#projects" },
    { label: "YouTube & BTS", href: "#youtube" },
    { label: "Media House Studio", href: "#media-house" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#07080c]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-200 p-[2px] shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#090a0f] rounded-full flex items-center justify-center">
                <span className="text-amber-400 font-extrabold text-sm tracking-wider">MS</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-wide text-white group-hover:text-amber-400 transition-colors">
                  MANI SANDHU
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-400 border border-amber-500/30 font-medium hidden sm:inline-block">
                  OFFICIAL
                </span>
              </div>
              <p className="text-[10px] text-gray-400 tracking-wider uppercase font-semibold">
                Media House • Ludhiana
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-amber-400 transition-colors relative py-1 hover:after:w-full after:transition-all after:duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.profile.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Channel"
              className="w-9 h-9 rounded-full bg-red-600/10 border border-red-500/30 text-red-500 hover:bg-red-600 hover:text-white flex items-center justify-center transition-all hover:scale-105"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.profile.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="w-9 h-9 rounded-full bg-pink-600/10 border border-pink-500/30 text-pink-400 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-pink-600 hover:text-white flex items-center justify-center transition-all hover:scale-105"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-lg shadow-amber-500/25 transition-all hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bookings &amp; PR</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={PORTFOLIO_DATA.profile.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-red-500"
            >
              <YoutubeIcon className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white bg-white/5 border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 p-5 rounded-2xl glass-panel border border-white/10 flex flex-col gap-3 shadow-2xl animate-in fade-in slide-in-from-top-2">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest pb-1 border-b border-white/10">
              Quick Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-200 hover:text-amber-400 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={PORTFOLIO_DATA.profile.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-red-600/20 text-red-400 border border-red-500/30 text-sm font-semibold"
              >
                <YoutubeIcon className="w-4 h-4" />
                Subscribe on YouTube
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black text-sm font-bold shadow-lg shadow-amber-500/30"
              >
                <Phone className="w-4 h-4" />
                Contact &amp; Casting
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
