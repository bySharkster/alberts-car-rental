import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import FontAwesomeScript from "@/components/FontAwesomeScript";
require("dotenv").config();
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Albert Car Rental",
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
        {children}
      </body>

      <FontAwesomeScript />
    </html>
  );
}
