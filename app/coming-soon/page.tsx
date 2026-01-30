import Header from "@/components/custom/shared/Header";
import AnimatedButton from "@/components/custom/ui/AnimatedBtn";
import Container from "@/components/custom/ui/Container";
import { Box } from "lucide-react";
import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <Container>
      <Header>Coming Soon</Header>
      <main className="min-h-screen w-full flex items-center justify-center px-4 bg-linear-to-b from-white to-gray-50">
        <div className="w-full max-w-3xl text-center">
          {/* Badge */}
          <div className="flex gap-3 items-center mb-4 text-xs sm:text-sm px-2 w-fit mx-auto border-gray-300 border border-dashed">
            <Box className="text-primary size-4" />
            <p className="font-semibold uppercase">Coming Soon</p>
          </div>

          {/* Title */}
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            We’re Building Something{" "}
            <span className="text-primary">Awesome</span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            This page is under construction. We’re working hard to launch it
            soon. Stay tuned for updates!
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <AnimatedButton label="Go to Home" href="/" />

            <AnimatedButton
              label="Contact Us"
              href="/contact"
              className="bg-transparent border border-gray-500"
            />
          </div>

          {/* Footer text */}
          <p className="mt-10 text-sm text-gray-500">
            © {new Date().getFullYear()} DigIT-Hack. All rights reserved.
          </p>
        </div>
      </main>
    </Container>
  );
}
