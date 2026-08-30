import Image from "next/image";
import { AI_CLIENT_LOGOS, AIClientLogoKey } from "@/lib/DB/ui/images";
import Link from "next/link";

const CLIENTS: { name: string; key: AIClientLogoKey; link: string }[] = [
  { name: "Adani", key: "adani", link: "https://www.adaniports.com/" },
  {
    name: "Indian Railways",
    key: "indian-railways",
    link: "https://www.irctc.co.in/",
  },
  {
    name: "Tech Mahindra",
    key: "tech-mahindra",
    link: "https://www.techmahindra.com/",
  },
  { name: "JM Baxi", key: "jm-baxi", link: "https://www.jmbaxi.com/" },
  { name: "Portall", key: "portall", link: "https://www.portall.in/" },
  { name: "Waaree", key: "waaree", link: "https://www.waaree.com/" },
  {
    name: "Tata Steel Downstream Products",
    key: "tata-steel",
    link: "https://www.tatasteel.com/",
  },
  {
    name: "Paradip Port",
    key: "paradip-port",
    link: "https://paradipport.gov.in/",
  },
];

export function ClientsStrip() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {CLIENTS.map((client) => (
        <Link
          href={client.link}
          target="_blank"
          rel="noopener noreferrer"
          key={client.key}
          className="flex h-20 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 grayscale transition-all duration-300 hover:grayscale-0 sm:h-24"
        >
          <div className="relative h-full w-full">
            <Image
              src={AI_CLIENT_LOGOS[client.key]}
              alt={client.name}
              fill
              sizes="200px"
              className="object-contain"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
