"use client";

import React from "react";
import { PortfolioProvider } from "@/context/PortfolioContext";
import GlobalAudioPlayer from "@/components/GlobalAudioPlayer";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PortfolioProvider>
      {children}
      <GlobalAudioPlayer />
    </PortfolioProvider>
  );
}
