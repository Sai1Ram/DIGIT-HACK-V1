// lib/loadTopProducts.ts
import { loadAllProducts } from "./loadAllProducts";
import { loadService } from "./loadService";

export async function loadTopProducts() {
  const products = await loadAllProducts();
  let topProducts = products
    .filter((p) => p.isTopProduct)
    .map((p) => ({
      title: p.title,
      image: p.image,
    }));
  const instituteProduct = await loadService("institutional");
  const webAppProduct = await loadService("web-app");
  topProducts.push({
    title: instituteProduct.title,
    image: instituteProduct.image,
  });
  topProducts.push({
    title: webAppProduct.title,
    image: webAppProduct.image,
  });
  return topProducts;
}
