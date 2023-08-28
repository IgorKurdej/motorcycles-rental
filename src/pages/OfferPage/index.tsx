import { MotorcycleCard } from '../../components';
import img from '../../assets/hd.png';

export const OfferPage = () => {
  return (
    <div className='flex flex-col items-center gap-2 px-4 md:px-0'>
      <MotorcycleCard />
      <MotorcycleCard image={img} />
      <MotorcycleCard />
      <MotorcycleCard image={img} />
    </div>
  );
};
