import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Collapse, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

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
                <div className="container-xxl d-flex justify-content-between align-items-center h-100">
                    <div>
                        <Link to="/" className="text-decoration-none"><Logo /></Link>
                    </div>

                    <div className="pl-xl-5">
                        <a href="tel:1500" className="btn btn-white text-green d-inline-flex align-items-center ml-xl-5 pl-2 pl-md-3 pr-3 pr-md-4 py-1 py-md-2">
                            <div className="pr-2 pr-xl-3 mr-2 mr-xl-3 py-0 py-xl-1 border-right border-green-50"><i className="fad fa-phone-plus text-10 text-md-14 text-xxl-19" /></div>

                            <div className="text-montserrat text-700 text-7 text-md-11 text-xxl-16">1500</div>
                        </a>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-none d-xl-block mr-4">
                            <NavigationItems font="white" toggleNavbar={this.toggleNavbar} />
                        </div>

                        <div className="mx-2 mx-md-3 d-xl-none">
                            <i onClick={this.toggleNavbar} className="fad fa-bars text-18 text-md-40" style={{ cursor: 'pointer' }} />
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