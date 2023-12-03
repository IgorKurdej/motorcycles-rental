import { FC, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useGetMotorcycleById } from '../../hooks/queries/useGetMotorcycleById';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';
import { ReservationForm } from '../../components';
import { useGetReviews } from '../../hooks/queries/useGetReviews';
import { getAccordionOptions } from './utils';
import { pb } from '../../libs/pocketbase';

export const MotorcyclePage: FC = () => {
  const { id } = useParams();

  const { data: motorcycle } = useGetMotorcycleById(id || '');
  const { data: reviews } = useGetReviews(id || '');

  const accordionOptions = useMemo(
    () => getAccordionOptions(motorcycle, reviews),
    [motorcycle, reviews]
  );

  return (
    <div className='flex items-center justify-center'>
      <Link
        to='/motorcycles'
        className='fixed flex items-center gap-1 underline text-primary top-20 left-3 md:left-10'
      >
        <ArrowLeft size={16} />
        <span className='font-medium'>cofnij</span>
      </Link>

      <div className='max-w-[600px] w-full flex flex-col gap-3'>
        <div className='flex flex-col items-center justify-center'>
          <img
            src={pb.getFileUrl(motorcycle, motorcycle.image)}
            alt='product'
            className='h-[200px] sm:h-[300px] object-contain'
          />
          <p className='flex flex-col items-center justify-center my-4 md:flex-row md:gap-2'>
            <span className='text-3xl font-semibold'>{motorcycle?.brand}</span>
            <span className='text-2xl font-medium'>{motorcycle?.model}</span>
          </p>
        </div>

        <ReservationForm
          pricePerDay={motorcycle?.price || 0}
          submitBtnText='Dodaj do koszyka'
          motorcycleId={id || ''}
        />

        <Accordion type='single' collapsible>
          {accordionOptions.map(({ value, header, content }) => (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger>{header}</AccordionTrigger>
              <AccordionContent>{content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
