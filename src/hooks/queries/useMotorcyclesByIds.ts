import { useSuspenseQueries } from '@tanstack/react-query';
import { IMotorcycle } from '../../libs/types';
import { pb } from '../../libs/pocketbase';

const getMotorcycleById = (id: string): Promise<IMotorcycle> => {
  return pb.collection('motorcycles').getOne(id);
};

export const useMotorcyclesByIds = (ids: string[]) => {
  return useSuspenseQueries({
    queries: ids.map((id) => ({
      queryKey: ['motorcycle', id],
      queryFn: () => getMotorcycleById(id),
      staleTime: Infinity,
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
      };
    },
  });
};
