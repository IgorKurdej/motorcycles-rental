import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getImgSrc = (collectionId: string, id: string, image: string) => {
  return `${
    import.meta.env.VITE_DEVELOP_URL
  }/api/files/${collectionId}/${id}/${image}`;
};

export const sortNumbers = (a: number, b: number) => (a > b ? 1 : -1);
