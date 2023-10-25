import { useMutation } from 'react-query';
import { pb } from '../../libs/pocketbase';
import { IReview } from '../../libs/types';

const addNewReview = async (data: IReview) => {
  const username = pb.authStore.model?.username;
  return await pb.collection('reviews').create({ author: username, ...data });
};

export const useAddNewReview = (handleSuccess: () => void) => {
  return useMutation({
    mutationFn: addNewReview,
    onSuccess: () => {
      handleSuccess();
    },
  });
};
