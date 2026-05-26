import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 charecters")
});

// Automatically generate the TypeScript type from the schema
export type User = z.infer<typeof userSchema>;
