import { Dispatch, FC, SetStateAction } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const className = 'absolute top-3 right-2 cursor-pointer';

interface IProps {
  isHidden: boolean;
  setIsHidden: Dispatch<SetStateAction<boolean>>;
}

export const ShowPassword: FC<IProps> = ({ isHidden, setIsHidden }) => {
  const handleToggle = () => setIsHidden((prev) => !prev);

  return isHidden ? (
    <Eye size={18} className={className} onClick={handleToggle} />
  ) : (
    <EyeOff size={18} className={className} onClick={handleToggle} />
  );
};
