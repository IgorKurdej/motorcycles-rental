import { z } from 'zod';
import {
  addNewReviewSchema,
  loginSchema,
  reservationSchema,
  signupSchema,
} from './schemas';
import { Record } from 'pocketbase';
import { ReactNode } from 'react';

export type Login = z.infer<typeof loginSchema>;
export type Signup = z.infer<typeof signupSchema>;
export type Reservation = z.infer<typeof reservationSchema>;
// export type AddNewReview = z.infer<typeof addNewReviewSchema>;

export interface IMotorcycle extends Record {
  brand: string;
  model: string;
  year: number;
  enginePower: number;
  engineCapacity: number;
  price: number;
  image: string;
  reviews: IReview[];
}

export interface IReview extends Record {
  message: string;
  rate: 1 | 2 | 3 | 4 | 5;
  user: string;
  motorcycleId: string;
}

export interface IAccordionOption {
  value: string;
  header: string;
  content: ReactNode;
}
