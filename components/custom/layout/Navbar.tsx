"use client";
import Link from "next/link";
import AnimatedButton from "../ui/AnimatedBtn";
import Container from "../ui/Container";
import { usePathname } from "next/navigation";
import useScrollDirection from "@/hooks/useScrollDirection";
import useHeroInView from "@/hooks/useHeroInView";
import { motion } from "motion/react";
// import logo from '@/public/images/favLog.jpg';
// import Image from "next/image";

export default function Navbar() {
  const NAV_LINKS = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About", href: "/about" },
    { id: 3, label: "Services", href: "/services" },
    { id: 4, label: "Contact", href: "/contact" },
  ];
  const direction = useScrollDirection();
  const pathname = usePathname();
  const inHero = pathname === "/" && useHeroInView(450);
  const showNavbar = direction === "up" && !inHero;
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-black  ${
        showNavbar ? "visible" : "hidden"
      } transition-all duration-500`}
    >
      <Container>
        <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={showNavbar ? { y: 0, opacity: 1, transition: { duration: 0.6 } } : {}}
        className="relative w-full bg-white rounded-b-xl shadow h-20 flex justify-between items-center px-4">
          <div className="left">
            <Link href="/">
              {/* <Image src={logo} alt="DigitHack Logo" width={50} height={50} /> */}
              <h1 className="text-2xl font-bold ">DigitHack</h1>
            </Link>
          </div>
          <div
            className={`center flex gap-8 font-medium rounded-4xl px-8 py-3 ${
              inHero ? "bg-white" : ""
            }`}
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href) && link.href !== "/";

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`transition-colors duration-300 hover:text-primary text-xl ${
                    isActive ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="right">
            <AnimatedButton label="Lets Talk" href="/" className="bg-primary" />
          </div>
        </motion.div>
      </Container>
    </header>
  );
}
