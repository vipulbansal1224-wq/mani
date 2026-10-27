"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { YoutubeIcon, InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import { Phone, Menu, X, Music, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Music", href: "#music" },
    { label: "Works", href: "#works" },
    { label: "Services", href: "#services" },
    { label: "Channel", href: "#channel" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#07080c]/90 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-red-950/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Name */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#ff2a5f] to-[#f59e0b] opacity-70 blur-xs group-hover:opacity-100 transition-opacity"></div>
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-black p-[2px] bg-black">
              <img
                src={PORTFOLIO_DATA.profile.profileImage}
                alt="Mani Sandhu"
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg tracking-wide text-white font-black group-hover:text-[#ff2a5f] transition-colors">
                MANI SANDHU
              </span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-red-500/15 border border-red-500/30 text-[9px] font-mono font-bold text-red-400 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                LIVE
              </span>
            </div>
            <span className="block text-[10px] tracking-widest uppercase text-gray-400 font-medium">
              Media House • Ludhiana
            </span>
          </div>
        </a>

        {/* Clean Center Links with Soundwave Beats indicator */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group/link flex items-center gap-1.5 text-xs uppercase tracking-widest text-gray-300 hover:text-white transition-colors font-medium py-1"
            >
              <span>{link.label}</span>
              {link.label === "Music" && (
                <div className="flex items-end gap-0.5 h-3 w-3">
                  <span className="w-0.5 bg-[#ff2a5f] rounded-full wave-bar-1"></span>
                  <span className="w-0.5 bg-[#ff6b35] rounded-full wave-bar-2"></span>
                  <span className="w-0.5 bg-[#f59e0b] rounded-full wave-bar-3"></span>
                </div>
              )}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={PORTFOLIO_DATA.profile.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube Channel"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-red-500/20 border border-white/5 hover:border-red-500/40 text-gray-300 hover:text-red-400 flex items-center justify-center transition-all"
          >
            <YoutubeIcon className="w-4 h-4" />
          </a>

          <a
            href={PORTFOLIO_DATA.profile.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-pink-500/20 border border-white/5 hover:border-pink-500/40 text-gray-300 hover:text-pink-400 flex items-center justify-center transition-all"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>

          <a
            href={PORTFOLIO_DATA.profile.socials.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fire inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
          >
            <span>Book / PR</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white"
            aria-label="Open Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-4 p-6 rounded-2xl bg-[#0f121d] border border-white/10 shadow-2xl flex flex-col gap-4 animate-in fade-in">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-wide text-gray-200 hover:text-[#ff2a5f] py-2 border-b border-white/5 flex items-center justify-between"
            >
              <span>{link.label}</span>
              {link.label === "Music" && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-400">
                  NEW SONG
                </span>
              )}
            </a>
          ))}

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="tel:9872999854"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 text-gray-200 text-xs font-semibold border border-white/10"
            >
              <Phone className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>Call: 98729 99854</span>
            </a>
            <a
              href={PORTFOLIO_DATA.profile.socials.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fire flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Mani Sandhu</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
