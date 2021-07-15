import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import './NavigationItem.css';

const navigationItem = ({ icon, children, href, className = '', different, font, other, toggleNavbar }) => (
    <NavItem className="NavigationItem px-2">
        <NavLink className={`nav-link text-300 text-18 ${'text-' + font} ${className}`} to={href} onClick={toggleNavbar} exact activeClassName={!different ? "text- active text-700 text-large" : ""}>{icon && <i className={icon + " mr-1"} />}{children}<FontAwesomeIcon icon={faCircle} className="circle text-lightblue text-6" /></NavLink>
    </NavItem>
);

export default navigationItem;