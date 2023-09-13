import { FC } from 'react';
import { IReview } from '../../libs/types';
import { Record } from 'pocketbase';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Button } from '../ui/button';

interface IProps {
  reviews: Record | Record[];
}

export const Reviews: FC<IProps> = ({ reviews }) => {
  console.log(reviews, 'elo');
  return (
    <div className='flex'>
      <Dialog>
        <DialogTrigger>
          {/* <Button className='mr-0 ml-auto' variant='outline' size='sm'> */}
          Dodaj opinię
          {/* </Button> */}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dodaj swoją opinię</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <div>
        {reviews?.map((review: IReview) => (
          <div>{review.message}</div>
        ))}
      </div>
    </div>
  );
};
