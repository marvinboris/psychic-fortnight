import React, { useState } from 'react';
import { Container, Navbar, Collapse, Nav } from 'reactstrap';

import NavigationItem from './NavigationItem/NavigationItem';
import DropdownItem from './DropdownItem/DropdownItem';

export default ({ light = false, font, toggleNavbar, selectItem, selectedItem }) => {
    const [isOpenAbout, setIsOpenAbout] = useState(false);
    const toggleAbout = () => setIsOpenAbout(!isOpenAbout);
    const dropdownItemAbout = (text, href, dropdown = false, path = null, items = null) => <DropdownItem navToggle={toggleNavbar} parentToggle={toggleAbout} select={selectItem} selected={selectedItem} href={href && ("/about" + href)} path={path && ("/about" + path)} dropdown={dropdown} id={text} items={items}>{text}</DropdownItem>;
    const contentAbout = <div className="row position-relative p-5 p-md-0">
        <div className="position-absolute d-md-none mr-3" style={{ top: 0, right: 0, zIndex: 10 }}>
            <i className="fad fa-times text-25" style={{ cursor: 'pointer' }} onClick={toggleNavbar} />
        </div>

        <div className="col-md-4">
            {dropdownItemAbout("Genèse", "/genesis")}
            {dropdownItemAbout("Missions de la DGSN", "/missions")}
            {dropdownItemAbout("La DGSN et ses actions", "/actions")}
            {dropdownItemAbout("Nos Uniformes", "/uniforms")}
            {dropdownItemAbout("Nos Métiers", "/jobs")}
            {dropdownItemAbout("Documentation", "/docs")}
            {dropdownItemAbout("Téléchargements", "/downloads")}
        </div>

        <div className="col-md-4">
            {dropdownItemAbout("Cadre de la DGSN", null, true, "/management", [
                { link: '/guardians', text: 'Gardiens de la paix' },
                { link: '/inspectors', text: 'Inspecteurs de la police' },
                { link: '/officers', text: 'Officiers de la police' },
                { link: '/commissioners', text: 'Commissaires de police' },
            ])}
            {dropdownItemAbout("Media", "/media")}
        </div>

        <div className="col-md-4">
            {dropdownItemAbout("Organisation", "/organization")}
        </div>
    </div>;

    return (
        <Navbar dark={!light} light={light} expand className="NavigationItems position-static">
            <Container>
                <Collapse navbar>
                    <Nav className="d-block d-xl-flex align-items-center" navbar>
                        <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/" icon="fad fa-home">Accueil</NavigationItem>
                        <NavigationItem toggleNavbar={toggleNavbar} font={font} path="/about" dropdown isOpen={isOpenAbout} toggle={toggleAbout} content={<>
                            <div className="d-none d-md-block container-xxl">
                                <div className="row justify-content-end text-white">
                                    <div className="col-md-8 col-xxl-6">
                                        <div className="p-3 p-md-4 p-xxl-5 bg-black-80 rounded-bottom-30">{contentAbout}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-md-none fixed-top w-100 h-100 bg-black-80 p-3">
                                {contentAbout}
                            </div>
                        </>}>La DGSN</NavigationItem>
                        <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/services">Nos services</NavigationItem>
                        <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/exams">Concours</NavigationItem>
                        <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/downloads">Téléchargements</NavigationItem>
                        <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/contact">Contacts</NavigationItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}