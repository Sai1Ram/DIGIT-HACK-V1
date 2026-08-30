import AnimatedButton from "@/components/custom/ui/AnimatedBtn"; // your existing button
import { QuickNav } from "./(components)/QuickNav";
import { LazySection } from "./(components)/LazySection";
import { aiProjects } from "@/lib/loadAIProducts";
import { AIProjectSection } from "./(components)/AIProjectSection";
import { ClientsStrip } from "./(components)/ClientsStrip";

export default function AIPortfolio() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
      {/* Intro */}
      <div className="max-w-2xl">
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Foxtroit AI · Field-deployed systems
        </span>
        <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          AI systems we&apos;ve actually shipped.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
          Twenty-one production deployments across safety, logistics,
          generative AI, and document intelligence — built for teams at
          Adani, Tata Steel, Indian Railways, and more.
        </p>
      </div>

      {/* Jump nav */}
      {/* <div className="lg:mt-10 hidden lg:block">
        <QuickNav />
      </div> */}
      {/* Clients */}
      <div className="mt-10">
        <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
          Trusted by teams building physical-world AI
        </span>
        <div className="mt-6">
          <ClientsStrip />
        </div>
      </div>

      {/* Project sections */}
      <div className="mt-14 divide-y divide-gray-200">
        {aiProjects.map((project, index) => (
          <LazySection key={project.slug} minHeight={760} index={index}>
            <section id={project.slug} className="scroll-mt-24 py-14 sm:py-20">
              <AIProjectSection slug={project.slug} />
            </section>
          </LazySection>
        ))}
      </div>

    </main>
  );
}