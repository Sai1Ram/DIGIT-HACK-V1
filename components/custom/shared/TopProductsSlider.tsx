
import { loadTopProducts } from "@/lib/loadTopProducts";
import ImageSlider from "../ui/ImageSlider";

export default async function TopProductsSlider() {
  const products = await loadTopProducts();

  return <ImageSlider slides={products} />;
}
