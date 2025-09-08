import clsx from 'clsx';
import { RouterLink } from '../RouterLink';

export function Navbar() {
  return (
    <nav
      className={clsx(
        'w-full h-15 bg-[#070719] inline-flex items-center justify-center gap-20',
      )}
    >
      <RouterLink href='#' aria-label='Ir para a home' title='Ir para a home'>
        Home
      </RouterLink>
      <RouterLink href='#' aria-label='Ir para a home' title='Ir para a home'>
        Habilidades
      </RouterLink>
      <RouterLink href='#' aria-label='Ir para a home' title='Ir para a home'>
        Projetos
      </RouterLink>
      <RouterLink href='#' aria-label='Ir para a home' title='Ir para a home'>
        Contato
      </RouterLink>
    </nav>
  );
}
