"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import YouTubeSection from "@/components/YouTubeSection";
import MediaHouseSection from "@/components/MediaHouseSection";
import GallerySection from "@/components/GallerySection";
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
    <main className="min-h-screen bg-[#07080c] text-gray-100 flex flex-col relative selection:bg-amber-500/30 selection:text-amber-200">
      {/* Sticky Glass Navbar with Original Photo */}
      <Navbar />

      {/* Hero Section with YouTube Cover Backdrop & Profile Photo */}
      <Hero onOpenVideo={handleOpenVideo} />

      {/* About Section with Real Channel Details */}
      <AboutSection />

      {/* Creative Work: Songs, Skits, Interviews */}
      <ProjectsSection onOpenVideo={handleOpenVideo} />

      {/* YouTube Highlights & Real Banner (@ManiSandhuOfficial786) */}
      <YouTubeSection onOpenVideo={handleOpenVideo} />

      {/* Mani Sandhu Media House (Ludhiana Promotions & PR) */}
      <MediaHouseSection />

      {/* Official Photos Gallery */}
      <GallerySection />

      {/* Interactive Contact & Promotion Booking */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Video Preview Modal */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={handleCloseVideo}
        videoId={videoModal.videoId}
        title={videoModal.title}
      />
    </main>
  );
}
