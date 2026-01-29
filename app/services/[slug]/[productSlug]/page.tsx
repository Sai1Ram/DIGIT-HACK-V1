import type { Metadata } from "next";
import Header from "@/components/custom/shared/Header";
import Container from "@/components/custom/ui/Container";
import RevealText from "@/components/custom/ui/RevealText";
import Section from "@/components/custom/ui/Section";
import BlockRenderer from "@/components/ui/BlockRenderer";
import { loadProduct } from "@/lib/loadProduct";
import Image from "next/image";
import { loadProducts } from "@/lib/loadProducts";

interface ProductPageProps {
  params: Promise<{
    slug: string;
    productSlug: string;
  }>;
}

/* ✅ Required for output: export */
export function generateStaticParams() {
  const products = loadProducts();

  // must return keys that match folder name: [slug] and [productSlug]
  return products.map((p) => ({
    slug: p.serviceSlug,
    productSlug: p.productSlug,
  }));
}

/* ✅ SEO per product */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; productSlug: string }>;
}): Promise<Metadata> {
  const { productSlug } = await params;
  const product = await loadProduct(productSlug);

  return {
    title: product.meta?.title ?? product.title,
    description:
      product.meta?.description ??
      "Explore our product solutions designed to scale your business.",
    openGraph: {
      title: product.meta?.title ?? product.title,
      description: product.meta?.description ?? "",
      images: product.image ? [{ url: product.image }] : [],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productSlug } = await params;
  const product = await loadProduct(productSlug);

  return (
    <>
      <Container>
        <Header>{product.title}</Header>
      </Container>

      <Section>
        <div>
          <div className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh]">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="rounded-xl object-cover"
            />
          </div>

          <div className="my-10">
            <RevealText text={product.title} />
          </div>

          <BlockRenderer blocks={product.blocks} />
        </div>
      </Section>
    </>
  );
}
