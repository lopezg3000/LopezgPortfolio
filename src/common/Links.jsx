import React from 'react';
import { NavLink } from 'react-router-dom';

function Links({ links }) {
    return (
        <ul>
            {links.map(link => {
                return (
                    <React.Fragment>
                        <li>
                            <NavLink className='' to={link.path}>{link.label}</NavLink>
                        </li>
                    </React.Fragment>
                )
            })}
        </ul>
    );
};

export default Links;