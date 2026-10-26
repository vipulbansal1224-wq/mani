import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mani Sandhu | Singer • Actor • Vlogger • Mani Sandhu Media House",
  description:
    "Official website of Mani Sandhu. Singer of 'Broken Heart', Actor, Model, Vlogger, and Host at Mani Sandhu Media House, Ludhiana. YouTube @ManiSandhuOfficial786.",
  keywords: [
    "Mani Sandhu",
    "ManiSandhuOfficial786",
    "Mani Sandhu Media House",
    "Broken Heart Mani Sandhu",
    "Mani Sandhu Singer",
    "Punjabi Actor",
    "Ludhiana Vlogger",
    "Punjabi Comedy Skits",
    "Media Promotions Ludhiana"
  ],
  authors: [{ name: "Mani Sandhu" }],
  creator: "Mani Sandhu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://youtube.com/@ManiSandhuOfficial786",
    title: "Mani Sandhu | Singer • Creator • Media House",
    description:
      "Explore official songs like 'Broken Heart', YouTube videos, comedy skits, and media promotions from Mani Sandhu Media House.",
    siteName: "Mani Sandhu Official",
    images: [
      {
        url: "/mani-sandhu-profile.jpg",
        width: 900,
        height: 900,
        alt: "Mani Sandhu Official Profile Photo",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-[#07080c] text-gray-100 antialiased selection:bg-amber-500/30 selection:text-amber-200">
        {children}
      </body>
    </html>
  );
}
