import samosa from "@/public/images/brandLogo/samosa-logo.png";
import indulge from "@/public/images/brandLogo/indulge-logo.png";
import kfc from "@/public/images/brandLogo/KFC-Logo.wine.png";
import pizzaHut from "@/public/images/brandLogo/pizza-hut-logo.png";
import arsalan from "@/public/images/brandLogo/Arsalan-gold-logo.png";
import baskinRobbins from "@/public/images/brandLogo/Baskin-Robbins-Logo.wine.png";
import khadiIndia from "@/public/images/brandLogo/khadi-india-logo.png";
import type { StaticImageData } from "next/image";
interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}
interface Brand {
  id: number;
  src: StaticImageData;
  link: string;
}
const testimonials: Testimonial[] = [
  {
    quote:
      "Working with Bexon has been a game-changer for our business. Their professionalism and attention to detail helped us achieve results faster than expected.",
    name: "Guy Hawkins",
    role: "Sr. Executive",
    avatar: "./images/person.webp",
  },
  {
    quote:
      "Their innovative solutions streamlined our workflow and made collaboration effortless. We truly felt like a valued partner.",
    name: "Wade Warren",
    role: "Product Manager",
    avatar: "./images/person.webp",
  },
  {
    quote:
      "The results we’ve seen after partnering with them exceeded expectations. Highly recommended for growing teams.",
    name: "Esther Howard",
    role: "Founder",
    avatar: "./images/person.webp",
  },
];

const brands : Brand[] = [
  {
    id: 1,
    src: samosa,
    link: "https://samosaexpresspvtltd.com/",
  },
  {
    id: 2,
    src: indulge,
    link: "https://indulge.com/",
  },
  {
    id: 3,
    src: kfc,
    link: "https://online.kfc.co.in/",
  },
  {
    id: 4,
    src: pizzaHut,
    link: "https://www.pizzahut.co.in/",
  },
  {
    id: 5,
    src: arsalan,
    link: "https://www.arsalanrestaurants.com",
  },
  {
    id: 6,
    src: baskinRobbins,
    link: "https://baskinrobbinsindia.com/",
  },
  {
    id: 7,
    src: khadiIndia,
    link: "https://www.ekhadiindia.com/",
  },
];
export { testimonials, brands };
