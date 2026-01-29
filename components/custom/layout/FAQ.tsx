"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import clsx from "clsx";
import { FAQItem } from "@/types/FAQItem";

interface FAQs {
  data: FAQItem[];
}

export default function FAQ({ data }: FAQs) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-3xl">
      {/* Heading */}
      <h2 className="font-semibold text-xl sm:text-3xl mb-4 sm:mb-6">
        Frequently asked questions
      </h2>

      {data.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            onClick={() =>
              setOpenIndex(isOpen ? null : index)
            }
            className={clsx(
              "rounded-xl transition-all duration-300 cursor-pointer my-3",
              "px-4 sm:px-6",
              isOpen
                ? "bg-primary text-white"
                : "bg-white text-black",
            )}
          >
            {/* Question */}
            <div className="flex items-start sm:items-center gap-3 py-4">
              <p className="flex-1 font-medium text-sm sm:text-base leading-snug">
                {faq.question}
              </p>
 
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIndex(isOpen ? null : index);
                }}
                className={clsx(
                  "shrink-0 rounded-full border transition-colors duration-300",
                  "p-2 sm:p-2.5",
                  isOpen
                    ? "border-white text-white"
                    : "border-primary text-primary",
                )}
                aria-label="Toggle FAQ"
              >
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </button>
            </div>

            {/* Answer */}
            <div
              className={clsx(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-in-out",
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className="h-px w-full bg-white/30 my-2" />
                <p className="py-3 sm:py-4 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
