"use client";

import React from "react";
import { skills } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeader from "./Section-header";

const Variants = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.04 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="scroll-mt-28 text-center max-w-5xl"
    >
      <SectionHeader>My skills</SectionHeader>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skills.map((skill, index) => (
          <motion.li
            className="bg-white rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 shadow-lg hover:shadow-xl hover:text-gray-950"
            key={index}
            variants={Variants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
