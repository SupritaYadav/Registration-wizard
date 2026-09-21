import { z } from "zod";

export const registrationSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(1, "First name is required.")
      .regex(/^[A-Za-z ]+$/, "Use letters only."),
    lastName: z
      .string()
      .trim()
      .min(1, "Last name is required.")
      .regex(/^[A-Za-z ]+$/, "Use letters only."),
    dob: z.string().min(1, "Date of birth is required."),
    email: z
      .string()
      .trim()
      .min(1, "Email is required.")
      .email("Enter a valid email address."),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters."),
    confirmPassword: z.string().min(1, "Please confirm your password."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });