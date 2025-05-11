"use client";
import Link from "next/link";
import config from "@/config";
import { Loader, Send } from "lucide-react";
import { sendContactEmail } from "@/app/actions/resend";

import type { Vehicle } from "@prisma/client";
import { useActionState, useEffect, useMemo } from "react";
import { toast } from "sonner";

const initialState = null;

async function contactFormReducer(prevState: unknown, formData: FormData) {
  return await sendContactEmail(formData);
}

export default function ContactFormV2({ vehicles }: { vehicles: Vehicle[] }) {
  const [state, formAction, isPending] = useActionState(
    contactFormReducer,
    initialState
  );

  const fieldErrors = useMemo(
    () => (isFieldErrorObject(state?.error) ? state.error : {}),
    [state]
  );

  function isFieldErrorObject(
    error: unknown
  ): error is { [key: string]: string[] } {
    return typeof error === "object" && error !== null && !Array.isArray(error);
  }

  useEffect(() => {
    if (state?.success) {
      toast.success("Message sent successfully");
    }
    if (state?.error) {
      const firstError =
        (fieldErrors as { name?: string[] }).name?.[0] ||
        (fieldErrors as { email?: string[] }).email?.[0] ||
        (fieldErrors as { phone?: string[] }).phone?.[0] ||
        (fieldErrors as { car?: string[] }).car?.[0] ||
        (fieldErrors as { message?: string[] }).message?.[0] ||
        (typeof state.error === "string"
          ? state.error
          : "Error sending the message");
      toast.error(firstError);
    }
  }, [state, fieldErrors]);

  return (
    <form
      action={formAction}
      className="relative flex flex-col max-w-xl mx-auto glass-card border border-[#1DAF5A]/30 shadow-xl rounded-2xl p-6 sm:p-10 bg-white/70 dark:bg-gray-900/80 backdrop-blur-md transition-all duration-300 space-y-8 group"
    >
      <h2 className="text-2xl font-bold text-center text-[#1A57B2] dark:text-white mb-2 drop-shadow-lg tracking-tight animate-fade-in">
        Contact Us
      </h2>
      <div className="flex justify-center">
        <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-[#1DAF5A] via-[#00FFB4] to-[#1A57B2] animate-pulse" />
      </div>
      <div className="relative animate-fade-in">
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-[#1A57B2] dark:text-white mb-2"
        >
          Full Name
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1DAF5A]">
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <title>Person</title>
              <circle cx="12" cy="7" r="4" />
              <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
            </svg>
          </span>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white/90 dark:bg-gray-800 text-gray-900 dark:text-white shadow-inner focus:ring-2 focus:ring-[#1DAF5A] focus:border-[#1DAF5A] transition-all duration-200 placeholder-gray-400/70 ${fieldErrors.name && fieldErrors.name.length > 0 ? "border-red-500 ring-red-400" : "border-gray-300 dark:border-gray-600"}`}
            placeholder="Your full name"
          />
        </div>
        {fieldErrors?.name && (
          <span className="mt-2 inline-block px-3 py-1 bg-red-50 border-l-4 border-red-400 text-xs text-red-700 rounded-r shadow-sm animate-shake">
            {fieldErrors.name.join(", ")}
          </span>
        )}
      </div>
      <div className="relative animate-fade-in">
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-[#1A57B2] dark:text-white mb-2"
        >
          Email
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1DAF5A]">
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <title>Email</title>
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </span>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white/90 dark:bg-gray-800 text-gray-900 dark:text-white shadow-inner focus:ring-2 focus:ring-[#1DAF5A] focus:border-[#1DAF5A] transition-all duration-200 placeholder-gray-400/70 ${fieldErrors.email ? "border-red-500 ring-red-400" : "border-gray-300 dark:border-gray-600"}`}
            placeholder="your@email.com"
          />
        </div>
        {fieldErrors.email && (
          <span className="mt-2 inline-block px-3 py-1 bg-red-50 border-l-4 border-red-400 text-xs text-red-700 rounded-r shadow-sm animate-shake">
            {fieldErrors.email.join(", ")}
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-white mb-1"
        >
          Phone
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1DAF5A]">
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <title>Phone</title>
              <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
              <path d="M20 8v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z" />
            </svg>
          </span>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white/90 dark:bg-gray-800 text-gray-900 dark:text-white shadow-inner focus:ring-2 focus:ring-[#1DAF5A] focus:border-[#1DAF5A] transition-all duration-200 placeholder-gray-400/70 ${fieldErrors.phone ? "border-red-500 ring-red-400" : "border-gray-300 dark:border-gray-600"}`}
          />
        </div>
        {fieldErrors.phone && (
          <span className="text-red-400 text-xs mt-1 block">
            {fieldErrors.phone.join(", ")}
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor="car"
          className="block text-sm font-medium text-white mb-1"
        >
          Vehicle (optional)
        </label>
        <select
          id="car"
          name="car"
          className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white/90 dark:bg-gray-800 text-gray-900 dark:text-white shadow-inner focus:ring-2 focus:ring-[#1DAF5A] focus:border-[#1DAF5A] transition-all duration-200 placeholder-gray-400/70 ${fieldErrors.car ? "border-red-500 ring-red-400" : "border-gray-300 dark:border-gray-600"}`}
        >
          <option value="">-- Select a vehicle (optional) --</option>
          {vehicles.map((v: Vehicle) => (
            <option key={v.id} value={`${v.make} ${v.model} ${v.year}`}>
              {v.make} {v.model} {v.year}
            </option>
          ))}
        </select>
        {fieldErrors.car && (
          <span className="text-red-400 text-xs mt-1 block">
            {fieldErrors.car.join(", ")}
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-white mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white/90 dark:bg-gray-800 text-gray-900 dark:text-white shadow-inner focus:ring-2 focus:ring-[#1DAF5A] focus:border-[#1DAF5A] transition-all duration-200 placeholder-gray-400/70 ${fieldErrors.message ? "border-red-500 ring-red-400" : "border-gray-300 dark:border-gray-600"}`}
          placeholder="Tell us about your inquiry or request"
        />
        {fieldErrors.message && (
          <span className="text-red-400 text-xs mt-1 block">
            {fieldErrors.message.join(", ")}
          </span>
        )}
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-xl transition duration-300 flex items-center justify-center"
      >
        <div className="flex items-center gap-2">
          {isPending ? (
            <Loader className="w-5 h-5 rounded-full animate-spin" />
          ) : (
            <>
              <p className="text-sm">Send Message</p>
              <Send className="w-5 h-5" />
            </>
          )}
        </div>
      </button>
      <p className="text-white text-center mt-4 text-sm">
        For more information, call us at
        <Link
          href={`tel:${config.ownerPhone}`}
          className="text-green-700 underline-offset-2 underline mx-1"
        >
          {config.ownerPhone}
        </Link>
        or contact us via
        <Link
          href="https://wa.link/k91t18"
          className="text-green-700 underline-offset-2 underline mx-1"
        >
          WhatsApp
        </Link>
        .
      </p>
    </form>
  );
}
