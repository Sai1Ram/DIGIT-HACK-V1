"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdHome } from "react-icons/md";

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const decodeSegment = (s: string) => decodeURIComponent(s);

  // ✅ Mobile: show only last 2 segments (dynamic)
  const mobileSegments =
    segments.length <= 2 ? segments : segments.slice(-2);

  return (
    <nav aria-label="Breadcrumb" className="w-full flex justify-center">
      <ol
        className="
          flex flex-wrap items-center justify-center
          gap-x-2 gap-y-1
          text-xs sm:text-sm md:text-base lg:text-xl
          bg-gray-100/20
          px-3 sm:px-4 py-1.5
          rounded-2xl
          text-gray-200
          max-w-full
        "
      >
        {/* Home */}
        <li className="flex items-center gap-1">
          <Link href="/" className="flex items-center gap-1 hover:underline">
            <MdHome className="size-4 sm:size-5 lg:size-6" />
            <span className="hidden sm:inline">Home</span>
          </Link>
        </li>

        {/* ✅ Mobile Breadcrumb (Dynamic) */}
        <div className="flex sm:hidden items-center gap-x-2 gap-y-1 flex-wrap">
          {mobileSegments.map((segment, index) => {
            const actualIndex =
              segments.length <= 2 ? index : segments.length - 2 + index;

            const href = "/" + segments.slice(0, actualIndex + 1).join("/");
            const isLast = actualIndex === segments.length - 1;

            return (
              <li key={href} className="flex items-center gap-2">
                <span className="opacity-60">/</span>

                {isLast ? (
                  <span
                    className="font-medium text-white capitalize truncate max-w-35"
                    title={decodeSegment(segment)}
                  >
                    {decodeSegment(segment)}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="hover:underline capitalize truncate max-w-30"
                    title={decodeSegment(segment)}
                  >
                    {decodeSegment(segment)}
                  </Link>
                )}
              </li>
            );
          })}
        </div>

        {/* ✅ Desktop Breadcrumb (Full) */}
        <div className="hidden sm:flex items-center flex-wrap gap-x-2 gap-y-1">
          {segments.map((segment, index) => {
            const href = "/" + segments.slice(0, index + 1).join("/");
            const isLast = index === segments.length - 1;

            return (
              <li key={href} className="flex items-center gap-2">
                <span className="opacity-60">/</span>

                {isLast ? (
                  <span
                    className="font-medium text-white capitalize"
                    title={decodeSegment(segment)}
                  >
                    {decodeSegment(segment)}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="hover:underline capitalize"
                    title={decodeSegment(segment)}
                  >
                    {decodeSegment(segment)}
                  </Link>
                )}
              </li>
            );
          })}
        </div>
      </ol>
    </nav>
  );
}
