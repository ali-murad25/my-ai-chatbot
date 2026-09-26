
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/app/Assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Solution", href: "/navagition/Solution" },
    { name: "Resources", href: "/navagition/Resources" },
    { name: "Community", href: "/navagition/Community" },
    { name: "Enterprise", href: "/navagition/Enterprise" },
    { name: "Pricing", href: "/navagition/Pricing" },
    { name: "Security", href: "/navagition/Security" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-gray-100/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Navbar */}
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={logo}
              alt="Logo"
              width={170}
              height={50}
              priority
              className="h-auto w-[140px] sm:w-[160px] md:w-[170px]"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative py-2 font-medium text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-purple-600"
              >
                {link.name}

                <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/login"
              className="rounded-2xl border-2 border-gray-300 px-5 py-2.5 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-200 active:scale-95"
            >
              Login
            </Link>

            <Link
              href="/get-started"
              className="rounded-2xl border-2 border-black bg-black px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-lg active:scale-95"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-gray-300 bg-white transition-all duration-300 hover:bg-gray-200 lg:hidden"
          >
            <span
              className={`block h-0.5 w-6 rounded-full bg-black transition-all duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-6 rounded-full bg-black transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`block h-0.5 w-6 rounded-full bg-black transition-all duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            menuOpen
              ? "max-h-[600px] pb-6 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 pt-2">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 font-medium text-gray-700 transition-all duration-300 hover:bg-white hover:pl-6 hover:text-purple-600"
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Buttons */}
            <div className="mt-4 flex flex-col gap-3 px-2 sm:flex-row">
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="w-full rounded-2xl border-2 border-gray-300 bg-white py-3 text-center font-semibold text-black transition-all duration-300 hover:bg-gray-200 active:scale-95"
              >
                Login
              </Link>

              <Link
                href="/get-started"
                onClick={() => setMenuOpen(false)}
                className="w-full rounded-2xl border-2 border-black bg-black py-3 text-center font-semibold text-white transition-all duration-300 hover:bg-gray-800 active:scale-95"
              >
                Get Started
              </Link>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}
