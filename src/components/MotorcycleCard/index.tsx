import { FC } from 'react';
import moto from '../../assets/bmw-gs.jpg';
import { Button } from '../../components/ui/button';

interface IProps {
  image?: string;
}

export const MotorcycleCard: FC<IProps> = ({ image }) => {
  return (
    <div className='md:grid border-b md:grid-cols-2 max-w-[500px] md:max-w-[1000px] w-full py-6 md:py-2 items-center justify-center'>
      <img className='mx-auto max-h-52' src={image || moto} alt='product' />
      <div className='flex flex-col gap-5 md:gap-8 md:px-4'>
        <p className='text-xl font-semibold mx-auto mt-5 md:mt-0 mb-2 md:mb-0'>
          BMW 1250GS
        </p>
        <div className='grid grid-cols-3 gap-2'>
          <div className='flex flex-col text-center justify-between'>
            <span className='font-medium text-sm text-center'>
              Rok produkcji
            </span>
            <span>2020</span>
          </div>
          <div className='flex flex-col items-center border-x justify-between'>
            <span className='font-medium text-sm text-center'>Moc silnika</span>
            <span>136KM</span>
          </div>
          <div className='flex flex-1 flex-col items-center'>
            <span className='font-medium text-sm text-center'>Pojemność</span>
            <span>1254cm</span>
          </div>
        </div>
        <div className='flex justify-between items-center flex-col md:flex-row gap-2'>
          <span className='font-medium'>500 zł / dzień</span>
          <Button className='w-full md:w-fit' size='sm'>
            Dodaj do koszyka
          </Button>
        </div>
      </div>
    </div>
  );
};
