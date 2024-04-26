// Adoption page handles the requirements for an adoption
// also serves as location of front end code.
import React from 'react';
import { AnimalSearch } from '../components/forms/AnimalSearch';

export const Adopt: React.FC = () => {
  sessionStorage.setItem('feature', 'adopt');

  return (
    <div className="card flex grid items-stretch mx-auto bg-secondary min-h-[550px] h-[85vh] shadow-sm">
      <div className="card-body">
        <div>
          <h3 className="card-title text-primary">Animal Adoption</h3>
        </div>
        <br />
        <br />
        <div className="self-center">
          <AnimalSearch />
        </div>
      </div>
    </div>
  );
};
