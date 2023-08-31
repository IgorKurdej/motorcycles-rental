import { Filters, MotorcycleCard } from '../../components';
import img from '../../assets/hd.png';

export const OfferPage = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between px-4 md:px-0'>
      <Filters />
      <div className='flex flex-1 items-center flex-col'>
        <MotorcycleCard />
        <MotorcycleCard image={img} />
        <MotorcycleCard />
        <MotorcycleCard image={img} />
        <MotorcycleCard />
        <MotorcycleCard image={img} />
        <MotorcycleCard />
        <MotorcycleCard image={img} />
      </div>
    </div>
  );
};
