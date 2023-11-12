import { useMutation, useQueryClient } from 'react-query';
import { pb } from '../../libs/pocketbase';
import { Reservation } from '../../libs/types';
import { format } from 'date-fns';
import toast from 'react-hot-toast';

interface IReservationWithPrice extends Reservation {
  price: number;
}

const updateReservation = async (
  data: IReservationWithPrice,
  reservationId: string
) => {
  const { startDate, endDate, price } = data;
  return pb.collection('reservations').update(reservationId, {
    dateFrom: format(startDate, 'yyyy-MM-dd 12:00:00'),
    dateTo: format(endDate, 'yyyy-MM-dd 12:00:00'),
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
