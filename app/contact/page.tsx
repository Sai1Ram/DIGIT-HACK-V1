import Header from "@/components/custom/shared/Header";
import AnimatedCard from "@/components/custom/ui/AnimatedCard";
import Container from "@/components/custom/ui/Container";
import Section from "@/components/custom/ui/Section";
import { CONTACT_INFO } from "@/lib/DB/ui/mapper";
import Link from "next/link";
import { Box } from "lucide-react";
import HighlightedText from "@/components/custom/shared/HighlightedText";

export default function ContactUs() {
  return (
    <Container>
  <Header>
    Contact Us
  </Header>

  <Section>
    <div className="space-y-8 sm:space-y-10">
      
      {/* Heading */}
      <div className="flex flex-col gap-3 items-center text-center">
      {/* Badge */}
      <div
        className="flex gap-2 items-center text-xs sm:text-sm px-3 py-1 w-fit
        border border-dashed border-gray-300 rounded"
      >
        <Box className="text-primary size-4" />
        <p className="font-semibold uppercase tracking-wide">
          choose the best
        </p>
      </div>

      {/* Animated Title */}
      <HighlightedText
        text={"Reach Out to Us"}
        highlight={"Reach"}
      />
    </div>

      {/* Cards */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-4 sm:gap-6
        "
      >
        {CONTACT_INFO.map((info, idx) => (
          <AnimatedCard
            key={idx}
            icon={
              <info.icon
                className="
                  size-14 sm:size-16 lg:size-20 
                  stroke-[0.5]
                "
              />
            }
          >
            <div className="title font-semibold text-base sm:text-lg">
              {info.title}
            </div>

            <Link
              href={info.link}
              className="block mt-1 text-sm sm:text-base wrap-break-word"
            >
              {info.description}
            </Link>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </Section>
</Container>

  );
}
