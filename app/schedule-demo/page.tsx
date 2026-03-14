import DemoForm from "@/components/custom/shared/DemoForm";
import { loadAllProducts } from "@/lib/loadAllProducts";

interface ProductShortDetails {
  slug: string;
  title: string;
}
export default async function ScheduleDemo() {
  const products: ProductShortDetails[] = await loadAllProducts();
  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full lg:w-1/2">
        <DemoForm products={products} />
      </div>
    </div>
  );
}
