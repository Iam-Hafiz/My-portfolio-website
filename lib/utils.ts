import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod";

export const ContactSchema = z.object({
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
    .min(10, { message: "Subject must contain at least 10 character(s)" })
    .max(1000, {
      message: "Subject must contain at most 1000 character(s)",
    }),
  message: z
    .string()
    .trim()
    .toLowerCase()
    .min(50, { message: "Message must contain at least 50 character(s)" })
    .max(10000, {
      message: "Message must contain at most 10000 character(s)",
    }),
  checkbox: z
    .string({
      required_error: "Please accept the terms & condition and privacy policy",
      invalid_type_error:
        "Please accept the terms & condition and privacy policy",
    })
    .min(2, {
      message: "Please accept the terms & condition and privacy policy",
    }),
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }
  return message;
};

export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

