"use server";

import React from "react";
import { Resend } from "resend";
import ContactEmail from "../emails/ContactEmail";
import { capitalizeFirstLetter, ContactSchema, getErrorMessage } from "@/lib/utils";

const sendEmail = async (prevState: any, formData: FormData) => {
  const rawFormData = Object.fromEntries(formData.entries());
  const validatedFields = ContactSchema.safeParse(rawFormData);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "",
    };
  }
  const { fullName, email, subject, message } = validatedFields.data;
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data, error } = await resend.emails.send({
      from: `${capitalizeFirstLetter(fullName)}` + "<onboarding@resend.dev>",
      to: "hafizdotteck@gmail.com",
      subject: capitalizeFirstLetter(subject),
      reply_to: email,
      react: React.createElement(ContactEmail, {
        fullName,
        email,
        subject,
        message,
      }),
    });
    // data is null or an object with id prop 
    // error is null or an object with message prop

    if(!data){ 
         return {
           errors: {},
           message:
             "Could not sent message, Something went wrong!",
         }; 
    }

  } catch (error: unknown) {
    return {
      errors: {},
      message: getErrorMessage(error),
    };
  }
  return {
    errors: {},
    message:
      "Sent successfully congratulations! I'll reply soon, thank you",
  };
};

export {
    sendEmail,
}

