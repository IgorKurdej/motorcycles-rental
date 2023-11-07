import { FC } from 'react';
import { useUserReservations } from '../../hooks/queries/useUserReservations';
import { IMotorcycle } from '../../libs/types';
import { ReservationItem } from '../../components';

export const ReservationsPage: FC = () => {
  const { data: reservations } = useUserReservations();

  return (
    <div className='flex flex-wrap items-center justify-center gap-8'>
      {reservations?.map((item) => (
        <ReservationItem
          key={item.id}
          motorcycle={item.expand.motorcycleId as IMotorcycle}
          dateFrom={item.dateFrom}
          dateTo={item.dateTo}
        />
      ))}
    </div>
  );
};
