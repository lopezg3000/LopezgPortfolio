import React from 'react'


const Card = ({ path, headline, description, styles }) => {
    // const [] = styles; -once I create the styles I will add them to html tags

    return (
        <div>
            <img src={path} />
            <h3>{headline}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Card;