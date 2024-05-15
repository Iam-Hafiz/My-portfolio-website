"use client"
import React from 'react'
import avatar from "@/public/profile-sunset.png";
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/app/context/active-section-context';


export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section>
      <div className=" flex justify-center items-center">
        <motion.div
          className=" relative flex justify-center items-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <Image
            src={avatar}
            alt=" Profile photo"
            priority={true}
            width={128}
            height={128}
            quality={95}
            className=" border-violet-500 dark:border-slate-800 border-4 rounded-full shadow-2xl mt-40 sm:mt-28 hover:scale-105 transition-all"
          />
          <motion.div
            className=" absolute -left-2 bottom-1 text-4xl "
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            👋🏽
          </motion.div>
        </motion.div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl lg:px-16 text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <span className="font-bold">Hello, I'm Hafiz,</span> I enjoy building{" "}
        <strong className="italic"> modern web apps and sites</strong>. As a
        front-end developer, I specialize in creating appealing and
        user-friendly websites. My expertise lies in HTML, CSS, and JavaScript,
        and I’m well-versed in frameworks like{" "}
        <span className=" font-semibold">
          Next.js, React, Tailwind CSS and TypeScript
        </span>{" "}
        . Whether it’s designing a clean and intuitive interface or ensuring
        responsiveness across all devices, I’m committed to delivering{" "}
        <span className="font-bold">high-quality</span> work. If you have any
        specific project requirements, feel free to share them, and I’ll be
        happy to assist!😊👌.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-primary dark:bg-black text-gray-200 hover:text-gray-100 dark:hover:bg-gray-950 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me
        </Link>
      </motion.div>
    </section>
  );
}
