import { FC } from 'react';
import motoAuth from '../../assets/moto-auth.jpg';
import { Outlet } from 'react-router';
import { Navbar } from '../../components';

export const AuthLayout: FC = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='flex h-[calc(100vh-64px)] xxl:h-[calc(100vh-80px)] justify-center p-10 flex-col items-center'>
        <div className='flex max-w-[1200px] w-full max-h-[1000px] md:shadow overflow-hidden rounded-lg'>
          <div className='md:flex-1 hidden md:block'>
            <img
              src={motoAuth}
              alt='auth-motorcycle-image'
              className='h-full object-cover w-full'
            />
          </div>
          <div className='flex-1 flex flex-col justify-center'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
