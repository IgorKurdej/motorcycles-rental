import { type ClassValue, clsx } from 'clsx';
import { isAfter, isBefore } from 'date-fns';
import { twMerge } from 'tailwind-merge';
import { ReservationStatus } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getImgSrc = (collectionId: string, id: string, image: string) => {
  return `${
    import.meta.env.VITE_DEVELOP_URL
  }/api/files/${collectionId}/${id}/${image}`;
};

export const sortNumbers = (a: number, b: number) => (a > b ? 1 : -1);

export const getResevationStatus = (dateFrom: Date, dateTo: Date) => {
  const today = new Date();

  if (isBefore(today, new Date(dateFrom))) return ReservationStatus.toRealize;
  if (isAfter(today, new Date(dateTo))) return ReservationStatus.ended;
  return ReservationStatus.during;
};
