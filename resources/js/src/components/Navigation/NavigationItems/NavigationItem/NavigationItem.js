import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navigationItem = ({ icon, children, href, className = '', different, font, toggleNavbar }) => (
    <NavItem className="px-2">
        <NavLink className={`nav-link text-300 text-18 ${'text-' + font} ${className}`} to={href} onClick={toggleNavbar} exact activeClassName={!different ? "text- active text-700 text-large" : ""}>{icon && <FontAwesomeIcon icon={icon} className="mr-1" />}{children}</NavLink>
    </NavItem>
);

export default navigationItem;