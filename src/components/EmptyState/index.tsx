import { FC, ReactNode } from 'react';
import { cn } from '../../libs/utils';

interface IProps {
  children: ReactNode;
  className?: string;
}

export const EmptyState: FC<IProps> = ({ children, className }) => {
  return (
    <p
      className={cn('text-gray-600 text-center my-8 font-semibold', className)}
    >
      {children}
    </p>
  );
};
