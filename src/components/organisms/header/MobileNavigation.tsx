import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose } from "@/components/ui/drawer";
import { DrawerContent } from "@/components/ui/drawer";
import { DrawerDescription } from "@/components/ui/drawer";
import { DrawerFooter } from "@/components/ui/drawer";
import { DrawerHeader } from "@/components/ui/drawer";
import { DrawerTitle } from "@/components/ui/drawer";
import { DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import * as motion from "motion/react-client";

const navLinks = [
  { href: "/book", label: "Reserve Now", variant: "default" },
  { href: "/fleet", label: "Our Fleet", variant: "ghost" },
  { href: "/#features", label: "Features", variant: "ghost" },
  // { href: "/#about", label: "About Us", variant: "ghost" },
  { href: "/#faqs", label: "FAQ", variant: "ghost" },
  { href: "/contact", label: "Contact", variant: "ghost" },
];

export default function MobileNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button type="button" className="text-white pt-2">
          <Menu className="h-6 w-6" />
        </button>
      </DrawerTrigger>
      <DrawerContent className="w-full group">
        <DrawerHeader>
          <DrawerTitle>Albert Car Rental</DrawerTitle>
          <DrawerDescription>Select an option from the menu.</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-2 mt-2 relative">
          {navLinks.map(({ href, label, variant }) => {
            const isActive = pathname === href;
            return (
              <Button
                key={href}
                variant={
                  variant as
                    | "default"
                    | "ghost"
                    | "link"
                    | "destructive"
                    | "outline"
                    | "secondary"
                }
                className={`w-full relative overflow-hidden hover:bg-gray-800 hover:text-white hover:scale-95 transition duration-300 ${
                  isActive ? "font-bold" : ""
                }`}
                asChild
              >
                <Link href={href} className="w-full">
                  <span className="relative z-10">{label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-underline"
                      className="absolute inset-0 bg-gradient-to-r from-[#1A57B2] to-[#1DAF5A] opacity-20 rounded-lg z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    />
                  )}
                </Link>
              </Button>
            );
          })}
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button
              variant="outline"
              className="w-full hover:bg-gray-800 hover:text-white hover:scale-95 transition duration-300"
            >
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
