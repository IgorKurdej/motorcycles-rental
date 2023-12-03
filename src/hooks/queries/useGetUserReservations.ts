import {
  UseSuspenseQueryOptions,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { pb } from '../../libs/pocketbase';
import { IReservation } from '../../libs/types';

const getUserReservations = (userId?: string): Promise<IReservation[]> => {
  return pb.collection('reservations').getFullList({
    filter: `userId="${userId}"`,
    expand: 'motorcycleId',
  });
};

export const useGetUserReservations = (
  options?: UseSuspenseQueryOptions<IReservation[]>
) => {
  const loggedUserId = pb.authStore.model?.id;

  return useSuspenseQuery({
    queryKey: ['userReservations', loggedUserId],
    queryFn: () => getUserReservations(loggedUserId),
    ...options,
  });
};
