import { StaticImageData } from "next/image";
import { LucideIcon } from "lucide-react";
import { AIProjectIconKey } from "@/lib/DB/ui/icon";
import { AIProjectImageKey } from "@/lib/DB/ui/images";
import { ContentBlock } from "./Content";

export type AIProjectCategory =
  | "Safety & Surveillance"
  | "Logistics & Operations"
  | "Generative AI"
  | "Document Intelligence"
  | "Applied ML";

/**
 * Raw, JSON-serializable shape — one file per project under
 * data/ai-projects/*.json. `image` and `icon` are lookup keys, resolved
 * to real assets by mapAIProjectJson() at import time — same pattern as
 * ServiceJson -> ServiceItem.
 */
export interface AIProjectJson {
  sysId: string; // "01".."21", shown in the HUD frame — a case ID, not a ranking
  slug: string;
  title: string;
  category: AIProjectCategory;
  tagline: string;
  image: AIProjectImageKey;
  icon: AIProjectIconKey;
  meta?: { title?: string; description?: string };
  blocks: ContentBlock[];
}

/** Resolved shape used by components — image/icon are real assets. */
export interface AIProjectDetails {
  sysId: string;
  slug: string;
  title: string;
  category: AIProjectCategory;
  tagline: string;
  image: StaticImageData;
  icon: LucideIcon;
  meta?: { title?: string; description?: string };
  blocks: ContentBlock[];
}
