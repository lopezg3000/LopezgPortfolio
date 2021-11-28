import React from 'react';
import Image from '../common/Image';
import Content from '../common/Content';


const Card = ({ cardImagePath, cardHeadline, cardDescription, link }) => {
    // const [] = styles; -once I create the styles I will add them to html tags

    return (
        <div className='card-wrapper'>
            <div className='card-body'>
                <Image imagePath={cardImagePath} link={link} />
                <Content
                    headline={cardHeadline}
                    description={cardDescription}
                    link={link}
                />
            </div>
        </div>
    );
}

export default Card;