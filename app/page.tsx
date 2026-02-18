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
                  z-20
                "
        >
          <div className="flex flex-col items-center justify-center h-full text-center px-6 sm:px-10">
            <h3 className="text-lg sm:text-xl font-semibold">
              Join Over{" "}
              <span className="px-2 bg-primary text-white rounded-full">
                100+
              </span>
            </h3>
            <p className="text-sm sm:text-base font-medium mt-1">
              Companies with{" "}
              <span className="text-primary font-bold">DigIT-Hack</span> Here
            </p>
          </div>
        </div>

        <BrandSlider />
      </div>
      <Testimonial />
    </div>
  );
}
