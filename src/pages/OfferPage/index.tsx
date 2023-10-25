import { FC, useMemo } from 'react';
import { Filters, MotorcycleCard } from '../../components';
import { Spinner } from '../../components/ui';
import { useFiltersStore } from '../../hooks/useFiltersStore';
import { useGetMotorcycles } from '../../hooks/queries/useGetMotorcycles';
import { sortNumbers } from '../../libs/utils';

export const allBrands = ['BMW', 'Yamaha', 'Harley Davidson'];

export const OfferPage: FC = () => {
  const { data } = useGetMotorcycles();
  const { searchValue, searchedBrands, isAsc, sortBy } = useFiltersStore();

  const motorcycles = useMemo(
    () =>
      data
        ?.filter((item) =>
          searchedBrands.length !== allBrands.length
            ? searchedBrands.includes(item.brand)
            : item
        )
        .filter((item) =>
          searchValue.length > 0
            ? item.model
                .toLocaleLowerCase()
                .includes(searchValue.toLocaleLowerCase())
            : item
        )
        .sort((a, b) =>
          isAsc
            ? sortNumbers(a[sortBy], b[sortBy])
            : sortNumbers(b[sortBy], a[sortBy])
        ),
    [data, searchedBrands, isAsc, sortBy, searchValue]
  );

  return (
    <div className='flex flex-col lg:flex-row justify-between px-4 md:px-0'>
      <Filters />
      <div className='flex flex-1 items-center flex-col'>
        {motorcycles?.map((motorcycle) => (
          <MotorcycleCard key={motorcycle.id} motorcycle={motorcycle} />
        ))}
      </div>
    </div>
  );
};
