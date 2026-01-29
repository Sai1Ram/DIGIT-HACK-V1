import samosa from "@/public/images/brandLogo/samosa-logo.png";
import indulge from "@/public/images/brandLogo/indulge-logo.png";
import kfc from "@/public/images/brandLogo/KFC-Logo.wine.png";
import pizzaHut from "@/public/images/brandLogo/pizza-hut-logo.png";
import arsalan from "@/public/images/brandLogo/Arsalan-gold-logo.png";
import baskinRobbins from "@/public/images/brandLogo/Baskin-Robbins-Logo.wine.png";
import khadiIndia from "@/public/images/brandLogo/khadi-india-logo.png";

export const BRAND_IMAGES = {
  samosa,
  indulge,
  kfc,
  pizzaHut,
  arsalan,
  baskinRobbins,
  khadiIndia,
} as const;
export type BrandImageKey = keyof typeof BRAND_IMAGES;


// export type ServiceImageKey = keyof typeof SERVICES_IMAGES;