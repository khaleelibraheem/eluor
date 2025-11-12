import { Playfair_Display, Inter, Oswald } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Eluor - The Chosen Gold",
  description:
    "Discover extraordinary homes in the most sought-after locations. A curated collection of distinguished properties for the discerning few, where architectural significance meets timeless elegance.",
  keywords: [
    "luxury real estate",
    "premium properties",
    "distinguished homes",
    "eluor",
    "architectural homes",
  ],
  authors: [{ name: "Eluor" }],
  openGraph: {
    title: "Eluor - The Chosen Gold",
    description:
      "A curated collection of distinguished properties for the discerning few. Where architectural significance meets timeless elegance.",
    type: "website",
    siteName: "Eluor",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eluor - The Chosen Gold - Premium Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eluor - The Chosen Gold",
    description:
      "A curated collection of distinguished properties for the discerning few.",
    images: ["/og-image.png"],
  },
  other: {
    "apple-mobile-web-app-status-bar-style": "default",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#FAFAFA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
