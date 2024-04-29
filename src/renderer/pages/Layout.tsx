import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar';

const Layout: React.FC = () => {
  return (
    <div className="mx-auto overflow-auto min-w-[660px]">
      <NavBar />
      <div className="py-2 px-6 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
