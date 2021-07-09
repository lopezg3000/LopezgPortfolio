import React from 'react';
import './navbar.css';
import Links from '../../common/Links';
import Button from '../../common/Button';
import { ReactComponent as ReactLogo } from '../../assets/CommonImages/logo.svg';

const links = [
    { label: 'Home', path: '/home' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Testimonials', path: '/testimonials' }

];

function NavBar() {
    return (
        <header>
            <div className='navbar-wrapper'>
                <div className='logo-wrapper'>
                    <ReactLogo className='logo' />
                </div>
                <div className='menu-wrapper'>
                    <Links links={links} />
                    <Button wrapperClass='button' path='/home' label='Get In Touch' />
                </div>
            </div>
        </header>
    );
};

export default NavBar;