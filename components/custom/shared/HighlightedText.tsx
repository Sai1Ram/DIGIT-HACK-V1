"use client";
import RevealText from "../ui/RevealText";

export default function HighlightedText({
  text,
  highlight,
  className
}: {
  text: string;
  highlight?: string;
  className?: string;
}) {
  return (
    <RevealText
      text={text}
      className={className}
      getWordClassName={(word) =>
        highlight && word === highlight ? "text-primary" : ""
      }
    />
  );
}
