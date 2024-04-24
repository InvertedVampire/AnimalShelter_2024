import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const Home:React.FC = () => {
    return <div>
        <FontAwesomeIcon icon={faHouse} size="10x" style={{ color: '#0DB4BE', opacity:0.1 }} />
    </div>
}