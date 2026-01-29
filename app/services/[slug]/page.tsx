import type { Metadata } from "next";
import FAQ from "@/components/custom/layout/FAQ";
import Header from "@/components/custom/shared/Header";
import Container from "@/components/custom/ui/Container";
import Section from "@/components/custom/ui/Section";
import BlockRenderer from "@/components/ui/BlockRenderer";
import { loadService } from "@/lib/loadService";
import { loadServices } from "@/lib/loadServices";
import Image from "next/image";
import RevealText from "@/components/custom/ui/RevealText";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// ✅ Static params
export function generateStaticParams() {
  const services = loadServices();

  return services.map((service) => ({
    slug: service.slug,
  }));
}

// ✅ Dynamic SEO (per service)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await loadService(slug);

  return {
    title: service.meta?.title ?? service.title.split(" |")[0],
    description:
      service.meta?.description ??
      "Explore our professional services and solutions.",
    openGraph: {
      title: service.meta?.title ?? service.title,
      description: service.meta?.description,
      images: service.image ? [{ url: service.image }] : [],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = await loadService(slug);

  return (
    <>
      <Container>
        <Header>{service.title}</Header>
      </Container>
      <Section>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="left flex-1">
            <div className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="rounded-xl object-cover"
              />
            </div>

            <div className="mt-10 sm:mt-14">
              <div className="my-10">
                <RevealText text={service.title} />
              </div>
              <BlockRenderer blocks={service.blocks} />
            </div>

            <div className="mt-10">
              <FAQ data={service.FAQs} />
            </div>
          </div>

          <div className="w-full lg:w-1/3 rounded-xl bg-[#EDE1FF] p-3 sm:p-4 h-fit">
            <ul className="space-y-3 sm:space-y-4">
              {service.products.map((product, index) => (
                <li key={index}>
                  <Link
                    href={`/services/${service.slug}/${product.slug}`}
                    className="
            p-3 sm:p-4 
            flex items-center justify-between gap-3
            bg-white rounded-xl
            transition
            hover:shadow-md hover:scale-[1.01]
            active:scale-[0.99]
          "
                  >
                    <h3 className="text-sm sm:text-base font-medium flex-1 truncate">
                      {product.name}
                    </h3>

                    <ChevronRight className="shrink-0 size-4 sm:size-5 text-gray-600" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
