"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    import("preline/preline");
  }, []);

  useEffect(() => {
    const initHSStaticMethods = () => {
      // Check if HSStaticMethods is defined
      if (
        window.HSStaticMethods &&
        typeof window.HSStaticMethods.autoInit === "function"
      ) {
        window.HSStaticMethods.autoInit();
      } else {
        // Retry after a delay if HSStaticMethods is not available yet
        setTimeout(initHSStaticMethods, 100);
      }
    };

    initHSStaticMethods();
  }, [path]);

  return null;
}
