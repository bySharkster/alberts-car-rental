"use client";

import React, { useRef, useEffect } from "react";

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 z-10 bg-black/60" />
      <video
        ref={videoRef}
        className="pointer-events-none h-full w-full select-none object-cover"
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        controls={false}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
