import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar: React.FC = () => {
  return (
    <div className="navbar bg-base-100 bg-primary text-white">
      <div className="flex-1">
        <Link to="/layout/home" className="btn btn-ghost text-xl">
          Indian Lake Animal Shelter
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/layout/intake">Intake</Link>
          </li>
          <li>
            <Link to="/layout/adopt">Adopt</Link>
          </li>
          <li>
            <Link to="/layout/reclaim">Reclaim</Link>
          </li>
          <li>
            <Link to="/layout/animal-info">Animal Info</Link>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-end bg-primary">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-24 rounded-full">
            <img
              alt="Animal Avatar"
              src={require('../assets/fur-babies.png')}
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-primary"
        >
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
