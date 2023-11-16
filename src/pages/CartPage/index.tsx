import { useEffect, useMemo, useState } from 'react';
import { EmptyState } from '../../components/EmptyState';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { ICart, Reservation } from '../../libs/types';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { CartItem, CartSummary } from '../../components';
import { Button } from '../../components/ui/button';
import { Form } from '../../components/ui/form';

export interface ITotalAmountItem {
  idx: number;
  price: number;
}

export const CartPage = () => {
  const [values, setValues] = useLocalStorage<Reservation[]>('cart', []);
  const [isLsLoaded, setIsLsLoaded] = useState(false);
  const [total, setTotal] = useState<ITotalAmountItem[]>([]);

  const form = useForm<ICart>({
    defaultValues: { cart: [] },
  });
  const { register, control, handleSubmit, reset, getValues, watch } = form;

  const { fields, remove } = useFieldArray({
    control,
    name: 'cart',
  });

  useEffect(() => {
    if (!isLsLoaded && values.length) {
      setIsLsLoaded(true);
      reset({ cart: values });
    }
  }, [values]);

  const watchedValuse = watch('cart');

  useEffect(() => {
    // console.log(watchedValuse, 'fields');
    // setValues(watch('cart'));
  }, [watchedValuse]);

  const totalAmount = useMemo(() => {
    if (total.length === values.length) {
      return total.reduce((total, curr) => (total += curr.price), 0);
    }

    return 0;
  }, [total, values]);

  const handleRemove = (idx: number) => {
    remove(idx);
    setValues(getValues('cart'));
  };

  const onSubmit: SubmitHandler<ICart> = (data) => {
    console.log(data);
  };

  return (
    <div className='flex justify-center gap-6'>
      <div className='max-w-[800px] flex-grow'>
        {fields.length > 0 ? (
          <Form {...form}>
            <form
              id='cart-form'
              onSubmit={handleSubmit(onSubmit)}
              className='space-y-6'
            >
              {fields.map((cartItem, idx) => (
                <CartItem
                  key={cartItem.id}
                  idx={idx}
                  control={control}
                  cartItem={cartItem}
                  register={register}
                  handleRemove={handleRemove}
                  setTotal={setTotal}
                />
              ))}
            </form>
          </Form>
        ) : (
          <EmptyState message='Koszyk pusty' />
        )}
      </div>
      <CartSummary totalAmount={totalAmount}>
        <Button className='w-full' form='cart-form' type='submit' size='sm'>
          Zamawiam
        </Button>
      </CartSummary>
    </div>
  );
};
