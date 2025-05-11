import { LoaderCircle } from "lucide-react";
import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#1f3045]">
      <LoaderCircle className="animate-spin size-12 text-white" />
    </div>
  );
}
