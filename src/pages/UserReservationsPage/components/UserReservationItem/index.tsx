import { FC, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getResevationStatus } from '../../../../libs/utils';
import { BadgeStatus } from './BadgeStatus';
import { AddReview } from './AddReview';
import { Badge } from '../../../../components/ui/badge';
import { format } from 'date-fns';
import { Button } from '../../../../components/ui/button';
import { IMotorcycle, ReservationStatus } from '../../../../libs/types';
import { Modal, ReservationForm } from '../../../../components';
import { pb } from '../../../../libs/pocketbase';

interface IProps {
  reservationId: string;
  dateFrom: Date;
  dateTo: Date;
  price: string;
  motorcycle: IMotorcycle;
}

export const UserReservationItem: FC<IProps> = ({
  reservationId,
  dateFrom,
  dateTo,
  price,
  motorcycle,
}) => {
  const { id, image, brand, model, pricePerDay } = motorcycle;

  const [isAddReviewModalOpen, setIsAddReviewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const reservationStatus = useMemo(
    () => getResevationStatus(dateFrom, dateTo),
    []
  );

  return (
    <>
      <div className='relative flex flex-col justify-between pt-2 overflow-hidden text-center border shadow w-72 rounded-xl animate-[wiggle_0.5s_ease]'>
        <Badge variant='secondary' className='absolute w-fit top-2 left-2'>
          {price} zł
        </Badge>
        <BadgeStatus status={reservationStatus} />
        <Link to={`/motorcycles/${id}`} relative='route'>
          <img
            src={pb.getFileUrl(motorcycle, image)}
            className='h-[175px] object-contain'
            alt='reservation-image'
          />
        </Link>

        <div className='flex flex-col gap-4 my-4'>
          <p className='text-lg font-medium'>
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
          motorcycleId={id}
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
            motorcycleId={id}
            reservationId={reservationId}
            oldReservationPrice={price}
            pricePerDay={pricePerDay}
            prevDateFrom={dateFrom}
            prevDateTo={dateTo}
            submitBtnText='Zapisz'
            setIsOpen={setIsEditModalOpen}
          />
        </Modal>
      )}
    </>
  );
};
