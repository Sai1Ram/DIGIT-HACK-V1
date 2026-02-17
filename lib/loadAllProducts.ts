// lib/loadAllProducts.ts
import { loadServices } from "./loadServices";
import { loadProduct } from "./loadProduct";
import { ProductDetails } from "@/types/Service";

export async function loadAllProducts(): Promise<ProductDetails[]> {
  const services = loadServices();

  const products = await Promise.all(
    services.flatMap((service) =>
      (service.products ?? []).map((p) => loadProduct(p.slug))
    )
  );

  return products;
}
