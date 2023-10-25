import { useQuery } from 'react-query';
import { pb } from '../../libs/pocketbase';
import { IReview } from '../../libs/types';

const getReviewsByMotorcycleId = (motorcycleId: string): Promise<IReview[]> =>
  pb
    .collection('reviews')
    .getFullList({ filter: `motorcycleId="${motorcycleId}"` });

export const useReviews = (motorcycleId: string) => {
  return useQuery({
    queryKey: ['reviews', motorcycleId],
    queryFn: () => getReviewsByMotorcycleId(motorcycleId),
  });
};
