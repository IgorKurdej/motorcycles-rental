import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Input } from '../../components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/ui/form';
import { Button } from '../../components/ui/button';
import { loginSchema } from '../../libs/schemas';
import { useLogin } from '../../hooks/mutations/useLogin';
import { ShowPassword } from '../../components';
import { Login } from '../../libs/types';

export const LoginPage: FC = () => {
  const { mutate, isPending } = useLogin();
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const form = useForm<Login>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: 'adam@gmail.com', password: 'adam12345' },
  });

  const onSubmit: SubmitHandler<Login> = async (data) => {
    mutate(data);
  };

  return (
    <div className='flex flex-col items-center w-full sm:p-10 lg:p-24'>
      <p className='mb-5 text-2xl font-semibold'>Zaloguj się</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col w-full gap-4'
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hasło</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <Input
                      type={isPasswordHidden ? 'password' : 'text'}
                      placeholder='••••••'
                      {...field}
                    />
                    <ShowPassword
                      isHidden={isPasswordHidden}
                      setIsHidden={setIsPasswordHidden}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' isLoading={isPending}>
            Zaloguj
          </Button>
        </form>
      </Form>
      <p className='mt-4'>Nie masz jeszcze konta?</p>
      <Link
        to='/signup'
        className='mt-1 font-semibold text-green-600 underline'
      >
        Załóż konto
      </Link>
    </div>
  );
};
