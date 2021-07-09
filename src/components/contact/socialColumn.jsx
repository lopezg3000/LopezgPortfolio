import React from 'react';
import Content from '../../common/Content';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const socialColumn = ({ data }) => {
    console.log(data);
    return (
        <div className='connect-wrapper'>
            {data.map(socialItem => {
                return (
                    <Content
                        key={socialItem.type}
                        headline={socialItem.type}
                        link={socialItem.url}
                        description={socialItem.description}
                        icon={socialItem.icon === "faLinkedin" ? faLinkedin : faGithub}
                    />
                )
            })}
        </div>
    );
}

export default socialColumn;