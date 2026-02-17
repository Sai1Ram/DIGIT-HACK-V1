// lib/loadTopProducts.ts
import { loadAllProducts } from "./loadAllProducts";

export async function loadTopProducts() {
  const products = await loadAllProducts();
  return products.filter((p) => p.isTopProduct);
}
