import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEnvelope, faHeadset, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Logo from '../../components/UI/Logo/Logo';

import './Frontend.css';

const Block = ({ children, title, className }) => (
    <div className={className}>
        <div className="text-700 text-white text-20 position-relative pb-2 mb-3">
            {title}

            <div className="border-bottom border-white-20 position-absolute" style={{ width: 87, bottom: 0, left: 0 }}>
                <FontAwesomeIcon icon={faCircle} className="text-lightblue text-xx-small position-absolute" style={{ top: 0, left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>
        </div>

        <div className="d-flex flex-column">
            {children}
        </div>
    </div>
);

class Layout extends Component {
    render() {
        const {
            children
        } = this.props;

        return <div className="Frontend bg-white">
            <div className="min-vh-100 d-flex flex-column">
                <Toolbar />

                <main className="flex-fill bg-white text-secondary">
                    {children}
                </main>

                <footer className="bg-darkblue text-light">
                    <div className="container-xxl">
                        <div className="py-5">
                            <div className="mb-3 pb-1">
                                <Logo big />
                            </div>

                            <div className="row">
                                <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                                    <div className="text-700 text-white text-uppercase mb-3 pb-1">
                                        <div className="text-30 d-none d-md-block">Police Camerounaise</div>
                                        <div className="text-20 d-md-none">Police Camerounaise</div>
                                    </div>

                                    <div className="text-500 text-soft text-uppercase">
                                        <div className="text-20 d-none d-md-block">Délégation Générale à la Sureté Nationale</div>
                                        <div className="text-15 d-md-none">Délégation Générale à la Sureté Nationale</div>
                                    </div>
                                </div>

                                <div className="col-xxl-2 col-xl-3 offset-xl-1 col-lg-4 col-md-6">
                                    <Block title="Liens Importants">
                                        <div className="text-18 text-montserrat text-soft">
                                            <div><span className="text-lightblue ml-3 mr-2">-</span><Link to="/downloads" className="text-reset text-decoration-none">Téléchargements</Link></div>
                                            <div><span className="text-lightblue ml-3 mr-2">-</span><Link to="/services" className="text-reset text-decoration-none">Nos Services</Link></div>
                                            <div><span className="text-lightblue ml-3 mr-2">-</span><Link to="/exams" className="text-reset text-decoration-none">Concours</Link></div>
                                            <div><span className="text-lightblue ml-3 mr-2">-</span><Link to="/media" className="text-reset text-decoration-none">Médias</Link></div>
                                            <div><span className="text-lightblue ml-3 mr-2">-</span><Link to="/gallery" className="text-reset text-decoration-none">Galerie</Link></div>
                                        </div>
                                    </Block>
                                </div>

                                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                                    <Block title="Phone & Email">
                                        <div className="text-18 text-montserrat text-soft">
                                            <div><span className="text-lightblue mr-2"><FontAwesomeIcon icon={faPhoneSquare} /></span>TEL: <span className="text-white">1500</span></div>
                                            <div><span className="text-lightblue mr-2"><FontAwesomeIcon icon={faEnvelope} /></span>EMAIL: <span className="text-white">contact@dgsn.cm</span></div>
                                            <div><span className="text-lightblue mr-2"><FontAwesomeIcon icon={faHeadset} /></span>TOOL FREE: <span className="text-white">+237 453 345 345</span></div>
                                        </div>
                                    </Block>
                                </div>
                            </div>
                        </div>

                        <div className="d-md-flex justify-content-center text-center border-top border-border-50 py-4">
                            <div>
                                © Copyrights {(new Date()).getFullYear()} <span className="text-700 text-lightblue">DGSN</span>. All rights reserved. <span className="text-700">by <a href="//briluce.com" target="_blank" className="text-orange">Briluce</a></span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>;
    }
}

export default withRouter(Layout);