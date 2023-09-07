import { FC } from 'react';
import { Button } from '../../components/ui/button';
import { IMotorcycle } from '../../libs/types';
import { getImgSrc } from '../../libs/utils';
import { Link } from 'react-router-dom';

interface IProps {
  motorcycle: IMotorcycle;
}

export const MotorcycleCard: FC<IProps> = ({ motorcycle }) => {
  const {
    id,
    brand,
    model,
    year,
    enginePower,
    engineCapacity,
    price,
    image,
    collectionId,
  } = motorcycle;

  return (
    <div className='md:grid border-b md:grid-cols-2 max-w-[500px] md:max-w-[1000px] w-full py-6 md:py-2 items-center justify-center'>
      <img
        className='mx-auto max-h-52'
        src={getImgSrc(collectionId, id, image)}
        alt='product'
      />
      <div className='flex flex-col gap-5 md:gap-8 md:px-4'>
        <p className='text-xl font-semibold mx-auto mt-5 md:mt-0 mb-2 md:mb-0'>
          {brand} {model}
        </p>
        <div className='grid grid-cols-3 gap-2'>
          <div className='flex flex-col text-center justify-between'>
            <span className='font-medium text-sm text-center'>
              Rok produkcji
            </span>
            <span>{year}</span>
          </div>
          <div className='flex flex-col items-center border-x justify-between'>
            <span className='font-medium text-sm text-center'>Moc silnika</span>
            <span>{enginePower}KM</span>
          </div>
          <div className='flex flex-1 flex-col items-center'>
            <span className='font-medium text-sm text-center'>Pojemność</span>
            <span>{engineCapacity}cm</span>
          </div>
        </div>
        <div className='flex justify-between items-center flex-col md:flex-row gap-2'>
          <span className='font-medium'>{price} zł / dzień</span>
          <Button className='w-full md:w-fit' size='sm'>
            <Link to={`/motorcycle/${id}`}>Poznaj szczegóły</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
