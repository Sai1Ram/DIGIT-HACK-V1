import { loadServices } from "./loadServices";

type ServiceIndex = {
  slug: string;
  products?: { name: string; slug: string }[];
};

export function loadProducts() {
  const services = loadServices();
  const typedServices = services as ServiceIndex[];

  return typedServices.flatMap((service) =>
    (service.products ?? []).map((product) => ({
      serviceSlug: service.slug,
      productSlug: product.slug,
    })),
  );
}
