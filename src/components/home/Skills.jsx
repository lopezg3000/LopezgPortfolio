import React from 'react'
import Card from './../../common/Card';


const Skills = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
}

export default Skills;