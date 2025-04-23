"use client";


import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeaderSection() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
<header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <nav className="container mx-auto flex items-center justify-between h-20 px-6">
          <div className="flex items-center gap-10">
          <Link
            className="flex-none text-xl font-semibold dark:text-white"
            href="/"
            aria-label="Brand"
          >
            <figure className="w-48">
              <Image
                src={"/images/logo.png"}
                alt="logo"
                width={120}
                height={120}
              />
            </figure>
          </Link>
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/fleet" className="text-[#1f3045] hover:text-[#024f7d] transition-colors font-medium whitespace-nowrap cursor-pointer">Our Fleet</Link>
              <Link href="/features" className="text-[#1f3045] hover:text-[#024f7d] transition-colors font-medium whitespace-nowrap cursor-pointer">Features</Link>
              <Link href="/about" className="text-[#1f3045] hover:text-[#024f7d] transition-colors font-medium whitespace-nowrap cursor-pointer">About Us</Link>
              <Link href="/faqs" className="text-[#1f3045] hover:text-[#024f7d] transition-colors font-medium whitespace-nowrap cursor-pointer">FAQ</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex border-[#024f7d] text-[#024f7d] hover:bg-[#024f7d] hover:text-white transition-colors !rounded-button whitespace-nowrap cursor-pointer" asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
            <Button className="bg-[#024f7d] hover:bg-[#026bad] text-white !rounded-button whitespace-nowrap cursor-pointer" asChild>
              <Link href="/book">
                Book Now
              </Link>
            </Button>
          </div>
        </nav>
      </header>

  );
}
