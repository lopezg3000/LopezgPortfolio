import React from 'react';
import './contact.css';
import Card from '../../common/Card';
import Content from '../../common/Content';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
    return (
        <footer className='contact-container'>
            <div>
                <Card
                    cardImagePath='https://picsum.photos/200'
                    // cardHeadline='Sed eget '
                    cardDescription='Sed eget leo ultrices lacus'
                />
                <Content
                    headline='Available for hire now'
                    description='Front end developer'

                />
            </div>
            <div className='connect-wrapper'>
                <Content
                    icon={faGithub}
                    headline='Github'
                    description='I am an icon'
                />
                <Content
                    icon={faLinkedin}
                    headline='Linkedin'
                    description='I am a linked in icon'
                />
            </div>
        </footer>
    );
}

export default Contact;