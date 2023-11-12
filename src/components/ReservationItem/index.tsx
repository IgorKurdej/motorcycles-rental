import { FC, useMemo, useState } from 'react';
import { ReservationStatus } from '../../libs/types';
import { getImgSrc, getResevationStatus } from '../../libs/utils';
import { Button } from '../ui/button';
import { BadgeStatus } from './BadgeStatus';
import { AddReview } from './AddReview';
import { format } from 'date-fns';
import { Badge } from '../ui/badge';
import { Modal, ReservationForm } from '..';

interface IProps {
  reservationId: string;
  motorcycleId: string;
  image: string;
  brand: string;
  model: string;
  pricePerDay: number;
  dateFrom: Date;
  dateTo: Date;
  price: string;
}

export const ReservationItem: FC<IProps> = ({
  reservationId,
  motorcycleId,
  image,
  brand,
  model,
  pricePerDay,
  dateFrom,
  dateTo,
  price,
}) => {
  const [isAddReviewModalOpen, setIsAddReviewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

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
          src={getImgSrc('motorcycles', motorcycleId, image)}
          alt='reservation-image'
        />

        <div className='flex flex-col gap-4 my-4'>
          <p className='font-medium text-lg'>
            {brand} {model}
          </p>
          <div className='flex justify-around text-gray-600'>
            <div className='flex flex-col'>
              <span>Od</span>
              <span>{format(new Date(dateFrom), 'dd.MM.yyyy')}</span>
            </div>
            <div className='flex flex-col'>
              <span>Do</span>
              <span>{format(new Date(dateTo), 'dd.MM.yyyy')}</span>
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
            onClick={() => setIsEditModalOpen(true)}
            disabled={reservationStatus !== ReservationStatus.toRealize}
          >
            Edytuj
          </Button>
        </div>
      </div>

      {isAddReviewModalOpen && (
        <AddReview
          motorcycleId={motorcycleId}
          isOpen={isAddReviewModalOpen}
          setIsOpen={setIsAddReviewModalOpen}
        />
      )}

      {isEditModalOpen && (
        <Modal
          title='Edytuj rezerwacje'
          isOpen={isEditModalOpen}
          setIsOpen={setIsEditModalOpen}
        >
          <ReservationForm
            reservationId={reservationId}
            pricePerDay={pricePerDay}
            dateFrom={dateFrom}
            dateTo={dateTo}
            submitBtnText='Zapisz'
            setIsOpen={setIsEditModalOpen}
          />
        </Modal>
      )}
    </>
  );
};
