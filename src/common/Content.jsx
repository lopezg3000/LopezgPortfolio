import React from 'react'

const Content = ({ headline, description, link }) => {
    console.log(link)
    return (
        <React.Fragment>
            <h3>
                {link ? (
                    <a href={link} target='_blank' rel="noopener noreferrer">
                        {headline}
                    </a>
                ) : headline}
            </h3>
            <p>{description}</p>
        </React.Fragment>
    );
}


export default Content;