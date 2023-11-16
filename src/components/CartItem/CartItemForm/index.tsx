import { FC } from 'react';
import { Control } from 'react-hook-form';
import { ICart, Reservation } from '../../../libs/types';
import { FormField, FormItem, FormLabel, FormMessage } from '../../ui/form';
import { DateInput } from '../../DateInput';
import { addDays, parseISO, subDays } from 'date-fns';

interface IProps {
  idx: number;
  control: Control<ICart>;
  dateFrom: Date;
  dateTo: Date;
}

export const CartItemForm: FC<IProps> = ({
  idx,
  control,
  dateFrom,
  dateTo,
}) => {
  return (
    <div className='flex gap-4'>
      <FormField
        control={control}
        name={`cart.${idx}.dateFrom`}
        render={({ field: { value, onChange } }) => (
          <FormItem className='flex flex-col flex-1'>
            <FormLabel>Rezerwacja od</FormLabel>
            <DateInput
              date={new Date(value)}
              setDate={onChange}
              disabledDates={[
                {
                  before: addDays(new Date(), 1),
                },
                {
                  after: subDays(parseISO(dateTo.toString()), 1),
                },
              ]}
            />
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`cart.${idx}.dateTo`}
        render={({ field: { value, onChange } }) => (
          <FormItem className='flex flex-col flex-1'>
            <FormLabel>Rezerwacja do</FormLabel>
            <DateInput
              date={new Date(value)}
              setDate={onChange}
              disabledDates={[
                {
                  before: addDays(parseISO(dateFrom.toString()), 1),
                },
              ]}
            />
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
