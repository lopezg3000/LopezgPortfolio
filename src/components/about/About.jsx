import React from 'react';
import { introductions } from './../../data/Introductions';
import Introduction from '../../common/Introduction';

const [, , about] = introductions;

function About() {
    return (
        <div className='main-container'>
            <Introduction section={about} />
        </div>
    );
};

export default About;