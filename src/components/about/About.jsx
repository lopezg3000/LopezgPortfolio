import React from 'react';
import { introductions } from './../../data/Introductions';
import Introduction from '../../common/Introduction';

const [, , about] = introductions;

function About() {
    return (
        <React.Fragment>
            <h1>About</h1>
            <Introduction section={about} />
        </React.Fragment>
    );
};

export default About;