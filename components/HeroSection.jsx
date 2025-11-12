import { House, Search } from "lucide-react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Image from "next/image";
import BrandMarquee from "./ui/brand-marquee";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
];

const brandLogos = [
  {
    id: 1,
    src: "/brand1.png",
    alt: "Brand 1",
  },
  {
    id: 2,
    src: "/brand2.png",
    alt: "Brand 2",
  },
  {
    id: 3,
    src: "/brand3.png",
    alt: "Brand 3",
  },
  {
    id: 4,
    src: "/brand4.png",
    alt: "Brand 4",
  },
];

export default function HeroSection() {
  return (
    <section className="mt-20">
      <p className="text-center font-oswald text-[22px] sm:text-[28px] text-white uppercase font-semibold tracking-[4%]">
        Welcome to Éluor
      </p>
      <div className="max-w-[1086px] mx-auto mt-6">
        <div className="border border-[#FFFFFF1A] pt-3 bg-[#FFFFFF7A] rounded-tr-[50px] rounded-tl-[50px] backdrop-blur-md">
          <h1 className="text-white text-[42px] sm:text-[64px] md:text-[96px] text-center font-oswald font-bold tracking-[0%] uppercase textShadow">
            Find{" "}
            <div className="inline-block">
              <div className="flex justify-center items-center">
                y{" "}
                <div className="inline-block bg-[#FEF6E9] py-0.5  md:py-4 px-1.5 md:px-4 rounded-[100px]">
                  <div className="flex flex-row items-center justify-center">
                    <AnimatedTooltip items={people} />
                    <div className="ml-5 noShadow">
                      <h3 className="hidden md:block font-inter text-lg sm:text-xl md:text-2xl font-extrabold text-black leading-tight">
                        100k +
                      </h3>
                      <p className="hidden md:block font-inter text-sm sm:text-base text-[#737579] font-normal capitalize mt-1">
                        client reviews
                      </p>
                    </div>
                  </div>
                </div>{" "}
                r{" "}
              </div>{" "}
            </div>{" "}
            perfect
          </h1>
          <h1 className="text-white text-[42px] sm:text-[64px] md:text-[96px] text-center font-oswald font-bold tracking-[0%] uppercase md:-mt-4 textShadow">
            {" "}
            space <span className="text-[#FEF6E9]">in minutes</span>
          </h1>

          <div className="flex gap-1 items-center mt-10">
            <button className="bg-[#FFFFFF] w-[140px] py-2 rounded-tr-[6px] rounded-tl-[6px] text-sm lg:text-[16px] cursor-pointer">
              Sell
            </button>
            <button className="bg-[#FFFFFF] opacity-40 w-[140px] py-2 rounded-tr-[6px] rounded-tl-[6px] text-sm lg:text-[16px] cursor-pointer">
              Rent
            </button>
          </div>
        </div>
        <div className="w-full bg-white flex flex-col lg:flex-row items-center lg:justify-between rounded-b-[10px] rounded-br-[10px] px-4 lg:px-10 xl:px-14 py-4 lg:py-3 gap-4 lg:gap-10">
          {/* Property Type */}
          <div className="flex items-center justify-center lg:justify-between w-full lg:w-auto gap-3 lg:gap-5">
            <House className="h-5 w-4" />
            <select
              name=""
              id=""
              className="text-[#737579] border-0 outline-0 cursor-pointer pr-6 lg:pr-8 bg-transparent text-sm lg:text-base"
            >
              <option value="">Property type</option>
              <option value="">Villa</option>
              <option value="">Beach House</option>
              <option value="">Farm House</option>
              <option value="">Pent House</option>
            </select>
          </div>

          {/* Divider (hide on mobile/tablet) */}
          <div className="hidden lg:block bg-[#DFDFDF] h-9 w-px"></div>

          {/* Search Area */}
          <div className="flex flex-col lg:flex-row lg:items-center w-full lg:flex-[80%] lg:justify-between gap-3 lg:gap-20">
            <div className="flex items-center gap-3 lg:gap-5 border border-[#E5E5E5] lg:border-0 rounded-lg lg:rounded-none px-3 py-2 lg:p-0 w-full lg:w-auto">
              <Search className="w-4 h-4 lg:w-5 lg:h-5" />
              <input
                type="text"
                className="w-full lg:w-[265px] border-0 outline-0 text-sm lg:text-base"
                placeholder="Search by location or Property ID..."
              />
            </div>

            <button className="bg-linear-to-r from-[#35393E] to-[#050810] text-white py-2 lg:py-3 px-6 lg:px-[60px] rounded-lg lg:rounded-xl w-full lg:w-auto text-sm lg:text-base">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col gap-2 mt-10">
        <div className="w-1 rounded-2xl h-9 bg-white"></div>
        <p className="uppercase font-oswald text-[22px] text-white opacity-60 text center tracking-widest">
          scroll
        </p>
      </div>

<BrandMarquee />
    </section>
  );
}
