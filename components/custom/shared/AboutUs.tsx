"use client";
import ParallaxCard from "@/components/custom/ui/ParallaxCard";
import RevealText from "@/components/custom/ui/RevealText";
import Section from "@/components/custom/ui/Section";
import AnimatedButton from "@/components/custom/ui/AnimatedBtn";

export default function AboutUs() {
  return (
    <Section>
      <div className="flex flex-col xl:flex-row gap-12 xl:gap-24 w-full">
        {/* LEFT */}
        <div className="w-full xl:w-2/5 flex flex-col gap-6 xl:justify-between">
          <p className="text-primary uppercase font-semibold text-sm sm:text-base">
            .About Us
          </p>

          <ParallaxCard img={"./images/person.webp"}>
            <div
              className="
            absolute bottom-0 right-0
            bg-white rounded-tl-xl
            px-3 sm:px-4 py-2
            shadow-md
            flex items-center gap-2
          "
            >
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400" />
              <div className="leading-tight">
                <h3 className="font-semibold text-sm sm:text-base">Sai Ram</h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  CEO & Founder
                </p>
              </div>
            </div>
          </ParallaxCard>
        </div>

        {/* RIGHT */}
        <div className="w-full xl:w-3/5 space-y-6 sm:space-y-8">
          <h2 className="">
            <RevealText
              text="Our Stories on Begins Passion Driven by Purpose, and Fueled by a Relentless Pursuit of Results and Client Real Success."
              className="
            text-3xl sm:text-4xl lg:text-5xl
            font-semibold
            leading-6
            tracking-tighter
            inline-flex
          "
              getWordClassName={(word) =>
                word === "Our" ? "ml-0 xl:ml-20" : ""
              }
            />
          </h2>

          <div className="ml-0 xl:ml-20 space-y-6">
            <p className="text-sm sm:text-base leading-relaxed">
              Recognize that exceptional customer experiences are at the heart
              of every successful business. Our Customer Experience Solutions
              are crafted to help you transform every interaction your customers
              have with your brand business into a meaningful and positive
              experience. We believe that understanding the customer.
            </p>

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
                  20M
                </h2>
                <p className="text-sm sm:text-base">
                  Reach Worldwide empower dreams everywhere.
                </p>
              </div>

              <div className="w-1/2 sm:px-8
              sm:border-l sm:border-dashed sm:border-gray-400">
                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold">
                  8.5X
                </h2>
                <p className="text-sm sm:text-base">
                  Faster Growth starts smart solutions today.
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
