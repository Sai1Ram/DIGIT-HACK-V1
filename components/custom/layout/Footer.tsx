import { NAV_LINKS, SERVICES } from "@/lib/data";
import AnimatedButton from "../ui/AnimatedBtn";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Link from "next/link";

export default function Footer() {
  return (
    <Container>
      <footer className="relative rounded-2xl mb-4 mt-24 sm:mt-32">
        {/* FOOTER BACKGROUND */}
        <div className="absolute inset-0 bg-linear-to-b from-[#EDE1FF] to-[#F6F0FF] rounded-2xl z-0" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #d1d5db 1px, transparent 1px),
              linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 70% at 0% 100%, #000 40%, transparent 80%)",
            maskImage:
              "radial-gradient(ellipse 90% 70% at 0% 100%, #000 40%, transparent 80%)",
          }}
        />

        {/* FLOATING CTA */}
        <div
          className="
            absolute left-1/2 -translate-x-1/2
            -top-16 sm:-top-20
            w-[92%] sm:w-4/5
            bg-primary-dark rounded-2xl
            z-10
          "
        >
          <div
            className="
              text-white
              p-6 sm:p-10 lg:p-12
              flex flex-col lg:flex-row
              gap-6
              items-start lg:items-center
              justify-between
            "
          >
            <h2
              className="
                text-2xl sm:text-3xl lg:text-5xl
                font-semibold leading-tight
                max-w-xl
              "
            >
              Let’s Build Future <br className="hidden sm:block" /> Together.
            </h2>

            <AnimatedButton label="Get Started" href="/contact" />
          </div>
        </div>

        <Section>
          {/* FOOTER CONTENT */}
          <div
            className="
              relative z-5
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-8 lg:gap-10
              mt-32 sm:mt-40
              text-gray-700
            "
          >
            {/* Logo / About */}
            <div>
              <h3 className="font-semibold mb-4 text-2xl sm:text-3xl">
                DigIT-Hack
              </h3>
              <p className="text-sm sm:text-base lg:text-lg">
                Developing personalized customer journeys to increase
                satisfaction & loyalty of our expansion.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Services</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                {SERVICES.map((service, idx) => (
                  <Link
                    key={idx}
                    href={`/services/${service.link}`}
                    className="hover:underline block"
                  >
                    {service.title}
                  </Link>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Resources</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                {NAV_LINKS.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="hover:underline block"
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">
                Subscribe to Our Newsletter
              </h4>

              <div
                className="
                  flex flex-col sm:flex-row
                  bg-white rounded-lg overflow-hidden
                "
              >
                <input
                  type="email"
                  placeholder="Enter email"
                  className="
                    flex-1
                    px-4 py-3
                    outline-none
                    text-sm sm:text-base
                  "
                />
                <button
                  className="
                    px-4 py-3
                    bg-primary text-white
                    text-sm sm:text-base
                  "
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </Section>
      </footer>
    </Container>
  );
}
