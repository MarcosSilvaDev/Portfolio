import clsx from 'clsx';
import { Container } from '../../components/Container';

import linkedinIcon from '../../assets/images/Icons/linkedin.svg';
import gitIcon from '../../assets/images/Icons/github-icon.svg';
import whatsappIcon from '../../assets/images/Icons/whatsapp-icon.svg';

export function Contact() {
  return (
    <Container className='flex flex-1 p-6 justify-center gap-2 flex-col sm:flex-row'>
      <div className='sm:w-1/2 bg-amber-100 flex justify-center-safe p-5'>
        Conteudo 1
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
          ></textarea>
        </div>
        <button className='p-2 bg-amber-400'>Enviar</button>
      </form>
    </Container>
  );
}
