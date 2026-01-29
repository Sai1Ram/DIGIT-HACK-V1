import { ServiceIconKey } from "@/lib/DB/ui/icon";
import { LucideIcon } from "lucide-react";
import { FAQItem } from "./FAQItem";
import { ContentBlock } from "./Content";

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  products?: { name: string; slug: string }[];
  slug: string;
  link: string;
}
export interface ServiceJson {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: ServiceIconKey;
  products?: { name: string; slug: string }[];
  slug: string;
}


export interface ServiceDetails {
  slug: string;
  title: string;
  image: string;
  meta: { title?: string; description?: string };
  hero?: {
    headline: string;
    subLine?: string;
  };
  products: { name: string; slug: string }[]; // product slugs
  FAQs: FAQItem[];
  blocks: ContentBlock[];
}

export interface ProductDetails {
  slug: string;
  title: string;
  image: string;
  meta: { title?: string; description?: string };
  hero?: {
    headline: string;
    subLine?: string;
  };
  blocks: ContentBlock[];
}