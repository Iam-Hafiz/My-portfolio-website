"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeader from "./Section-header";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import SubmitBtn from "./SubmitBtn";
import TermsCheckbox from "./TermsCheckbox";
import { useFormState } from "react-dom";
import { sendEmail } from "@/app/actions/SendContactEmail";

export default function Contact() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    type initialStateProps = {
      message: string;
      errors: {
        fullName: string[] | undefined;
        email: string[] | undefined;
        subject: string[] | undefined;
        message: string[] | undefined;
      };
    };
      const initialState: initialStateProps = {
        message: "",
        errors: { 
        fullName: [],
        email: [],
        subject: [],
        message: [],},
      };
    const [state, dispatch] = useFormState(sendEmail, initialState);
    const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-12 w-[min(100%,40rem)] "
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
      <p className=" dark:text-white/80 ">
        You may contact me directly at{" "}
        <a
          className="underline text-blue-600"
          href="mailto:hafadam13@gmail.com"
        >
          hafadam13@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form action={dispatch} className="grid w-full gap-2 mt-4">
        <Input
          type="text"
          name="fullName"
          placeholder="Full name"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          autoFocus
          aria-describedby="fullNameErr"
        />
        <div id="fullNameErr" aria-live="polite" aria-atomic="true">
          {state.errors?.fullName &&
            state.errors?.fullName.map((error) => (
              <p className="formErrors" key={error}>
                {error}
              </p>
            ))}
        </div>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          aria-describedby="emailErr"
        />
        <Input
          type="text"
          name="subject"
          placeholder="Subject"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          aria-describedby="subjectErr"
        />
        <Textarea
          className=" min-h-24 sm:min-h-48"
          placeholder="Type your message here."
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          aria-describedby="messageErr"
        />
        <TermsCheckbox />
        <SubmitBtn initValue={"Send message"} loadingValue={"Sending..."} />
      </form>
    </motion.section>
  );
}
