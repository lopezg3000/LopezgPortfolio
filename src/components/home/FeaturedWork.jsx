import React from 'react'
import Project from './../../common/Project';


const FeaturedWork = () => {
    return (
        <div>
            <Project
                cardImgPath='https://picsum.photos/200'
                headline='Sed vel'
                description='Sed vel hendrerit ex, molestie'
                screenshotPath='https://picsum.photos/200'
            />
            <Project
                cardImgPath='https://picsum.photos/200'
                headline='In sed'
                description='In sed volutpat orci, non'
                screenshotPath='https://picsum.photos/200'
            />
            <Project
                cardImgPath='https://picsum.photos/200'
                headline='Mauris at'
                description='Mauris at ipsum lorem. Pellentesque'
                screenshotPath='https://picsum.photos/200'
            />
        </div>
    );
}

export default FeaturedWork;