import React from 'react';
import { introductions } from './../../data/Introductions';
import Introduction from '../../common/Introduction';
import './about.css';

const [, , about] = introductions;

function About() {
    return (
        <div className='main-container'>
            <Introduction section={about} />
            <section className='about-section'>
                <p>Hello! My name is Gabriel. I am a full stack software developer. Thank you for your interest in my work. </p>
                <p>One of the reasons I began programming was to improve student learning. I have taught students science for quite a while now and learned that one of the most effective ways to nurture learning is through visuals called anchor charts. The problem is that creating anchor charts can be taxing on teachers because making the charts takes time and art skill. Therefore, I decided to build teach-me-visuals, an e-commerce website where teachers can buy anchor charts for their classrooms. </p>
                <p>On this journey to build teach-me-visuals, I fell in love with front and backend development. I have delved into technologies such as ReactJS, PostgreSQL, and Node.js, and have built projects such as a smoothie king tribute page and hello sunshine, the motivational weather app. Lastly, I have also had the opportunity to work with others to complete apps such as safe travels along with and teach-me-visuals.</p>
                <p>I would love to use my passion for programming and collaborate with you on a project. Feel free to contact me.</p>
            </section>

        </div>
    );
};

export default About;