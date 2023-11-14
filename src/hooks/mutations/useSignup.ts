import { useMutation } from '@tanstack/react-query';
import { pb } from '../../libs/pocketbase';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { Signup } from '../../libs/types';

const signup = async (data: Signup) => {
  const newUser = {
    ...data,
    emailVisibility: true,
  };

  await pb.collection('users').create(newUser);
};

export const useSignup = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signup,
    onSuccess: () => {
      toast.success('Konto utworzone pomyślnie!');
      navigate('/login');
    },
    onError: () => {
      toast.error('Coś poszło nie tak!');
    },
  });
};
