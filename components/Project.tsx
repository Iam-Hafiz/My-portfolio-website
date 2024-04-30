"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ImagesSlider from "./ImagesSlider";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imagesUrl,
  siteUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-2 last:mb-0"
    >
      <section className="bg-gray-100 max-w-6xl border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="p-4 sm:max-w-[100%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 mb-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
            <a
              href={siteUrl}
              target="_blank"
              className=" text-blue-700 hover:text-violet-600 underline"
            >
              Visit the website here.
            </a>
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-white borderBlack rounded-xl px-3 py-1 dark:bg-white dark:text-white uppercase tracking-wider"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 mb-14 pl-4 pr-4">
          <ImagesSlider imagesUrl={imagesUrl} />
        </div>
      </section>
    </motion.div>
  );
}
