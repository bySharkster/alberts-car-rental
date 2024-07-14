"use client";
import React from "react";
import config from "@/config";
import Link from "next/link";

export default function ContactForm() {
  return (
    <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 opacity-95 dark:border-gray-700 bg-gray-900">
      <h2 className="text-xl font-semibold text-white">
        Información de Contacto
      </h2>
      <div className="my-8">
        <div className="border-t border-gray-300"></div>
      </div>
      <p className="text-white">
        Para mas informacion, llamanos al {config.ownerPhone} o contactanos por{" "}
        <Link
          href={"https://wa.link/k91t18"}
          className="text-green-700 underline-offset-2 underline"
        >
          Whatsapp
        </Link>
        .
      </p>
    </div>
  );
}
