import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(1, { message: 'Pole wymagane' }).email({
    message: 'Niepoporawny email',
  }),
  password: z
    .string()
    .min(6, { message: 'Hasło musi posiadać minimum 6 znaków' }),
});

export type Login = z.infer<typeof loginSchema>;

export const signupSchema = z
  .object({
    username: z.string().min(1, { message: 'Pole wymagane' }),
    email: z.string().min(1, { message: 'Pole wymagane' }).email({
      message: 'Niepoporawny email',
    }),
    password: z
      .string()
      .min(6, { message: 'Hasło musi posiadać minimum 6 znaków' }),
    passwordConfirm: z.string().min(1, { message: 'Pole wymagane' }),
    terms: z.literal(true, {
      errorMap: () => ({ message: 'Pole wymagane' }),
    }),
    // terms: z.boolean({
    //   required_error: 'Akceptacja warunków wymagana',
    // }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ['confirmPassword'],
    message: 'Hasła nie są takie same',
  });

export type Signup = z.infer<typeof signupSchema>;
