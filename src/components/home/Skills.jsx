import React from 'react';
import './skills.css';
import Card from './../../common/Card';


const Skills = () => {
    return (
        <div className='skills-container'>
            <Card
                cardImagePath='https://picsum.photos/200'
                cardHeadline='Nunc molestie'
                cardDescription='Nunc molestie magna in nequ'
            />
            <Card
                cardImagePath='https://picsum.photos/200'
                cardHeadline='Suspendisse potenti.'
                cardDescription='Suspendisse potenti. Aenean tincidunt dolor'
            />
            <Card
                cardImagePath='https://picsum.photos/200'
                cardHeadline='Integer nunc'
                cardDescription='Integer nunc dolor, tincidunt a'
            />
        </div >
    );
}

export default Skills;