"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeader from "./Section-header";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-12 w-[min(100%,40rem)] text-center"
      initial={{
        opacity: 0,
        y: "50%",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <SectionHeader>Contact me</SectionHeader>
      <p className=" dark:text-white/80">
        You may contact me directly at{" "}
        <a className="underline" href="mailto:hafadam13@gmail.com">
          hafadam13@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="grid w-full gap-2 mt-4">
        <Input type="email" placeholder="Email" />
        <Textarea 
          className=" h-48"
          placeholder="Type your message here." 
          name="message" />
        <Button>Send message</Button>
      </form>
    </motion.section>
  );
}
