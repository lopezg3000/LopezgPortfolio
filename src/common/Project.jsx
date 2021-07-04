import React from 'react';
import Card from './Card';
import Image from './Image';


const Project = ({ ...rest }) => {
    return (
        <div className='project-wrapper'>
            <Card {...rest} />
            <Image {...rest} />
        </div>
    );
}

export default Project;