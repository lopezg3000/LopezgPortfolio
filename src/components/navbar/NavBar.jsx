import React from 'react';
import './navbar.css';
import Links from '../../common/Links';
import Button from '../../common/Button';
import { ReactComponent as ReactLogo } from '../../assets/CommonImages/logo.svg';
import { NavLink } from 'react-router-dom';

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
                    <NavLink className='' to='/home'>
                        <ReactLogo className='logo' />
                    </NavLink>
                </div>
                <div className='menu-wrapper'>
                    <input type='checkbox' className='toggler' />
                    <div className='hamburger'><div></div></div>
                    <div className='menu'>
                        <div>
                            <div>
                                <Links links={links} />
                                <Button anchorPath='https://www.linkedin.com/in/lopezgabrieljs' label='Get In Touch' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;