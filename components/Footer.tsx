import React from "react";
import SocialMediaLinks from "./Social-media-links";

export default function Footer() {
  return (
    <footer className="mb-4 px-4 text-center flex flex-wrap justify-center items-center gap-3">
      <SocialMediaLinks />
      <div className=" max-w-screen-md">
        <div className="mb-2 block text-md">Copyright &copy; 2024 Hafiz.</div>
        <p className="text-md">
          <span className="font-semibold">About this website:</span> I built it with
          Next.js App Router, TypeScript, Tailwind
          CSS, Framer Motion, Chadcn ui, Zod, React Email & Resend, Vercel
          hosting.
        </p>
      </div>
      <div className=" px-2">
        <ul>
          <li>
            <a
              href="https://www.termsfeed.com/live/e873ab16-ef0c-4217-8a11-ce87f59d497b"
              className=" text-blue-600"
              target="_blank"
            >
              Privacy Policy{" "}
            </a>
          </li>
          <li>
            <a
              href="https://www.termsfeed.com/live/7cefafb7-3beb-4877-9205-a02e45409e51"
              className=" text-blue-600"
              target="_blank"
            >
              Terms & Conditions
            </a>
          </li>
          <li>
            <a
              href="https://www.termsfeed.com/live/53a6c827-e2fd-429e-9ee5-bfda6045d08e"
              className=" text-blue-600"
              target="_blank"
            >
              Disclaimer
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
