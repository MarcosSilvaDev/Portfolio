import clsx from 'clsx';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={clsx(
        'min-h-screen',
        'min-w-screen',
        'flex',
        'flex-col',
        'justify-center',
        'itens-center',
        className,
      )}
    >
      {children}
    </div>
  );
}
