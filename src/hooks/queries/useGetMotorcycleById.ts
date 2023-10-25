import { useQuery } from 'react-query';
import { pb } from '../../libs/pocketbase';
import { IMotorcycle } from '../../libs/types';

const getMotorcycleById = async (id: string): Promise<IMotorcycle> => {
  return await pb.collection('motorcycles').getOne(id, { expand: 'reviews' });
};

export const useGetMotorcycleById = (id: string) => {
  return useQuery({
    queryKey: ['motorcycle'],
    queryFn: () => getMotorcycleById(id),
  });
};
