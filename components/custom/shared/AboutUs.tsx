import TopProductsSlider from "@/components/custom/shared/TopProductsSlider";
import Section from "@/components/custom/ui/Section";
import AnimatedButton from "@/components/custom/ui/AnimatedBtn";
import HighlightedText from "./HighlightedText";

export default function AboutUs() {
  return (
    <Section>
      <div className="flex flex-col xl:flex-row gap-12 w-full">
        {/* LEFT */}
        <div className="w-full flex flex-col gap-6 xl:justify-top">
          <p className="text-primary uppercase font-semibold text-sm sm:text-base">
            .About Us
          </p>
          <div className="hidden lg:block lg:h-150 ">
            <TopProductsSlider />
            <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-center">
              Top Products
            </h2>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full space-y-6 sm:space-y-8">
          <h2 className="">
            <HighlightedText
              text="Crafting powerful digital solutions to elevate your business experience."
              className="
            text-3xl sm:text-4xl lg:text-5xl
            font-semibold
            leading-6
            tracking-tighter
            inline-flex
          "
              highlight="Our"
              highlightClassName="ml-0 xl:ml-20"
              // getWordClassName={(word) =>
              //   word === "Our" ? "ml-0 xl:ml-20" : ""
              // }
            />
          </h2>

          <div className="ml-0 xl:ml-20 space-y-6">
            <p className="text-sm sm:text-base leading-relaxed">
              Since 2024, <span className="text-primary">DigIT-Hack</span> has
              been helping businesses transform their ideas into powerful
              digital solutions. Through smart technology and innovative
              thinking, we build websites, mobile apps, and complete management
              systems that simplify operations, enhance customer experiences,
              and support sustainable business growth. By combining creativity,
              technical expertise, and a collaborative approach, we deliver
              solutions that create real impact and long-term success.
            </p>
            <div className="lg:hidden sm:h-110 h-96">
              <TopProductsSlider />
            </div>
            {/* STATS */}
            <div
              className="
            relative
            border-y border-dashed border-gray-400
            py-6
            flex flex-row
            gap-6 sm:gap-0
            w-full sm:w-[85%]
            my-6 sm:my-8
          "
            >
              <div className="w-1/2">
                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold">
                  300+
                </h2>
                <p className="text-sm sm:text-base">
                  Clients served with innovative solutions.
                </p>
              </div>

              <div
                className="w-1/2 sm:px-8
              sm:border-l sm:border-dashed sm:border-gray-400"
              >
                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold">
                  25%
                </h2>
                <p className="text-sm sm:text-base">
                  Average annual client growth.
                </p>
              </div>
            </div>

            <AnimatedButton label="Learn More" href="/about" />
          </div>
        </div>
      </div>
    </Section>
  );
}
