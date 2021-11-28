import React from 'react'

const Image = ({ imagePath, link }) => {
    return (
        <div className='image-wrapper'>
            <a href={link} target='_blank' rel="noopener noreferrer">
                <img src={imagePath} alt='' />
            </a>
        </div>
    );
}

export default Image;