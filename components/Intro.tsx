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
    <section className=" ">
      <div className=" flex justify-center items-center">
        <motion.div
          className=" relative flex justify-center items-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <Image
            src={avatar}
            alt=" Profile photo"
            priority={true}
            width={128}
            height={128}
            quality={95}
            className=" border-violet-500 dark:border-slate-800 border-4 rounded-full shadow-2xl mt-40 sm:mt-28"
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
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl lg:px-24 text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Hafiz,</span> I'm a{" "}
        <span className="font-bold">full-stack web developer.</span>
        {/*  with{" "}
        <span className="font-bold">8 years</span> of experience. */}{" "}
        I enjoy building{" "}
        <strong className="italic"> modern web apps & sites</strong> for{" "}
        <strong className="italic">small</strong> and{" "}
        <strong className="italic">medium </strong> size businesses, i currently focus on
        {" "}
        <span className=" font-semibold">
          Next.js/React, TypeScript/JavaScript, Tailwind CSS, PostgreSQL and Supabase
        </span>
        .
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
          className="group bg-primary dark:bg-white/10 text-gray-200 hover:text-gray-100 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition"
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
