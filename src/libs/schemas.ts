import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(1, { message: 'Pole wymagane' }),
  password: z.string().min(1, { message: 'Pole wymagane' }),
});

export type Login = z.infer<typeof loginSchema>;
