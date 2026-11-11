import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

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
  metadataBase: new URL("https://www.manisandhu.online"),
  title: "Mani Sandhu | Singer • Producer • Mani Sandhu Media House",
  description:
    "Official portfolio of Mani Sandhu. Singer of 'Mirza' (Surinder Shinda Tribute) & 'Shiv Shiv Shambhu', Producer at Mani Sandhu Records & Media House, Ludhiana.",
  keywords: [
    "Mani Sandhu",
    "Mani Sandhu Records",
    "ManiSandhuOfficial786",
    "Mani Sandhu Media House",
    "Mirza Mani Sandhu",
    "Guddiyan Patole Kaur Billo",
    "Ki Dam Da Bharosa Yaar",
    "Shiv Shiv Shambhu Mani Sandhu",
    "Punjabi Singer",
    "Ludhiana Vlogger",
    "Media Promotions Ludhiana"
  ],
  authors: [{ name: "Mani Sandhu" }],
  creator: "Mani Sandhu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.manisandhu.online",
    title: "Mani Sandhu | Artist Portfolio & Mani Sandhu Records",
    description:
      "Stream 'Mirza', 'Guddiyan Patole', 'Ki Dam Da Bharosa Yaar', 'Shiv Shiv Shambhu', and explore exclusive galleries from Mani Sandhu Media House.",
    siteName: "Mani Sandhu",
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
