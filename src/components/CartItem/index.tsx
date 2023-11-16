import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ICart, Reservation } from '../../libs/types';
import { useGetMotorcycleById } from '../../hooks/queries/useGetMotorcycleById';
import { Trash2 } from 'lucide-react';
import { Control, UseFormRegister, useWatch } from 'react-hook-form';
import { differenceInCalendarDays, parseISO } from 'date-fns';
import { getImgSrc } from '../../libs/utils';
import { Button } from '../ui/button';
import { Modal } from '..';
import { CartItemForm } from './CartItemForm';
import { ITotalAmountItem } from '../../pages/CartPage';

interface IProps {
  idx: number;
  control: Control<ICart>;
  cartItem: Reservation;
  register: UseFormRegister<ICart>;
  handleRemove: (idx: number) => void;
  setTotal: Dispatch<SetStateAction<ITotalAmountItem[]>>;
}

export const CartItem: FC<IProps> = ({
  idx,
  control,
  cartItem: { motorcycleId },
  handleRemove,
  setTotal,
}) => {
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);

  const { data: motorcycle } = useGetMotorcycleById(motorcycleId || '');

  const dateFrom = useWatch({
    control: control,
    name: `cart.${idx}.dateFrom`,
  });

  const dateTo = useWatch({
    control: control,
    name: `cart.${idx}.dateTo`,
  });

  const reservationDuration = useMemo(() => {
    if (dateFrom && dateTo) {
      return differenceInCalendarDays(
        parseISO(dateTo.toString()),
        parseISO(dateFrom.toString())
      );
    }
    return 0;
  }, [dateFrom, dateTo]);

  const reservationPrice = useMemo(() => {
    if (reservationDuration || motorcycle) {
      return reservationDuration * motorcycle.price;
    }
    return 0;
  }, [reservationDuration]);

  useEffect(() => {
    if (reservationPrice) {
      setTotal((prev) => {
        const isExist = prev.find((item) => item.idx === idx);

        if (isExist) {
          return prev;
        }

        return [...prev, { idx: idx, price: reservationPrice }];
      });
    }
  }, [reservationPrice]);

  return (
    <>
      <div className='flex items-center gap-10 p-4'>
        <div className='flex items-center gap-5 mt-2'>
          <div className='h-40 my-auto w-60'>
            <img
              className='object-fill'
              src={getImgSrc('motorcycles', motorcycle.id, motorcycle.image)}
              alt='reservation-motorcycle-image'
            />
          </div>
        </div>

        <div className='flex-1 space-y-3'>
          <div className='flex items-center justify-between text-xl font-semibold'>
            <span>
              {motorcycle.brand} {motorcycle.model}
            </span>
            <Trash2
              onClick={() => setIsRemoveModalOpen(true)}
              size={18}
              className='text-gray-800 cursor-pointer'
            />
          </div>

          <CartItemForm
            idx={idx}
            control={control}
            dateFrom={dateFrom}
            dateTo={dateTo}
          />

          <p className='space-x-3 font-medium text-right'>
            <span>Cena za {reservationDuration} dni:</span>
            <span>{reservationPrice} zł</span>
          </p>
        </div>
      </div>

      {isRemoveModalOpen && (
        <Modal
          isOpen={isRemoveModalOpen}
          setIsOpen={setIsRemoveModalOpen}
          title='Przemyśl to jeszcze...'
          footer={
            <>
              <Button
                size='sm'
                variant='secondary'
                onClick={() => setIsRemoveModalOpen(false)}
              >
                Anuluj
              </Button>
              <Button
                size='sm'
                variant='destructive'
                onClick={() => handleRemove(idx)}
              >
                Tak, usuń
              </Button>
            </>
          }
        >
          <p>Czy na pewno chcesz usunąć rezerwację?</p>
        </Modal>
      )}
    </>
  );
};
