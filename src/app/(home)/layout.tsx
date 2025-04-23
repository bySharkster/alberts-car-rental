import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
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
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  );
}
