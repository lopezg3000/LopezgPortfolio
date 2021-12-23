import React from 'react';
import './featuredWork.css';
import Project from './../../common/Project';
import Subtitle from '../../common/Subtitle';
import LaughboxScreenshot from '../../assets/CommonImages/laughboxScreenshot.jpg';
import LaughboxLogo from '../../assets/CommonImages/laughboxLogo.jpg';
import HelloSunshineScreenshot from '../../assets/CommonImages/helloSunshineScreenshot.jpg';
import HelloSunshineLogo from '../../assets/CommonImages/helloSunshineLogo.jpg';
import SafeTravelsLogo from '../../assets/CommonImages/safeTravelsLogo.jpg';
import SafeTravelsScreenshot from '../../assets/CommonImages/safeTravelsScreenshot.jpg';
// import UnderConstruction from '../../assets/CommonImages/underConstruction.jpg';
// import ComingSoon from '../../assets/CommonImages/comingSoon.jpg';
// import PaypalScreenshot from '../../assets/CommonImages/paypalScreenshot.jpg';
// import PaypalLogo from '../../assets/CommonImages/paypalLogo.jpg';


const FeaturedWork = () => {
    return (
        <section className='portfolio-container'>
            <Subtitle
                subtitle='Featured Work'
            />
            <Project
                cardImagePath={LaughboxLogo}
                cardHeadline='Comedy TV App'
                link='https://laughbox-app.herokuapp.com'
                skills="ReactJS, PassportJS, node.js, postgreSQL"
                cardDescription='Ready to whip out your funny bone and bash it violently on the nearest flat surface? Then you’re ready for LaffBoxTV. LaffBoxTV is a full-stack application that uses YouTube api to bring its users the best in comedy. If you like to watch funny videos and share jokes, then come laugh with us.'
                imagePath={LaughboxScreenshot}
            />
            <Project
                cardImagePath={HelloSunshineLogo}
                cardHeadline='Weather App'
                link='https://hellosunshine.netlify.app'
                skills="HTML, CSS, JavaScript, Bootstrap"
                cardDescription='Replace your weather app with Hello-Sunshine, the only weather app that guarantees you get a little sunshine even when it’s raining. Hello-Sunshine connects the national weather service and type-fit api to provide you the latest forecast as well as generate an inspirational quote when it rains. That way, you always get the sunshine you need.'
                imagePath={HelloSunshineScreenshot}
            />
            <Project
                cardImagePath={SafeTravelsLogo}
                cardHeadline='Travel App'
                link='https://safetravel-s.netlify.app'
                skills='HTML, CSS, JavaScript, Bootstrap, ChartJS'
                cardDescription='Safe Travel was developed in 2021 during the Kennesaw State/Digital Crafts Flex June Cohort with a goal to help people make informed travel decisions. After a year and a half of pandemic stress, Gabriel, Julia and Carmen wanted to provide people who are ready for a change of scenery, a place to find Covid-19 stats about their potential travel destination. Thus "Safe Travel" was born.'
                imagePath={SafeTravelsScreenshot}
            />

            {/* <Project
                cardImagePath={PaypalLogo}
                cardHeadline='Link Card Form'
                link='https://linkcardform.netlify.app'
                cardDescription='Payment options are essential to monetizing a website. Therefore, I decided to undertake the task of building a card form with react.js. Some of the features that make this form special are the floating labels when input fields are clicked. Also, I added a function that inserts a slash after the month in the expiration date input field.'
                imagePath={PaypalScreenshot}
            />
            <Project
                cardImagePath={ComingSoon}
                cardHeadline='Technical Documentation Page'
                link='https://quirky-haibt-a1517f.netlify.app'
                cardDescription='Mauris at ipsum lorem. Pellentesque'
                imagePath={UnderConstruction}
            /> */}
        </section>
    );
}

export default FeaturedWork;