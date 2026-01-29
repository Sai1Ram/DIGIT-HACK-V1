import {
  Award,
  BookUser,
  BriefcaseBusiness,
  Factory,
  Globe,
  GraduationCap,
  Headset,
  Hospital,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Store,
  Truck,
  Tv,
  Utensils,
} from "lucide-react";

export const ABOUT_CARDS_ICONS = {
    Lightbulb, Award, Headset
}
export type AboutCardIconKey = keyof typeof ABOUT_CARDS_ICONS;

export const SERVICES_ICONS = {
    Store, BriefcaseBusiness, Factory, Hospital, Tv, GraduationCap, Utensils, Globe, Truck, BookUser
}
export type ServiceIconKey = keyof typeof SERVICES_ICONS;

export const CONTACT_INFO_ICONS = {
    Phone, Mail, MapPin
}
export type ContactInfoIconKey = keyof typeof CONTACT_INFO_ICONS;