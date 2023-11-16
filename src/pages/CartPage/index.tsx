import { EmptyState } from '../../components/EmptyState';
import { ICart } from '../../libs/types';
import { CartItem, CartSummary } from '../../components';
import { useCart } from 'react-use-cart';

export interface ITotalAmountItem {
  idx: number;
  price: number;
}

export const CartPage = () => {
  const { isEmpty, items } = useCart();

  return (
    <div className='flex justify-center gap-10'>
      <div className='max-w-[800px] flex-grow'>
        {!isEmpty ? (
          <div>
            {items.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem as ICart} />
            ))}
          </div>
        ) : (
          <EmptyState message='Koszyk pusty' />
        )}
      </div>

      <CartSummary />
    </div>
  );
};
