import Image from "next/image";
import AnimatedButton from "../ui/AnimatedBtn";
import Container from "../ui/Container";
import catImg from "@/public/images/CAT-BG.png";
import Section from "../ui/Section";
export default function Footer() {
  //657x338
  return (
    <Container>
      <footer className="relative rounded-2xl mb-4">
        {/* FOOTER BACKGROUND */}
        <div className="absolute inset-0 bg-linear-to-b from-[#EDE1FF] to-[#F6F0FF] rounded-2xl" />

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
          className="relative z-10 w-4/5 left-1/2 top-1/2 mt-40 -translate-1/2
             flex rounded-2xl bg-[#402C68] items-stretch overflow-hidden"
          style={{
            backgroundImage: `
      linear-gradient(to left, rgba(64,44,104,0.3) 40%, rgba(64,44,104,0.9) 60%, transparent 100%),
      url(${catImg.src})
    `,
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto 100%",
            backgroundPosition: "right center",
          }}
        >
          {/* Left */}
          <div className="text-white space-y-10 p-12 z-10 w-1/2">
            <h2 className="text-5xl font-semibold leading-tight max-w-xl">
              Let’s Build Future Together.
            </h2>

            <AnimatedButton label="Get Started" href="/contact" />
          </div>
        </div>

        {/* <Section> */}
        <div className="lg:px-24 -mt-10 lg:pb-24">
          {/* FOOTER CONTENT */}
          <div className="relative z-10  grid grid-cols-4 gap-10 text-gray-700 border border-black">
            {/* Logo / About */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Bexon</h3>
              <p className="text-sm">
                Developing personalized customer journeys to increase
                satisfaction & loyalty of our expansion.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>Customer Experience</li>
                <li>Training Programs</li>
                <li>Business Strategy</li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>Contact Us</li>
                <li>Team Member</li>
                <li>Recognitions</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4">
                Subscribe to Our Newsletter.
              </h4>
              <div className="flex bg-white rounded-lg overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 px-4 py-3 outline-none"
                />
                <button className="px-4 bg-primary text-white">→</button>
              </div>
            </div>
          </div>
          </div>
        {/* </Section> */}
      </footer>
    </Container>
  );
}
