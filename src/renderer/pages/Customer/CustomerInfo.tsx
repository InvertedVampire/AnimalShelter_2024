// Customer info page

import React from 'react';
import { CustomerForm } from '../../components/forms/CustomerForm';

export const CustomerInfo:React.FC = () => {
    return (
        <div className="card flex grid items-stretch mx-auto bg-secondary min-h-[550px] h-[85vh] shadow-sm">
            <div className='card-body'>
                <div><h3 className="card-title text-primary">Customer Information</h3></div><br/><br/>
                <div className='self-center'><CustomerForm /></div>
            </div>
        </div>
    )
}