import { useMutation, useQueryClient } from '@tanstack/react-query';
import { pb } from '../../libs/pocketbase';
import { Reservation } from '../../libs/types';
import { format } from 'date-fns';
import toast from 'react-hot-toast';

interface IReservationWithPrice extends Reservation {
  price: number;
}

const updateReservation = (
  data: IReservationWithPrice,
  reservationId: string
) => {
  const { dateFrom, dateTo, price } = data;
  return pb.collection('reservations').update(reservationId, {
    dateFrom: format(dateFrom, 'yyyy-MM-dd 12:00:00'),
    dateTo: format(dateTo, 'yyyy-MM-dd 12:00:00'),
    price: price,
  });
};

export const useReservationUpdate = (
  reservationId: string,
  handleSuccess: () => void
) => {
  const qc = useQueryClient();
  const loggedUserId = pb.authStore.model?.id;

  return useMutation({
    mutationFn: (data: IReservationWithPrice) =>
      updateReservation(data, reservationId),
    onSuccess: () => {
      handleSuccess();
      toast.success('Edycja przebiegła pomyślnie.');
      qc.invalidateQueries({
        queryKey: ['userReservations', loggedUserId],
      });
    },
  });
};
