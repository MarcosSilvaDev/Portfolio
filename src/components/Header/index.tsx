import clsx from 'clsx';
import { RouterLink } from '../RouterLink';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={clsx(
        'm-4',
        'p-2',
        'border-1',
        'border-gray-200',
        'rounded-xl',
        'flex',
        'justify-evenly',
        'items-center',
        'text-gray-200',
      )}
    >
      <RouterLink href='/'>
        <h1 className='font-[reckoner] font-extrabold text-4xl'>
          Marcos silva
        </h1>
      </RouterLink>

      {/* Desktop */}
      <ul className={clsx('hidden md:flex space-x-8')}>
        <li>
          <RouterLink href='/'>Home</RouterLink>
        </li>
        <li>
          <RouterLink href='/'>Tecnologias</RouterLink>
        </li>
        <li>
          <RouterLink href='/'>Projetos</RouterLink>
        </li>
        <li>
          <RouterLink href='/'>Contato</RouterLink>
        </li>
      </ul>

      {/* mobile */}
      <div className={clsx('md:hidden', 'cursor-pointer')}>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </button>
      </div>

      <ul
        className={clsx(
          'absolute',
          'z-10',
          'top-20',
          'left-0',
          'w-full',
          'h-2/3',
          'justify-evenly',
          'bg-[#161d3a]',
          'flex',
          'flex-col',
          'md:hidden',
          'shadow-lg',
          'rounded-b-md',
          'transform',
          'transition-transform',
          isMenuOpen ? 'opacity-100' : 'opacity-0 ',
        )}
        style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
      >
        <li
          className={clsx(
            'w-full',
            'pb-2',
            'flex',
            'justify-center',
            'items-center',
            'hover:bg-amber-50',
          )}
        >
          <RouterLink
            href='/'
            className={clsx('block', 'w-full', 'text-center', 'py-4', '')}
          >
            Home
          </RouterLink>
        </li>

        <li
          className={clsx(
            'w-full',
            'pb-2',
            'flex',
            'justify-center',
            'items-center',
          )}
        >
          <RouterLink
            href='/'
            className={clsx('block w-full text-center py-4')}
          >
            Tecnologias
          </RouterLink>
        </li>

        <li
          className={clsx(
            'w-full',
            'pb-2',
            'flex',
            'justify-center',
            'items-center',
          )}
        >
          <RouterLink
            href='/'
            className={clsx('block w-full text-center py-4')}
          >
            Projetos
          </RouterLink>
        </li>

        <li
          className={clsx('w-full', 'flex', 'justify-center', 'items-center')}
        >
          <RouterLink
            href='/'
            className={clsx('block w-full text-center py-4')}
          >
            Contato
          </RouterLink>
        </li>
      </ul>
    </nav>
  );
}
