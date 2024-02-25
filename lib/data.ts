import tickets1 from "@/public/tickets1.png.png";
import ecommerce1 from "@/public/ecommerce1.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projects = [
  {
    title: "RealTime Tickets management system",
    description:
      "Improves efficiency, transparency, and accountability in handling customer inquiries and internal requests, leading to enhanced customer satisfaction and organizational productivity...",
    features: ["User Authentication and Roles", "Ticket Creation", "Ticket Assignment", "Ticket Tracking", "Tickets Filter", "User profile updates", "Avatar upload", "Security and Compliance","Terms & privacy policy"],
    tags: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS", "JavaScript"],
    imageUrl: tickets1,
  },
  {
    title: "Digital products e-commerce",
    description:
      "An online platform that facilitates the buying and selling of digital products and services over the internet.",
    features: ["Product Catalog", "Shopping Cart", "User Accounts", "Search and Navigation", "Product Pages", "Newsletter subscription"],
    tags: ["JavaScript", "MongoDB", "Express","Node.js", "CSS", "EJS"],
    imageUrl: ecommerce1,
  },
] as const;

export const skills = [
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript",
  "Supabase",
  "PostgreSQL",
  "MongoDB",
  "Express",
  "Node.js",
  "Git",
  "GitHub",
  "Framer Motion",
  "CSS",
  "HTML",
] as const;
