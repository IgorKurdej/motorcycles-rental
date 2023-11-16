import { FC, ReactNode, useMemo } from 'react';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { ITotalAmountItem } from '../../pages/CartPage';
import { Reservation } from '../../libs/types';
import { differenceInCalendarDays, parseISO } from 'date-fns';

// const countTotalAmount = (cartItems: ITotalAmountItem[]) => {
//   const result = cartItems.reduce((total, curr) => {
//     const { dateFrom, dateTo } = curr;

//     const duration = differenceInCalendarDays(
//       parseISO(dateTo?.toString()),
//       parseISO(dateFrom?.toString())
//     );

//     return (total += duration * 1);
//   }, 0);

//   return result;

//   return cartItems.reduce((total, curr) => (total += curr.price), 0);
// };

interface IProps {
  totalAmount: number;
  children: ReactNode;
}

export const CartSummary: FC<IProps> = ({ totalAmount, children }) => {
  // totalAmount

  return (
    <div className='flex-1 flex-col flex gap-3 shadow max-w-[350px] p-6 rounded sticky top-20 h-fit'>
      <p className='text-xl font-semibold'>Podsumowanie</p>
      <div className='flex justify-between mb-2 font-medium'>
        <span>Kwota łączna:</span>
        <span>{totalAmount} zł</span>
      </div>
      <div className='mb-3'>
        <div className='flex gap-1'>
          <Input placeholder='wpisz kod rabatowy' className='h-[36px]' />
          <Button size='sm' variant='outline'>
            Dodaj
          </Button>
        </div>
        <small className='font-light text-gray-500'>
          Dodaj kod 'rabat' aby obniżyć cenę o 10%
        </small>
      </div>
      <div className='flex items-center space-x-2'>
        <Checkbox
          id='paymentObligation'
          //   checked={isAllBrandsChecked}
          //   onCheckedChange={handleSearchBrandsChange}
        />
        <Label htmlFor='paymentObligation'>
          Zamawiam z obowiązkiem zapłaty
        </Label>
      </div>
      {children}
    </div>
  );
};
