import Image from "next/image";
import { AI_CLIENT_LOGOS, AIClientLogoKey } from "@/lib/DB/ui/images";

const CLIENTS: { name: string; key: AIClientLogoKey }[] = [
  { name: "Adani", key: "adani" },
  { name: "Indian Railways", key: "indian-railways" },
  { name: "Tech Mahindra", key: "tech-mahindra" },
  { name: "JM Baxi", key: "jm-baxi" },
  { name: "Portall", key: "portall" },
  { name: "Waaree", key: "waaree" },
  { name: "Tata Steel Downstream Products", key: "tata-steel" },
  { name: "Biocon", key: "biocon" },
];

export function ClientsStrip() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {CLIENTS.map((client) => (
        <div
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
        </div>
      ))}
    </div>
  );
}
