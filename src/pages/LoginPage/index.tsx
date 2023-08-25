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
import { Login, loginSchema } from '../../libs/schemas';
import { useLogin } from '../../hooks/useLogin';
import { ShowPassword } from '../../components';

export const LoginPage: FC = () => {
  const { mutate, isLoading } = useLogin();
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const form = useForm<Login>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: 'adam@gmail.com', password: '123123123' },
  });

  const onSubmit: SubmitHandler<Login> = async (data) => {
    mutate(data);
  };

  return (
    <div className='w-full sm:p-10 lg:p-24 flex flex-col items-center'>
      <p className='text-2xl font-semibold mb-5'>Zaloguj się</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full flex flex-col gap-4'
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
          <Button type='submit' className='flex-1' isLoading={isLoading}>
            Zaloguj
          </Button>
        </form>
      </Form>
      <p className='mt-4'>Nie masz jeszcze konta?</p>
      <Link
        to='/signup'
        className='mt-1 font-semibold underline text-green-600'
      >
        Załóż konto
      </Link>
    </div>
  );
};
