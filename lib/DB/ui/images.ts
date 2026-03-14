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
import hospitalityManagement from "@/public/images/hospitalityManagement.png";
import schoolManagement from "@/public/images/schoolManagement.png";
import digitalMarketing from "@/public/images/DigitalMarketing.png";
import restaurantManagement from "@/public/images/restaurantManagement.png";
import gymManagement from "@/public/images/gymManagement.png";
import salonManagement from "@/public/images/salonManagement.png";
import transportManagement from "@/public/images/transportManagement.jpeg";
import transportManagement1 from "@/public/images/TransportManagement1.png";
import billingSoftware from "@/public/images/BillingSoftware.png";
import prestige from "@/public/images/brandLogo/prestige.jpg";
import cultfit from "@/public/images/brandLogo/cultfit.jpg";
import orchid from "@/public/images/brandLogo/orchid.jpg";
import delhiPublic from "@/public/images/brandLogo/delhiPublic.png";
import BillingSoftware2 from "@/public/images/BillingSoftware2.jpg";
import CAOffice from "@/public/images/CAOffice.jpg";
import JewelleryManagement from "@/public/images/jewellery-management.png";
import webApp from "@/public/images/webapp2.png";
import kingdomCafe from "@/public/images/brandLogo/7kingdom.jpg";
import gymImg from "@/public/images/GymManagement2.jpg";
import salonImg from "@/public/images/salon.png";
import restaurantImg from "@/public/images/restaurant.jpg";
import schoolImg from "@/public/images/school.webp"
export const PRODUCT_IMAGES = {
  "restaurant-management": restaurantManagement,
  "gym-management": gymManagement,
  "salon-management": salonManagement,
  "hospital-management": hospitalityManagement,
  "transport-management": transportManagement,
  "school-management": schoolManagement,
  "billing-software": billingSoftware,
  "web-app": webApp,
  "hotel-management": hospitalityManagement,
  "ca-office": CAOffice,
  "jewellery-management": JewelleryManagement
} as const;
export const BLOCK_IMAGES = {
  transportManagement1,
  BillingSoftware2,
  gymImg,
  salonImg,
  restaurantImg,
  schoolImg
} as const;

export const SERVICE_IMAGES = {
  "retail": retailSoftware,
  "hospitality": hospitalityManagement,
  "institutional": schoolManagement,
  "web-app": webApp,
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
  kingdomCafe
} as const;

export const TESTIMONIAL_IMAGES = {
  samosa,
  cultfit,
  prestige,
  orchid,
  delhiPublic,
  kingdomCafe
} as const; 
export type BrandImageKey = keyof typeof BRAND_IMAGES;
export type ProductImageKey = keyof typeof PRODUCT_IMAGES;
export type ServiceImageKey = keyof typeof SERVICE_IMAGES;
export type TestimonialImageKey = keyof typeof TESTIMONIAL_IMAGES;
