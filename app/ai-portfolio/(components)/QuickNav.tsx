"use client";


import { aiProjectCategories, aiProjects } from "@/lib/loadAIProducts";
import type { AIProjectCategory } from "@/types/AIProject";

function scrollToCategory(category: AIProjectCategory) {
  const first = aiProjects.find((p) => p.category === category);
  if (!first) return;
  document
    .getElementById(first.slug)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function QuickNav() {
  return (
    <div className="sticky top-24 z-20 -mx-5 overflow-x-auto border-b border-gray-200 bg-white/90 px-5 py-3 backdrop-blur-sm sm:mx-0 sm:rounded-full sm:border sm:px-2 sm:py-2">
      <div className="flex w-max gap-2 sm:w-full sm:justify-center">
        {aiProjectCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => scrollToCategory(category)}
            className="whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium text-gray-600 transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
