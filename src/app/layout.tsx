import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mani Sandhu | Singer • Creator • Mani Sandhu Media House",
  description:
    "Official portfolio of Mani Sandhu. Singer of 'Broken Heart', Vlogger, Model, Actor, and Host at Mani Sandhu Media House, Ludhiana. YouTube: @ManiSandhuOfficial786.",
  keywords: [
    "Mani Sandhu",
    "ManiSandhuOfficial786",
    "Mani Sandhu Media House",
    "Broken Heart Mani Sandhu",
    "Punjabi Singer",
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
    title: "Mani Sandhu | Official Artist Portfolio",
    description:
      "Explore songs like 'Broken Heart', YouTube videos, comedy skits, and media promotions from Mani Sandhu Media House.",
    siteName: "Mani Sandhu Official",
    images: [
      {
        url: "/mani-sandhu-profile.jpg",
        width: 900,
        height: 900,
        alt: "Mani Sandhu Official Photo",
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
    <html lang="en" className={`${jakarta.variable} ${playfair.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-[#0b0c10] text-[#e5e7eb] font-sans antialiased selection:bg-[#d4af37]/30 selection:text-[#fef3c7]">
        {children}
      </body>
    </html>
  );
}
