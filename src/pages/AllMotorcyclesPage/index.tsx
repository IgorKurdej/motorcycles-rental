import { FC, useMemo, useState } from 'react';
import { Modal, EmptyState } from '../../components';
import { useFiltersStore } from '../../hooks/useFiltersStore';
import { useGetMotorcycles } from '../../hooks/queries/useGetMotorcycles';
import { sortNumbers } from '../../libs/utils';
import { Filter as FilterButton } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Filters, MotorcycleCard } from './components';

export const allBrands = ['BMW', 'Yamaha', 'Harley Davidson'];

export const AllMotorcyclesPage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: motorcycles } = useGetMotorcycles();
  const { searchValue, searchedBrands, isAsc, sortBy, resetAll } =
    useFiltersStore();

  const filteredMotorcycles = useMemo(() => {
    return motorcycles
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
      );
  }, [motorcycles, searchedBrands, isAsc, sortBy, searchValue]);

  return (
    <>
      <div className='flex flex-col lg:flex-row'>
        <Filters className='sticky self-start hidden lg:block top-20' />

        <div className='sticky flex items-center justify-end gap-1 py-2 -mt-6 bg-white lg:hidden top-16'>
          <Button variant='ghost' className='px-2' onClick={resetAll}>
            Resetuj filtry
          </Button>
          <FilterButton
            className='p-2 text-white bg-black rounded-full cursor-pointer'
            size={35}
            onClick={() => setIsModalOpen(true)}
          />
        </div>

        <div className='flex flex-col items-center flex-1'>
          {filteredMotorcycles?.length ? (
            filteredMotorcycles.map((motorcycle) => (
              <MotorcycleCard key={motorcycle.id} motorcycle={motorcycle} />
            ))
          ) : (
            <EmptyState
              message='Brak motocyklów pasujących do szukanych kryteriów'
              className='py-20'
            />
          )}
        </div>
      </div>

      {/* modal with filters on mobile */}
      <Modal
        title='Filtry'
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        footer={
          <div className='flex justify-end gap-1'>
            <Button size='sm' variant='secondary' onClick={resetAll}>
              Resetuj
            </Button>
            <Button size='sm' onClick={() => setIsModalOpen(false)}>
              Gotowe
            </Button>
          </div>
        }
      >
        <Filters />
      </Modal>
    </>
  );
};
