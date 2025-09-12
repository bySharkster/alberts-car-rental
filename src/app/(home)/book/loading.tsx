import { LoaderCircle } from "lucide-react";
import React from "react";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#1f3045]">
      <LoaderCircle className="size-12 animate-spin text-white" />
    </div>
  );
}
