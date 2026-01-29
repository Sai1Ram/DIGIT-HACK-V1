import Image from "next/image";
import { ContentBlock } from "@/types/Content";
import AnimatedButton from "../custom/ui/AnimatedBtn";

export default function BlockRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="w-full space-y-10 sm:space-y-14">
      {blocks.map((block, index) => {
        switch (block.type) {
          // ✅ TEXT BLOCK
          case "text":
            return (
              <section key={index} className="space-y-3">
                {block.title && (
                  <h2 className="text-xl sm:text-2xl font-semibold">
                    {block.title}
                  </h2>
                )}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {block.content}
                </p>
              </section>
            );

          // ✅ LIST BLOCK
          case "list":
            return (
              <section key={index} className="space-y-3">
                {block.title && (
                  <h2 className="text-xl sm:text-2xl font-semibold">
                    {block.title}
                  </h2>
                )}

                <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="mt-2 size-2 rounded-full bg-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            );

          // ✅ FEATURES BLOCK
          case "features":
            return (
              <section key={index} className="space-y-5">
                {block.title && (
                  <h2 className="text-xl sm:text-2xl font-semibold">
                    {block.title}
                  </h2>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {block.items.map((feature, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-gray-200 bg-white p-4 space-y-2"
                    >
                      <h3 className="font-semibold text-base sm:text-lg">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            );

          // ✅ STATS BLOCK
          case "stats":
            return (
              <section key={index} className="space-y-5">
                {block.title && (
                  <h2 className="text-xl sm:text-2xl font-semibold">
                    {block.title}
                  </h2>
                )}

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {block.items.map((stat, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-gray-50 border border-gray-200 p-4 text-center"
                    >
                      <p className="text-2xl sm:text-3xl font-semibold text-primary">
                        {stat.value}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            );
          // ✅ CTA BLOCK
          case "cta":
            return (
              <section
                key={index}
                className="rounded-2xl bg-primary-dark text-white p-6 sm:p-10 space-y-4"
              >
                {block.title && (
                  <h2 className="text-2xl sm:text-3xl font-semibold">
                    {block.title}
                  </h2>
                )}

                {block.description && (
                  <p className="text-white/80 text-sm sm:text-base">
                    {block.description}
                  </p>
                )}

                <div className="pt-2">
                  <AnimatedButton
                    label={block.button.label}
                    href={block.button.href}
                    className="bg-white text-black"
                  />
                </div>
              </section>
            );
          // ✅ IMAGE BLOCK
          case "image":
            return (
              <section key={index}>
                <div
                  className={`relative w-full overflow-hidden ${
                    block.rounded ? "rounded-2xl" : "rounded-none"
                  }`}
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <Image
                    src={block.src}
                    alt={block.alt ?? "image"}
                    fill
                    className="object-cover"
                  />
                </div>
              </section>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
