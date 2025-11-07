"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/properties", label: "Property List" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      {/* Navbar */}
      <div className="w-full flex items-center justify-between px-6 lg:px-0 rounded-full lg:rounded-0 bg-white/10 backdrop-blur-[49.2px] border-b border-white/10 lg:bg-transparent lg:backdrop-blur-none lg:border-0 lg:py-4">
        {/* Logo */}
        <div>
          <Image src="/logo.png" alt="Logo" width={80} height={50} className="w-[65px] lg:w-20" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex bg-white/16 rounded-full border border-white/10 backdrop-blur-[49.2px] py-3 px-9 gap-[46px]">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-white text-sm relative group"
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 ease-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-2.5">
          <Link
            href="#"
            className="border border-white px-6 py-3 text-sm text-white rounded-[50px] transition-all duration-300 hover:bg-white hover:text-black"
          >
            Sign In
          </Link>
          <Link
            href="#"
            className="border border-white px-6 py-3 text-sm text-black rounded-[50px] bg-white transition-all duration-300 hover:bg-transparent hover:text-white"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white focus:outline-none z-50 relative"
          aria-label="Toggle menu"
        >
          <Menu size={28} className={`transition-all duration-300 ${isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}`} />
        </button>
      </div>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-[49.2px] z-40 transition-all duration-500 lg:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close Button - Top Right */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-white focus:outline-none z-50 p-2 hover:bg-white/10 rounded-full transition-all duration-300"
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        <div className="flex flex-col items-center justify-center h-full gap-8 px-8">
          {/* Mobile Menu Items */}
          <div className="flex flex-col items-center gap-8">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-white tracking-tight text-2xl relative group transition-all duration-300 ${
                    isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-2 h-0.5 bg-white transition-all duration-300 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Buttons */}
          <div
            className={`flex flex-col gap-4 w-full max-w-xs transition-all duration-300 ${
              isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: isMenuOpen ? `${menuItems.length * 50}ms` : "0ms",
            }}
          >
            <Link
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="border border-white px-6 py-4 text-center text-white rounded-[50px] transition-all duration-300 hover:bg-white hover:text-black tracking-tight"
            >
              Sign In
            </Link>
            <Link
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="border border-white px-6 py-4 text-center text-black rounded-[50px] bg-white transition-all duration-300 hover:bg-transparent hover:text-white tracking-tight"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}