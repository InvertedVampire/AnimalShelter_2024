import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

//importing UI for routing
import { Login } from './pages/Login';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { Adopt } from './pages/Adopt';
import { Intake } from './pages/Intake';
import { Reclaim } from './pages/Reclaim';
import { AnimalInfo } from './pages/AnimalInfo';
import { Animal } from './pages/Animal';
import { Customer } from './pages/Customer/Customer';
import { CustomerInfo } from './pages/Customer/CustomerInfo';
import { NewCustomer } from './pages/Customer/NewCustomer';
import { Payment } from './pages/Payment';

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
          <Route path="/layout/animal" element={<Animal />} />
          <Route path="/layout/animal-info" element={<AnimalInfo />} />
          <Route path="/layout/customer" element={<Customer />} />
          <Route path="/layout/customer-info" element={<CustomerInfo />} />
          <Route path="/layout/new-customer" element={<NewCustomer />} />
          <Route path="/layout/payment" element={<Payment />} />
        </Route>
      </Routes>
    </Router>
  );
}
