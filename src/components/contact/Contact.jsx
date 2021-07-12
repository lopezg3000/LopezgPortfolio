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
                    cardDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolorum culpa perferendis quo obcaecati commodi aliquid ipsum, ipsa. dolorum culpa perferendis quo obcaecati commodi aliquid'
                    headline='Available for hire now'
                    description='Front-end developer'
                />
                <SocialColumn
                    data={Data}
                />
            </div>
        </footer>
    );
}

export default Contact;