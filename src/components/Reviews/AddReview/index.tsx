import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../../ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../ui/dialog';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { IReview } from '../../../libs/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { addNewReviewSchema } from '../../../libs/schemas';
import { pb } from '../../../libs/pocketbase';
import { FC, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import { useAddNewReview } from '../../../hooks/mutations/useAddNewReview';
import { useParams } from 'react-router';
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query';

// TODO: UŻYĆ KIEDY BĘDZIE PODSUMOWANIE WYPOŻYCZEŃ UŻYTKOWNIKA!

interface IProps {
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<IReview[], unknown>>;
}

export const AddReview: FC<IProps> = ({ refetch }) => {
  const { id: motorycleId } = useParams();

  const [isOpen, setIsOpen] = useState(false);

  const { mutate } = useAddNewReview(() => handleSucces());

  const form = useForm<IReview>({
    resolver: zodResolver(addNewReviewSchema),
    defaultValues: {
      message: '',
      rate: 5,
    },
  });

  const handleSucces = () => {
    refetch();
    setIsOpen(false);
    form.reset();
  };

  const onSubmit: SubmitHandler<IReview> = async (data) => {
    data.motorcycleId = motorycleId as string;
    mutate(data);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className='mr-0 ml-auto' size='sm'>
          Dodaj
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Podziel się swoją opinią</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-3 mt-3'
          >
            <div className='space-y-4'>
              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem className='flex flex-col flex-1'>
                    <FormLabel>Twoja opinia</FormLabel>
                    <Textarea {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='rate'
                render={({ field }) => (
                  <FormItem className='flex flex-col flex-1'>
                    <FormLabel>Ocena</FormLabel>
                    <Rating
                      style={{ maxWidth: 160 }}
                      value={Number(field.value)}
                      onChange={field.onChange}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type='submit'>Dodaj opinie</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
