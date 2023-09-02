import { FC, useState } from 'react';
import { useGetMotorcycleById } from '../../hooks/useGetMotorcycleById';
import { useParams } from 'react-router-dom';
import { cn, getImgSrc } from '../../libs/utils';
import { Spinner } from '../../components/ui';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';
import { format } from 'date-fns';
import { IMotorcycle } from '../../libs/types';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../components/ui/popover';
import { Button } from '../../components/ui/button';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '../../components/ui/calendar';
import { DateInput } from '../../components/DateInput';

export const MotorcyclePage: FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetMotorcycleById(id || '');

  const [date, setDate] = useState<Date | undefined>();

  if (isLoading) {
    return <Spinner />;
  }

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
      <img
        className=''
        src={getImgSrc(collectionName, motoId, image)}
        alt={'product'}
      />
      <p className='text-2xl text-center font-semibold'>{brand}</p>
      <p className='text-xl text-center font-medium'>{model}</p>
      <div>
        <DateInput date={date} setDate={setDate} />
        <DateInput date={date} setDate={setDate} />
        <p>Cena {price}</p>
      </div>
      <Accordion type='single' collapsible defaultValue='description'>
        <AccordionItem value='description'>
          <AccordionTrigger>Opis</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            distinctio voluptatibus laboriosam id, doloremque exercitationem?
            Expedita tempora vitae vero excepturi quo neque iste explicabo,
            nesciunt ea quasi harum earum tenetur!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='details'>
          <AccordionTrigger>Szczegóły</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            distinctio voluptatibus laboriosam id, doloremque exercitationem?
            Expedita tempora vitae vero excepturi quo neque iste explicabo,
            nesciunt ea quasi harum earum tenetur!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='ratings'>
          <AccordionTrigger>Oceny klientów</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            distinctio voluptatibus laboriosam id, doloremque exercitationem?
            Expedita tempora vitae vero excepturi quo neque iste explicabo,
            nesciunt ea quasi harum earum tenetur!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
