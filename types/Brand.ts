import { BrandImageKey } from "@/lib/DB/ui/images";
import { StaticImageData } from "next/image";

export interface Brand {
  id: number;
  src: StaticImageData;
  link: string;
}
export interface BrandJson {
  id: number;
  src: BrandImageKey;
  link: string;
}