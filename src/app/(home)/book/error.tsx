"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="mb-4 text-2xl font-bold text-red-600">
        Something went wrong!
      </h2>
      <button
        type="button"
        onClick={() => reset()}
        className="mb-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none"
      >
        Try again
      </button>
      <Link href="/" className="text-blue-500 hover:underline">
        Go back to the home page
      </Link>
    </div>
  );
}
