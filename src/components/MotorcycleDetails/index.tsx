import { FC } from 'react';
import { cn } from '../../libs/utils';

interface IProps {
  className?: string;
  year: number;
  enginePower: number;
  engineCapacity: number;
}

export const MotorcycleDetails: FC<IProps> = ({
  className,
  year,
  enginePower,
  engineCapacity,
}) => {
  return (
    <div className={cn('grid grid-cols-3 gap-2', className)}>
      <div className='flex flex-col text-center justify-between'>
        <span className='font-medium text-sm text-center'>Rok produkcji</span>
        <span>{year}</span>
      </div>
      <div className='flex flex-col items-center border-x justify-between'>
        <span className='font-medium text-sm text-center'>Moc silnika</span>
        <span>{enginePower}KM</span>
      </div>
      <div className='flex flex-1 flex-col items-center'>
        <span className='font-medium text-sm text-center'>Pojemność</span>
        <span>{engineCapacity}cm</span>
      </div>
    </div>
  );
};
