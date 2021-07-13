import React from 'react';
import { introductions } from './../../data/Introductions';
import Introduction from '../../common/Introduction';
import FeaturedWork from '../home/FeaturedWork';

const [, portfolio] = introductions;

function Portfolio() {
    return (
        <div className='main-container'>
            <Introduction section={portfolio} />
            <FeaturedWork />
        </div>
    );
};

export default Portfolio;