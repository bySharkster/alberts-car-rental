import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone must be at least 10 characters long"),
  isAdmin: z.boolean().default(false),
});

export type User = z.infer<typeof userSchema>;
