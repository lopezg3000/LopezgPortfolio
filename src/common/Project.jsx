import React from 'react';
import Card from './Card';
import Image from './Image';


const Project = ({ ...rest }) => {
    return (
        <section>
            <Card {...rest} />
            <Image {...rest} />
        </section>
    );
}

export default Project;