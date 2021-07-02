import React from 'react'

const Introduction = ({ section, sectionWrapper, headlineClass, paragraphClass }) => {
    return (
        <section className={sectionWrapper}>
            <h1 className={headlineClass}>
                {section.headline}
            </h1>
            {section.description && (
                <p className={paragraphClass}>
                    {section.description}
                </p>
            )}
        </section>
    );
}

export default Introduction;