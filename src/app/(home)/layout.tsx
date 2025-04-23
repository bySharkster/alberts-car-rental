import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import HeaderSection from "@/components/organisms/header/HeaderSection";
import FooterSection from "@/components/organisms/footer/FooterSection";
require("dotenv").config();
const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <HeaderSection />
        {children}
        <FooterSection />
      </body>

    </html>
  );
}
