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
import bsg from "@/public/images/brandLogo/BSG_logo.png";
import byke from "@/public/images/brandLogo/byke_logo.svg";
import costaCoffee from "@/public/images/brandLogo/Costa-Coffee-Logo.jpg";
import cultfit from "@/public/images/brandLogo/cultfit.jpg";
import delhiPublic from "@/public/images/brandLogo/delhiPublic.png";
import estherea from "@/public/images/brandLogo/estherea-resort-spa-jaipur-logo.avif";
import hardees from "@/public/images/brandLogo/hardees_logo.png";
import kavish from "@/public/images/brandLogo/kavish_logo.png";
import orchid from "@/public/images/brandLogo/orchid.jpg";
import prestige from "@/public/images/brandLogo/prestige.jpg";
import sagarRatna from "@/public/images/brandLogo/sagarRatna_logo.png";
import suba from "@/public/images/brandLogo/suba_logo.png";
import teamax from "@/public/images/brandLogo/teamax_logo.jpg";
import zorko from "@/public/images/brandLogo/zorko-new-logo-1.webp";
import kingdomCafe from "@/public/images/brandLogo/7kingdom.jpg";

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
import BillingSoftware2 from "@/public/images/BillingSoftware2.jpg";
import CAOffice from "@/public/images/CAOffice.jpg";
import JewelleryManagement from "@/public/images/jewellery-management.png";
import webApp from "@/public/images/webapp2.png";
import gymImg from "@/public/images/GymManagement2.jpg";
import salonImg from "@/public/images/salon.png";
import restaurantImg from "@/public/images/restaurant.jpg";
import schoolImg from "@/public/images/school.jpeg";
import hotelImg from "@/public/images/hotel.jpg";
// AI Project Images
import vehicleSpeedDetection from "@/public/images/ai-projects/projects/vehicle-speed-detection.webp";
import documentScanning from "@/public/images/ai-projects/projects/document-scanning.webp";
import aiFashionModel from "@/public/images/ai-projects/projects/ai-fashion-model.webp";
import aiNewsAnchor from "@/public/images/ai-projects/projects/ai-news-anchor.webp";
import graphicDesignGenai from "@/public/images/ai-projects/projects/graphic-design-genai.webp";
import volumeMapping from "@/public/images/ai-projects/projects/volume-mapping.webp";
import parkingAllocation from "@/public/images/ai-projects/projects/parking-allocation.webp";
import faceRecognition from "@/public/images/ai-projects/projects/face-recognition.webp";
import qaDocumentAi from "@/public/images/ai-projects/projects/qa-document-ai.webp";
import diseasePrediction from "@/public/images/ai-projects/projects/disease-prediction.webp";
import aiImageGeneratorGan from "@/public/images/ai-projects/projects/ai-image-generator-gan.webp";
import productRecommendation from "@/public/images/ai-projects/projects/product-recommendation.webp";
import ppeDetection from "@/public/images/ai-projects/projects/ppe-detection.webp";
import humanDetectionRestricted from "@/public/images/ai-projects/projects/human-detection-restricted.webp";
import vehicleDetectionNonparking from "@/public/images/ai-projects/projects/vehicle-detection-nonparking.webp";
import railContainerSurvey from "@/public/images/ai-projects/projects/rail-container-survey.webp";
import portBerthSafety from "@/public/images/ai-projects/projects/port-berth-safety.webp";
import hrCoilTracking from "@/public/images/ai-projects/projects/hr-coil-tracking.webp";
import vehicle360Safety from "@/public/images/ai-projects/projects/vehicle-360-safety.webp";
import documentAiSystem from "@/public/images/ai-projects/projects/document-ai-system.webp";
import boundaryWallDetection from "@/public/images/ai-projects/projects/boundary-wall-detection.webp";

// Client logos (Notable Clients strip) — same static-import pattern.
import adaniLogo from "@/public/images/ai-projects/clients/adani.webp";
import indianRailwaysLogo from "@/public/images/ai-projects/clients/indian-railways.webp";
import techMahindraLogo from "@/public/images/ai-projects/clients/tech-mahindra.webp";
import jmBaxiLogo from "@/public/images/ai-projects/clients/jm-baxi.webp";
import portallLogo from "@/public/images/ai-projects/clients/portall.webp";
import waareeLogo from "@/public/images/ai-projects/clients/waaree.webp";
import tataSteelLogo from "@/public/images/ai-projects/clients/tata-steel.webp";
import bioconLogo from "@/public/images/ai-projects/clients/biocon.webp";
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
  schoolImg,
  hotelImg
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
  bsg,
  byke,
  costaCoffee,
  cultfit,
  delhiPublic,
  estherea,
  hardees,
  kavish,
  orchid,
  prestige,
  sagarRatna,
  suba,
  teamax,
  zorko,
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

export const AI_PROJECT_IMAGES = {
  "vehicle-speed-detection": vehicleSpeedDetection,
  "document-scanning": documentScanning,
  "ai-fashion-model": aiFashionModel,
  "ai-news-anchor": aiNewsAnchor,
  "graphic-design-genai": graphicDesignGenai,
  "volume-mapping": volumeMapping,
  "parking-allocation": parkingAllocation,
  "face-recognition": faceRecognition,
  "qa-document-ai": qaDocumentAi,
  "disease-prediction": diseasePrediction,
  "ai-image-generator-gan": aiImageGeneratorGan,
  "product-recommendation": productRecommendation,
  "ppe-detection": ppeDetection,
  "human-detection-restricted": humanDetectionRestricted,
  "vehicle-detection-nonparking": vehicleDetectionNonparking,
  "rail-container-survey": railContainerSurvey,
  "port-berth-safety": portBerthSafety,
  "hr-coil-tracking": hrCoilTracking,
  "vehicle-360-safety": vehicle360Safety,
  "document-ai-system": documentAiSystem,
  "boundary-wall-detection": boundaryWallDetection,
} as const;

export const AI_CLIENT_LOGOS = {
  adani: adaniLogo,
  "indian-railways": indianRailwaysLogo,
  "tech-mahindra": techMahindraLogo,
  "jm-baxi": jmBaxiLogo,
  portall: portallLogo,
  waaree: waareeLogo,
  "tata-steel": tataSteelLogo,
  biocon: bioconLogo,
} as const;

export type AIClientLogoKey = keyof typeof AI_CLIENT_LOGOS;
export type AIProjectImageKey = keyof typeof AI_PROJECT_IMAGES;
export type BrandImageKey = keyof typeof BRAND_IMAGES;
export type ProductImageKey = keyof typeof PRODUCT_IMAGES;
export type ServiceImageKey = keyof typeof SERVICE_IMAGES;
export type TestimonialImageKey = keyof typeof TESTIMONIAL_IMAGES;
