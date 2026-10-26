"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { YoutubeIcon, InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles
} from "lucide-react";

export default function ContactSection() {
  const { profile } = PORTFOLIO_DATA;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    inquiryType: "Actor / TV Serial Casting",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#08090d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Bookings &amp; Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">
            Connect with <span className="text-gold-gradient">Mani Sandhu</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            For television acting roles, podcast interview bookings, commercial sponsorships, or studio sessions at Mani Sandhu Media House Ludhiana.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Details & WhatsApp */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact Channels</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Connect directly with Mani Sandhu's management team for swift replies and scheduling.
              </p>

              {/* Phone Numbers */}
              <div className="space-y-3">
                {profile.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 hover:bg-amber-500/10 border border-white/5 hover:border-amber-500/30 transition-all text-sm font-semibold text-gray-200 hover:text-amber-400"
                  >
                    <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-normal">Official Line {idx + 1}</div>
                      <div>{phone}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Studio Location */}
              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/5 text-sm text-gray-200">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-normal">Headquarters &amp; Studio</div>
                  <div className="font-semibold">{profile.location}</div>
                  <div className="text-[11px] text-gray-500">Mani Sandhu Media House</div>
                </div>
              </div>

              {/* Email */}
              <a
                href={`mailto:${profile.officialEmail}`}
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 hover:bg-amber-500/10 border border-white/5 hover:border-amber-500/30 transition-all text-sm font-semibold text-gray-200 hover:text-amber-400"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-normal">Official Inquiries Email</div>
                  <div className="break-all">{profile.officialEmail}</div>
                </div>
              </a>

              {/* Direct WhatsApp Action */}
              <a
                href={profile.socials.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/20 transition-all hover:scale-102"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>

            {/* Social Follow Box */}
            <div className="glass-panel rounded-3xl p-6 border border-white/10 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white">Follow Mani Sandhu</h4>
                <p className="text-xs text-gray-400">Daily behind the scenes &amp; show updates</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={profile.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/30 flex items-center justify-center transition-all"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-5 h-5" />
                </a>
                <a
                  href={profile.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-pink-600/20 hover:bg-pink-600 text-pink-400 hover:text-white border border-pink-500/30 flex items-center justify-center transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 relative">
              <h3 className="text-2xl font-black text-white mb-2">Send an Inquiry or Booking</h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-8 leading-relaxed">
                Fill out the form below. Whether it's a TV serial casting audition, an interview invitation, or a studio booking, we will get back to you promptly.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h4>
                  <p className="text-sm text-gray-300 max-w-md mx-auto mb-6">
                    Thank you for reaching out. Mani Sandhu's management desk will review your inquiry and respond shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Gurpreet Singh / Casting Team"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                        Inquiry Category
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#12141e] border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option value="Actor / TV Serial Casting">Actor / TV Serial Casting</option>
                        <option value="Show Host / Live Anchoring">Show Host / Live Anchoring</option>
                        <option value="Podcast Guest / Feature">Podcast Guest / Feature</option>
                        <option value="Media House Studio Hire">Media House Studio Hire (Ludhiana)</option>
                        <option value="Brand Promotion & Sponsorship">Brand Promotion &amp; Sponsorship</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                      Project Details / Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about the television project, shooting dates, podcast discussion topic, or studio requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-sm shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
