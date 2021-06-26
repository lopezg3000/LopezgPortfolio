import React from 'react'
import Card from './../../common/Card';


const Skills = () => {
    return (
        <React.Fragment>
            <Card
                path='https://picsum.photos/200'
                headline='Nunc molestie'
                description='Nunc molestie magna in nequ'
            />
            <Card
                path='https://picsum.photos/200'
                headline='Suspendisse potenti.'
                description='Suspendisse potenti. Aenean tincidunt dolor'
            />
            <Card
                path='https://picsum.photos/200'
                headline='Integer nunc'
                description='Integer nunc dolor, tincidunt a'
            />
        </React.Fragment>
    );
}

export default Skills;