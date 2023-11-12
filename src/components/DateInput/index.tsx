import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { cn } from '../../libs/utils';
import { Button } from '../ui/button';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from '../ui/calendar';
import { Matcher } from 'react-day-picker';

interface IProps {
  date: Date | undefined;
  disabledDates?: Matcher | Matcher[];
  setDate: Dispatch<SetStateAction<Date | undefined>>;
}

export const DateInput: FC<IProps> = ({ date, disabledDates, setDate }) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-full justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className='mr-2 h-4 w-4' />
          {date ? format(date, 'dd-MM-yyyy') : <span>Wybierz datę</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar
          mode='single'
          selected={date}
          disabled={disabledDates}
          onSelect={(e) => {
            setDate(e);
            setIsCalendarOpen(false);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
