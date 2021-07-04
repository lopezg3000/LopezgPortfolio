import React from 'react';
import './featuredWork.css';
import Project from './../../common/Project';
import Subtitle from '../../common/Subtitle';


const FeaturedWork = () => {
    return (
        <section className='portfolio-container'>
            <Subtitle
                subtitle='Featured Work'
            />
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
        </section>
    );
}

export default FeaturedWork;