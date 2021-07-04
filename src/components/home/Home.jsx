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
        <div className='main-container'>
            <Introduction section={home} />
            <Skills />
            <hr />
            <FeaturedWork />
            <Contact />
        </div>
    );
};

export default Home;