import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { Reservation } from '../../libs/types';
import { Dispatch, FC, SetStateAction, useMemo, useState } from 'react';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { DateInput } from '../DateInput';
import { Button } from '../ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { reservationSchema } from '../../libs/schemas';
import { addDays, differenceInCalendarDays, subDays } from 'date-fns';
import { useReservationUpdate } from '../../hooks/mutations/useReservationUpdate';

interface IProps {
  reservationId?: string;
  pricePerDay: number;
  dateFrom?: Date;
  dateTo?: Date;
  oldReservationPrice?: string;
  submitBtnText: string;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export const ReservationForm: FC<IProps> = ({
  reservationId,
  pricePerDay,
  dateFrom,
  dateTo,
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
      startDate: dateFrom && new Date(dateFrom),
      endDate: dateTo && new Date(dateTo),
    },
  });

  const startDate = useWatch({
    control: form.control,
    name: 'startDate',
  });

  const endDate = useWatch({
    control: form.control,
    name: 'endDate',
  });

  const reservationDuration = useMemo(() => {
    return differenceInCalendarDays(endDate, startDate);
  }, [startDate, endDate]);

  const reservationPrice = useMemo(() => {
    return reservationDuration * +pricePerDay || 0;
  }, [reservationDuration]);

  const onSubmit: SubmitHandler<Reservation> = (data) => {
    if (reservationId) {
      updateReservation({ ...data, price: reservationPrice });
      return;
    }

    console.log('DODANO DO KOSZYKA');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
        <div className='flex gap-3'>
          <FormField
            control={form.control}
            name='startDate'
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
                      after: subDays(endDate, 1),
                    },
                  ]}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='endDate'
            render={({ field }) => (
              <FormItem className='flex flex-col flex-1'>
                <FormLabel>Rezerwacja do</FormLabel>
                <DateInput
                  date={field.value}
                  setDate={field.onChange}
                  disabledDates={[
                    {
                      before: addDays(startDate, 1),
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
