import samosa from "@/public/images/brandLogo/samosa-logo.png";
import indulge from "@/public/images/brandLogo/indulge-logo.png";
import kfc from "@/public/images/brandLogo/KFC-Logo.wine.png";
import pizzaHut from "@/public/images/brandLogo/pizza-hut-logo.png";
import arsalan from "@/public/images/brandLogo/Arsalan-gold-logo.png";
import baskinRobbins from "@/public/images/brandLogo/Baskin-Robbins-Logo.wine.png";
import khadiIndia from "@/public/images/brandLogo/khadi-india-logo.png";
import studio from "@/public/images/brandLogo/studio.png";
import onebite from "@/public/images/brandLogo/onebite.png";
import barc from "@/public/images/brandLogo/BARC-Logo.svg";
import retailSoftware from "@/public/images/retailsoftware.jpeg";
import healthcareSoftware from "@/public/images/healthcareSoftware.jpg";
import schoolManagement from "@/public/images/schoolManagement.png";
import digitalMarketing from "@/public/images/DigitalMarketing.png";

export const SERVICE_IMAGES = {
  retailSoftware,
  healthcareSoftware,
  schoolManagement,
  digitalMarketing,
} as const;

export type ServiceImageKey = keyof typeof SERVICE_IMAGES;

export const BRAND_IMAGES = {
  samosa,
  indulge,
  kfc,
  pizzaHut,
  arsalan,
  baskinRobbins,
  khadiIndia,
  studio,
  onebite,
  barc
} as const;
export type BrandImageKey = keyof typeof BRAND_IMAGES;


// export type ServiceImageKey = keyof typeof SERVICES_IMAGES;