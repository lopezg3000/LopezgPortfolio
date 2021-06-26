import React from 'react';
import { introductions } from './../../data/Introductions';
import Introduction from '../../common/Introduction';

const [home] = introductions;

function Home() {
    return (
        <React.Fragment>
            <h1>Home</h1>
            <Introduction section={home} />
        </React.Fragment>
    );
};

export default Home;