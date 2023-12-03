import { FC } from 'react';
import { ReservationStatus } from '../../../../../libs/types';
import { Badge } from '../../../../../components/ui/badge';

interface IProps {
  status: ReservationStatus;
}

export const BadgeStatus: FC<IProps> = ({ status }) => {
  return (
    <>
      {
        {
          [ReservationStatus.toRealize]: (
            <Badge className='absolute top-2 right-2 w-fit' variant='toRealize'>
              Do realizacji
            </Badge>
          ),
          [ReservationStatus.during]: (
            <Badge className='absolute top-2 right-2 w-fit' variant='during'>
              W trakcie
            </Badge>
          ),
          [ReservationStatus.ended]: (
            <Badge className='absolute top-2 right-2 w-fit'>Zakończone</Badge>
          ),
        }[status]
      }
    </>
  );
};
