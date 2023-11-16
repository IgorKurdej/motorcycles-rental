import { FC } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { pb } from '../../libs/pocketbase';
import { toast } from 'react-hot-toast';
import user from '../../assets/user.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '../ui/dropdown-menu';
import { LogOut } from 'lucide-react';
import { ShoppingCart } from './ShoppingCart';

export const Navbar: FC = () => {
  const { pathname } = useLocation();
  const naviagate = useNavigate();

  const logout = () => {
    try {
      pb.authStore.clear();
    } catch (e) {
      toast.error('Coś poszło nie tak!');
      console.log(e);
    } finally {
      toast('Do zobaczenia!');
      naviagate('/');
    }
  };

  const routes = [
    {
      href: '/',
      label: 'Strona głowna',
      isActive: pathname === '/',
    },
    {
      href: '/motorcycles',
      label: 'Oferta',
      isActive: pathname.includes('/motorcycles'),
    },
  ];

  return (
    <div className='sticky top-0 z-10 flex items-center justify-between w-full h-16 px-5 bg-black xxl:h-20'>
      <nav className='space-x-6'>
        {routes.map(({ href, isActive, label }) => (
          <Link
            key={href}
            to={href}
            className={isActive ? 'text-primary' : 'text-white'}
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className='flex items-center gap-8'>
        <ShoppingCart />
        {!pb.authStore.isValid ? (
          <Link to='/login'>
            <Button>Zaloguj się</Button>
          </Link>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <img
                src={user}
                alt='user-image'
                className='w-8 h-8 bg-gray-100 rounded-full'
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Link to='/user'>
                <DropdownMenuItem>Konto użytkownika</DropdownMenuItem>
              </Link>
              <Link to='/reservations'>
                <DropdownMenuItem>Rezerwacje</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logout}>
                Wyloguj
                <DropdownMenuShortcut>
                  <LogOut size={16} />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
};
