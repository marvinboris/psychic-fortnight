import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faEnvelope, faPhone, faSearch, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Badge, Collapse, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../UI/Logo/Logo';

import './Toolbar.css';

export default class Toolbar extends Component {
    state = {
        navbar: true,
        search: true,
    }

    scrollHandler = () => {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        let progress = (window.pageYOffset / totalHeight) * 100;
        progress = Math.round(Number(progress)) + "%";

        document.getElementById('progress-bar').style.width = progress;
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
    }

    toggleNavbar = () => this.setState(state => ({ navbar: !state.navbar, search: true }))

    toggleSearch = () => this.setState(state => ({ search: !state.search, navbar: true }))

    render() {
        return <div className="Toolbar sticky-top w-100">
            <div className="bg-darkblue text-light">
                <div className="container-xxl d-flex align-items-center h-100">
                    <div>
                        <Link to="/" className="text-decoration-none"><Logo /></Link>
                    </div>

                    <div className="d-flex justify-content-between align-items-center ml-auto">
                        <div className="d-none d-xl-block mr-4">
                            <NavigationItems font="light" toggleNavbar={this.toggleNavbar} />
                        </div>

                        <div className="mx-2 mx-md-3 d-xl-none">
                            <FontAwesomeIcon icon={faBars} onClick={this.toggleNavbar} className="text-x-large" cursor="pointer" />
                        </div>
                    </div>
                </div>

                <div className="d-lg-none">
                    <Collapse isOpen={!this.state.search} navbar className="bg-white shadow-sm position-absolute w-100 px-3 py-2" style={{ top: '100%' }}>
                        <InputGroup className="rounded-pill border-none" size="lg">
                            <InputGroupAddon addonType="prepend" className="rounded-pill rounded-right-0">
                                <InputGroupText className="rounded-pill rounded-right-0 bg-white border-none">
                                    <FontAwesomeIcon icon={faSearch} />
                                </InputGroupText>
                            </InputGroupAddon>

                            <Input type="search" name="search" placeholder="Rechercher des produits..." className="rounded-pill rounded-left-0 border-none text-small" />
                        </InputGroup>
                    </Collapse>
                </div>

                <div className="d-xl-none">
                    <Collapse isOpen={!this.state.navbar} navbar className="bg-white shadow-sm position-absolute w-100" style={{ top: '100%' }}>
                        <NavigationItems font="dark" toggleNavbar={this.toggleNavbar} />
                    </Collapse>
                </div>

                <div id="progress-bar" />
            </div>
        </div >;
    }
}