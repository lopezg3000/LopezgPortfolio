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
                cardImagePath='https://picsum.photos/id/1/1120/630'
                cardHeadline='Sed vel'
                link='https://quirky-haibt-a1517f.netlify.app'
                cardDescription='Sed vel hendrerit ex, molestie'
                imagePath='https://picsum.photos/id/1/1880/1316'
            />
            <Project
                cardImagePath='https://picsum.photos/id/1/1120/630'
                cardHeadline='In sed'
                link='https://quirky-haibt-a1517f.netlify.app'
                cardDescription='In sed volutpat orci, non'
                imagePath='https://picsum.photos/id/1/1880/1316'
            />
            <Project
                cardImagePath='https://picsum.photos/id/1/1120/630'
                cardHeadline='Mauris at'
                link='https://quirky-haibt-a1517f.netlify.app'
                cardDescription='Mauris at ipsum lorem. Pellentesque'
                imagePath='https://picsum.photos/id/1/1880/1316'
            />
        </section>
    );
}

export default FeaturedWork;