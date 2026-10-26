"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MusicSection from "@/components/MusicSection";
import WorksSection from "@/components/WorksSection";
import ServicesList from "@/components/ServicesList";
import ChannelPanorama from "@/components/ChannelPanorama";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";

export default function Home() {
  const [videoModal, setVideoModal] = useState<{
    isOpen: boolean;
    videoId: string;
    title: string;
  }>({
    isOpen: false,
    videoId: "",
    title: "",
  });

  const handleOpenVideo = (videoId: string, title: string) => {
    setVideoModal({
      isOpen: true,
      videoId,
      title,
    });
  };

  const handleCloseVideo = () => {
    setVideoModal((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <main className="min-h-screen bg-[#0b0c10] text-[#e5e7eb] flex flex-col relative selection:bg-[#d4af37]/30 selection:text-[#fef3c7]">
      {/* Editorial Minimalist Navbar */}
      <Navbar />

      {/* Hostinger Asymmetric Split Hero */}
      <Hero onOpenVideo={handleOpenVideo} />

      {/* About The Artist (01) */}
      <AboutSection />

      {/* Featured Music Release: "Broken Heart" (02) */}
      <MusicSection />

      {/* Selected Works & Video Catalogue (03) */}
      <WorksSection onOpenVideo={handleOpenVideo} />

      {/* Numbered Editorial Services (04) */}
      <ServicesList />

      {/* YouTube Cover Banner Panorama (05) */}
      <ChannelPanorama />

      {/* Contact & Promotion Desk (06) */}
      <ContactSection />

      {/* Editorial Typography Footer */}
      <Footer />

      {/* Reusable Video Preview Modal */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={handleCloseVideo}
        videoId={videoModal.videoId}
        title={videoModal.title}
      />
    </main>
  );
}
