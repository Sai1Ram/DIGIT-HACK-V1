import Header from "@/components/custom/shared/Header";
import AnimatedButton from "@/components/custom/ui/AnimatedBtn";
import AnimatedCard from "@/components/custom/ui/AnimatedCard";
import Container from "@/components/custom/ui/Container";
import Section from "@/components/custom/ui/Section";
import { loadServices } from "@/lib/loadServices";
export default function Services() {
  const SERVICES = loadServices();
  return (
    <Container>
      <Header>Services</Header>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {SERVICES.map((card, idx) => (
            <AnimatedCard
              key={idx}
              icon={
                card.icon ? (
                  <card.icon className="size-20 stroke-[0.5]" />
                ) : null
              }
            >
              <div className="title font-semibold text-lg">{card.title}</div>
              <p className="text-start">{card.description}</p>
              <AnimatedButton
                label="Learn More"
                href={card.link}
                className="bg-transparent text-primary group-hover:text-white w-full flex justify-center"
              />
            </AnimatedCard>
          ))}
        </div>
      </Section>
    </Container>
  );
}
