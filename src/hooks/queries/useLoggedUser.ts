import { useSuspenseQuery } from '@tanstack/react-query';
import { pb } from '../../libs/pocketbase';

const getLoggedUser = () => {
  const userId = pb?.authStore?.model?.id;
  return pb.collection('users').getOne(userId || '');
};

export const useLoggedUser = () => {
  return useSuspenseQuery({
    queryKey: ['loggedUser'],
    queryFn: getLoggedUser,
  });
};
