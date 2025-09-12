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
      className="glass-card group relative mx-auto flex max-w-xl flex-col space-y-8 rounded-2xl border border-[#1DAF5A]/30 bg-white/70 p-6 shadow-xl backdrop-blur-md transition-all duration-300 dark:bg-gray-900/80 sm:p-10"
    >
      <h2 className="animate-fade-in mb-2 text-center text-2xl font-bold tracking-tight text-[#1A57B2] drop-shadow-lg dark:text-white">
        Contact Us
      </h2>
      <div className="flex justify-center">
        <div className="h-1.5 w-24 animate-pulse rounded-full bg-gradient-to-r from-[#1DAF5A] via-[#00FFB4] to-[#1A57B2]" />
      </div>
      <div className="animate-fade-in relative">
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-semibold text-[#1A57B2] dark:text-white"
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
            className={`w-full rounded-xl border bg-white/90 py-3 pl-10 pr-4 text-gray-900 placeholder-gray-400/70 shadow-inner transition-all duration-200 focus:border-[#1DAF5A] focus:ring-2 focus:ring-[#1DAF5A] dark:bg-gray-800 dark:text-white ${fieldErrors.name && fieldErrors.name.length > 0 ? "border-red-500 ring-red-400" : "border-gray-300 dark:border-gray-600"}`}
            placeholder="Your full name"
          />
        </div>
        {fieldErrors?.name && (
          <span className="animate-shake mt-2 inline-block rounded-r border-l-4 border-red-400 bg-red-50 px-3 py-1 text-xs text-red-700 shadow-sm">
            {fieldErrors.name.join(", ")}
          </span>
        )}
      </div>
      <div className="animate-fade-in relative">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-semibold text-[#1A57B2] dark:text-white"
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
            className={`w-full rounded-xl border bg-white/90 py-3 pl-10 pr-4 text-gray-900 placeholder-gray-400/70 shadow-inner transition-all duration-200 focus:border-[#1DAF5A] focus:ring-2 focus:ring-[#1DAF5A] dark:bg-gray-800 dark:text-white ${fieldErrors.email ? "border-red-500 ring-red-400" : "border-gray-300 dark:border-gray-600"}`}
            placeholder="your@email.com"
          />
        </div>
        {fieldErrors.email && (
          <span className="animate-shake mt-2 inline-block rounded-r border-l-4 border-red-400 bg-red-50 px-3 py-1 text-xs text-red-700 shadow-sm">
            {fieldErrors.email.join(", ")}
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor="phone"
          className="mb-1 block text-sm font-medium text-white"
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
            className={`w-full rounded-xl border bg-white/90 py-3 pl-10 pr-4 text-gray-900 placeholder-gray-400/70 shadow-inner transition-all duration-200 focus:border-[#1DAF5A] focus:ring-2 focus:ring-[#1DAF5A] dark:bg-gray-800 dark:text-white ${fieldErrors.phone ? "border-red-500 ring-red-400" : "border-gray-300 dark:border-gray-600"}`}
          />
        </div>
        {fieldErrors.phone && (
          <span className="mt-1 block text-xs text-red-400">
            {fieldErrors.phone.join(", ")}
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor="car"
          className="mb-1 block text-sm font-medium text-white"
        >
          Vehicle (optional)
        </label>
        <select
          id="car"
          name="car"
          className={`w-full rounded-xl border bg-white/90 py-3 pl-10 pr-4 text-gray-900 placeholder-gray-400/70 shadow-inner transition-all duration-200 focus:border-[#1DAF5A] focus:ring-2 focus:ring-[#1DAF5A] dark:bg-gray-800 dark:text-white ${fieldErrors.car ? "border-red-500 ring-red-400" : "border-gray-300 dark:border-gray-600"}`}
        >
          <option value="">-- Select a vehicle (optional) --</option>
          {vehicles.map((v: Vehicle) => (
            <option key={v.id} value={`${v.make} ${v.model} ${v.year}`}>
              {v.make} {v.model} {v.year}
            </option>
          ))}
        </select>
        {fieldErrors.car && (
          <span className="mt-1 block text-xs text-red-400">
            {fieldErrors.car.join(", ")}
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-sm font-medium text-white"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`w-full rounded-xl border bg-white/90 py-3 pl-10 pr-4 text-gray-900 placeholder-gray-400/70 shadow-inner transition-all duration-200 focus:border-[#1DAF5A] focus:ring-2 focus:ring-[#1DAF5A] dark:bg-gray-800 dark:text-white ${fieldErrors.message ? "border-red-500 ring-red-400" : "border-gray-300 dark:border-gray-600"}`}
          placeholder="Tell us about your inquiry or request"
        />
        {fieldErrors.message && (
          <span className="mt-1 block text-xs text-red-400">
            {fieldErrors.message.join(", ")}
          </span>
        )}
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="flex w-full items-center justify-center rounded-xl bg-green-600 px-4 py-3 font-medium text-white transition duration-300 hover:bg-green-700"
      >
        <div className="flex items-center gap-2">
          {isPending ? (
            <Loader className="h-5 w-5 animate-spin rounded-full" />
          ) : (
            <>
              <p className="text-sm">Send Message</p>
              <Send className="h-5 w-5" />
            </>
          )}
        </div>
      </button>
      <p className="mt-4 text-center text-sm text-white">
        For more information, call us at
        <Link
          href={`tel:${config.ownerPhone}`}
          className="mx-1 text-green-700 underline underline-offset-2"
        >
          {config.ownerPhone}
        </Link>
        or contact us via
        <Link
          href="https://wa.link/k91t18"
          className="mx-1 text-green-700 underline underline-offset-2"
        >
          WhatsApp
        </Link>
        .
      </p>
    </form>
  );
}
