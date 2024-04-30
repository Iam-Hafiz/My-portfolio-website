"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/app/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <motion.header
      className=" max-w-md z-50 fixed left-1/2 top-4 rounded-full bg-white border-white bg-opacity-80 border-opacity-70 backdrop-blur-3xl shadow-lg"
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
    >
      <nav className="relative flex justify-between items-center px-2 gap-1">
        {links.map((el) => (
          <Link
            key={el.name}
            href={el.hash}
            className={clsx(
              "relative p-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
              {
                "text-primary dark:text-gray-200 font-bold": activeSection === el.name,
              }
            )}
            onClick={() => {
              setActiveSection(el.name);
              setTimeOfLastClick(Date.now());
            }}
          >
            {el.name}
            {el.name === activeSection && (
              <motion.span
                className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                layoutId="activeSection"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              ></motion.span>
            )}
          </Link>
        ))}
      </nav>
    </motion.header>
  );
}
