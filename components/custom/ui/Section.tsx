import { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
  return (
    <section className="lg:p-24 px-6">
      {children}
    </section>
  );
}
