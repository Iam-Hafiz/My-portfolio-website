
function imagesUrl(baseUrl: string, qty: number): string[]  {
  let urls: string[] = []
  for (let index = 1; index <= qty; index++) {
    const element = baseUrl + `${index}` + '.png';
    urls.push(element);
  }
  return urls;
}

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

export const projectsData = [
  {
    title: "RealTime Tickets management system",
    description:
      "Improves efficiency, transparency, and accountability in handling customer inquiries and internal requests, leading to enhanced customer satisfaction and organizational productivity ",
    siteUrl: "https://ticketting-system.vercel.app/",
    features: [
      "User Authentication and Roles",
      "Ticket Creation",
      "Ticket Assignment",
      "Ticket Tracking",
      "Tickets Filter",
      "User profile updates",
      "Avatar upload",
      "Security and Compliance",
      "Terms & privacy policy",
    ],
    tags: [
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "JavaScript",
      "Framer Motion",
    ],
    imagesUrl: imagesUrl("/ticket", 14),
  },
  {
    title: "Digital products e-commerce",
    description:
      "An online platform that facilitates the buying and selling of digital products and services over the internet ",
    siteUrl: "https://digital-pro.cyclic.app/",
    features: [
      "Product Catalog",
      "Shopping Cart",
      "User Accounts",
      "Search and Navigation",
      "Product Pages",
      "Newsletter subscription",
    ],
    tags: [
      "JavaScript",
      "MongoDB",
      "Express",
      "Node.js",
      "CSS",
      "EJS",
      "Jquery",
      "Bootstrap",
    ],
    imagesUrl: imagesUrl("/ecommerce", 9),
  },
];

export const skills = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript",
  "Supabase",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Express",
  "Node.js",
  "Git",
  "GitHub",
  "Framer Motion",
  "Laravel",
  "PHP",
  "CSS",
  "HTML",
  "Jquery",
  "Bootstrap",
] as const;
