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
      <EmptyState>Jeszcze nikt nie dodał opinii o tym motocyklu</EmptyState>
    </div>
  ) : (
    <div className='max-w-full'>
      <div className='mb-5 flex items-center'>
        <span className='font-medium text-base'>
          Średnia ocena {countAvgRating(reviews || [])} na {reviews?.length}{' '}
          opinii
        </span>
      </div>
      <div className='space-y-8 max-h-80 overflow-y-auto'>
        {reviews?.map((review) => (
          <div key={review.id} className='space-y-3 pr-5'>
            <div className='flex justify-between items-center'>
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
