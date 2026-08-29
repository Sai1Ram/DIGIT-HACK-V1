"use client";
import Image from "next/image";
import { motion } from "motion/react";
import BlockRenderer from "@/components/ui/BlockRenderer"; // adjust to your actual BlockRenderer path
import { aiProjects } from "@/lib/loadAIProducts";

interface AIProjectSectionProps {
  slug: string;
}

const corners = ["tl", "tr", "bl", "br"] as const;

export function AIProjectSection({ slug }: AIProjectSectionProps) {
  const project = aiProjects.find((p) => p.slug === slug);
  if (!project) return null;

  const Icon = project.icon;

  return (
    <article className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-14">
      {/* Left: identity + hero image */}
      <div>
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </span>
          <div>
            <div className="flex items-center gap-2 font-mono uppercase tracking-wider text-primary">
              <span className="text-black/40">SYS·{project.sysId}</span>
              <span className="h-1 w-1 rounded-full bg-primary/40" />
              <span>{project.category}</span>
            </div>
          </div>
        </div>

        <h2 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">
          {project.title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
          {project.tagline}
        </p>

        <motion.div
          initial="rest"
          whileInView="active"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mt-6 overflow-hidden rounded-2xl"
        >
          <div className="relative aspect-4/3 w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 380px"
              className="object-cover"
            />
          </div>

          {corners.map((corner) => {
            const isTop = corner[0] === "t";
            const isLeft = corner[1] === "l";
            return (
              <motion.span
                key={corner}
                aria-hidden
                className={`absolute h-5 w-5 border-primary ${
                  isTop ? "border-t-2" : "border-b-2"
                } ${isLeft ? "border-l-2" : "border-r-2"}`}
                style={{
                  top: isTop ? 10 : undefined,
                  bottom: isTop ? undefined : 10,
                  left: isLeft ? 10 : undefined,
                  right: isLeft ? undefined : 10,
                }}
                variants={{
                  rest: { opacity: 0, x: isLeft ? -6 : 6, y: isTop ? -6 : 6 },
                  active: { opacity: 1, x: 0, y: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            );
          })}
        </motion.div>
      </div>

      {/* Right: full case-study content via the existing block renderer */}
      <div className="lg:pt-1">
        <BlockRenderer blocks={project.blocks} />
      </div>
    </article>
  );
}