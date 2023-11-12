import { FC } from 'react';
import { useUserReservations } from '../../hooks/queries/useUserReservations';
import { IMotorcycle } from '../../libs/types';
import { ReservationItem } from '../../components';

export const ReservationsPage: FC = () => {
  const { data: reservations } = useUserReservations();

  return (
    <div className='flex flex-wrap items-center justify-center gap-8'>
      {reservations?.map(({ expand, id, dateFrom, dateTo, price }) => {
        const {
          id: motorcycleId,
          price: pricePerDay,
          image,
          brand,
          model,
        } = expand.motorcycleId as IMotorcycle;

        return (
          <ReservationItem
            key={id}
            reservationId={id}
            motorcycleId={motorcycleId}
            image={image}
            brand={brand}
            model={model}
            pricePerDay={pricePerDay}
            dateFrom={dateFrom}
            dateTo={dateTo}
            price={price}
          />
        );
      })}
    </div>
  );
};
