import React from 'react';
import { introductions } from './../../data/Introductions';
import Introduction from '../../common/Introduction';

const [, , , testimonials] = introductions;

function Testimonials() {
    return (
        <React.Fragment>
            <h1>Testimonials</h1>
            <Introduction section={testimonials} />
        </React.Fragment>
    );
};

export default Testimonials;