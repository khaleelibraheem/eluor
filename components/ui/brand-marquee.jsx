"use client";

import Image from "next/image";

export default function BrandMarquee() {
  const brands = ["/brand1.png", "/brand2.png", "/brand3.png", "/brand4.png"];

  // Triple the logos for ultra-smooth infinite loop
  const tripleLogos = [...brands, ...brands, ...brands];

  return (
    <div className="w-full overflow-hidden mt-10">
      <div className="relative">
        <div className="flex animate-marquee">
          {tripleLogos.map((brand, index) => (
            <div
              key={`logo-${index}`}
              className="shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-10 transition-opacity hover:opacity-100"
            >
              <Image
                src={brand}
                width={100}
                height={100}
                alt="brand-logo"
                className="opacity-40"
              />
            </div>
          ))}
          {/* Duplicate the entire set for seamless loop */}
          {tripleLogos.map((brand, index) => (
            <div
              key={`logo-duplicate-${index}`}
              className="shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-10 transition-opacity hover:opacity-100"
            >
              <Image
                src={brand}
                width={100}
                height={100}
                alt="brand-logo"
                className="opacity-40"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 15s linear infinite;
          will-change: transform;
        }

        @media (max-width: 640px) {
          .animate-marquee {
            animation: marquee 5s linear infinite;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .animate-marquee {
            animation: marquee 12s linear infinite;
          }
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}