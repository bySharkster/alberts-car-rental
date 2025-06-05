"use client";

import Script from "next/script";

export default function FontAwesomeScript() {
  return (
    <Script
      src="https://kit.fontawesome.com/7dfe0cbf2d.js"
      strategy="afterInteractive"
      crossOrigin="anonymous"
    />
  );
}
