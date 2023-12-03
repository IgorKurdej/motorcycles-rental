import { useMutation } from '@tanstack/react-query';
import { NewReservationBody } from '../../libs/types';
import { pb } from '../../libs/pocketbase';
import toast from 'react-hot-toast';

const createNewReservation = async (data: NewReservationBody[]) => {
  const promises = data.map((item) =>
    pb.collection('reservations').create(item, { $autoCancel: false })
  );

  return await Promise.all(promises);
};

export const useAddNewReservation = (handleSuccess: () => void) => {
  return useMutation({
    mutationFn: createNewReservation,
    onSuccess: () => {
      toast.success('Rezerwacja potwierdzona');
      handleSuccess();
    },
    onError: () => {
      toast.error('Coś poszło nie tak');
    },
  });
};
