import { UseQueryOptions, useQuery } from 'react-query';
import { pb } from '../../libs/pocketbase';
import { IReservation } from '../../libs/types';

const getUserReservations = (userId?: string): Promise<IReservation[]> => {
  const loggedUserId = pb.authStore.model?.id;
  return pb.collection('reservations').getFullList({
    filter: `userId="${userId || loggedUserId}"`,
    expand: 'motorcycleId',
  });
};

export const useUserReservations = (
  userId?: string,
  options?: UseQueryOptions<IReservation[]>
) => {
  return useQuery({
    queryKey: ['userReservations'],
    queryFn: () => getUserReservations(userId),
    ...options,
  });
};
