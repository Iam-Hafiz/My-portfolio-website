"use client";

import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";

export default function Header() {
  return (
    <motion.header
      className=" max-w-md z-50 fixed left-1/2 top-4 rounded-full bg-white border-white bg-opacity-80 border-opacity-70 backdrop-blur-3xl shadow-lg"
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
    >
      <nav className="flex justify-between items-center px-2 gap-1">
        {links.map((el) => (
          <Link key={el.name} href={el.name} className=" p-3 hover:text-blue-600">
            {el.name}
          </Link>
        ))}
      </nav>
    </motion.header>
  );
}
