import { FC, useEffect, useState } from 'react';
import { ICart } from '../../../../libs/types';
import { useGetMotorcycleById } from '../../../../hooks/queries/useGetMotorcycleById';
import { Trash2 } from 'lucide-react';
import {
  addDays,
  differenceInCalendarDays,
  format,
  parseISO,
  subDays,
} from 'date-fns';
import { Button } from '../../../../components/ui/button';
import { Modal } from '../../../../components';
import { useCart } from 'react-use-cart';
import { DateInput } from '../../../../components';
import { Label } from '../../../../components/ui/label';
import { useIsMount } from '../../../../hooks/useIsMount';
import { pb } from '../../../../libs/pocketbase';

interface IProps {
  cartItem: ICart;
}

export const CartItem: FC<IProps> = ({
  cartItem: { id, dateFrom: from, dateTo: to, price, numberOfDays },
}) => {
  const isMount = useIsMount();

  const [dateFrom, setDateFrom] = useState<Date>(from);
  const [dateTo, setDateTo] = useState<Date>(to);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);

  const { removeItem, updateItem } = useCart();

  const { data: motorcycle } = useGetMotorcycleById(id || '');

  useEffect(() => {
    if (!isMount) {
      return;
    }

    handleCardItemChange(dateFrom, dateTo);
  }, [dateFrom, dateTo]);

  const handleCardItemChange = (dateFrom: Date, dateTo: Date) => {
    if (motorcycle) {
      const reservationDuration = differenceInCalendarDays(
        parseISO(format(new Date(dateTo), 'yyyy-MM-dd')),
        parseISO(format(new Date(dateFrom), 'yyyy-MM-dd'))
      );

      const newPrice = reservationDuration * motorcycle.price;

      updateItem(id, {
        dateFrom,
        dateTo,
        price: newPrice,
        numberOfDays: reservationDuration,
      });
    }
  };

  return (
    <>
      <div className='flex flex-col items-center gap-4 p-4 sm:gap-10 sm:flex-row animate-[wiggle_0.5s_ease]'>
        <div className='flex items-center gap-5 mt-2'>
          <div className='h-40 my-auto w-60'>
            <img
              src={pb.getFileUrl(motorcycle, motorcycle.image)}
              className='object-fill'
              alt='reservation-motorcycle-image'
            />
          </div>
        </div>

        <div className='w-full space-y-3 '>
          <div className='flex items-center justify-between gap-3 text-xl font-semibold'>
            <span>
              {motorcycle.brand} {motorcycle.model}
            </span>
            <Trash2
              onClick={() => setIsRemoveModalOpen(true)}
              size={18}
              className='text-gray-800 cursor-pointer'
            />
          </div>

          <div className='flex flex-col gap-1 lg:gap-4 lg:flex-row'>
            <div className='flex-1'>
              <Label>Rezerwacja od</Label>
              <DateInput
                date={new Date(dateFrom)}
                setDate={setDateFrom}
                disabledDates={[
                  {
                    before: addDays(new Date(), 1),
                  },
                  {
                    after: subDays(
                      parseISO(format(new Date(dateTo), 'yyyy-MM-dd')),
                      1
                    ),
                  },
                ]}
              />
            </div>
            <div className='flex-1'>
              <Label>Rezerwacja do</Label>
              <DateInput
                date={new Date(dateTo)}
                setDate={setDateTo}
                disabledDates={[
                  {
                    before: addDays(
                      parseISO(format(new Date(dateFrom), 'yyyy-MM-dd')),
                      1
                    ),
                  },
                ]}
              />
            </div>
          </div>

          <p className='space-x-2 font-medium text-right'>
            {`${numberOfDays} dni / ${price} zł`}
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
                variant='secondary'
                onClick={() => setIsRemoveModalOpen(false)}
              >
                Anuluj
              </Button>
              <Button
                variant='destructive'
                onClick={() => {
                  removeItem(id);
                  setIsRemoveModalOpen(false);
                }}
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
