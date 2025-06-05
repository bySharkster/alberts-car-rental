"use client";

import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import MobileNavigation from "./MobileNavigation";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function HeaderSection() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      {/* <nav className="container mx-auto flex items-center justify-between h-20 px-6">
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
            <Link
              href="/fleet"
              className="text-[#1f3045] hover:text-[#024f7d] transition-colors font-medium whitespace-nowrap cursor-pointer"
            >
              Our Fleet
            </Link>
            <Link
              href="/features"
              className="text-[#1f3045] hover:text-[#024f7d] transition-colors font-medium whitespace-nowrap cursor-pointer"
            >
              Features
            </Link>
            <Link
              href="/about"
              className="text-[#1f3045] hover:text-[#024f7d] transition-colors font-medium whitespace-nowrap cursor-pointer"
            >
              About Us
            </Link>
            <Link
              href="/faqs"
              className="text-[#1f3045] hover:text-[#024f7d] transition-colors font-medium whitespace-nowrap cursor-pointer"
            >
              FAQ
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="hidden md:flex border-[#024f7d] text-[#024f7d] hover:bg-[#024f7d] hover:text-white transition-colors !rounded-button whitespace-nowrap cursor-pointer"
            asChild
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button
            className="bg-[#024f7d] hover:bg-[#026bad] text-white !rounded-button whitespace-nowrap cursor-pointer"
            asChild
          >
            <Link href="/book">Book Now</Link>
          </Button>
        </div>
      </nav> */}
      {/* mobile menu */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-[#1E2936] h-11 rounded-b-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: pathname === "/" ? 0.5 : 0 }}
      >
        <div className="container mx-auto flex items-center justify-between h-full px-2">
          <Link href="/">
            <div className="flex flex-row items-baseline justify-start">
              <figure>
                <motion.img
                  src={"/images/logo_mobile.png"}
                  loading="lazy"
                  alt="logo"
                  width={120}
                  height={120}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </figure>
              <figure>
                <motion.img
                  src={"/images/logo_mobile_tag.png"}
                  loading="lazy"
                  alt="logo"
                  width={120}
                  height={120}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </figure>
            </div>
          </Link>
          <div>
            <MobileNavigation />
          </div>
        </div>
      </motion.nav>
    </header>
  );
}
