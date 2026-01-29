import { AboutCardIconKey } from "@/lib/DB/ui/icon";
import { LucideIcon } from "lucide-react";

export interface AboutCard {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}
export interface AboutCardJson {
  id: number;
  title: string;
  description: string;
  icon: AboutCardIconKey;
}