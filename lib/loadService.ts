import { notFound } from "next/navigation";
import { ServiceDetails } from "@/types/Service";

export async function loadService(slug: string): Promise<ServiceDetails> {
  try {
    const service = await import(
      `@/lib/DB/content/services/${slug}.json`
    );
    return service.default as ServiceDetails;
  } catch {
    notFound();
  }
}
