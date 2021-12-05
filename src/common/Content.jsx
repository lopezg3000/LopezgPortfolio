import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//if there is a headline prop passed then render h3
//if there is a link prop passed then render anchor tag else render headline

const Content = ({ headline, description, link, icon, skills }) => {
    return (
        <div className='content'>
            {icon && <FontAwesomeIcon className='fa' icon={icon} />}
            {headline &&
                <h3>
                    {link ? (
                        <a href={link} target='_blank' rel="noopener noreferrer">
                            {headline}
                        </a>
                    ) : headline}
                </h3>}
            {skills && <p><b>{skills}</b></p>}
            <p>{description}</p>
        </div>
    );
}


export default Content;