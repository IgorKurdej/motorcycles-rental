import { FC } from 'react';
import { useGetUserReservations } from '../../hooks/queries/useGetUserReservations';
import { IMotorcycle } from '../../libs/types';
import { UserReservationItem } from './components';

export const UserReservationsPage: FC = () => {
  const { data: reservations } = useGetUserReservations();

  return (
    <div className='flex flex-wrap items-center justify-center gap-8 py-6'>
      {reservations.map(({ expand, id, dateFrom, dateTo, price }) => {
        return (
          <UserReservationItem
            key={id}
            reservationId={id}
            motorcycle={expand.motorcycleId as IMotorcycle}
            dateFrom={dateFrom}
            dateTo={dateTo}
            price={price}
          />
        );
      })}
    </div>
  );
};
