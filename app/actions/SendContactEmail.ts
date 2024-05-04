"use server";

import React from "react";
import { Resend } from "resend";
import ContactEmail from "../emails/ContactEmail";
import { z } from "zod";
import { getErrorMessage } from "@/lib/utils";

const resend = new Resend(`${process.env.RESEND_API_KEY}`);
const ContactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .toLowerCase()
    .min(2, { message: "full name must contain at least 2 character(s)" })
    .max(100, { message: "full name must contain at most 100 character(s)" }),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Invalid email address" })
    .min(5, { message: "Email must contain at least 5 character(s)" })
    .max(100, { message: "Email must contain at most 100 character(s)" }),
  subject: z
    .string()
    .trim()
    .toLowerCase()
    .min(50, { message: "Subject must contain at least 50 character(s)" })
    .max(1000, {
      message: "Subject must contain at most 1000 character(s)",
    }),
  message: z
    .string()
    .trim()
    .toLowerCase()
    .min(50, { message: "Message must contain at least 50 character(s)" })
    .max(1000, {
      message: "Message must contain at most 1000 character(s)",
    }),
});

const sendEmail = async (prevState: any, formData: FormData) => {
  const rawFormData = Object.fromEntries(formData.entries());
  const validatedFields = ContactSchema.safeParse(rawFormData);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please refill the fields correctly and try again!",
    };
  }
  const { fullName, email, subject, message } = validatedFields.data;
  let data;
  try {
    data = await resend.emails.send({
      from: `${fullName}` + "<onboarding@resend.dev>",
      to: "bytegrad@gmail.com",
      subject: subject,
      reply_to: email,
      react: React.createElement(ContactEmail, {
        fullName,
        email,
        subject,
        message,
      }),
    });
  } catch (error: unknown) {
    return {
      errors: {},
      message: getErrorMessage(error),
    };
  }
  console.log("data:", data);
  return {
    errors: {},
    message: "Sent successfully!",
  };
};

export {
    sendEmail,
}

