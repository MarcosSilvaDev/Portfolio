import clsx from 'clsx';
import { Container } from '../../components/Container';
import { TechologieList } from '../../components/TechologieList';

export function Techologies() {
  return (
    <Container className='flex-1 flex flex-col items-center-safe p-6 gap-6 '>
      {/* Título em cima e centralizado */}
      <h1
        className={clsx(
          'uppercase',
          'pt-5',
          'text-center',
          'sm:text-start',
          'text-4xl sm:text-5xl md:text-6xl',
          'font-extrabold',
          'bg-gradient-to-r',
          'from-blue-700',
          'via-blue-300',
          'to-emerald-500',
          'bg-clip-text',
          'text-transparent',
        )}
      >
        Tecnologias
      </h1>
      <h2 className={clsx('text-xl text-white pb-5')}>
        Ferramentas e tecnologias que eu uso.
      </h2>

      <TechologieList />
    </Container>
  );
}
