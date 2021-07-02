import React from 'react';
import { introductions } from './../../data/Introductions';
import Introduction from '../../common/Introduction';
import Skills from './Skills';
import FeaturedWork from '../../components/home/FeaturedWork';
import Contact from '../contact/Contact';

const [home] = introductions;

function Home() {
    return (
        <React.Fragment>
            <h1>Home</h1>
            <Introduction section={home} />
            <Skills />
            <FeaturedWork />
            <Contact />
        </React.Fragment>
    );
};

export default Home;