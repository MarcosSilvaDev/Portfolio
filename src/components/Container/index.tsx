import clsx from 'clsx';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={clsx('flex-1', 'w-full', 'flex', 'flex-col', className)}>
      {children}
    </div>
  );
}
