import React from "react";
import SocialMediaLinks from "./Social-media-links";

export default function Footer() {
  return (
    <footer className="my-4 sm:my-8 px-4 text-center flex flex-wrap justify-center items-center gap-3 relative">
      <SocialMediaLinks />
      <div className=" max-w-screen-md dark:text-gray-300">
        <div className="mb-2 block text-md">Copyright &copy; 2024 Hafiz.</div>
        <p className="text-md">
          <span className="font-semibold">About this website:</span> I built it
          with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion,
          Chadcn ui, Zod, React Email & Resend, Vercel hosting.
        </p>
        <div className=" bg-red-300 dark:bg-red-950 absolute top-0 -z-10 right-0 h-[5rem] w-2/3 rounded-full blur-[5rem] "></div>
        <div
          className=" bg-yellow-300 dark:bg-yellow-900 absolute top-0 -z-10 left-1/2 -translate-x-1/2 h-[5rem] w-1/5
        rounded-full blur-[6rem] dark:blur-[6rem]"
        ></div>
        <div
          className=" bg-violet-400 absolute top-0 -z-10 left-0 h-[5rem] w-full
        rounded-full blur-[5rem] dark:bg-indigo-950"
        ></div>
      </div>
      <div className=" px-2">
        <ul>
          <li>
            <a
              href="https://www.termsfeed.com/live/e873ab16-ef0c-4217-8a11-ce87f59d497b"
              className=" hover:text-blue-700 dark:hover:text-blue-700 text-gray-950 dark:text-gray-300 transition-all"
              target="_blank"
            >
              Privacy Policy{" "}
            </a>
          </li>
          <li>
            <a
              href="https://www.termsfeed.com/live/7cefafb7-3beb-4877-9205-a02e45409e51"
              className=" hover:text-blue-700 dark:hover:text-blue-700 text-gray-950 dark:text-gray-300 transition-all"
              target="_blank"
            >
              Terms & Conditions
            </a>
          </li>
          <li>
            <a
              href="https://www.termsfeed.com/live/53a6c827-e2fd-429e-9ee5-bfda6045d08e"
              className=" hover:text-blue-700 dark:hover:text-blue-700 text-gray-950 dark:text-gray-300 transition-all"
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
