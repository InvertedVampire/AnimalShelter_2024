// New customer page

import React from 'react';

export const NewCustomer:React.FC = () => {
    sessionStorage.setItem('feature', 'animal');
    return (
        <div className="card flex grid items-stretch mx-auto bg-secondary min-h-[550px] h-[85vh] shadow-sm">
            <div className='card-body'>
                <div><h3 className="card-title text-primary">New Customer</h3></div><br/><br/>
                <div className='self-center'></div>
            </div>
        </div>
    )
}