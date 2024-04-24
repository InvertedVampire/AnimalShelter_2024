import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/Navbar';

export const Layout: React.FC = () => {
  return (
    <div className="mx-auto ">
      <NavBar />
      <div className="py-2 px-6 ">
        <div className="card mx-auto bg-secondary h-[85vh] shadow-sm">
          <div className='card-body'><Outlet /></div>
        </div>
      </div>
    </div>
  );
};
