import { BrowserRouter } from 'react-router-dom';
import { Container } from './components/Container';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

import './global.css';

import { MainRoutes } from './routes/MainRoutes';

function App() {
  return (
    <BrowserRouter>
      <Container className='flex flex-col min-h-screen bg-[#0e1429]'>
        <Header />

        <MainRoutes />
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
