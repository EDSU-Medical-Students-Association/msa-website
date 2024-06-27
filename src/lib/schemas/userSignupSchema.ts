import { z } from "zod";

export const userSignUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(7, "Password must be at least 6 characters long"),
});

export type UserSignUpSchema = z.infer<typeof userSignUpSchema>;
