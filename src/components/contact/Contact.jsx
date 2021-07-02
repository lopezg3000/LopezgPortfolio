import React from 'react'
import Card from '../../common/Card';
import Content from '../../common/Content';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
    return (
        <React.Fragment>
            <h1>Contact Section</h1>
            <Card
                cardImagePath='https://picsum.photos/200'
                cardHeadline='Sed eget '
                cardDescription='Sed eget leo ultrices lacus'
            />
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
        </React.Fragment>
    );
}

export default Contact;