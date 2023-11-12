import { UseQueryOptions, useQuery } from 'react-query';
import { Reservation } from '../../libs/types';
import { pb } from '../../libs/pocketbase';

const getReservationById = (id: string): Promise<Reservation> => {
  return pb.collection('reservations').getOne(id);
};

export const useReservationById = (
  id: string,
  options?: UseQueryOptions<Reservation>
) => {
  return useQuery({
    queryKey: ['reservationById', id],
    queryFn: () => getReservationById(id),
    ...options,
  });
};
