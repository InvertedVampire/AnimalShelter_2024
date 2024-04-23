import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "tailwindcss/tailwind.css";

//importing UI for routing
import { Layout } from './components/Layout';
import { Adopt } from './pages/Adopt';
import { Intake } from './pages/Intake';
import { Reclaim } from './pages/Reclaim';
import { AnimalInfo } from './pages/AnimalInfo';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/intake" element={<Intake />} />
          <Route path="/reclaim" element={<Reclaim />} />
          <Route path="/animal-info" element={<AnimalInfo />} />
        </Route>
      </Routes>
    </Router>
  );
}
