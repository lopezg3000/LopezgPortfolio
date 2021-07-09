import React from 'react';
import './contact.css';
import AboutColumn from './aboutColumn';
import SocialColumn from './socialColumn';
import Data from '../../data/social.json';


const Contact = () => {
    return (
        <footer className='contact-container'>
            <AboutColumn
                cardImagePath='https://picsum.photos/200'
                cardDescription='Sed eget leo ultrices lacus'
                headline='Available for hire now'
                description='Front end developer'
            />
            <SocialColumn
                data={Data}
            />
        </footer>
    );
}

export default Contact;