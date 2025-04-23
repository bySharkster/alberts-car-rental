"use client";

import React, { type ReactNode, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  once?: boolean;
  threshold?: number;
};

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 50,
  once = true,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const getDirectionValues = () => {
    switch (direction) {
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      case "up":
        return { y: distance };
      default:
        return { y: distance };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...getDirectionValues(),
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : getDirectionValues().x,
        y: isInView ? 0 : getDirectionValues().y,
      }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0], // Smooth ease-out curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type ParallaxSectionProps = {
  children: ReactNode;
  className?: string;
  speed?: number; // Negative values scroll slower, positive values scroll faster
  direction?: "vertical" | "horizontal";
};

export function ParallaxSection({
  children,
  className = "",
  speed = -0.2,
  direction = "vertical",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Get scrollY from motion/react
  const { scrollY } = useScroll();
  const [offsetTop, setOffsetTop] = React.useState(0);

  React.useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setOffsetTop(rect.top + window.scrollY);
    }
  }, []);

  // Height of the viewport
  const [vh, setVh] = React.useState(0);
  React.useEffect(() => {
    setVh(window.innerHeight);
    const handleResize = () => setVh(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Parallax translation
  const y = useTransform(scrollY, (value) => {
    // Only apply parallax when the section is in view
    if (!ref.current) return '0px';
    const start = offsetTop - vh;
    const end = offsetTop + (ref.current.offsetHeight || 0);
    if (value < start || value > end) return '0px';
    const progress = (value - start) / (end - start);
    return `${progress * speed * 200}px`;
  });

  const x = useTransform(scrollY, (value) => {
    if (!ref.current) return '0px';
    const start = offsetTop - vh;
    const end = offsetTop + (ref.current.offsetHeight || 0);
    if (value < start || value > end) return '0px';
    const progress = (value - start) / (end - start);
    return `${progress * speed * 200}px`;
  });

  React.useEffect(() => {
    if (ref.current) {
      // eslint-disable-next-line no-console
      console.log('ParallaxSection ref:', ref.current, 'height:', ref.current.offsetHeight);
    }
  }, []);

  return (
    <motion.div ref={ref} className={`relative overflow-hidden border-2 border-red-500 bg-red-100 ${className}`}>
      <motion.div
        style={direction === "vertical" ? { y } : { x }}
        className="relative h-full w-full"
      >
        {children}
      </motion.div>
      {/* Fallback static image for debug */}
      {/* <img src="https://readdy.ai/api/search-image?query=Luxury%20car%20on%20a%20coastal%20road%2C%20sleek%20modern%20premium%20vehicle%20driving%20along%20scenic%20route%2C%20dramatic%20lighting%2C%20professional%20automotive%20photography%2C%20high-end%20car%20rental%20advertisement%2C%20cinematic%20wide%20shot%2C%20beautiful%20landscape%20background%2C%20golden%20hour%20lighting%2C%20clean%20minimal%20aesthetic&width=1440&height=800&seq=1&orientation=landscape" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',zIndex:1}} alt="debug"/> */}
    </motion.div>
  );
}

type StaggeredChildrenProps = {
  children: ReactNode[];
  className?: string;
  delay?: number;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
};

export function StaggeredChildren({
  children,
  className = "",
  delay = 0.2,
  staggerDelay = 0.1,
  direction = "up",
  distance = 20,
}: StaggeredChildrenProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const getDirectionValues = () => {
    switch (direction) {
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      case "up":
        return { y: distance };
      default:
        return { y: distance };
    }
  };

  const item = {
    hidden: { opacity: 0, ...getDirectionValues() },
    show: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
    {React.Children.toArray(children).map((child) => (
      <motion.div key={(child as React.ReactElement).key} variants={item}>
        {child}
      </motion.div>
    ))}
    </motion.div>
  );
}

type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
  threshold?: number;
  type?: "words" | "chars" | "lines";
};

export function AnimatedText({
  text,
  className = "",
  delay = 0,
  once = true,
  threshold = 0.1,
  type = "words",
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const splitText = () => {
    if (type === "chars") {
      return text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: delay + index * 0.04 }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ));
    } 
  };

  return (
    <div ref={ref} className={className}>
      {splitText()}
    </div>
  );
}

type AnimatedCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
};

export function AnimatedCard({
  children,
  className = "",
  delay = 0,
  hoverEffect = true,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={
        hoverEffect
          ? {
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }
          : {}
      }
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
