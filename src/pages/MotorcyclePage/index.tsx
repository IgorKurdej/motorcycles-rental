import { FC, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useGetMotorcycleById } from '../../hooks/useGetMotorcycleById';
import { getImgSrc } from '../../libs/utils';
import { Spinner } from '../../components/ui';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';
import { IAccordionOption, IMotorcycle } from '../../libs/types';
import { DateInput } from '../../components/DateInput';
import {
  ArrowLeft,
  ArrowLeftFromLine,
  ArrowLeftToLine,
  Undo2,
} from 'lucide-react';

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
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit distinctio voluptatibus laboriosam id, doloremque exercitationem? Expedita tempora vitae vero excepturi quo neque iste explicabo, nesciunt ea quasi harum earum tenetur!',
  },
  {
    value: 'ratings',
    header: 'Oceny klientów',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit distinctio voluptatibus laboriosam id, doloremque exercitationem? Expedita tempora vitae vero excepturi quo neque iste explicabo, nesciunt ea quasi harum earum tenetur!',
  },
];

export const MotorcyclePage: FC = () => {
  const { id } = useParams();
  const { data } = useGetMotorcycleById(id || '');

  const [date, setDate] = useState<Date | undefined>();

  const {
    id: motoId,
    collectionName,
    brand,
    model,
    price,
    image,
  } = data as IMotorcycle;

  return (
    <div className='flex flex-col gap-2'>
      <Link to='/offer' className='text-primary flex gap-1 items-center'>
        <ArrowLeft size={16} />
        <span className='font-medium'>cofnij</span>
      </Link>
      <img
        className=''
        src={getImgSrc(collectionName, motoId, image)}
        alt={'product'}
      />
      <p className='space-x-4 text-center'>
        <span className='text-3xl text-center font-semibold'>{brand}</span>
        <span className='text-xl text-center font-medium'>{model}</span>
      </p>
      <div className='flex flex-col gap-1'>
        <DateInput date={date} setDate={setDate} />
        <DateInput date={date} setDate={setDate} />
        <p>Cena {price}</p>
      </div>
      <Accordion type='single' collapsible>
        {accordionOptions.map(({ value, header, content }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger>{header}</AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
