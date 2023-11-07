import { FC, useMemo, useState } from 'react';
import { IMotorcycle, ReservationStatus } from '../../libs/types';
import { getImgSrc, getResevationStatus } from '../../libs/utils';
import { Button } from '../ui/button';
import { BadgeStatus } from './BadgeStatus';
import { AddReview } from './AddReview';
import { format } from 'date-fns';
import { Badge } from '../ui/badge';

interface IProps {
  motorcycle: IMotorcycle;
  dateFrom: Date;
  dateTo: Date;
}

export const ReservationItem: FC<IProps> = ({
  motorcycle,
  dateFrom,
  dateTo,
}) => {
  const [isAddReviewModalOpen, setIsAddReviewModalOpen] = useState(false);

  const { id, image, brand, model, price } = motorcycle;

  const reservationStatus = useMemo(
    () => getResevationStatus(dateFrom, dateTo),
    []
  );

  return (
    <>
      <div className='w-72 text-center shadow border rounded-xl flex flex-col justify-between overflow-hidden relative pt-2'>
        <Badge variant='secondary' className='w-fit absolute top-2 left-2'>
          {price} zł
        </Badge>
        <BadgeStatus status={reservationStatus} />
        <img
          className='h-[175px] object-contain'
          src={getImgSrc('motorcycles', id, image)}
          alt='reservation-image'
        />

        <div className='flex flex-col gap-4 my-4'>
          <p className='font-medium text-lg'>
            {brand} {model}
          </p>
          <div className='flex justify-around text-gray-600'>
            <div className='flex flex-col'>
              <span>Od</span>
              <span>15.09.2023</span>
            </div>
            <div className='flex flex-col'>
              <span>Do</span>
              <span>18.09.2023</span>
            </div>
          </div>
        </div>

        <div className='w-full flex gap-[1px]'>
          <Button
            className='flex-1 rounded-none'
            onClick={() => setIsAddReviewModalOpen(true)}
            disabled={reservationStatus !== ReservationStatus.ended}
          >
            Oceń
          </Button>
          <Button
            className='flex-1 rounded-none'
            disabled={reservationStatus !== ReservationStatus.toRealize}
          >
            Edytuj
          </Button>
        </div>
      </div>

      {isAddReviewModalOpen && (
        <AddReview
          motorcycleId={id}
          isOpen={isAddReviewModalOpen}
          setIsOpen={setIsAddReviewModalOpen}
        />
      )}
    </>
  );
};
