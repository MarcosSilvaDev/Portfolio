import clsx from 'clsx';
import { Container } from './components/Container';
import './global.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <Container
      className={clsx(
        'bg-gradient-to-b from-[#070719] from-10% via-[#0a0a17] via-30% to-[#061531] to-90%',
      )}
    >
      <Navbar />
      <main className='flex-1'>
        <p className='text-amber-50'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
          asperiores quod enim exercitationem voluptate tempore sit voluptatibus
          et voluptatum. Est sit odit magni ducimus voluptas deserunt ab
          repudiandae consectetur qui.
        </p>
      </main>

      <Footer />
    </Container>
  );
}

export default App;
