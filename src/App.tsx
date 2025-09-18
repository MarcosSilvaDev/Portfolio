import { Container } from './components/Container';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

import './global.css';
import { Home } from './pages/Home';

function App() {
  return (
    <Container className='flex flex-col min-h-screen bg-[#0e1429]'>
      <Header />

      <Home />

      <Footer />
    </Container>
  );
}

export default App;
