export default function Home() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-neutral-50 via-stone-100 to-amber-50 relative overflow-hidden">
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Large editorial accent line */}
        <div className="absolute top-0 left-0 w-1 h-64 bg-gradient-to-b from-amber-600 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1 h-64 bg-gradient-to-t from-amber-600 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-8 max-w-5xl w-full">
          <div className="space-y-6 md:space-y-8">
            {/* Small serif detail */}
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-8 md:w-12 h-px bg-neutral-800"></div>
              <span className="text-[0.65rem] md:text-xs tracking-[0.3em] uppercase text-neutral-600 font-light">
                Est. 2025
              </span>
            </div>

            {/* Main heading - editorial style */}
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] leading-none text-neutral-900 tracking-tight">
              Eluor
            </h1>

            {/* Subheading with editorial spacing */}
            <div className="pl-2 border-l-2 border-amber-600">
              <p className="text-2xl sm:text-3xl md:text-4xl italic text-neutral-700 font-light tracking-wide font-playfair">
                The Chosen Gold
              </p>
            </div>

            {/* Body copy - editorial style */}
            <div className="max-w-xl pt-4 md:pt-6">
              <p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-6 md:mb-8">
                A curated collection of distinguished properties for the
                discerning few. Where architectural significance meets timeless
                elegance.
              </p>

              {/* Coming soon with editorial flair */}
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-6 md:w-8 h-px bg-neutral-400"></div>
                <span className="text-xs md:text-sm tracking-[0.2em] uppercase text-neutral-500">
                  Coming Soon
                </span>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full opacity-80"></div>
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full opacity-60"></div>
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full opacity-40"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal corner detail */}
        <div className="absolute bottom-8 md:bottom-12 right-6 md:right-12 text-right text-neutral-400">
          <div className="text-[0.65rem] md:text-xs tracking-widest uppercase">
            Premium Real Estate
          </div>
        </div>
      </div>
    </>
  );
}
