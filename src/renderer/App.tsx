import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import "tailwindcss/tailwind.css";

//importing UI for routing
import { Login } from './pages/Login';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { Adopt } from './pages/Adopt';
import { Intake } from './pages/Intake';
import { Reclaim } from './pages/Reclaim';
import { AnimalInfo } from './pages/AnimalInfo';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/layout" element={<Layout />}>
          <Route path="/layout/home" element={<Home />} />
          <Route path="/layout/adopt" element={<Adopt />} />
          <Route path="/layout/intake" element={<Intake />} />
          <Route path="/layout/reclaim" element={<Reclaim />} />
          <Route path="/layout/animal-info" element={<AnimalInfo />} />
        </Route>
      </Routes>
    </Router>
  );
}
