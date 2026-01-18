import { ReactNode } from "react";
import headerBg from "@/public/images/pheader-bg.webp";
import headerBlendImg from "@/public/images/headerOverlay.png";
import Breadcrumb from "../ui/Breadcrumb";
export default function Header({ children }: { children: ReactNode }) {
  return (
    <div
      className="
    relative w-full
    min-h-[40vh] sm:min-h-[45vh] lg:min-h-[50vh]
    rounded-xl
    flex flex-col items-center justify-center
    px-4 sm:px-6 lg:px-10
    bg-primary-dark bg-cover bg-center bg-no-repeat
    bg-blend-luminosity
    overflow-hidden
  "
      style={{
        backgroundImage: `url(${headerBg.src})`,
      }}
    >
      {/* Overlay */}
      <div
        className="
      absolute inset-0
      bg-cover bg-center bg-no-repeat
      opacity-70
      rounded-xl
      pointer-events-none
    "
        style={{
          backgroundImage: `url(${headerBlendImg.src})`,
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center text-center gap-2 sm:gap-4 lg:gap-8">
        <h2
          className="
        text-white font-semibold
        text-4xl md:text-5xl lg:text-7xl
        leading-tight
      "
        >
          {children}
        </h2>
        <Breadcrumb />
      </div>
    </div>
  );
}
