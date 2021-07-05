import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Content = ({ headline, description, link, icon }) => {
    return (
        <div className='content'>
            {icon && <FontAwesomeIcon className='fa' icon={icon} />}
            <h3>
                {link ? (
                    <a href={link} target='_blank' rel="noopener noreferrer">
                        {headline}
                    </a>
                ) : headline}
            </h3>
            <p>{description}</p>
        </div>
    );
}


export default Content;