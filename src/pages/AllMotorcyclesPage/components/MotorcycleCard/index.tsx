import { FC } from 'react';
import { Button } from '../../../../components/ui/button';
import { IMotorcycle } from '../../../../libs/types';
import { getImgSrc } from '../../../../libs/utils';
import { Link } from 'react-router-dom';
import { MotorcycleDetails } from '../../../../components/MotorcycleDetails';

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
    <div className='md:grid border-b md:grid-cols-2 max-w-[500px] md:max-w-[1000px] lg:h-[230px] w-full py-6 md:py-2 items-center justify-center animate-[wiggle_0.5s_ease]'>
      <img
        className='mx-auto max-h-52'
        src={getImgSrc(collectionId, id, image)}
        alt='product'
      />
      <div className='flex flex-col gap-5 md:gap-8 md:px-4'>
        <p className='mx-auto mt-5 mb-2 text-xl font-semibold md:mt-0 md:mb-0'>
          {brand} {model}
        </p>
        <MotorcycleDetails
          year={year}
          enginePower={enginePower}
          engineCapacity={engineCapacity}
        />
        <div className='flex flex-col items-center justify-between gap-2 md:flex-row'>
          <span className='font-medium'>{price} zł / dzień</span>
          <Link to={`/motorcycles/${id}`}>
            <Button className='w-full md:w-fit' size='sm'>
              Poznaj szczegóły
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
