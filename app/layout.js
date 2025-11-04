import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "Eluor - The Chosen Gold",
  description: "Discover extraordinary homes in the most sought-after locations. A curated collection of distinguished properties for the discerning few, where architectural significance meets timeless elegance.",
  keywords: ["luxury real estate", "premium properties", "distinguished homes", "eluor", "architectural homes"],
  authors: [{ name: "Eluor" }],
  openGraph: {
    title: "Eluor - The Chosen Gold",
    description: "A curated collection of distinguished properties for the discerning few.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}