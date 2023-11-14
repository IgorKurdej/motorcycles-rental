import { useMemo } from 'react';
import { EmptyState } from '../../components/EmptyState';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { ICart } from '../../libs/types';
import { useQueries } from 'react-query';

export const CartPage = () => {
  const [values] = useLocalStorage<ICart[]>('cart', []);

  const motorcyclesIds = useMemo(() => {
    return new Set(values.map((item) => item.motorcycleId));
  }, [values]);

  return (
    <div>
      {values.length > 0 ? (
        <div>LEO</div>
      ) : (
        <EmptyState message='Koszyk pusty' />
      )}
    </div>
  );
};
