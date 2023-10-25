import { useMutation } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { pb } from '../../libs/pocketbase';
import { Login } from '../../libs/types';

const login = async ({ email, password }: Login) => {
  await pb.collection('users').authWithPassword(email, password);
};

export const useLogin = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success('Witaj ponownie!');

      if (!state) {
        navigate('/');
        return;
      }

      navigate(state.location.pathname);
    },
    onError: () => {
      toast.error('Coś poszło nie tak!');
    },
  });
};
