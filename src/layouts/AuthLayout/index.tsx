import { FC } from 'react';
import motoAuth from '../../assets/moto-auth.jpg';
import { Outlet } from 'react-router';

export const AuthLayout: FC = () => {
  return (
    <div className='md:shadow rounded-lg overflow-hidden flex max-w-[1200px] m-10 w-full'>
      <div className='md:flex-1 hidden md:block '>
        <img
          src={motoAuth}
          alt='auth-motorcycle-image'
          className='object-cover h-full bg-pink-200'
        />
      </div>
      <div className='flex-1'>
        <Outlet />
      </div>
    </div>
  );
};
