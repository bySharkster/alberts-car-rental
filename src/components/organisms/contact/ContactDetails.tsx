"use client";
import Link from "next/link";

import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import { useState, type MouseEvent as ReactMouseEvent } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

// Canvas Reveal Effect Component
const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
}: {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  return (
    <div className={cn("relative h-full w-full bg-white", containerClassName)}>
      <div className="h-full w-full">
        {/* Simplified placeholder for the DotMatrix component */}
        <div className="absolute inset-0 bg-black/10" />
      </div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
      )}
    </div>
  );
};

// Card Spotlight Component
const CardSpotlight = ({
  children,
  radius = 350,
  color = "#262626",
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      className={cn(
        "group/spotlight relative rounded-md border border-neutral-800 bg-black p-10 dark:border-neutral-800",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={[
              [59, 130, 246],
              [139, 92, 246],
            ]}
            dotSize={3}
          />
        )}
      </motion.div>
      {children}
    </div>
  );
};

// Data for the cards
interface DataItem {
  id: number;
  title: string;
  description: string;
}

// Example data array
const data: DataItem[] = [
  {
    id: 1,
    title: "Enter your email address",
    description: "Start by providing your email for account creation",
  },
  {
    id: 2,
    title: "Create a strong password",
    description: "Use a combination of letters, numbers, and symbols",
  },
  {
    id: 3,
    title: "Set up two-factor authentication",
    description: "Add an extra layer of security to your account",
  },
  {
    id: 4,
    title: "Verify your identity",
    description: "Complete the verification process to secure your account",
  },
];

// Step component for each item
const Step = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <li className="mb-4 flex items-start gap-2">
      <Check className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
      <div>
        <p className="font-medium text-white">{title}</p>
        <p className="text-sm text-neutral-400">{description}</p>
      </div>
    </li>
  );
};

// Main component that maps the data into spotlight cards
const SpotlightCardList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {data.map((item) => (
        <CardSpotlight key={item.id} className="h-64 w-80">
          <p className="relative z-20 mt-2 text-xl font-bold text-white">
            Step {item.id}
          </p>
          <div className="relative z-20 mt-4 text-neutral-200">
            <ul className="mt-2 list-none">
              <Step title={item.title} description={item.description} />
            </ul>
          </div>
          <p className="relative z-20 mt-4 text-sm text-neutral-300">
            Complete this step to continue with the secure account setup
            process.
          </p>
        </CardSpotlight>
      ))}
    </div>
  );
};

export default function ContactDetails() {
  return (
    <section>
      <div className="divide-y divide-[#222] dark:divide-[#eee]">
        {/* <!-- Icon Block --> */}
        <div className="flex gap-x-7 py-6">
          <svg
            className="mt-1.5 size-6 flex-shrink-0 text-[#111] dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <title>Icon</title>
            <path d="m7 11 2-2-2-2" />
            <path d="M11 13h4" />
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          </svg>
          <div className="grow">
            <h3 className="font-semibold text-[#111] dark:text-white">
              Ready to Rent
            </h3>
            <p className="mt-1 text-sm text-[#111] dark:text-white">
              Message us on WhatsApp
            </p>
            <Link
              className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-[#0c4d14] transition-colors hover:text-[#111] focus:text-[#111] focus:outline-none focus:ring-2 focus:ring-[#1DAF5A] dark:text-[#aaffc0] dark:hover:text-white dark:focus:text-white"
              href="/book"
            >
              Rent Now
              <svg
                className="size-2.5 flex-shrink-0 transition ease-in-out group-hover:translate-x-1"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Rent Now</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </div>
        {/* <!-- End Icon Block --> */}

        {/* <!-- Icon Block --> */}
        <div className="flex gap-x-7 py-6">
          <svg
            className="mt-1.5 size-6 flex-shrink-0 text-gray-800 dark:text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <title>FAQ</title>
            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
          </svg>
          <div className="grow">
            <h3 className="font-semibold text-[#111] dark:text-white">FAQ</h3>
            <p className="mt-1 text-sm text-[#111] dark:text-white">
              Check our Frequently Asked Questions for answers to common doubts
              you may have.
            </p>
            <Link
              className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-[#0c4d14] transition-colors hover:text-[#111] focus:text-[#111] focus:outline-none focus:ring-2 focus:ring-[#1DAF5A] dark:text-[#aaffc0] dark:hover:text-white dark:focus:text-white"
              href="/faq"
            >
              Visit the FAQs
              <svg
                className="size-2.5 flex-shrink-0 transition ease-in-out group-hover:translate-x-1"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Visit the FAQs</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </div>
        {/* <!-- End Icon Block --> */}

        {/* <!-- Icon Block --> */}
        <div className="flex gap-x-7 py-6">
          <svg
            className="mt-1.5 size-6 flex-shrink-0 text-gray-800 dark:text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <title>Soporte</title>
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
          <div className="grow">
            <h3 className="font-semibold text-[#111] dark:text-white">
              Support
            </h3>
            <p className="mt-1 text-sm text-[#111] dark:text-white">
              We are here to help you with anything you need.
            </p>
            <Link
              className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-[#0c4d14] transition-colors hover:text-[#111] focus:text-[#111] focus:outline-none focus:ring-2 focus:ring-[#1DAF5A] dark:text-[#aaffc0] dark:hover:text-white dark:focus:text-white"
              href="https://wa.link/7hyee9"
            >
              Contact Support
              <svg
                className="size-2.5 flex-shrink-0 transition ease-in-out group-hover:translate-x-1"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Contact Support</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </div>
        {/* <!-- End Icon Block --> */}

        {/* <!-- Icon Block --> */}
        <div className="flex gap-x-7 py-6">
          <svg
            className="mt-1.5 size-6 flex-shrink-0 text-gray-800 dark:text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <title>Contáctenos por correo electrónico</title>
            <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
            <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
          </svg>
          <div className="grow">
            <h3 className="font-semibold text-[#111] dark:text-white">
              Contact us by email
            </h3>
            <p className="mt-1 text-sm text-[#111] dark:text-white">
              If you would like to write to us by email
            </p>
            <Link
              className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-[#0c4d14] transition-colors hover:text-[#111] focus:text-[#111] focus:outline-none focus:ring-2 focus:ring-[#1DAF5A] dark:text-[#aaffc0] dark:hover:text-white dark:focus:text-white"
              href="mailto:contact@albercarrental.com"
            >
              contact@albercarrental.com
            </Link>
          </div>
        </div>
        {/* <!-- End Icon Block --> */}
      </div>
    </section>
  );
}
