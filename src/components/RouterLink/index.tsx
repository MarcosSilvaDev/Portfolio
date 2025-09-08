import clsx from 'clsx';
import { Link } from 'react-router';

type RouterLinkProps = {
  children: React.ReactNode;
  href: string;
} & React.ComponentProps<'a'>;

export function RouterLink({ children, href, ...props }: RouterLinkProps) {
  return (
    <Link
      to={href}
      {...props}
      className={clsx(
        'text-[#fafafa]',
        'font-bold',
        'text-xl',
        'hover:scale-105',
        'transition-transform',
        'duration-100',
        'ease-out',
        'hover:drop-shadow-[0_0_10px_#eeedeb]',
      )}
    >
      {children}
    </Link>
  );
}
