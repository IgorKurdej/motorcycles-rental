import { FC, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { useGetMotorcycleById } from '../../hooks/useGetMotorcycleById';
import { getImgSrc } from '../../libs/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';
import { IAccordionOption, IMotorcycle, Reservation } from '../../libs/types';
import { DateInput } from '../../components/DateInput';
import { Button } from '../../components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/ui/form';
import { differenceInDays } from 'date-fns';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { reservationSchema } from '../../libs/schemas';
import { Reviews } from '../../components';

export const MotorcyclePage: FC = () => {
  const { id } = useParams();
  const { data } = useGetMotorcycleById(id || '');

  const {
    id: motoId,
    collectionName,
    brand,
    model,
    price,
    image,
    expand,
  } = data as IMotorcycle;

  console.log(data);

  const form = useForm<Reservation>({
    resolver: zodResolver(reservationSchema),
  });

  const reservationDates = form.watch();
  const reservationDuration = useMemo(
    () =>
      differenceInDays(reservationDates.endDate, reservationDates.startDate),
    [reservationDates]
  );

  const onSubmit: SubmitHandler<Reservation> = (data) => {
    console.log(data);
  };

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
      content: <Reviews reviews={expand?.reviews} />,
      // content: '',
    },
  ];

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
      <p className='flex items-center flex-col justify-center my-4'>
        <span className='text-3xl font-semibold'>{brand}</span>
        <span className='text-2xl font-medium'>{model}</span>
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3 '>
          <div className='flex gap-3'>
            <FormField
              control={form.control}
              name='startDate'
              render={({ field }) => (
                <FormItem className='flex flex-col flex-1'>
                  <FormLabel>Rezerwacja od</FormLabel>
                  <DateInput date={field.value} setDate={field.onChange} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='endDate'
              render={({ field }) => (
                <FormItem className='flex flex-col flex-1'>
                  <FormLabel>Rezerwacja do</FormLabel>
                  <DateInput date={field.value} setDate={field.onChange} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <p className='space-x-3 text-right'>
            <span className='text-lg'>Cena za 6 dni:</span>
            <span className='font-semibold text-xl'>
              {reservationDuration * price || 0} zł
            </span>
          </p>
          <Button className='w-full'>Dodaj do koszyka</Button>
          <div className='flex justify-between items-center gap-3'></div>
        </form>
      </Form>

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
