import { FC } from 'react';
import KTM from '../../assets/KTM.png';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

export const DashboardPage: FC = () => {
  return (
    <div className='flex items-center justify-around flex-1 px-24'>
      <div className='rounded-full w-[450px] h-[450px] bg-gradient-to-bl from-primary to-black  flex items-center justify-center'>
        <img
          src={KTM}
          className='max-w-[500px] -rotate-6'
          alt='dashboard-motorcycle'
        />
      </div>
      <div className='text-center'>
        <h1 className='text-8xl font-allura'>MotoRental</h1>
        <p className='mb-5 text-2xl font-light text-gray-500'>
          Wypożyczalnia motocykli w Polsce
        </p>
        <Link to='/motorcycles'>
          <Button size='lg' className='text-base'>
            SPRAWDŹ OFERTĘ
          </Button>
        </Link>
      </div>
    </div>
  );
};
