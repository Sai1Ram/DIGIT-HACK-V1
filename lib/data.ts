import samosa from "@/public/images/brandLogo/samosa-logo.png";
import indulge from "@/public/images/brandLogo/indulge-logo.png";
import kfc from "@/public/images/brandLogo/KFC-Logo.wine.png";
import pizzaHut from "@/public/images/brandLogo/pizza-hut-logo.png";
import arsalan from "@/public/images/brandLogo/Arsalan-gold-logo.png";
import baskinRobbins from "@/public/images/brandLogo/Baskin-Robbins-Logo.wine.png";
import khadiIndia from "@/public/images/brandLogo/khadi-india-logo.png";
import type { StaticImageData } from "next/image";
import {
  Award,
  BookUser,
  BriefcaseBusiness,
  Factory,
  Globe,
  GraduationCap,
  Headset,
  Hospital,
  Lightbulb,
  LucideIcon,
  Mail,
  MapPin,
  Phone,
  Store,
  Truck,
  Tv,
  Utensils,
} from "lucide-react";
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
interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  products?: { name: string; link: string }[];
  link: string;
}
interface AboutCard {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}
interface ContactInfo {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}
const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Retail Solutions",
    description:
      "Revolutionize your retail experience with our cutting-edge software solutions, enhancing customer engagement and optimizing operations.",
    products: [
      {
        name: "Jewellery Store Management System",
        link: "JewelleryManagement",
      },
      { name: "Billing Software", link: "BillingSoftware" },
      { name: "Salon Management System", link: "SalonManagement" },
      { name: "Tailoring ERP", link: "TailoringErp" },
    ],
    image: "/api/placeholder/800/600",
    icon: Store,
    link: "retail",
  },
  {
    id: 2,
    title: "Healthcare",
    description:
      "Empower your healthcare practice with our intuitive software, streamlining patient care and administrative tasks effortlessly.",
    products: [
      { name: "Hospital Management System", link: "HospitalManagement" },
      { name: "Mobile Applications for Doctors", link: "HospitalManagement" },
      { name: "Billing Solution for Pharmacy", link: "HospitalManagement" },
    ],
    image: "/api/placeholder/800/600",
    icon: Hospital,
    link: "healthcare",
  },
  {
    id: 3,
    title: "Transport",
    description:
      "Optimize your transport operations with our innovative software suite, ensuring efficient logistics and streamlined routes.",
    products: [
      { name: "Vehicle Tracking System", link: "TransportManagement" },
      { name: "Transport Management System", link: "TransportManagement" },
    ],
    image: "/api/placeholder/800/600",
    icon: Truck,
    link: "transport",
  },
  {
    id: 4,
    title: "Workplace Management",
    description:
      "Transform your workplace efficiency with our comprehensive management software, simplifying tasks and boosting productivity.",
    products: [
      { name: "CA Office", link: "CAOffice" },
      { name: "Advocate Office", link: "AdvocateOffice" },
      { name: "Hotel Management System", link: "HotelManagement" },
      { name: "Visitor Management System", link: "VisitorManagement" },
      { name: "HR/Attendance/Payroll", link: "HRandPayroll" },
      { name: "Gym Management System", link: "GymManagement" },
    ],
    image: "/api/placeholder/800/600",
    icon: BriefcaseBusiness,
    link: "workplaceManagement",
  },
  {
    id: 5,
    link: "foodMarketplace",
    title: "Food Marketplace",
    icon: Utensils,
    description:
      "Elevate your food business with our marketplace software, connecting you with hungry customers and streamlining transactions.",
    products: [
      {
        name: "Restaurant Management System(Including POS)",
        link: "RestaurantManagement",
      },
      { name: "Application", link: "RestaurantManagement" },
    ],
    image: "/api/placeholder/800/600",
  },

  {
    id: 6,
    link: "education",
    title: "Education",
    icon: GraduationCap,
    description: `Education industry needs a digital influence to deal with the manual operations. 
    Optimize the user experience and boost the efficiency by implementing all of our features.`,
    products: [{ name: "School Management System", link: "SchoolManagement" }],
    image: "/api/placeholder/800/600",
  },

  {
    id: 7,
    link: "digitalMarketing",
    title: "Digital Marketing",
    icon: Tv,
    description:
      "Maximize your digital presence with our tailored marketing software, driving engagement and boosting brand visibility.",
    products: [
      { name: "SEO", link: "DigitalMarketing" },
      { name: "Social Media Marketing", link: "DigitalMarketing" },
      { name: "Content Marketing", link: "DigitalMarketing" },
      { name: "Pay/Click", link: "DigitalMarketing" },
    ],
    image: "/api/placeholder/800/600",
  },

  {
    id: 8,
    link: "manufacturing",
    title: "Manufacturing",
    icon: Factory,
    description:
      "Redefine manufacturing excellence with our specialized software suite, optimizing processes and ensuring operational efficiency.",
    products: [{ name: "ERP Software", link: "ERPSoftware" }],
    image: "/api/placeholder/800/600",
  },
  {
    id: 9,
    link: "websiteApplication",
    title: "Website & Application",
    icon: Globe,
    description:
      "Optimize the user experience and expand your reach to a larger audience by having your own dynamic website/application.",
    products: [
      { name: "Website", link: "WebsiteandApplication" },
      { name: "Application", link: "WebsiteandApplication" },
    ],
    image: "/api/placeholder/800/600",
  },
  {
    id: 10,
    link: "digitalVisitingCard",
    title: "Digital Visiting Card",
    icon: BookUser,
    description:
      "Make lasting impressions effortlessly with our digital visiting card solutions, redefining networking in a digital era.",
    products: [{ name: "DigIT-Hack NFC Card", link: "VisitingCard" }],
    image: "/api/placeholder/800/600",
  },
];
const TESTIMONIALS: Testimonial[] = [
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

const BRANDS: Brand[] = [
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
const NAV_LINKS = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "About", href: "/about" },
  {
    id: 3,
    label: "Services",
    href: "/services",
    children: SERVICES,
  },
  { id: 4, label: "Contact", href: "/contact" },
];
const ABOUT_CARDS: AboutCard[] = [
  {
    id: 1,
    title: "Innovative Solutions",
    description:
      "We stay ahead of the curve, leveraging cutting-edge technologies and strategies to keep you competitive in a marketplace.",
    icon: Lightbulb,
  },
  {
    id: 2,
    title: "Award-Winning Expertise",
    description:
      "Recognized by industry leaders, our award-winning team has a proven record of delivering excellence across projects.",
    icon: Award,
  },
  {
    id: 3,
    title: "Customer-Centric Approach",
    description:
      "Your success is our priority. We tailor our solutions to meet your unique needs, ensuring maximum impact and satisfaction.",
    icon: Headset,
  },
];
const CONTACT_INFO: ContactInfo[] = [
  {
    title: "Email Us",
    description: "info@digithack.in",
    icon: Mail,
    link: "mailto:info@digithack.in",
  },
  {
    title: "Call Us",
    description: "+91 7657024042\n+91 7653011501",
    icon: Phone,
    link: "tel:+917657024042",
  },
  {
    title: "Our Location",
    description: "Hbr layout, hennur cross, bangalore, Karnataka, 560043",
    icon: MapPin,
    link: "/",
  },
];
const FEATURED_SERVICES_LIMIT = 4;

export {
  SERVICES,
  TESTIMONIALS,
  BRANDS,
  NAV_LINKS,
  ABOUT_CARDS,
  FEATURED_SERVICES_LIMIT,
  CONTACT_INFO
};
