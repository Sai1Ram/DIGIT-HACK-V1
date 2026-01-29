import { notFound } from "next/navigation";
import { ProductDetails } from "@/types/Service";

export async function loadProduct(slug: string): Promise<ProductDetails> {
    try {
        const product = await import(`@/lib/DB/content/services/products/${slug}.json`);
        return product.default as ProductDetails;
    } catch {
        notFound();
    }
}