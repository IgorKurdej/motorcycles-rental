import { FC } from 'react';
import { cn } from '../../libs/utils';

interface IProps {
  message: string;
  className?: string;
}

export const EmptyState: FC<IProps> = ({ message, className }) => {
  return (
    <p
      className={cn('text-gray-600 text-center my-8 font-semibold', className)}
    >
      {message}
    </p>
  );
};
