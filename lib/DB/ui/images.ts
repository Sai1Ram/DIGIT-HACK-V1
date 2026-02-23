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
import restaurantManagement from "@/public/images/restaurantManagement.png";
import gymManagement from "@/public/images/gymManagement.png";
import salonManagement from "@/public/images/salonManagement.png";
import transportManagement from "@/public/images/transportManagement.jpeg";
import billingSoftware from "@/public/images/BillingSoftware.png";
import prestige from "@/public/images/brandLogo/prestige.jpg";
import cultfit from "@/public/images/brandLogo/cultfit.jpg";
import orchid from "@/public/images/brandLogo/orchid.jpg";
import delhiPublic from "@/public/images/brandLogo/delhiPublic.png";
export const PRODUCT_IMAGES = {
  "restaurant-management": restaurantManagement,
  "gym-management": gymManagement,
  "salon-management": salonManagement,
  "hospital-management": healthcareSoftware,
  "transport-management": transportManagement,
  "school-management": schoolManagement,
  "billing-software": billingSoftware,
  "web-app": digitalMarketing,
  "hotel-management": restaurantManagement,
} as const;

export const SERVICE_IMAGES = {
  "retail": retailSoftware,
  "hospitality": healthcareSoftware,
  "institutional": schoolManagement,
  "web-app": digitalMarketing,
  "digital-marketing": digitalMarketing,
} as const;

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
  barc,
} as const;

export const TESTIMONIAL_IMAGES = {
  samosa,
  cultfit,
  prestige,
  orchid,
  delhiPublic,
} as const;
export type BrandImageKey = keyof typeof BRAND_IMAGES;
export type ProductImageKey = keyof typeof PRODUCT_IMAGES;
export type ServiceImageKey = keyof typeof SERVICE_IMAGES;
export type TestimonialImageKey = keyof typeof TESTIMONIAL_IMAGES;
