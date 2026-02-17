import { PRODUCT_IMAGES } from "@/lib/DB/ui/images";
import { ProductDetails } from "@/types/Service";
import { notFound } from "next/navigation";

export async function loadProduct(slug: string): Promise<ProductDetails> {
  try {
    const file = await import(`@/lib/DB/content/services/products/${slug}.json`);
    const data = file.default;

    return {
      ...data,
      image: PRODUCT_IMAGES[slug as keyof typeof PRODUCT_IMAGES],
    };
  } catch {
    notFound();
  }
}
