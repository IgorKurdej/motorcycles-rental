import { FC, useEffect, useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { X } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const brands = ['BMW', 'Yamaha', 'Harley Davidson'];

export const Filters: FC = () => {
  const [sortBy, setSortBy] = useState('');

  return (
    <div className='h-fit p-4 sticky top-20 xxl:top-24 space-y-8 w-60 hidden lg:block'>
      <div className='space-y-1'>
        <Label className='text-base'>Wyszukaj motocykl</Label>
        <Input placeholder='szukaj...' />
      </div>
      <div className='space-y-2'>
        <Label className='text-base mb-2'>Marka</Label>
        <div className='flex items-center space-x-2'>
          <Checkbox id='all' defaultChecked />
          <Label htmlFor='all'>Zaznacz wszystkie</Label>
        </div>
        {brands.map((brand) => (
          <div key={brand} className='flex items-center space-x-2'>
            <Checkbox id={brand} defaultChecked />
            <Label htmlFor={brand}>{brand}</Label>
          </div>
        ))}
      </div>
      <div className='space-y-1'>
        <Label className='text-base'>Sortuj po</Label>
        <div className='flex items-center justify-between gap-3'>
          <Select value={sortBy} onValueChange={(value) => setSortBy(value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className='hidden' value='' />
              <SelectItem value='dark'>Dark</SelectItem>
              <SelectItem value='system'>System</SelectItem>
            </SelectContent>
          </Select>
          <X
            className='text-primary cursor-pointer'
            onClick={() => setSortBy('')}
          />
        </div>
      </div>
    </div>
  );
};
