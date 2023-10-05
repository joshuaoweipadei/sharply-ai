import z from "zod";

export const contactSchema = z.object({
  fullname: z.string().min(2, { message: "Must be 2 or more characters long" }).max(30, { message: "Must be 30 or fewer characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(2, { message: "Must be 2 or more characters long" }).max(500, { message: "Must be 500 or fewer characters long" }),
});

export type Contact = z.infer<typeof contactSchema>;