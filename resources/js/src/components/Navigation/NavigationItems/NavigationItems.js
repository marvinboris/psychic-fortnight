import React from 'react';
import { Container, Navbar, Collapse, Nav } from 'reactstrap';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ({ light = false, font, toggleNavbar }) => {
    return (
        <Navbar dark={!light} light={light} expand className="NavigationItems">
            <Container>
                <Collapse navbar>
                    <Nav className="d-block d-xl-flex align-items-center" navbar>
                        <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/" icon="fad fa-home">Accueil</NavigationItem>
                        <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/about-us">La DGSN</NavigationItem>
                        <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/services">Nos services</NavigationItem>
                        <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/exams">Concours</NavigationItem>
                        <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/media">Médias</NavigationItem>
                        <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/downloads">Téléchargements</NavigationItem>
                        <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/contact">Contact</NavigationItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default navigationItems;