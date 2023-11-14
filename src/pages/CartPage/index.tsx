import { useEffect, useMemo } from 'react';
import { EmptyState } from '../../components/EmptyState';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { ICart } from '../../libs/types';
import { useMotorcyclesByIds } from '../../hooks/queries/useMotorcyclesByIds';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { CartItem } from '../../components';
import { Button } from '../../components/ui/button';

export const CartPage = () => {
  const [values] = useLocalStorage<ICart[]>('cart', []);

  const { control, handleSubmit, reset } = useForm<{ cart: ICart[] }>();

  useEffect(() => {
    if (values) {
      reset({ cart: values });
    }
  }, [values]);

  const { fields } = useFieldArray({
    control,
    name: 'cart',
  });

  console.log(fields);

  const motorcyclesIds = useMemo(() => {
    return new Set(values.map((item) => item.motorcycleId));
  }, [values]);

  const { data } = useMotorcyclesByIds(Array.from(motorcyclesIds));

  const onSubmit: SubmitHandler<{ cart: ICart[] }> = (data) => {
    console.log(data);
  };

  return (
    <div>
      {fields.length > 0 ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}

          <Button type='submit' size='sm'>
            Zamawiam
          </Button>
        </form>
      ) : (
        <EmptyState message='Koszyk pusty' />
      )}
    </div>
  );
};
