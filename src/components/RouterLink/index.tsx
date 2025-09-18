import clsx from 'clsx';
import { Link } from 'react-router-dom';

type RouterLinkProps = {
  children: React.ReactNode;
  href: string;
} & React.ComponentProps<'a'>;

export function RouterLink({ children, href }: RouterLinkProps) {
  return (
    <Link
      className={clsx(
        'uppercase',
        'transition-colors',
        'duration-400',
        'ease-in-out',
        'hover:text-[#4379db]',
        'hover:drop-shadow-[0_0_2px_rgba(67,121,219,0.7)]',
      )}
      to={href}
    >
      {children}
    </Link>
  );
}
