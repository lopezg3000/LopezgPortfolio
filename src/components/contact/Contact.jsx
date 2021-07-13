import React from 'react';
import './contact.css';
import AboutColumn from './aboutColumn';
import SocialColumn from './socialColumn';
import Data from '../../data/social.json';


const Contact = () => {
    return (
        <footer className='contact-container'>
            <div className='contact-inner-container'>
                <AboutColumn
                    cardImagePath='https://picsum.photos/200'
                    cardDescription='I am a Front-end Developer who respects and admires the culture, process, and craft of web development. I create beautiful websites that are fast, scalable, and functional.'
                    headline='Available July 2021. Hire now'
                    description='Front-end Developer'
                />
                <SocialColumn
                    data={Data}
                />
            </div>
        </footer>
    );
}

export default Contact;