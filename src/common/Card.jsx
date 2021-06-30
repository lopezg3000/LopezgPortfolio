import React from 'react';
import Image from '../common/Image';
import Content from '../common/Content';


const Card = ({ cardImagePath, cardHeadline, cardDescription, link }) => {
    // const [] = styles; -once I create the styles I will add them to html tags

    return (
        <div>
            <Image imagePath={cardImagePath} />
            <Content
                headline={cardHeadline}
                description={cardDescription}
                link={link}
            />
        </div>
    );
}

export default Card;