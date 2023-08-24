import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';

import { Signup, signupSchema } from '../../libs/schemas';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/ui/form';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Checkbox } from '../../components/ui/checkbox';
import { pb } from '../../libs/pocketbase';

export const SignupPage: FC = () => {
  const form = useForm<Signup>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const onSubmit: SubmitHandler<Signup> = async (data) => {
    const newUser = {
      ...data,
      emailVisibility: true,
    };

    await pb.collection('users').create(newUser);

    // await pb.collection('users').requestVerification(data.email);
  };

  return (
    <div className='w-full sm:px-10 lg:px-24 py-8 flex flex-col items-center overflow-auto'>
      <p className='text-2xl font-semibold mb-5'>Załóż konto</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full flex flex-col gap-4'
        >
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nazwa użytkownika</FormLabel>
                <FormControl>
                  <Input placeholder='username' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                  <Input type={'password'} placeholder='••••••' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='passwordConfirm'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Powtórz hasło</FormLabel>
                <FormControl>
                  <Input type={'password'} placeholder='••••••' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='terms'
            render={({ field }) => (
              <FormItem className='flex items-start space-x-3 space-y-0 my-1'>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>Akceptuję warunki portalu</FormLabel>
              </FormItem>
            )}
          />
          <Button type='submit' className='flex-1'>
            Zarejestuj
          </Button>
        </form>
      </Form>
      <p className='mt-4'>Masz już aktywne konto?</p>
      <Link to='/login' className='mt-1 font-semibold underline text-green-600'>
        Zaloguj się
      </Link>
    </div>
  );
};
