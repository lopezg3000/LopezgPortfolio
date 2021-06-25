import React from 'react';
import Links from './../common/Links';

const links = [
    { label: 'Home', path: '/home' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Testimonials', path: '/testimonials' }

];

function NavBar() {
    return <Links links={links} />;
};

export default NavBar;