import { z } from 'zod';
import {
  addNewReviewSchema,
  cartSummarySchema,
  loginSchema,
  reservationSchema,
  signupSchema,
  userSchema,
} from './schemas';
import { Record } from 'pocketbase';
import { ReactNode } from 'react';
import { Item } from 'react-use-cart';

export enum ReservationStatus {
  ended = 'ended',
  during = 'during',
  toRealize = 'toRealize',
}

export type Login = z.infer<typeof loginSchema>;
export type Signup = z.infer<typeof signupSchema>;
export type Reservation = z.infer<typeof reservationSchema>;
export type AddNewReview = z.infer<typeof addNewReviewSchema>;
export type User = z.infer<typeof userSchema>;
export type TCartSummary = z.infer<typeof cartSummarySchema>;

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

export interface IReservation extends Record {
  id: string;
  motorcycleId: string;
  userId: string;
  dateFrom: Date;
  dateTo: Date;
  price: string;
  extend: {
    motorcycleId: IMotorcycle;
  };
}

export type NewReservationBody = Pick<
  IReservation,
  'motorcycleId' | 'userId' | 'dateFrom' | 'dateTo' | 'price'
>;

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

export interface ICart extends Item {
  dateFrom: Date;
  dateTo: Date;
  numberOfDays: number;
}
