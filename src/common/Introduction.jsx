import React from 'react'

const Introduction = ({ section }) => {
    return (
        <div>
            <h1>{section.headline}</h1>
            {section.description && (<p>{section.description}</p>)}
        </div>
    );
}

export default Introduction;