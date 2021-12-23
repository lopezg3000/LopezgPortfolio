import React from 'react';
import { introductions } from './../../data/Introductions';
import Introduction from '../../common/Introduction';
import FeaturedWork from '../home/FeaturedWork';
import Project from '../../common/Project';
import SmoothieKingScreenshot from '../../assets/CommonImages/smoothieKingScreenshot.jpg';
import SmoothieKingLogo from '../../assets/CommonImages/smoothieKingLogo.jpg';

const [, portfolio] = introductions;

function Portfolio() {
    return (
        <div className='main-container'>
            <Introduction section={portfolio} />
            <FeaturedWork />
            <Project
                cardImagePath={SmoothieKingLogo}
                cardHeadline='Tribute Page'
                link='https://smoothiekingclone.netlify.app'
                skills='HTML, CSS, JavaScript, ReactJS'
                cardDescription='I chose smoothie king as my tribute page because I believe in living a healthy lifestyle. Some of the features I included are: fade-in transitions, functional image carousels, and progressive image loading.'
                imagePath={SmoothieKingScreenshot}
            />
        </div>
    );
};

export default Portfolio;