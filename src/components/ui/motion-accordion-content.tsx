"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// Helper to animate height from 0 to auto
const MotionDiv = motion.div;

export const MotionAccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  // Radix exposes open/closed state via data-state attribute
  const contentRef = React.useRef<HTMLDivElement>(null);
  // Use MutationObserver to track data-state on the DOM node
  const [isOpen, setIsOpen] = React.useState(false);
  const primitiveRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const node = primitiveRef.current;
    if (!node) return;
    // Initial state
    setIsOpen(node.getAttribute("data-state") === "open");
    // Watch for attribute changes
    const observer = new MutationObserver(() => {
      setIsOpen(node.getAttribute("data-state") === "open");
    });
    observer.observe(node, {
      attributes: true,
      attributeFilter: ["data-state"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <AccordionPrimitive.Content
      ref={(el) => {
        primitiveRef.current = el;
        if (typeof ref === "function") ref(el);
        else if (ref && "current" in ref)
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }}
      {...props}
      className={cn("overflow-hidden text-sm", className)}
    >
      <motion.div
        initial={false}
        animate={{
          maxHeight: isOpen ? 400 : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          maxHeight: { duration: 1.1, ease: "easeInOut" },
          opacity: { duration: 1, ease: "easeInOut" },
        }}
        style={{
          overflow: "hidden",
          willChange: "max-height, opacity, height",
        }}
      >
        <div className="pb-4 pt-0">{children}</div>
      </motion.div>
    </AccordionPrimitive.Content>
  );
});

MotionAccordionContent.displayName = "MotionAccordionContent";
