import React from 'react';
import Links from './../common/Links';
import Button from './../common/Button';
import { ReactComponent as ReactLogo } from './../assets/CommonImages/logo.svg';

const links = [
    { label: 'Home', path: '/home' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Testimonials', path: '/testimonials' }

];

function NavBar() {
    return (
        <div>
            <ReactLogo />
            <Links links={links} />
            <Button label='Get In Touch' />
        </div>
    );
};

export default NavBar;