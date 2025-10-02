import clsx from 'clsx';
import { Container } from '../../components/Container';

import meuPdf from '../../assets/pdf/Desenvolvedor_Fronend_Jr_MARCOS_SILVA.pdf';

export function Home() {
  return (
    <Container className='flex-1 flex-col-reverse justify-evenly sm:flex-row p-6 gap-4'>
      <div
        className={clsx(
          'flex',
          'flex-col',
          'items-center-safe',
          'sm:items-start',
          'sm:justify-center',
          'w-full',
          'sm:w-1/2',
        )}
      >
        <h1
          className={clsx(
            'uppercase',
            'pt-5',
            'text-center',
            'sm:text-start',
            'pl-2',
            'text-3xl sm:text-4xl md:text-5xl',
            'font-extrabold',
            'bg-gradient-to-r',
            'from-blue-700',
            'via-blue-300',
            'to-emerald-500',
            'bg-clip-text',
            'text-transparent',
          )}
        >
          Desenvolvedor frontend
        </h1>

        <p
          className={clsx(
            'text-center',
            'sm:text-start',
            'text-gray-200',
            'text-base',
            'sm:text-lg',
            'md:text-2xl',
            'pt-8',
            'pb-2',
            'mb-4',
            'font-stretch-75%',
          )}
        >
          Olá, sou o Marcos, apaixonado pelo desenvolvimento web buscando criar
          layout responsivos, modernos e eficientes.
        </p>

        <a
          href={meuPdf}
          download='Desenvolvedor_Fronend_Jr_MARCOS_SILVA.pdf'
          className={clsx(
            'p-[2px]',
            'mt-2',
            'shadow-[0_0_10px_#3b82f6]',
            'bg-gradient-to-r',
            'from-blue-500',
            'via-blue-400',
            'to-emerald-400',
            'rounded-lg',
            'transition-all',
            'duration-500',
            'ease-in-out',
            'cursor-pointer',
            'hover:via-[#4379db]',
            'hover:to-[#4379db]',
            'hover:shadow-[0_0_25px_#3b82f6]',
          )}
        >
          <span
            className={clsx(
              'block',
              'bg-gray-900',
              'rounded-md',
              'px-6',
              'py-3',
              'uppercase',
              'text-white',
              'text-center',
              'font-semibold',
              'transition-all',
              'duration-500',
              'ease-in-out',
              'hover:bg-[#4379db]',
            )}
          >
            Baixar Currículo
          </span>
        </a>
      </div>

      <div className='flex justify-center-safe items-center-safe'>
        <div
          className={clsx(
            'relative',
            'w-80',
            'h-60',
            'sm:w-90',
            'sm:h-100',
            'overflow-hidden',
            'border-3',
            'border-blue-400',
            'shadow-[0_0_10px_#3b82f6]',
            'rounded',
          )}
        >
          <img
            src='./assets/images/bg-avatar.jpg'
            alt='Background'
            className={clsx(
              'absolute',
              'rounded-4xl',
              'inset-0',
              'w-full',
              'h-full',
              'object-cover',
              'filter grayscale-10',
              'filter blur-[1px]',
              'opacity-30',
            )}
          />

          <img
            className={clsx(
              'absolute',
              'bottom-0',
              'left-1/2',
              '-translate-x-1/2',
              'z-1',
              'w-44',
              'h-60',
              'sm:w-60',
              'sm:h-64',
              'md:w-84',
              'md:h-100',
              'object-cover',
            )}
            src='./assets/images/avatar.png'
            alt='Avatar'
          />
        </div>
      </div>
    </Container>
  );
}
