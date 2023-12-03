import { IMotorcycle, IReview } from '../../../libs/types';
import { MotorcycleDetails, Reviews } from '../../../components';

export const getAccordionOptions = (
  motorcycle: IMotorcycle,
  reviews: IReview[]
) => {
  return [
    {
      value: 'description',
      header: 'Opis',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit distinctio voluptatibus laboriosam id, doloremque exercitationem? Expedita tempora vitae vero excepturi quo neque iste explicabo, nesciunt ea quasi harum earum tenetur!',
    },
    {
      value: 'details',
      header: 'Szczegóły',
      content: (
        <MotorcycleDetails
          className='my-3'
          year={motorcycle?.year || 0}
          enginePower={motorcycle?.enginePower || 0}
          engineCapacity={motorcycle?.engineCapacity || 0}
        />
      ),
    },
    {
      value: 'ratings',
      header: 'Oceny klientów',
      content: <Reviews reviews={reviews || []} />,
    },
  ];
};
