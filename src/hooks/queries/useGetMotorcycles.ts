import { useSuspenseQuery } from '@tanstack/react-query';
import { pb } from '../../libs/pocketbase';
import { IMotorcycle } from '../../libs/types';

const getMotorcycles = async (): Promise<IMotorcycle[]> => {
  return await pb.collection('motorcycles').getFullList();
};

export const useGetMotorcycles = () => {
  return useSuspenseQuery({
    queryKey: ['motorcycles'],
    queryFn: getMotorcycles,
    // onError: () => toast.error('Coś poszło nie tak!'),
  });
};
