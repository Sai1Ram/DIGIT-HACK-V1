import { ContactInfoIconKey } from "@/lib/DB/ui/icon";
import { LucideIcon } from "lucide-react";

export interface ContactInfo {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}
export interface ContactInfoJson {
  title: string;
  description: string;
  icon: ContactInfoIconKey;
  link: string;
}