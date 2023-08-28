import { FC } from 'react';
import { Navbar } from '../../components';
import { Outlet } from 'react-router-dom';

export const RootLayout: FC = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex-1 mx-auto w-full max-w-[1600px] flex flex-col'>
        <Outlet />
      </main>
    </div>
  );
};
