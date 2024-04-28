// Animal page allows for updating animal information.
// also serves as location of front end code.
import React from 'react';
import IntakeForm from '../components/forms/IntakeForm';

const Animal: React.FC = () => {
  sessionStorage.setItem('feature', 'animal');
  return (
    <div className="card flex grid items-stretch mx-auto bg-secondary min-h-[550px] h-[85vh] shadow-sm">
      <div className="card-body">
        <div>
          <h3 className="card-title text-primary">Animal Information</h3>
        </div>
        <br />
        <br />
        <div className="self-center">
          <IntakeForm />
        </div>
      </div>
    </div>
  );
};

export default Animal;
