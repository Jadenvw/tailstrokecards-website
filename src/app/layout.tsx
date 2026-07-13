import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EasterEgg from "@/components/EasterEgg";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TailstrokeCards | Pokémon Card Vending",
  description:
    "Browse Pokémon cards, find upcoming shows, and explore our collection. TailstrokeCards brings the binder to you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "TailstrokeCards",
    description:
      "Pokémon card vending at shows across the Carolinas. Browse singles, sealed product, and graded slabs.",
    url: "https://tailstrokecards.com",
    email: "hello@tailstrokecards.com",
    areaServed: [
      { "@type": "State", name: "North Carolina" },
      { "@type": "State", name: "South Carolina" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Raleigh",
      addressRegion: "NC",
      addressCountry: "US",
    },
    sameAs: [
      "https://instagram.com/tailstrokecards",
      "https://facebook.com/TailstrokeCards",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
        <EasterEgg />
      </body>
    </html>
  );
}
