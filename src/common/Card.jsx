import React from 'react'


const Card = ({ cardImgPath, headline, description }) => {
    // const [] = styles; -once I create the styles I will add them to html tags

    return (
        <div>
            <img src={cardImgPath} />
            <h3>{headline}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Card;