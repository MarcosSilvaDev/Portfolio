import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Techologies } from '../pages/Techologies';
import { Projects } from '../pages/Projects';
import { Contact } from '../pages/Contact';

export function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/techologies' element={<Techologies />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}
