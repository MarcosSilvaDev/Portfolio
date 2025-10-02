import clsx from 'clsx';
import { Container } from '../../components/Container';

import linkedinIcon from '../../assets/images/Icons/linkedin.svg';
import gitIcon from '../../assets/images/Icons/github-icon.svg';
import whatsappIcon from '../../assets/images/Icons/whatsapp-icon.svg';

export function Contact() {
  return (
    <Container className='flex flex-1 p-6 justify-center gap-2 flex-col sm:flex-row'>
      <div className='sm:w-1/2 text-white flex justify-start p-10'>
        <div>
          <h1
            className={clsx(
              'uppercase',
              'pb-10',
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
            contato
          </h1>

          <div className={clsx('pl-8')}>
            <h2 className={clsx('uppercase pb-2 text-sm')}>
              E-mail para contato:
            </h2>
            <a className={clsx('text-blue-500')}>marcos.dev1998.gmail.com</a>

            <h2 className={clsx('uppercase pt-10 text-sm')}>redes sociais</h2>
            <div className={clsx('flex gap-3 pt-2')}>
              <a href='https://wa.me/5563992871011' target='_blank'>
                <img
                  className={clsx(
                    'w-9',
                    'h-9',
                    'rounded',
                    'filter',
                    'grayscale-80',
                    'hover:cursor-pointer',
                    'hover:grayscale-0',
                    'p-[1px]',
                    'hover:scale-105',
                    'transition-all',
                    'duration-300',
                  )}
                  src={whatsappIcon}
                />
              </a>

              <a href='https://github.com/MarcosSilvaDev' target='_blank'>
                <img
                  className={clsx(
                    'w-9',
                    'h-9',
                    'rounded',
                    'filter',
                    'grayscale-80',
                    'hover:cursor-pointer',
                    'hover:grayscale-0',
                    'hover:scale-105',
                    'rounded-full',
                    'p-[1px]',
                    'hover:bg-white',
                    'transition-all',
                    'duration-300',
                  )}
                  src={gitIcon}
                />
              </a>

              <a
                href='https://linkedin.com/in/marcos-silva-0a3472244'
                target='_blank'
              >
                <img
                  className={clsx(
                    'w-9',
                    'h-9',
                    'rounded',
                    'filter',
                    'grayscale-80',
                    'hover:cursor-pointer',
                    'hover:grayscale-0',
                    'p-[1px]',
                    'hover:scale-105',
                    'transition-all',
                    'duration-300',
                  )}
                  src={linkedinIcon}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <form className='sm:w-1/2  flex gap-5 flex-col justify-center-safe p-5'>
        <h1 className={clsx('text-lg text-white uppercase')}>
          Me mande uma mensagem
        </h1>
        <div>
          <label className='"block text-white text-sm font-bold mb-2'>
            Nome
          </label>
          <input
            type='text'
            placeholder='Digite seu nome aqui...'
            className={clsx(
              'w-full',
              'px-3',
              'py-2',
              'mt-2',
              'border',
              'text-white',
              'border-gray-300',
              'rounded-lg',
              'focus:outline-none',
              'focus:border-blue-500',
              'focus:shadow-[0_0_10px_#3b82f6]',
            )}
          />
        </div>

        <div>
          <label className='"block text-white text-sm font-bold mb-2'>
            E-mail
          </label>
          <input
            type='email'
            placeholder='Digite seu e-mail aqui...'
            className={clsx(
              'w-full',
              'px-3',
              'py-2',
              'mt-2',
              'border',
              'text-white',
              'border-gray-300',
              'rounded-lg',
              'focus:outline-none',
              'focus:border-blue-500',
              'focus:shadow-[0_0_10px_#3b82f6]',
            )}
          />
        </div>

        <div>
          <label className='"block text-white text-sm font-bold mb-2'>
            Mensagem
          </label>
          <textarea
            rows={2}
            placeholder='Digite sua mensagem aqui...'
            className={clsx(
              'w-full',
              'px-3',
              'py-2',
              'mt-2',
              'border',
              'text-white',
              'border-gray-300',
              'rounded-lg',
              'focus:outline-none',
              'focus:border-blue-500',
              'focus:shadow-[0_0_10px_#3b82f6]',
            )}
          ></textarea>
        </div>
        <button
          className={clsx(
            'p-[2px]',
            'mt-2',
            'w-50',
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
            'hover:shadow-[0_0_15px_#3b82f6]',
          )}
        >
          <span
            className={clsx(
              'block',
              'bg-gray-900',
              'rounded-md',
              'px-5',
              'py-2',
              'uppercase',
              'text-white',
              'transition-all',
              'duration-500',
              'ease-in-out',
              'hover:bg-[#4379db]',
            )}
          >
            Enviar
          </span>
        </button>
      </form>
    </Container>
  );
}
