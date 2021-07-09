import React from 'react';
import Card from '../../common/Card';
import Content from '../../common/Content';


const AboutColumn = ({ cardImagePath, cardDescription, headline, description }) => {
    return (
        <div className='about-container'>
            <Card
                cardImagePath={cardImagePath}
                // cardHeadline='Sed eget '
                cardDescription={cardDescription}
            />
            <Content
                headline={headline}
                description={description}

            />
        </div>
    );
};

export default AboutColumn;