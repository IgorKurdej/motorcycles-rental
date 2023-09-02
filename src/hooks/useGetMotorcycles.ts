import { useQuery } from 'react-query';
import { pb } from '../libs/pocketbase';
import toast from 'react-hot-toast';
import { IMotorcycle } from '../libs/types';

const getMotorcycles = async (): Promise<IMotorcycle[]> => {
  return await pb.collection('motorcycles').getFullList();
};

export const useGetMotorcycles = () => {
  return useQuery({
    queryKey: ['motorcycles'],
    queryFn: getMotorcycles,
    onError: () => toast.error('Coś poszło nie tak!'),
  });
};
