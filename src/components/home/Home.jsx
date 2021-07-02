import React from 'react';
import './home.css';
import { introductions } from './../../data/Introductions';
import Introduction from '../../common/Introduction';
import Skills from './Skills';
import FeaturedWork from '../../components/home/FeaturedWork';
import Contact from '../contact/Contact';

const [home] = introductions;

function Home() {
    return (
        <React.Fragment>
            <Introduction
                sectionWrapper='section-wrapper'
                headlineClass='headline'
                paragraphClass='paragraph'
                section={home}
            />
            <Skills />
            <FeaturedWork />
            <Contact />
        </React.Fragment>
    );
};

export default Home;