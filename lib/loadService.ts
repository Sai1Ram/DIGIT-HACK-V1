import { notFound } from "next/navigation";
import { ServiceDetails } from "@/types/Service";
import { SERVICE_IMAGES } from "./DB/ui/images";

export async function loadService(slug: string): Promise<ServiceDetails> {
  try {
    const service = await import(
      `@/lib/DB/content/services/${slug}.json`
    );
    const data = service.default;

    return {
      ...data,
      image: SERVICE_IMAGES[slug as keyof typeof SERVICE_IMAGES],
    };
  } catch {
    notFound();
  }
}
