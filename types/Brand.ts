import { BrandImageKey, TestimonialImageKey } from "@/lib/DB/ui/images";
import { StaticImageData } from "next/image";

export interface Brand {
  id: number;
  name?: string;
  src: StaticImageData;
  link: string;
}
export interface BrandJson {
  id: number;
  name?: string;
  src: BrandImageKey;
  link: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: StaticImageData | null;
}
export interface TestimonialJson {
  quote: string;
  name: string;
  role: string;
  avatar: TestimonialImageKey;
}