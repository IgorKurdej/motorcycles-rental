import { FC } from 'react';
import { IReview } from '../../libs/types';
import user from '../../assets/user.png';
import { Rating } from '@smastrom/react-rating';
import { EmptyState } from '../EmptyState';

const countAvgRating = (reviews: IReview[]) => {
  const avg =
    reviews.reduce((sum, item) => (sum += item.rate), 0) / reviews.length;
  return (Math.round(avg * 100) / 100).toFixed(2);
};

interface IProps {
  reviews: IReview[];
}

export const Reviews: FC<IProps> = ({ reviews }) => {
  return reviews?.length === 0 ? (
    <div>
      <EmptyState message='Jeszcze nikt nie dodał opinii o tym motocyklu' />
    </div>
  ) : (
    <div className='max-w-full'>
      <p className='text-sm font-light text-center text-gray-500 md:text-left'>
        Opinie możesz dodać dopiero po odbytej rezerwacji
      </p>
      <div className='flex items-center my-5'>
        <span className='text-base font-medium'>
          Średnia ocena {countAvgRating(reviews || [])} na {reviews?.length}{' '}
          opinii
        </span>
      </div>
      <div className='space-y-8 overflow-y-auto max-h-80'>
        {reviews?.map((review) => (
          <div key={review.id} className='pr-5 space-y-3'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <img
                  className='w-8 h-8 bg-gray-100 rounded-full'
                  src={user}
                  alt='user-image'
                />
                <span className='font-medium'>{review.author}</span>
              </div>
              <Rating style={{ maxWidth: 80 }} value={review.rate} readOnly />
            </div>
            <p>{review.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
