import React from 'react';
import { introductions } from './../../data/Introductions';
import Introduction from '../../common/Introduction';

const [, , , testimonials] = introductions;

function Testimonials() {
    return (
        <div className='main-container'>
            <Introduction section={testimonials} />
        </div >
    );
};

export default Testimonials;