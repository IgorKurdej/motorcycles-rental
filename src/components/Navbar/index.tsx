import { FC } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { pb } from '../../libs/pocketbase';

export const Navbar: FC = () => {
  const { pathname } = useLocation();

  const routes = [
    {
      href: '/',
      label: 'Strona głowna',
      isActive: pathname === '/',
    },
    {
      href: '/offer',
      label: 'Oferta',
      isActive: pathname === '/offer',
    },
    {
      href: '/contact',
      label: 'Kontakt',
      isActive: pathname === '/contact',
    },
  ];

  return (
    <div className='bg-black h-16 xxl:h-20 w-full flex items-center justify-between px-32'>
      <nav className='space-x-6'>
        {routes.map(({ href, isActive, label }) => (
          <Link
            key={href}
            to={href}
            className={isActive ? 'text-green-500' : 'text-white'}
          >
            {label}
          </Link>
        ))}
      </nav>
      {!pb.authStore.isValid && <Button>
        <Link to='/login'>Zaloguj się</Link>
      </Button>}
    </div>
  );
};
