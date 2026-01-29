import { SERVICES } from "./DB/ui/mapper";
import { ServiceItem } from "@/types/Service";

export function loadServices(): ServiceItem[] {
  return SERVICES as ServiceItem[];
}
