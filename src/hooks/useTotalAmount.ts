import { useMemo } from 'react';
import { Reservation } from '../libs/types';
import { differenceInCalendarDays, parseISO } from 'date-fns';

const useTotalAmount = (cartItems: Reservation[]) => {
  const countTotalAmount = useMemo(() => {
    const result = cartItems.reduce((total, curr) => {
      const { dateFrom, dateTo } = curr;

      const duration = differenceInCalendarDays(
        parseISO(dateTo?.toString()),
        parseISO(dateFrom?.toString())
      );

      return (total += duration * 1);
    }, 0);

    return result;
  }, []);

  return;
};
