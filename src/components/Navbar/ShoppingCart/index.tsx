import { LucideShoppingCart } from 'lucide-react';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { ICart } from '../../../libs/types';
import { Link } from 'react-router-dom';

export const ShoppingCart = () => {
  const [values] = useLocalStorage<ICart[]>('cart', []);

  return (
    <Link to='/cart' className='relative text-white cursor-pointer'>
      {values.length > 0 && (
        <div className='absolute flex items-center justify-center min-w-[16px] p-1 h-4 text-[10px] rounded-full bg-primary -top-1/2 -right-1/2'>
          {values.length}
        </div>
      )}
      <LucideShoppingCart size={24} />
    </Link>
  );
};
