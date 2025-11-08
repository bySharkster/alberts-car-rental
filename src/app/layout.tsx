import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import FontAwesomeScript from "@/components/FontAwesomeScript";
require("dotenv").config();
const inter = Inter({ subsets: ["latin"] });
const defaultUrl = `${process.env.NEXT_PUBLIC_SITE_URL}` || "https://albertcarrental.com";

export const metadata: Metadata = {
  title: "Albert Car Rental | Premium Car Rentals in Ponce, Puerto Rico",
  description: "Rent quality vehicles in Ponce, Puerto Rico with Albert Car Rental. Affordable rates, flexible booking, and excellent service. Your trusted car rental partner in southern Puerto Rico.",
  keywords: ["car rental Ponce", "rent a car Puerto Rico", "Ponce car rental", "vehicle rental Puerto Rico", "Albert Car Rental", "affordable car rental"],
  authors: [{ name: "Albert Car Rental" }],
  creator: "CodeWFer",
  publisher: "CodeWFer",
  metadataBase: new URL(defaultUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: defaultUrl,
    siteName: "Albert Car Rental",
    title: "Albert Car Rental | Premium Car Rentals in Ponce, Puerto Rico",
    description: "Rent quality vehicles in Ponce, Puerto Rico with Albert Car Rental. Affordable rates, flexible booking, and excellent service.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Albert Car Rental - Your trusted car rental service in Ponce, Puerto Rico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Albert Car Rental | Premium Car Rentals in Ponce, Puerto Rico",
    description: "Rent quality vehicles in Ponce, Puerto Rico with Albert Car Rental. Affordable rates, flexible booking, and excellent service.",
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>

      <FontAwesomeScript />
    </html>
  );
}
