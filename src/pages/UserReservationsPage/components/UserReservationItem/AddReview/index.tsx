import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../../../../../components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../../../../../components/ui/dialog';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../../../components/ui/form';
import { Textarea } from '../../../../../components/ui/textarea';
import { IReview } from '../../../../../libs/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { addNewReviewSchema } from '../../../../../libs/schemas';
import { Dispatch, FC, SetStateAction } from 'react';
import { Rating } from '@smastrom/react-rating';
import { useAddNewReview } from '../../../../../hooks/mutations/useAddNewReview';
import { useGetMotorcycleById } from '../../../../../hooks/queries/useGetMotorcycleById';
import { getImgSrc } from '../../../../../libs/utils';

interface IProps {
  motorcycleId: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const AddReview: FC<IProps> = ({ motorcycleId, isOpen, setIsOpen }) => {
  const { data: motorcycle } = useGetMotorcycleById(motorcycleId);
  const { mutate } = useAddNewReview(() => handleSucces());

  const form = useForm<IReview>({
    resolver: zodResolver(addNewReviewSchema),
    defaultValues: {
      message: '',
      rate: 5,
    },
  });

  const handleSucces = () => {
    setIsOpen(false);
    form.reset();
  };

  const onSubmit: SubmitHandler<IReview> = async (data) => {
    data.motorcycleId = motorcycleId as string;
    mutate(data);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Podziel się swoją opinią</DialogTitle>
        </DialogHeader>
        {motorcycle && (
          <div className='flex items-center gap-5 mt-2'>
            <img
              className='h-16'
              src={getImgSrc('motorcycles', motorcycle.id, motorcycle.image)}
              alt='reservation-motorcycle-image'
            />
            <div>
              <p className='font-medium'>{motorcycle.brand}</p>
              <p className='text-sm font-light text-gray-400'>
                {motorcycle.model}
              </p>
            </div>
          </div>
        )}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='mt-3 space-y-3'
          >
            <div className='space-y-4'>
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
