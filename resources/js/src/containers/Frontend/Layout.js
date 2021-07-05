import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Logo from '../../components/UI/Logo/Logo';

import './Frontend.css';

const Block = ({ children, title, className }) => (
    <div className={className}>
        <h4 className="text-700 position-relative pb-2 mb-3">
            {title}

            <div className="border-bottom border-white-20 position-absolute" style={{ width: 87, bottom: 0, left: 0 }}>
                <FontAwesomeIcon icon={faCircle} className="text-lightblue text-xx-small position-absolute" style={{ top: 0, left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>
        </h4>

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
                    <div className="container">
                        <div className="py-5">
                            <div className="row">
                                <div className="col-xl-2 col-lg-3 col-md-6">
                                    <Logo big />
                                </div>

                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <Block title="Address">
                                        <p className="text-300">
                                            Douala - Cameroun<br />
                                        </p>
                                    </Block>
                                </div>

                                <div className="col-xl-4 col-lg-5 col-md-6">
                                    <Block title="Phone & Email">
                                        <dl className="d-flex flex-wrap">
                                            <div className="flex-fill w-100 d-flex">
                                                <dl>
                                                    <FontAwesomeIcon icon={faPhoneSquare} className="text-lightblue mr-2" />
                                                    <strong>Online</strong>:
                                                </dl>
                                                <div />
                                                <dl className="flex-grow-1 pl-sm-4 text-300">
                                                    <div><a href="tel:(+237) 453 345 345" className="text-white text-decoration-none">(+237) 453 345 345</a></div>
                                                </dl>
                                            </div>

                                            <div className="flex-fill w-100 d-flex">
                                                <dl>
                                                    <FontAwesomeIcon icon={faEnvelope} className="text-lightblue mr-2" />
                                                    <strong>Email</strong>:
                                                </dl>
                                                <div />
                                                <dl className="flex-grow-1 pl-sm-4 text-300">
                                                    <div><a href="mailto:contact@dgsn.cm" className="text-white text-decoration-none">contact@dgsn.cm</a></div>
                                                </dl>
                                            </div>
                                        </dl>
                                    </Block>
                                </div>

                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <Form className="row">
                                        <FormGroup className="col-11">
                                            <InputGroup>
                                                <Input type="search" placeholder="Your Email" className="bg-black-10 text-white text-300 border-0 rounded-0" />

                                                <InputGroupAddon addonType="append">
                                                    <Button color="lightblue" className="rounded-0">Send</Button>
                                                </InputGroupAddon>
                                            </InputGroup>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </div>
                        </div>

                        <div className="d-md-flex text-center border-top border-border-50 py-4">
                            <div>
                                © Copyrights {(new Date()).getFullYear()} <span className="text-700 text-lightblue">DGSN</span>. All rights reserved.
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>;
    }
}

export default withRouter(Layout);