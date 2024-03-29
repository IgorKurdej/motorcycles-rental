import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { User } from '../../libs/types';
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
import { Label } from '../../components/ui/label';
import { Edit } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema } from '../../libs/schemas';
import { useUpdateUserDetails } from '../../hooks/mutations/useUpdateUserDetails';
import { pb } from '../../libs/pocketbase';

export const UserDetailsPage: FC = () => {
  const [isFormEdit, setIsFormEdit] = useState(false);

  const user = pb.authStore.model;

  const { mutate } = useUpdateUserDetails(() => {
    setIsFormEdit(false);
  });

  useEffect(() => {
    form.reset({ email: user?.email, username: user?.username });
  }, []);

  const form = useForm<User>({
    defaultValues: { email: user?.email, username: user?.username },
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<User> = (data) => {
    mutate(data);
  };

  return (
    <div className='flex flex-col items-center justify-center py-6 md:flex-1'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full max-w-lg space-y-4'
        >
          <div className='flex items-center justify-between'>
            <Label className='text-lg'>Dane użytkownika</Label>
            <Edit
              size={20}
              className='cursor-pointer'
              onClick={() => setIsFormEdit((prev) => !prev)}
            />
          </div>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='email' {...field} disabled={true} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nazwa użytkownika</FormLabel>
                <FormControl>
                  <Input
                    placeholder='username'
                    {...field}
                    disabled={!isFormEdit}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex justify-end'>
            <Button disabled={!isFormEdit}>Zapisz</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
