import { loadServices } from "@/lib/loadServices";
import nav from "../content/Nav.json";
type NavChildKey = "services";
const SERVICES = loadServices();
interface NavJson {
  id: number;
  label: string;
  href: string;
  children?: NavChildKey;
}

interface NavLink {
  id: number;
  label: string;
  href: string;
  children?: typeof SERVICES;
}

const CHILDREN_MAP: Record<NavChildKey, any> = {
  services: SERVICES,
};

export const NAV_LINKS: NavLink[] = (nav as NavJson[]).map((item) => ({
  ...item,
  children: item.children ? CHILDREN_MAP[item.children] : undefined,
}));
