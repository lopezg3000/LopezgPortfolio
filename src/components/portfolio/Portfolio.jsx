import React from 'react';
import { introductions } from './../../data/Introductions';
import Introduction from '../../common/Introduction';

const [, portfolio] = introductions;

function Portfolio() {
    return (
        <React.Fragment>
            <h1>Portfolio</h1>
            <Introduction section={portfolio} />
        </React.Fragment>
    );
};

export default Portfolio;