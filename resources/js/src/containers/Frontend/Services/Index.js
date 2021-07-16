import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faPassport } from '@fortawesome/free-solid-svg-icons';
import OwlCarousel from 'react-owl-carousel2';
import { Nav, NavItem, NavLink, TabContent, TabPane, Form, FormGroup, Input, Button, Label } from 'reactstrap';

import Chevrons from '../../../components/UI/Chevrons';

import Block from '../../../components/UI/Police/Block';
import Service from '../../../components/UI/Police/Service';
import Info from '../../../components/UI/Police/Info';

import './Services.css';

class Services extends Component {
    state = {
        activeTab: '1',
    }

    toggle = tab => this.setState({ activeTab: tab })

    render() {
        const { activeTab } = this.state;

        const content = <div className="rounded-15 row bg-white mt-3 mt-md-4 mt-xxl-5">
            <div className="col-lg-9 p-3 p-md-4 p-xxl-5 position-relative">
                <div className="position-absolute bg-border d-none d-lg-block" style={{ height: '100%', width: .5, top: 0, right: 0, transform: 'translateX(50%)' }} />
                <div className="position-absolute bg-blue d-none d-lg-block rounded-5" style={{ height: 104, width: 10, top: '50%', right: 0, transform: 'translate(50%,-50%)' }} />

                <div className="text-25 text-md-30 text-xxl-35 text-700 text-blue position-relative pb-2 pb-md-3 mb-2 mb-md-3 mb-xxl-4">
                    Recherchez CNI

                    <div className="position-absolute bg-lightblue" style={{ left: 0, bottom: 0, height: 4, width: 48 }} />
                </div>

                <div className="text-secondary text-12 text-md-15 text-xxl-18 mb-3 mb-md-4 mb-xxl-5">
                    Afin de vous apporter le meilleur service, nous vous invitons à très souvent consulter cette section
                    Pour vous renseigner d’avantage sur la disponibilité de votre CNI. Veuillez renseigner les champs
                    suivant pour commencer.
                </div>

                <Form className="text-11 text-md-13 text-xxl-15 text-300 text-secondary row">
                    <FormGroup className="col-xl-4 col-lg-5 col-md-6">
                        <Label for="date">Date D’emission</Label>

                        <Input type="date" name="date" />
                    </FormGroup>

                    <FormGroup className="col-xl-4 col-lg-5 col-md-6">
                        <Label for="ref">Numéro du Récépissé</Label>

                        <Input type="text" name="ref" />
                    </FormGroup>

                    <div className="pt-4 col-12">
                        <Button color="blue" className="text-500" size="lg">Vérifier<i className="fad fa-check-circle ml-2 ml-md-3 ml-xxl-4" /></Button>
                    </div>
                </Form>
            </div>

            <div className="col-lg-3 p-3 p-md-4 p-xxl-5">
                <div className="p-3 p-md-4 p-xxl-5">
                    <div className="mb-2 mb-md-3 mb-xxl-4">
                        <div className="embed-responsive embed-responsive-1by1 position-relative bg-lightblue-15 rounded-15 overflow-hidden">
                            <div className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center flex-column text-center" style={{ top: 0, left: 0 }}>
                                <div className="text-blue text-700 text-16 text-md-20 text-xxl-25 mb-2 mb-md-3">Jour 5</div>

                                <div className="my-1 my-md-2">
                                    <i className="fad fa-spinner fa-spin text-35 text-md-45 text-xxl-55 text-blue" />
                                </div>

                                <div className="mt-2 mt-md-3 text-montserrat">CNI en cours de Production</div>
                            </div>
                        </div>
                    </div>

                    <div className="text-700 text-16 text-md-20 text-xxl-25 text-blue text-truncate">YUN*****JI***BRI**N</div>

                    <div className="text-500 text-secondary">
                        CE754*********Q6MZ0<br />
                        Delivré le: 12/02/2022<br />
                        EXP: 12/02/2022
                    </div>
                </div>
            </div>
        </div>;

        const services = [
            {
                name: 'Solliciter un passeport',
                icon: "fad fa-passport",
                description: `Check out our API integration 
                documentation here. Try it and
                start using. Our API is very 
                secured.  `
            },
            {
                name: 'Vérifier un passeport',
                icon: "fad fa-passport",
                description: `Check out our API integration 
                documentation here. Try it and
                start using. Our API is very 
                secured.  `
            },
            {
                name: 'Titres identitaires disponibles',
                icon: "fad fa-id-card",
                description: `Check out our API integration 
                documentation here. Try it and
                start using. Our API is very 
                secured.  `
            },
            {
                name: 'Solliciter un passport',
                icon: "fad fa-passport",
                description: `Check out our API integration 
                documentation here. Try it and
                start using. Our API is very 
                secured.  `
            },
        ];
        const infos = [
            {
                name: 'Service de renseignement',
                icon: "fad fa-phone-office",
                info: '+237 123 456 890'
            },
            {
                name: 'Assistance',
                icon: "fad fa-envelope",
                info: 'support@dgsn.cm'
            },
            {
                name: 'Autres Besoins',
                icon: "fad fa-envelope",
                info: 'contact@dgsn.cm'
            },
        ];

        const navItems = [
            {
                id: '1',
                icon: faIdCard,
                name: "Cartes Nationales D’Identité",
                content
            },
            {
                id: '2',
                icon: faPassport,
                name: "Passeports",
                content
            },
            {
                id: '3',
                icon: faIdCard,
                name: "Cartes de séjour",
                content
            },
            {
                id: '4',
                icon: faIdCard,
                name: "Cartes de Résident",
                content
            },
            {
                id: '5',
                icon: faIdCard,
                name: "Cartes de Refugié",
                content
            },
        ];



        const servicesContent = services.map(service => <Service key={JSON.stringify(service)} {...service} />);
        const infosContent = infos.map(info => <Info key={JSON.stringify(info)} {...info} />);

        const navItemsContent = navItems.map(navItem => <NavItem key={navItem.id}>
            <NavLink className={"py-2 py-md-3 py-xxl-4 px-3 px-md-4 px-xxl-5 " + (activeTab === navItem.id ? "active" : "")} onClick={() => { this.toggle(navItem.id); }}>
                <FontAwesomeIcon icon={navItem.icon} className="icon text-18 text-md-23 text-xxl-28" /><span className="text-truncate text-500 text-14 text-md-17 text-xxl-20">{navItem.name}</span>
            </NavLink>
        </NavItem>);
        const tabPanesContent = navItems.map(navItem => <TabPane tabId={navItem.id} key={navItem.id + Math.random()}>{navItem.content}</TabPane>);



        return <div className="Services">
            <div className="bg-blue py-5" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5))' }}>
                <div className="container py-5 my-4 text-40 text-700 text-white text-center">
                    Nos Services

                    <div className="d-flex justify-content-center align-items-center">
                        <div><div className="bg-white" style={{ height: .5, width: 40 }} /></div>

                        <div className="px-2"><div className="rounded-circle bg-white" style={{ height: 8, width: 8 }} /></div>

                        <div><div className="bg-white" style={{ height: .5, width: 40 }} /></div>
                    </div>
                </div>
            </div>



            <Block title="Offre de Services" subtitle="Veuillez choisir un des liens rapides pour un accès direct">
                <div className="d-none d-lg-flex row justify-content-center">
                    {servicesContent}
                </div>

                <div className="d-lg-none">
                    <div className="row">
                        <div className="col-12 p-0">
                            <OwlCarousel options={{
                                responsive: {
                                    0: { items: 1, autoplay: true, stagePadding: 48, margin: 20, center: true, nav: true },
                                    600: { items: 2, autoplay: true, stagePadding: 48, margin: 20, center: false },
                                    1300: { items: 4 }
                                },
                                center: false,
                                loop: true,
                                dots: false,
                                navText: ['<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-left text-blue"></i>', '<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-right text-blue"></i>']
                            }}>
                                {servicesContent}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </Block>

            <Block color="soft" title="Vérification des documents" subtitle="Vérifiez la disponibilité de vos documents ici.">
                <div>
                    <div className="d-flex border-bottom align-items-center">
                        <div id="verification" className="scrollbar-hidden flex-fill">
                            <Nav tabs className="border-0 flex-nowrap">
                                {navItemsContent}
                            </Nav>
                        </div>

                        <Chevrons id="verification" />
                    </div>

                    <TabContent className="mx-3" activeTab={activeTab}>
                        {tabPanesContent}
                    </TabContent>
                </div>
            </Block>

            <Block color="transparent" title="Pour plus d'informations" subtitle="En cas de besoin, veuillez contacter les différents services aux numéros ci-dessous">
                <div className="my-5 row">
                    {infosContent}
                </div>
            </Block>
        </div>;
    }
}

export default withRouter(Services);