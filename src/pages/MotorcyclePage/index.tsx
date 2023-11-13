import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { useGetMotorcycleById } from '../../hooks/queries/useGetMotorcycleById';
import { getImgSrc } from '../../libs/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';
import { IAccordionOption, IMotorcycle } from '../../libs/types';
import { ReservationForm, Reviews } from '../../components';
import { MotorcycleDetails } from '../../components/MotorcycleDetails';
import { useReviews } from '../../hooks/queries/useReviews';

export const MotorcyclePage: FC = () => {
  const { id } = useParams();
  const { data: motorcycle } = useGetMotorcycleById(id || '');

  const { data: reviews } = useReviews(id || '');

  const {
    id: motoId,
    collectionName,
    brand,
    model,
    price,
    year,
    enginePower,
    engineCapacity,
    image,
  } = motorcycle as IMotorcycle;

  const accordionOptions: IAccordionOption[] = [
    {
      value: 'description',
      header: 'Opis',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit distinctio voluptatibus laboriosam id, doloremque exercitationem? Expedita tempora vitae vero excepturi quo neque iste explicabo, nesciunt ea quasi harum earum tenetur!',
    },
    {
      value: 'details',
      header: 'Szczegóły',
      content: (
        <MotorcycleDetails
          className='my-3'
          year={year}
          enginePower={enginePower}
          engineCapacity={engineCapacity}
        />
      ),
    },
    {
      value: 'ratings',
      header: 'Oceny klientów',
      content: <Reviews reviews={reviews || []} />,
    },
  ];

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
            src={getImgSrc(collectionName, motoId, image)}
            alt='product'
            className='h-[200px] sm:h-[300px] object-contain'
          />
          <p className='flex flex-col items-center justify-center my-4 md:flex-row md:gap-2'>
            <span className='text-3xl font-semibold'>{brand}</span>
            <span className='text-2xl font-medium'>{model}</span>
          </p>
        </div>

        <ReservationForm pricePerDay={price} submitBtnText='Dodaj do koszyka' />

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
