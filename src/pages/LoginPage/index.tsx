import { FC } from 'react';
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

export const LoginPage: FC = () => {
  const form = useForm<Login>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit: SubmitHandler<Login> = (data) => {
    console.log(data);
  };

  return (
    <div className='h-full flex flex-col items-center justify-center p-10 lg:p-24'>
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
                  <Input type={'password'} placeholder='hasło' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className='flex-1'>
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
