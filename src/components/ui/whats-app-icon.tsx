import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";

export function WhatsAppIcon({ className }: { className?: string }) {
  return <FaWhatsapp size={24} className={cn(className)} />;
}
