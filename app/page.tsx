import BrandSlider from "@/components/custom/layout/BrandSlider";
import Testimonial from "@/components/custom/layout/Testimonial";
import AboutUs from "@/components/custom/shared/AboutUs";
import Hero from "@/components/custom/shared/Hero";
import Container from "@/components/custom/ui/Container";
import ServicesSection from "@/components/custom/shared/ServicesSection";

export default function Home() {
  return (
    <div className="relative">
      <Container>
        <Hero />
        <AboutUs />
      </Container>
      <ServicesSection />
      {/* ===== BRAND SECTION ===== */}
      <div className="my-16 sm:my-24 relative flex justify-center items-center">
        <div
          className="
                  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56
                  rounded-full pointer-events-none bg-white/25 
                  border border-gray-300/60 backdrop-blur-md
                  shadow-[0_0_40px_30px_rgba(255,255,255,0.4)]
                  flex justify-center items-center
                  z-20
                "
        >
          <div className="lg:flex hidden flex-col items-center justify-center h-full font-bold text-center px-6 sm:px-10">
            Empowering{" "}
            <span className="px-2 bg-primary text-white rounded-full">
              100+
            </span>
            Businesses with{" "}
            <span className="text-primary font-bold">DigIT-Hack</span>
            Solutions
          </div>
          <div className="lg:hidden flex justify-center items-center text-center px-4 text-sm font-bold">
            <span className="text-primary font-bold">Brand </span> Tie-Ups
          </div>
        </div>

        <BrandSlider />
      </div>
      <Testimonial />
    </div>
  );
}
