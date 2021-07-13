import React from 'react';
import './featuredWork.css';
import Project from './../../common/Project';
import Subtitle from '../../common/Subtitle';
import SmoothieKingLogo from '../../assets/CommonImages/smoothieKingLogo.jpg';
import SmoothieKingScreenshot from '../../assets/CommonImages/smoothieKingScreenshot.jpg'
import UnderConstruction from '../../assets/CommonImages/underConstruction.jpg';
import ComingSoon from '../../assets/CommonImages/comingSoon.jpg';
import PaypalScreenshot from '../../assets/CommonImages/paypalScreenshot.jpg';
import PaypalLogo from '../../assets/CommonImages/paypalLogo.jpg';


const FeaturedWork = () => {
    return (
        <section className='portfolio-container'>
            <Subtitle
                subtitle='Featured Work'
            />
            <Project
                cardImagePath={SmoothieKingLogo}
                cardHeadline='Tribute Page'
                link='https://quirky-haibt-a1517f.netlify.app'
                cardDescription='I chose smoothie king as my tribute page because I believe in living a healthy lifestyle. I created this responsive website using React.js. Some of the features I included are: fade-in transitions, functional image carousels, and progressive image loading.'
                imagePath={SmoothieKingScreenshot}
            />
            <Project
                cardImagePath={PaypalLogo}
                cardHeadline='Link Card Form'
                link='https://brave-franklin-6c00c6.netlify.app'
                cardDescription='Payment options are essential to monetizing a website. Therefore, I decided to undertake the task of building a card form with react.js. Some of the features that make this form special are the floating labels when input fields are clicked. Also, I added a function that inserts a slash after the month in the expiration date input field.'
                imagePath={PaypalScreenshot}
            />
            <Project
                cardImagePath={ComingSoon}
                cardHeadline='Technical Documentation Page'
                link='https://quirky-haibt-a1517f.netlify.app'
                cardDescription='Mauris at ipsum lorem. Pellentesque'
                imagePath={UnderConstruction}
            />
        </section>
    );
}

export default FeaturedWork;