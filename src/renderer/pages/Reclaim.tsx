// Reclaim page handles the requirements for animal reclamation
// also serves as location of front end code.
import React from 'react';
import AnimalSearch from '../components/forms/AnimalSearch';

const Reclaim: React.FC = () => {
  sessionStorage.setItem('feature', 'reclaim');
  return (
    <div className="card flex grid items-stretch mx-auto bg-secondary min-h-[550px] h-[85vh] shadow-sm">
      <div className="card-body">
        <div>
          <h3 className="card-title text-primary">Animal Reclaim</h3>
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

export default Reclaim;