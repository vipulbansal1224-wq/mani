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
  title: "Mani Sandhu | Actor • TV Artist • Host • Mani Sandhu Media House",
  description:
    "Official Portfolio of Mani Sandhu. Featuring Star Plus 'Sayonee', Colors TV 'Tu Juliet Jatt Di', Punjabi comedy skits, and exclusive celebrity & spiritual talk shows. Ludhiana & Mumbai.",
  keywords: [
    "Mani Sandhu",
    "ManiSandhuOfficial786",
    "Mani Sandhu Media House",
    "Sayonee Star Plus",
    "Tu Juliet Jatt Di Colors TV",
    "Punjabi Actor",
    "Ludhiana Actor",
    "Ludhiana Media Studio",
    "Punjabi Podcast Host",
    "Bhai Varinder Singh Nirman Mani Sandhu"
  ],
  authors: [{ name: "Mani Sandhu" }],
  creator: "Mani Sandhu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://youtube.com/@ManiSandhuOfficial786",
    title: "Mani Sandhu | Official Actor & Media Portfolio",
    description:
      "Explore the official acting projects, TV serials (Star Plus, Colors TV), podcast episodes, and media production from Mani Sandhu Media House.",
    siteName: "Mani Sandhu Portfolio",
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
