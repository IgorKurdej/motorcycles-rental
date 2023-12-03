import { EmptyState } from '../../components/EmptyState';
import { ICart } from '../../libs/types';
import { CartItem, CartSummary } from './components';
import { useCart } from 'react-use-cart';
import { FC } from 'react';

export const CartPage: FC = () => {
  const { isEmpty, items } = useCart();

  return (
    <div className='flex flex-col items-center justify-center gap-10 lg:py-6 lg:flex-row lg:items-start'>
      <div className='max-w-[800px] flex-grow'>
        {!isEmpty ? (
          <div className='space-y-4'>
            {items.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem as ICart} />
            ))}
          </div>
        ) : (
          <EmptyState message='Twój koszyk jest pusty...' />
        )}
      </div>

      <CartSummary />
    </div>
  );
};
