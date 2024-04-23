import React from 'react';

export const NavBar: React.FC = () => {
  return (
    <div className="navbar bg-base-100 bg-primary text-white">
    <div className="flex-1">
        <a className="btn btn-ghost text-xl" href='/document/index'>Indian Lake Animal Shelter</a>
    </div>
    <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
        <li><a href='/intake'>Intake</a></li>
        <li><a href='/adopt'>Adopt</a></li>
        <li><a href='/reclaim'>Reclaim</a></li>
        <li><a href='/animal-info'>Animal Info</a></li>
        </ul>
    </div>
        <div className="dropdown dropdown-end bg-primary">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-24 rounded-full">
            <img alt="Animal Avatar" src={require('../assets/fur-babies.png')} />
            </div>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-primary">
            <li><a>Logout</a></li>
        </ul>
        </div>
    </div>
  );
};