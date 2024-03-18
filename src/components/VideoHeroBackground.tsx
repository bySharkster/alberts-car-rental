import React from "react";

const VideoBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
