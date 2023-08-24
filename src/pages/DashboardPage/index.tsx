import { FC, useEffect } from 'react';
import { pb } from '../../libs/pocketbase';

const getMotorcycles = async () => {
  const motoryclces = await pb.collection('motorcycles').getFullList();
  motoryclces.map((item) => console.log(item));
};

export const DashboardPage: FC = () => {
  useEffect(() => {
    // getMotorcycles();
  }, []);

  return <div>DashboardPage</div>;
};
