import React from 'react'

const Introduction = ({ section }) => {
    return (
        <section className='introduction-wrapper'>
            <h1>{section.headline}</h1>
            {section.description && <p>{section.description}</p>}
        </section>
    );
}

export default Introduction;