"use client"
import React from 'react'
import avatar from "@/public/95.jpg";
import Image from 'next/image';
import { motion } from "framer-motion";


export default function Intro() {
  return (
    <section className=" flex justify-center items-center">
      <motion.div
        className=" relative"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={avatar}
          alt=" Profile photo"
          priority={true}
          width={128}
          height={128}
          quality={100}
          className="border-white border-4 rounded-full mt-24 shadow-2xl"
        />
        <motion.div
          className=" absolute -left-2 bottom-1 text-4xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          👋🏽
        </motion.div>
      </motion.div>
    </section>
  );
}
