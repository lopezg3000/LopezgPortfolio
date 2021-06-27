import React from 'react';
import Card from './Card';
import ScreenShot from './ScreenShot';


const Project = ({ ...rest }) => {
    return (
        <section>
            <Card {...rest} />
            <ScreenShot {...rest} />
        </section>
    );
}

export default Project;