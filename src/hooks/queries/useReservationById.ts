import {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { Reservation } from '../../libs/types';
import { pb } from '../../libs/pocketbase';

const getReservationById = (id: string): Promise<Reservation> => {
  return pb.collection('reservations').getOne(id);
};

export const useReservationById = (
  id: string,
  options?: UseSuspenseQueryOptions<Reservation>
) => {
  return useSuspenseQuery({
    queryKey: ['reservationById', id],
    queryFn: () => getReservationById(id),
    ...options,
  });
};
