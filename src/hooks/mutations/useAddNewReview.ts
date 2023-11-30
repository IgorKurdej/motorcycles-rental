import { useMutation } from '@tanstack/react-query';
import { pb } from '../../libs/pocketbase';
import { IReview } from '../../libs/types';
import toast from 'react-hot-toast';

const addNewReview = async (data: IReview) => {
  const user = pb.authStore.model;
  return await pb
    .collection('reviews')
    .create({ author: user?.username, userId: user?.id, ...data });
};

export const useAddNewReview = (handleSuccess: () => void) => {
  return useMutation({
    mutationFn: addNewReview,
    onSuccess: () => {
      toast.success('Dodano opinie.');
      handleSuccess();
    },
    onError: () => {
      toast.error('Coś poszło nie tak. Spróbuj ponownie później.');
    },
  });
};
