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

export const Filters: FC = () => {
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
    <div className='p-4 sticky top-16 lg:top-20 xxl:top-24 lg:space-y-8 lg:w-60 flex items-center lg:block gap-3'>
      <div className='space-y-1 flex-1'>
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
            className='text-primary cursor-pointer'
            onClick={() => setSearchValue('')}
          />
        </div>
      </div>

      <div className='space-y-1 hidden lg:block'>
        <Label className='text-base mb-2'>Marka</Label>
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

      <div className='space-y-1 flex-1'>
        <div className='flex gap-2 items-center'>
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
        <div className='flex items-center gap-3'>
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
            className='text-primary cursor-pointer'
            onClick={() => setSortBy('created')}
          />
        </div>
      </div>
    </div>
  );
};
