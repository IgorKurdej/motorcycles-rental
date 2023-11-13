import { FC, useEffect, useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { ArrowDownAZ, ArrowDownZA, X } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useFiltersStore } from '../../hooks/useFiltersStore';
import { allBrands } from '../../pages/OfferPage';
import { cn } from '../../libs/utils';
import { Button } from '../ui/button';

interface IProps {
  className?: string;
}

export const Filters: FC<IProps> = ({ className }) => {
  const [isAllBrandsChecked, setIsAllBrandsChecked] = useState(false);

  const {
    searchValue,
    searchedBrands,
    isAsc,
    sortBy,
    setSearchValue,
    setSearchedBrands,
    setSearchedBrandsWithBrandName,
    setIsAsc,
    setSortBy,
    resetAll,
  } = useFiltersStore();

  useEffect(() => {
    if (searchedBrands.length === 0) {
      setSearchedBrands([...allBrands]);
      setIsAllBrandsChecked(true);
    }
  }, []);

  useEffect(() => {
    if (searchedBrands.length === allBrands.length) {
      setIsAllBrandsChecked(true);
      return;
    }

    setIsAllBrandsChecked(false);
  }, [searchedBrands]);

  const handleSearchBrandsChange = (isSeachAllChecked: boolean) => {
    if (isSeachAllChecked) {
      setSearchedBrands([...allBrands]);
      return;
    }

    setSearchedBrands([]);
  };

  return (
    <div
      className={cn('p-4 space-y-6 lg:top-20 xxl:top-24 lg:block', className)}
    >
      <div className='flex-1 space-y-1'>
        <Label htmlFor='searchModel' className='text-base'>
          Wyszukaj motocykl
        </Label>
        <div className='flex items-center gap-2'>
          <Input
            id='searchModel'
            value={searchValue}
            placeholder='wyszukaj model...'
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <X
            size={18}
            className='cursor-pointer text-primary'
            onClick={() => setSearchValue('')}
          />
        </div>
      </div>

      <div className='flex-1 space-y-1'>
        <div className='flex items-center gap-2'>
          <Label className='text-base'>Sortuj po</Label>
          {isAsc ? (
            <ArrowDownAZ
              className='text-primary'
              size={20}
              onClick={setIsAsc}
            />
          ) : (
            <ArrowDownZA
              className='text-primary'
              size={20}
              onClick={setIsAsc}
            />
          )}
        </div>
        <div className='flex items-center gap-2'>
          <Select value={sortBy} onValueChange={(value) => setSortBy(value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className='hidden' value='created' />
              <SelectItem value='price'>Cena</SelectItem>
              <SelectItem value='year'>Rok produkcji</SelectItem>
              <SelectItem value='enginePower'>Moc silnika</SelectItem>
              <SelectItem value='engineCapacity'>Pojemność </SelectItem>
            </SelectContent>
          </Select>
          <X
            size={18}
            className='cursor-pointer text-primary'
            onClick={() => setSortBy('created')}
          />
        </div>
      </div>

      <div className='space-y-1'>
        <Label className='mb-2 text-base'>Marka</Label>
        <div className='max-h-[160px] space-y-1 py-1'>
          <div className='flex items-center space-x-2'>
            <Checkbox
              id='all'
              checked={isAllBrandsChecked}
              onCheckedChange={handleSearchBrandsChange}
            />
            <Label htmlFor='all'>Zaznacz wszystkie</Label>
          </div>
          {allBrands.map((brand) => (
            <div key={brand} className='flex items-center space-x-2'>
              <Checkbox
                id={brand}
                onCheckedChange={(isChecked) =>
                  setSearchedBrandsWithBrandName(isChecked as boolean, brand)
                }
                checked={searchedBrands.includes(brand)}
              />
              <Label htmlFor={brand}>{brand}</Label>
            </div>
          ))}
        </div>
      </div>

      <Button
        className='hidden w-full lg:inline-block'
        variant='secondary'
        size='sm'
        onClick={resetAll}
      >
        Resetuj
      </Button>
    </div>
  );
};
