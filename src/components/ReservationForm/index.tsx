import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { Reservation } from '../../libs/types';
import { Dispatch, FC, SetStateAction, useMemo } from 'react';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { DateInput } from '../DateInput';
import { Button } from '../ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { reservationSchema } from '../../libs/schemas';
import { addDays, differenceInCalendarDays, subDays } from 'date-fns';
import { useReservationUpdate } from '../../hooks/mutations/useReservationUpdate';
import toast from 'react-hot-toast';
import { useCart } from 'react-use-cart';

interface IProps {
  reservationId?: string;
  motorcycleId: string;
  pricePerDay: number;
  prevDateFrom?: Date;
  prevDateTo?: Date;
  oldReservationPrice?: string;
  submitBtnText: string;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export const ReservationForm: FC<IProps> = ({
  reservationId,
  motorcycleId,
  pricePerDay,
  prevDateFrom,
  prevDateTo,
  submitBtnText,
  oldReservationPrice,
  setIsOpen,
}) => {
  const { mutate: updateReservation } = useReservationUpdate(
    reservationId || '',
    () => setIsOpen && setIsOpen(false)
  );

  const form = useForm<Reservation>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      dateFrom: prevDateFrom && new Date(prevDateFrom),
      dateTo: prevDateTo && new Date(prevDateTo),
    },
  });

  const { addItem, inCart } = useCart();
  // const [values, setValues] = useLocalStorage<Reservation[]>('cart', [], () => {
  //   toast.success('Dodano do koszyka');
  //   form.reset();
  // });

  const dateFrom = useWatch({
    control: form.control,
    name: 'dateFrom',
  });

  const dateTo = useWatch({
    control: form.control,
    name: 'dateTo',
  });

  const reservationDuration = useMemo(() => {
    return differenceInCalendarDays(dateTo, dateFrom);
  }, [dateFrom, dateTo]);

  const reservationPrice = useMemo(() => {
    return reservationDuration * +pricePerDay || 0;
  }, [reservationDuration]);

  const onSubmit: SubmitHandler<Reservation> = (data) => {
    if (reservationId) {
      updateReservation({ ...data, price: reservationPrice });
      return;
    }

    if (inCart(motorcycleId)) {
      toast.error('Nie możesz dodać tego samego produktu do koszyka');
      return;
    }

    addItem({
      id: motorcycleId,
      price: reservationPrice,
      numberOfDays: reservationDuration,
      ...data,
    });

    toast.success('Dodano do koszyka');
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
        <div className='flex gap-3'>
          <FormField
            control={form.control}
            name='dateFrom'
            render={({ field }) => (
              <FormItem className='flex flex-col flex-1'>
                <FormLabel>Rezerwacja od</FormLabel>
                <DateInput
                  date={field.value}
                  setDate={field.onChange}
                  disabledDates={[
                    {
                      before: addDays(new Date(), 1),
                    },
                    {
                      after: subDays(dateTo, 1),
                    },
                  ]}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='dateTo'
            render={({ field }) => (
              <FormItem className='flex flex-col flex-1'>
                <FormLabel>Rezerwacja do</FormLabel>
                <DateInput
                  date={field.value}
                  setDate={field.onChange}
                  defaultDate={dateFrom}
                  disabledDates={[
                    {
                      before: addDays(dateFrom, 1),
                    },
                  ]}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <p className='space-x-3 text-right'>
            <span className='text-lg'>
              Cena za {reservationDuration > 0 ? reservationDuration : 0} dni:
            </span>
            <span className='text-xl font-semibold'>{reservationPrice} zł</span>
          </p>
          {oldReservationPrice && (
            <p className='space-x-3 text-sm text-right text-gray-500'>
              Poprzednia cena rezerwacji {oldReservationPrice} zł
            </p>
          )}
        </div>
        <Button size='sm' className='w-full'>
          {submitBtnText}
        </Button>
      </form>
    </Form>
  );
};
