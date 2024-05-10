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
import { Smile } from "lucide-react";

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
        checkbox: string[] | undefined;
      };
    };
      const initialState: initialStateProps = {
        message: "",
        errors: { 
        fullName: [],
        email: [],
        subject: [],
        message: [],
        checkbox: [],},
      };
    const [state, dispatch] = useFormState(sendEmail, initialState);
    const { ref } = useSectionInView("Contact");
    
    if (state.message.includes("successfully")) {
      setTimeout(() => {
        setFullName("")
        setEmail("")
        setSubject("")
        setMessage("")
      }, 1000);
    }
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="w-[min(100%,40rem)] mb-4 sm:my-4"
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeader>Contact me</SectionHeader>
{/*       <p className=" dark:text-white/80 hidden">
        You may contact me directly at{" "}
        <a className="underline text-blue-600" href="mailto:someone@gmail.com">
          someone@gmail.com
        </a>{" "}
        or through this form.
      </p> */}
      <form action={dispatch} className="grid w-full gap-2 mt-4 p-4 shadow-inner">
        <Input
          type="text"
          name="fullName"
          placeholder="Full name"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          aria-describedby="fullNameErr"
          className=" shadow-md"
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
          className=" shadow-md"
        />
        <div id="emailErr" aria-live="polite" aria-atomic="true">
          {state.errors?.email &&
            state.errors?.email.map((error) => (
              <p className="formErrors" key={error}>
                {error}
              </p>
            ))}
        </div>
        <Input
          type="text"
          name="subject"
          placeholder="Subject"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          aria-describedby="subjectErr"
          className=" shadow-md"
        />
        <div id="subjectErr" aria-live="polite" aria-atomic="true">
          {state.errors?.subject &&
            state.errors?.subject.map((error) => (
              <p className="formErrors" key={error}>
                {error}
              </p>
            ))}
        </div>
        <Textarea
          placeholder="Type your message here."
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          aria-describedby="messageErr"
          className=" min-h-24 sm:min-h-48 shadow-md"
        />
        <div id="messageErr" aria-live="polite" aria-atomic="true">
          {state.errors?.message &&
            state.errors?.message.map((error) => (
              <p className="formErrors" key={error}>
                {error}
              </p>
            ))}
        </div>
        <TermsCheckbox />
        <div id="checkboxErr" aria-live="polite" aria-atomic="true">
          {state.errors?.checkbox &&
            state.errors?.checkbox.map((error) => (
              <p className="formErrors" key={error}>
                {error}
              </p>
            ))}
        </div>
        {state.message?.includes("successfully") && (
          <p className=" flex justify-center items-center text-green-700">
            {" "}
            <Smile /> <span className=" pl-1">{state.message}</span>
          </p>
        )}
        <div className=" flex justify-center items-center">
          <SubmitBtn initValue={"Send message"} loadingValue={"Sending..."} />
        </div>
      </form>
    </motion.section>
  );
}
