import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import HeaderSection from "@/components/organisms/header/HeaderSection";
import FooterSection from "@/components/organisms/footer/FooterSection";
import { Toaster } from "sonner";
require("dotenv").config();

export const metadata: Metadata = {
  title: "Home | Albert Car Rental",
  description: "Your car rental service in the city of Ponce, Puerto Rico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderSection />
      {children}

      <FooterSection />
      <Toaster />
    </>
  );
}
