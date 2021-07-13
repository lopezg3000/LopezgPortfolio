import React from 'react';
import { Link } from 'react-router-dom';


const Button = ({ label, anchorPath, linkPath }) => {
    return (
        <div className='button'>
            {anchorPath ?
                <a target='_blank' rel="noopener noreferrer" href={anchorPath}>{label}</a> :
                <Link className='button' to={linkPath}>{label}</Link>
            }
        </div>
    );
}

export default Button;