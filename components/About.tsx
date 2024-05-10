"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./Section-header";
import { useSectionInView } from "@/lib/hooks";
import { ArrowDownToLine } from "lucide-react";

export default function About() {
  const { ref } = useSectionInView("About");  

  return (
    <motion.section
      className="max-w-[45rem] text-center leading-8 scroll-mt-28 text-xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeader>About me</SectionHeader>
      <p className="mb-3">
        I studied Computer engineering at university of gezira in Sudan, I also
        enrolled in a coding bootcamp at 3w academy in France and learned{" "}
        <span className="font-medium">full-stack web development</span>. My core
        stack is{" "}
        <span className="font-medium">
          Next.js, TypeScript, Tailwind CSS, Javascript, Supabase, Postgresql,
          Node.js, and MongoDB
        </span>
        . I am always looking to learn new technologies. I am currently looking
        for a <span className="font-medium">full-time position</span> as a
        software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games and watching football games with friends. I also enjoy{" "}
        <span className="font-medium">learning new things </span>.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium mt-4">
        <a
          className="group bg-primary text-gray-200 hover:text-gray-100  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/Front-end-CV-Hafiz.pdf"
          download
        >
          Download resume / CV
          <ArrowDownToLine />
        </a>
      </div>
    </motion.section>
  );
}
