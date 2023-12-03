import { useMutation } from '@tanstack/react-query';
import { pb } from '../../libs/pocketbase';
import { User } from '../../libs/types';
import toast from 'react-hot-toast';

const updateUser = async (data: User) => {
  const userId = pb.authStore.model?.id;
  return pb.collection('users').update(userId || '', data);
};

export const useUpdateUserDetails = (handleSuccess: () => void) => {
  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      toast.success('Aktualizacja przebiegła pomyślnie!');
      handleSuccess();
    },
    onError: () => {
      toast.error('Coś poszło nie tak!');
    },
  });
};
