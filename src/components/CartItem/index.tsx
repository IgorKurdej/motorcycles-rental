import { FC } from 'react';
import { ICart } from '../../libs/types';
import { useGetMotorcycleById } from '../../hooks/queries/useGetMotorcycleById';

interface IProps {
  cartItem: ICart;
}

export const CartItem: FC<IProps> = ({ cartItem }) => {
  const { data } = useGetMotorcycleById(cartItem.motorcycleId);
  console.log(data, 'motorcycleById');
  return <div>{cartItem.motorcycleId}</div>;
};
