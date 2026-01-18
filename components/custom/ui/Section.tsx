import { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
  return (
    <section
      className="
  px-4 py-10
  sm:px-6 sm:py-12
  md:px-10 md:py-16
  lg:px-16 lg:py-20
  xl:px-24 xl:py-24
"
    >
      {children}
    </section>
  );
}
