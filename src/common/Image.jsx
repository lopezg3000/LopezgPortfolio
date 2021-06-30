import React from 'react'

const Image = ({ imagePath }) => {
    return (
        <div>
            <img src={imagePath} />
        </div>
    );
}

export default Image;