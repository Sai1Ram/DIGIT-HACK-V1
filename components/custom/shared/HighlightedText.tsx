"use client";
import RevealText from "../ui/RevealText";

export default function HighlightedText({
  text,
  highlight,
  className,
  highlightClassName = "text-primary font-semibold"
}: {
  text: string;
  highlight?: string;
  className?: string;
  highlightClassName?: string;
}) {
  return (
    <RevealText
      text={text}
      className={className}
      getWordClassName={(word) =>
        highlight && word === highlight ? highlightClassName : ""
      }
    />
  );
}
