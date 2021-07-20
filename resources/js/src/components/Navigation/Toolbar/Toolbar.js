import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Collapse, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

import Logo from '../../UI/Logo/Logo';

import Languages from './Languages';

import NavigationItems from '../NavigationItems/NavigationItems';

import './Toolbar.css';

class Toolbar extends Component {
    state = {
        navbar: true,
        search: true,

        selectedItem: '',

        language: null,
    }

    scrollHandler = () => {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        let progress = (window.pageYOffset / totalHeight) * 100;
        progress = Math.round(Number(progress)) + "%";

        document.getElementById('progress-bar').style.width = progress;
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
        this.setState({ language: this.props.content.languages.find(l => l.abbr === localStorage.getItem('lang')) });
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.content.cms) !== JSON.stringify(this.props.content.cms)) this.setState({ language: this.props.content.languages.find(l => l.abbr === localStorage.getItem('lang')) });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
    }

    toggleNavbar = () => this.setState(state => ({ navbar: !state.navbar, search: true }))

    toggleSearch = () => this.setState(state => ({ search: !state.search, navbar: true }))

    selectItem = item => this.setState({ selectedItem: item })

    setLanguage = id => {
        this.props.set(id);
    }

    render() {
        const { selectedItem, language } = this.state;
        const {
            content: { languages },
        } = this.props;

        return <div className="Toolbar sticky-top w-100">
            <div className="text-white">
                <div className="container-xxl d-flex justify-content-between align-items-center h-100">
                    <div>
                        <Link to="/" className="text-decoration-none"><Logo /></Link>
                    </div>

                    <div className="pl-3 d-flex align-items-center d-md-none">
                        <a href="tel:1500" className="btn btn-green d-inline-flex align-items-center ml-xl-5 pl-2 pl-md-3 pr-3 pr-md-4 py-1 py-md-2">
                            <div className="pr-2 pr-xl-3 mr-2 mr-xl-3 py-0 py-xl-1 border-right border-soft-50"><i className="fad fa-phone-plus text-18 text-md-24 text-xxl-30" /></div>

                            <div className="text-montserrat text-700 text-19 text-md-22 text-xxl-25">1500</div>
                        </a>

                        <div className="pl-3 d-md-none">
                            <Languages languages={languages} set={this.setLanguage} language={language} />
                        </div>

                        <div className="pl-3">
                            <i className="fad fa-search text-21 text-md-35 text-lightblue" />
                        </div>
                    </div>

                    <div className="pl-3 h-100 d-none d-md-flex align-items-center">
                        <a href="tel:1500" className="h-100 bg-green text-white d-inline-flex align-items-center ml-xl-5 pl-2 pl-md-3 pr-3 pr-md-4 py-1 py-md-2">
                            <div className="pr-2 pr-xl-3 mr-2 mr-xl-3 py-0 py-xl-1 border-right border-soft-50"><i className="fad fa-phone-plus text-18 text-md-24 text-xxl-30" /></div>

                            <div className="text-montserrat text-700 text-15 text-md-20 text-xxl-25">1500</div>
                        </a>

                        <div className="pl-5">
                            <i className="fad fa-search text-21 text-md-35 text-lightblue" />
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-none d-xl-block">
                            <NavigationItems font="white" toggleNavbar={this.toggleNavbar} selectItem={this.selectItem} selectedItem={selectedItem} />
                        </div>

                        <div className="mx-2 mx-md-3 d-xl-none">
                            <i onClick={this.toggleNavbar} className="fad fa-th-large text-21 text-md-40" style={{ cursor: 'pointer' }} />
                        </div>

                        <div className="pl-3 d-none d-xl-block">
                            <Languages languages={languages} set={this.setLanguage} language={language} />
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
                    <Collapse isOpen={!this.state.navbar} navbar>
                        <div className="fixed-top w-100 h-100 bg-black-85 d-flex flex-column justify-content-center align-items-center p-3">
                            <div className="position-absolute pt-3 pr-3" style={{ top: 0, right: 0, zIndex: 10 }}>
                                <i className="fad fa-times text-25" style={{ cursor: 'pointer' }} onClick={this.toggleNavbar} />
                            </div>

                            <div className="p-3">
                                <NavigationItems font="white" toggleNavbar={this.toggleNavbar} selectItem={this.selectItem} selectedItem={selectedItem} />
                            </div>
                        </div>
                    </Collapse>
                </div>

                <div id="progress-bar" />
            </div>
        </div >;
    }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Toolbar);