import BrandSlider from "@/components/custom/layout/BrandSlider";
import Testimonial from "@/components/custom/layout/Testimonial";
import Hero from "@/components/custom/shared/hero";
import AnimatedButton from "@/components/custom/ui/AnimatedBtn";
import Container from "@/components/custom/ui/Container";
import ParallaxCard from "@/components/custom/ui/ParallaxCard";
import RevealText from "@/components/custom/ui/RevealText";
import Section from "@/components/custom/ui/Section";
import ServicesSection from "@/components/custom/ui/ServicesSection";

export default function Home() {
  return (
    <div className="relative">
      <Container>
        <Hero />
        <Section>
          <div className="flex gap-24">
            <div className="left w-2/5 flex flex-col justify-between ">
              <p className="text-primary uppercase font-semibold">.About Us</p>
              <ParallaxCard img={"./images/person.webp"}>
                <div className="absolute bottom-0 right-0 bg-white rounded-tl-xl px-4 py-2 shadow-md flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                  <div className="leading-tight">
                    <h3 className="font-semibold">Sai Ram</h3>
                    <p className="text-sm text-gray-600">CEO & Founder</p>
                  </div>
                </div>
              </ParallaxCard>
            </div>
            <div className="right w-3/5 space-y-6">
              <h2 className="font-semibold text-5xl leading-12 tracking-tighter">
                <RevealText
                  text="Our Stories on Begins "
                  className="text-5xl font-semibold leading-[0.8] tracking-tighter inline-flex ml-20"
                />
                <RevealText
                  delay={0.5}
                  text="Passion Driven by Purpose, and Fueled by a
                Relentless Pursuit of Results and Client Real Success."
                  className="text-5xl font-semibold leading-[0.8] tracking-tighter inline-flex"
                />
              </h2>
              <div className="ml-20">
                <p>
                  Recognize that exceptional customer experiences are at the
                  heart of every successful business. Our Customer Experience
                  Solutions are crafted to help you transform every interaction
                  your customers have with your brand business into a meaningful
                  and positive experience. We believe that understanding the
                  customer.
                </p>
                <div className="relative border-y border-dashed border-gray-400 py-6 flex justify-between w-[85%] my-8 ">
                  {/* vertical dashed line */}

                  <div className="w-1/2">
                    <h2 className="text-7xl font-semibold">20M</h2>
                    <p>Reach Worldwide empower dreams everywhere.</p>
                  </div>

                  <div className="w-1/2 px-8 border-l border-dashed border-gray-400">
                    <h2 className="text-7xl font-semibold">8.5X</h2>
                    <p>Faster Growth starts smart solutions today.</p>
                  </div>
                </div>

                <AnimatedButton label="Learn More" href="/about" className="bg-primary" />
              </div>
            </div>
          </div>
        </Section>
      </Container>
      <ServicesSection />
      <div className="my-24 relative flex justify-center items-center">
        {/* Center Circle Spotlight */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          w-80 h-80 rounded-full pointer-events-none
          border border-gray-300/60 bg-white/25 backdrop-blur-md
          shadow-[0_0_40px_30px_rgba(255,255,255,0.4)] z-20"
        >
          <div className="flex flex-col items-center justify-center h-full text-center px-10">
            <h3 className="text-2xl font-semibold">
              Join Over{" "}
              <span className="px-2 bg-teal-500 text-white rounded-full">
                1000+
              </span>
            </h3>
            <p className="text-xl font-medium mt-1">
              Companies with{" "}
              <span className="text-primary font-bold">Bexon</span> Here
            </p>
          </div>
        </div>
        <BrandSlider />
      </div>
      <Testimonial />
    </div>
  );
}
