import React from 'react'

const Image = ({ imagePath }) => {
    return (
        <div className='image-wrapper'>
            <img src={imagePath} />
        </div>
    );
}

export default Image;