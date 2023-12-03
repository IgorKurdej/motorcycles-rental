import { FC } from 'react';
import KTM from '../../assets/KTM.png';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

export const DashboardPage: FC = () => {
  return (
    <div className='flex flex-col-reverse items-center justify-center flex-1 gap-16 py-20 lg:flex-row lg:gap-36'>
      <div className='hidden rounded-full max-w-[450px] h-[450px] bg-gradient-to-bl from-primary to-black lg:flex items-center justify-center'>
        <img
          src={KTM}
          className='max-w-[500px] -rotate-6'
          alt='dashboard-motorcycle'
        />
      </div>
      <div className='text-center'>
        <h1 className='text-5xl lg:text-8xl font-allura'>MotoRental</h1>
        <p className='mb-4 text-lg font-light text-gray-500 lg:text-2xl'>
          Wypożyczalnia motocykli w Polsce
        </p>
        <Link to='/motorcycles'>
          <Button className='p-4 text-sm lg:text-base lg:p-6'>
            SPRAWDŹ OFERTĘ
          </Button>
        </Link>
      </div>
    </div>
  );
};
