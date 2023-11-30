import { FC } from 'react';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Controller, SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { TCartSummary } from '../../libs/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { cartSummarySchema } from '../../libs/schemas';
import { useCart } from 'react-use-cart';
import toast from 'react-hot-toast';
import { pb } from '../../libs/pocketbase';
import { Link, useNavigate } from 'react-router-dom';
import { useAddNewReservation } from '../../hooks/mutations/useAddNewReservation';
import { format, parseISO } from 'date-fns';

const DISCOUNT_CODE = 'rabat';

export const CartSummary: FC = () => {
  const { cartTotal, items, isEmpty, emptyCart } = useCart();
  const navigate = useNavigate();

  const isAuth = pb.authStore.isValid;
  const loggedUser = pb.authStore.model?.id;

  const { mutateAsync } = useAddNewReservation(() => {});

  const form = useForm<TCartSummary>({
    resolver: zodResolver(cartSummarySchema),
  });

  const {
    formState: { errors },
    control,
    register,
    handleSubmit,
    getValues,
    setValue,
  } = form;

  const isCodeValid = useWatch({
    control,
    name: 'isCodeValid',
  });

  const handleDiscountCodeApply = () => {
    if (getValues('discountCode')?.toLocaleLowerCase() !== DISCOUNT_CODE) {
      toast.error('Kod rabatowy jest niepoprawny');
      return;
    }

    setValue('isCodeValid', true);
    toast.success('Zastosowano kod rabatowy');
  };

  const onSubmit: SubmitHandler<TCartSummary> = ({ isCodeValid }) => {
    mutateAsync(
      items.map(({ price, dateFrom, dateTo, id }) => ({
        userId: loggedUser || '',
        motorcycleId: id,
        dateFrom: new Date(format(parseISO(dateFrom), 'yyyy-MM-dd HH:mm:ss')),
        dateTo: new Date(format(parseISO(dateTo), 'yyyy-MM-dd HH:mm:ss')),
        price: isCodeValid ? (price * 0.9).toString() : price.toString(),
      }))
    ).finally(() => {
      emptyCart();
      navigate('/reservations');
    });
  };

  return (
    <div className='sticky flex flex-col gap-3 p-6 rounded shadow w-80 top-20 h-fit'>
      <p className='text-xl font-semibold'>Podsumowanie</p>
      <div className='flex justify-between mb-2 font-medium'>
        <span>Kwota łączna:</span>
        <span className={isCodeValid ? 'text-primary' : ''}>
          {isCodeValid ? cartTotal * 0.9 : cartTotal} zł
        </span>
      </div>

      {isAuth ? (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
          <div className='mb-3'>
            <div className='flex gap-1'>
              <Input
                placeholder='wpisz kod rabatowy'
                className='h-[36px]'
                disabled={isCodeValid || isEmpty}
                {...register('discountCode')}
              />
              <Button
                variant='outline'
                onClick={handleDiscountCodeApply}
                disabled={isCodeValid || isEmpty}
                type='button'
              >
                Dodaj
              </Button>
            </div>
            <small className='font-light text-gray-500'>
              Dodaj kod 'rabat' aby obniżyć cenę o 10%
            </small>
          </div>

          <div className='flex items-center space-x-2'>
            <Controller
              control={control}
              name='paymentObligation'
              render={({ field: { onChange } }) => (
                <Checkbox
                  id='paymentObligation'
                  onCheckedChange={onChange}
                  className={errors.paymentObligation && 'border-destructive'}
                  disabled={isEmpty}
                />
              )}
            />
            <Label
              htmlFor='paymentObligation'
              className={errors.paymentObligation && 'text-destructive'}
            >
              Zamawiam z obowiązkiem zapłaty
            </Label>
          </div>

          <Button className='w-full' type='submit' disabled={isEmpty}>
            Zamawiam
          </Button>
        </form>
      ) : (
        <Link to='/login'>
          <Button className='w-full'>Zaloguj się</Button>
        </Link>
      )}
    </div>
  );
};
