import React from 'react';
import './contact.css';
import AboutColumn from './aboutColumn';
import SocialColumn from './socialColumn';
import Data from '../../data/social.json';
import Thumbnail from '../../assets/CommonImages/thumbnailProfilePicture.jpeg';


const Contact = () => {
    return (
        <footer className='contact-container'>
            <div className='contact-inner-container'>
                <AboutColumn
                    cardImagePath={Thumbnail}
                    cardDescription='I am a Full-Stack Developer who respects and admires the culture, process, and craft of web development. I create beautiful websites that are fast, scalable, and functional.'
                    headline='Available July 2021. Hire now'
                    description='Full-Stack Developer'
                />
                <SocialColumn
                    data={Data}
                />
            </div>
        </footer>
    );
}

export default Contact;