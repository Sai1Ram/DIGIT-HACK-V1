import { BRAND_IMAGES } from "./images";
import brands from "../content/Brands.json";
import aboutCards from "../content/AboutCards.json";
import contactInfo from "../content/ContactInfo.json";
import services from "../content/Services.json";
import { ABOUT_CARDS_ICONS, CONTACT_INFO_ICONS, SERVICES_ICONS } from "./icon";
import { ServiceItem, ServiceJson } from "@/types/Service";
import { ContactInfo, ContactInfoJson } from "@/types/ContactInfo";
import { Brand, BrandJson } from "@/types/Brand";
import { AboutCard, AboutCardJson } from "@/types/About";

const typedBrands = brands as BrandJson[];
export const BRANDS: Brand[] = typedBrands.map((b) => ({
  id: b.id,
  src: BRAND_IMAGES[b.src],
  link: b.link,
}));

const typedAboutCards = aboutCards as AboutCardJson[];
export const ABOUT_CARDS: AboutCard[] = typedAboutCards.map((c) => ({
  id: c.id,
  title: c.title,
  description: c.description,
  icon: ABOUT_CARDS_ICONS[c.icon],
}));

const typedContactInfo = contactInfo as ContactInfoJson[];
export const CONTACT_INFO: ContactInfo[] = typedContactInfo.map((c) => ({
  title: c.title,
  description: c.description,
  icon: CONTACT_INFO_ICONS[c.icon],
  link: c.link,
}));

const typedServices = services as ServiceJson[];
export const SERVICES: ServiceItem[] = typedServices.map((s) => ({
  id: s.id,
  title: s.title,
  description: s.description,
  image: s.image,
  icon: SERVICES_ICONS[s.icon],
  slug: s.slug,
  products: s.products?.map((p) => ({
    name: p.name,
    slug: p.slug,
    link: `/services/${s.slug}/${p.slug}`,
  })),
  link: `/services/${s.slug}`,
}));
