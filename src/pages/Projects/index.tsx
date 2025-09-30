import clsx from 'clsx';
import { Container } from '../../components/Container';

export function Projects() {
  return (
    <Container
      className={clsx(
        'flex-1 flex gap-6  flex-col sm:justify-center sm:items-center-safe',
      )}
    >
      <h1
        className={clsx(
          'uppercase',
          'pt-5',
          'text-center',
          'sm:text-start',
          'text-4xl sm:text-4xl md:text-5xl',
          'font-extrabold',
          'bg-gradient-to-r',
          'from-blue-700',
          'via-blue-300',
          'to-emerald-500',
          'bg-clip-text',
          'text-transparent',
        )}
      >
        Projetos
      </h1>
      <div className='pb-3 flex gap-8 flex-col items-center sm:flex-row'>
        <div
          className={clsx(
            'h-80',
            'w-70',
            'bg-[#181f3b]',
            'rounded-2xl',
            'flex',
            'flex-col',
            'border-3',
            'border-blue-400',
            'shadow-[0_0_10px_#3b82f6]',
            'group',
          )}
        >
          <div className='w-full h-40 overflow-hidden rounded-t-2xl'>
            <img
              src='./assets/images/projeto_01.png'
              className={clsx(
                'w-full',
                'h-40',
                'object-cover',
                'object-center',
                'transition',
                'duration-300',
                'group-hover:scale-105',
              )}
            />
          </div>

          <div className='flex flex-col gap-2 p-3 w-full items-center-safe'>
            <h1 className='text-gray-300 font-bold text-center'>
              Automação da técnica pomodoro
            </h1>
            <p className='text-gray-300 text-center'>
              React JS - Vite - Typescript{' '}
            </p>
            <button
              className={clsx(
                'border-2',
                'border-blue-700',
                'w-50',
                'rounded',
                'p-2',
                'cursor-pointer',
                'hover:bg-[#4379db]',
                'transition-all',
                'duration-300',
                'ease-in-out',
                'hover:shadow-[0_0_25px_#3b82f6]',
                'hover:border-[#4379db]',
              )}
            >
              <span className={clsx('text-white uppercase')}>acessar</span>
            </button>
          </div>
        </div>

        <div
          className={clsx(
            'h-80',
            'w-70',
            'bg-[#181f3b]',
            'rounded-2xl',
            'flex',
            'flex-col',
            'border-3',
            'border-blue-400',
            'shadow-[0_0_10px_#3b82f6]',
            'group',
          )}
        >
          <div className='w-full h-40 overflow-hidden rounded-t-2xl'>
            <img
              src='./assets/images/Project_loading.png'
              className={clsx(
                'w-full',
                'h-40',
                'object-cover',
                'object-center',
                'transition',
                'duration-300',
                'group-hover:scale-105',
              )}
            />
          </div>

          {/* Conteúdo abaixo */}
          <div className='flex flex-col items-center-safe gap-2 p-3 w-full'>
            <h1 className='text-gray-300 font-bold text-center pb-7'>
              Em desenvolvimento
            </h1>
            <p className='text-gray-300 text-center'>
              React JS - Vite - Typescript{' '}
            </p>
            <button
              disabled
              className={clsx(
                'disabled:bg-gray-500',
                'w-50',
                'rounded',
                'p-2',
                'transition-all',
                'duration-300',
                'ease-in-out',
              )}
            >
              <span className={clsx('text-white uppercase')}>acessar</span>
            </button>
          </div>
        </div>

        <div
          className={clsx(
            'h-80',
            'w-70',
            'bg-[#181f3b]',
            'rounded-2xl',
            'flex',
            'flex-col',
            'border-3',
            'border-blue-400',
            'shadow-[0_0_10px_#3b82f6]',
            'group',
          )}
        >
          <div className='w-full h-40 overflow-hidden rounded-t-2xl'>
            <img
              src='./assets/images/Project_loading.png'
              className={clsx(
                'w-full',
                'h-40',
                'object-cover',
                'object-center',
                'transition',
                'duration-300',
                'group-hover:scale-105',
              )}
            />
          </div>

          {/* Conteúdo abaixo */}
          <div className='flex flex-col items-center-safe gap-2 p-3 w-full'>
            <h1 className='text-gray-300 font-bold text-center pb-7'>
              Em desenvolvimento
            </h1>
            <p className='text-gray-300 text-center'>- Nenhuma - </p>
            <button
              disabled
              className={clsx(
                'disabled:bg-gray-500',
                'w-50',
                'rounded',
                'p-2',
                'transition-all',
                'duration-300',
                'ease-in-out',
              )}
            >
              <span className={clsx('text-white uppercase')}>acessar</span>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
