import clsx from 'clsx';

export function Footer() {
  return (
    <div
      className={clsx(
        'h-12',
        'bg-[#12082c]',
        'border-t-1',
        'border-gray-600',
        'text-white',
        'flex',
        'items-center',
        'justify-center',
      )}
    >
      <span className={clsx('text-gray-400 text-sm')}>
        © 2025 Marcos Silva. Todos os direitos reservados.
      </span>
    </div>
  );
}
