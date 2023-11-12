import { UseQueryOptions, useQuery } from 'react-query';
import { pb } from '../../libs/pocketbase';
import { IReservation } from '../../libs/types';

const getUserReservations = (userId?: string): Promise<IReservation[]> => {
  return pb.collection('reservations').getFullList({
    filter: `userId="${userId}"`,
    expand: 'motorcycleId',
  });
};

export const useUserReservations = (
  options?: UseQueryOptions<IReservation[]>
) => {
  const loggedUserId = pb.authStore.model?.id;

  return useQuery({
    queryKey: ['userReservations', loggedUserId],
    queryFn: () => getUserReservations(loggedUserId),
    ...options,
  });
};
