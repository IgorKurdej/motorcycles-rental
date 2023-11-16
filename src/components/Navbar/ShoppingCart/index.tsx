import { LucideShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

export const ShoppingCart = () => {
  const { totalItems, isEmpty } = useCart();

  return (
    <Link to='/cart' className='relative text-white cursor-pointer'>
      {!isEmpty && (
        <div className='absolute flex items-center justify-center min-w-[16px] p-1 h-4 text-[10px] rounded-full bg-primary -top-1/2 -right-1/2'>
          {totalItems}
        </div>
      )}
      <LucideShoppingCart size={24} />
    </Link>
  );
};
