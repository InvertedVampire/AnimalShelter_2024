import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const Home:React.FC = () => {
    return (
        <div className="card flex grid items-center justify-center mx-auto bg-secondary min-h-[550px] h-[85vh] shadow-sm">
            <div className='card-body'>
                <div>
                    <FontAwesomeIcon icon={faHouse} size="10x" style={{ color: '#0DB4BE', opacity:0.1 }} />
                </div>
            </div>
        </div>
      )
}