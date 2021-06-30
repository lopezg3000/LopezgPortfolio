import React from 'react'
import Project from './../../common/Project';


const FeaturedWork = () => {
    return (
        <div>
            <Project
                cardImagePath='https://picsum.photos/200'
                cardHeadline='Sed vel'
                link='https://quirky-haibt-a1517f.netlify.app'
                cardDescription='Sed vel hendrerit ex, molestie'
                imagePath='https://picsum.photos/200'
            />
            <Project
                cardImagePath='https://picsum.photos/200'
                cardHeadline='In sed'
                cardDescription='In sed volutpat orci, non'
                imagePath='https://picsum.photos/200'
            />
            <Project
                cardImagePath='https://picsum.photos/200'
                cardHeadline='Mauris at'
                cardDescription='Mauris at ipsum lorem. Pellentesque'
                imagePath='https://picsum.photos/200'
            />
        </div>
    );
}

export default FeaturedWork;