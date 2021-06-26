import React from 'react';
import { Link } from 'react-router-dom';


const Button = ({ label, path, wrapperClass, linkClass }) => {
    return (
        <div className={wrapperClass}>
            <Link className={linkClass} to={path}>{label}</Link>
        </div>
    );
}

export default Button;