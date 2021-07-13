import React from 'react';
import HtmlLogo from '../../assets/CommonImages/htmlLogo.svg';
import JavascriptLogo from '../../assets/CommonImages/javascriptLogo.svg';
import ReactLogo from '../../assets/CommonImages/reactLogo.svg';
import './skills.css';
import Card from './../../common/Card';


const Skills = () => {
    return (
        <div className='skills-container'>
            <Card
                cardImagePath={HtmlLogo}
                cardHeadline='HTML & CSS'
                cardDescription='Elegant websites built with asthetically pleasing user interfaces across multiple platforms.'
            />
            <Card
                cardImagePath={JavascriptLogo}
                cardHeadline='JavaScript'
                cardDescription='Make your website dynamic with an easy to use, intuitive user experience.'
            />
            <Card
                cardImagePath={ReactLogo}
                cardHeadline='React'
                cardDescription='Refactor existing apps using the latest technology and best practices.'
            />
        </div >
    );
}

export default Skills;