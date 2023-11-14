import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(1, { message: 'Pole wymagane' }).email({
    message: 'Niepoporawny email',
  }),
  password: z
    .string()
    .min(6, { message: 'Hasło musi posiadać minimum 6 znaków' }),
});

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

export const reservationSchema = z
  .object({
    dateFrom: z.coerce.date().refine((data) => data > new Date(), {
      message: 'Start date must be in the future',
    }),
    dateTo: z.coerce.date(),
  })
  .refine((data) => data.dateTo > data.dateFrom, {
    message: 'End date cannot be earlier than start date.',
    path: ['endDate'],
  });

export const addNewReviewSchema = z.object({
  message: z.string().min(1, { message: 'Pole wymagane' }),
  rate: z.number(),
});

export const userSchema = z.object({
  username: z.string().min(1, { message: 'Pole wymagene' }),
  email: z.string().min(1, { message: 'Pole wymagane' }),
});
