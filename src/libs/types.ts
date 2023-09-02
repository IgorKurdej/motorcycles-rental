import { z } from 'zod';
import { loginSchema, signupSchema } from './schemas';
import { Record } from 'pocketbase';

export type Login = z.infer<typeof loginSchema>;
export type Signup = z.infer<typeof signupSchema>;

export interface IMotorcycle extends Record {
  brand: string;
  model: string;
  year: number;
  enginePower: number;
  engineCapacity: number;
  price: number;
  image: string;
}
