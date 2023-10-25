import { FC } from 'react';
import { IReview } from '../../libs/types';
import user from '../../assets/user.png';
import { Rating } from '@smastrom/react-rating';
import { useReviews } from '../../hooks/queries/useReviews';
import { Spinner } from '../ui';
import { AddReview } from './AddReview';

const countAvgRating = (reviews: IReview[]) => {
  const avg =
    reviews.reduce((sum, item) => (sum += item.rate), 0) / reviews.length;
  return (Math.round(avg * 100) / 100).toFixed(2);
};

interface IProps {
  motorcycleId: string;
}

export const Reviews: FC<IProps> = ({ motorcycleId }) => {
  const { data, isLoading, refetch } = useReviews(motorcycleId);

  if (isLoading) {
    return <Spinner />;
  }

  return data?.length === 0 ? (
    <p>brak</p>
  ) : (
    <div className='max-w-full'>
      <div className='mb-5 flex items-center'>
        <span className='font-medium text-base'>
          Średnia ocena {countAvgRating(data || [])} na {data?.length} opinii
        </span>
        <AddReview refetch={refetch} />
      </div>
      <div className='space-y-8 max-h-80 overflow-y-auto'>
        {data?.map((review) => (
          <div key={review.author} className='space-y-3 pr-5'>
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
