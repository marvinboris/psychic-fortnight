import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCalendar, faCar, faCheckCircle, faCheckDouble, faCloudDownloadAlt, faEnvelope, faMusic, faPhone, faTools, faUserMd } from '@fortawesome/free-solid-svg-icons';
import OwlCarousel from 'react-owl-carousel2';
import { Input, Table, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

import Block from '../../../components/UI/Police/Block';
import Notice from '../../../components/UI/Police/Notice';
import Info from '../../../components/UI/Police/Info';

import { convertDate, updateObject } from '../../../shared/utility';

import './Exams.css';

const Condition = ({ children }) => <div className="d-flex align-items-center">
    <div className="text-10 text-md-13 text-xxl-16"><FontAwesomeIcon icon={faCheckDouble} className="text-green mr-3" />{children}</div>
</div>;

class Exams extends Component {
    state = {
        noticesActiveTab: '1',
        resultsActiveTab: '1',

        show: 10,
        search: '',
        page: 1,
    }

    noticesToggle = tab => this.setState({ noticesActiveTab: tab })

    resultsToggle = tab => this.setState({ resultsActiveTab: tab })

    render() {
        const {
            noticesActiveTab, resultsActiveTab,

            show, search, page
        } = this.state;

        const noticesTabContent = <div className="row">
            <div className="col-12 bg-lightblue-30 py-5">
                <div className="container-xxl d-sm-flex justify-content-between align-items-center text-right my-3">
                    <div className="d-xxl-flex text-center align-items-center pb-3 pb-sm-0">
                        <div className="d-flex align-items-center mr-4 mr-md-5 pr-4 pr-md-5 pb-3 pb-md-4 pb-xxl-0">
                            <div className="mr-2 mr-md-3 text-blue">
                                <i className="fad fa-calendar-alt text-20 text-md-24 text-xxl-28" />
                            </div>

                            <div className="text-500 text-secondary mr-3 mr-md-4 text-14 text-md-17 text-xxl-20">Date de publication :</div>

                            <div className="text-700 text-blue text-14 text-md-17 text-xxl-20">{convertDate(new Date())}</div>
                        </div>

                        <div className="d-flex align-items-center">
                            <div className="mr-2 mr-md-3 text-orange">
                                <i className="fad fa-calendar-alt text-20 text-md-24 text-xxl-28" />
                            </div>

                            <div className="text-500 text-secondary mr-3 mr-md-4 text-14 text-md-17 text-xxl-20">Délai de publication :</div>

                            <div className="text-700 text-orange text-14 text-md-17 text-xxl-20">{convertDate(new Date())}</div>
                        </div>
                    </div>

                    <div className="d-inline-block d-xl-flex">
                        <div className="mr-xl-5 pb-3 pb-md-4 pb-xl-0">
                            <a href="#" className="btn btn-orange py-2 py-md-3 pl-2 pl-md-3 pr-3 pr-md-4 pr-xxl-5 d-flex align-items-center">
                                <div className="text-darkblue mr-2 mr-md-3">
                                    <i className="fad fa-cloud-download-alt text-16 text-md-20 text-xxl-24" />
                                </div>

                                <div className="text-500 text-14 text-md-17 text-xxl-20">Télécharger L'offre</div>
                            </a>
                        </div>

                        <div>
                            <a href="#" className="btn btn-blue btn-block py-2 py-md-3 px-3 px-md-4 px-xxl-5 text-500 text-14 text-md-17 text-xxl-20">Postuler</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 pt-4 pt-md-5 text-secondary">
                <div className="container-xxl">
                    <p className="text-12 text-md-15 text-xxl-18">Pour en savoir d’avantage sur l’offre, nous vous  prions de télécharger le document ci-dessous</p>

                    <p className="text-12 text-md-15 text-xxl-18">Afin de poursuivre, veuillez consulter les conditions d’adhésion ci-dessous.</p>

                    <div className="pt-3 pt-md-4 pt-xxl-5 mt-2 mt-md-3 pl-3 pl-md-4 pl-xxl-5 ml-3 ml-md-4 ml-xxl-5">
                        <Condition>Nom complet, adresse, sexe, nom et lieu naissance</Condition>
                        <Condition>Region et division d’origine</Condition>
                        <Condition>Examination competitive choisie</Condition>
                        <Condition>Centre d’examen</Condition>
                        <Condition>Langue d’examination</Condition>
                        <Condition>Numéro CNI</Condition>
                    </div>
                </div>
            </div>
        </div>;

        const fields = [
            { name: 'NOMS ET PRENOMS', key: 'name', },
            { name: 'CONCOURS', key: 'exam', },
            { name: 'REGION', key: 'region', },
            { name: 'SPECIALITE CHOISIE', key: 'subject', },
            { name: 'STATUT', key: 'status', },
        ];
        const titles = fields.map(({ name, fixed }) => <th className={"align-middle text-nowrap"} style={fixed ? { position: 'sticky', right: 0 } : {}} key={name}>{name}</th>);
        titles.unshift(<th className="text-center align-middle" key="#">{"SL"}</th>);

        const data = [
            {
                name: 'JOHN ALPHA BLONDU',
                exam: 'Elèves Inspecteur de Police',
                region: 'Centre',
                subject: "Musiciens",
                status: <div>ADMIS<FontAwesomeIcon icon={faCheckCircle} className="ml-4 text-green" /></div>,
            },
            {
                name: 'NKOMT PATICAA CHOU',
                exam: 'Elèves Officiers de Police',
                region: 'Centre',
                subject: "Service Général",
                status: <div>ADMIS<FontAwesomeIcon icon={faCheckCircle} className="ml-4 text-green" /></div>,
            },
            {
                name: 'OLALABA GODOU CHA',
                exam: 'Elèves Officiers de Police',
                region: 'Littoral',
                subject: "Musiciens",
                status: <div>ADMIS<FontAwesomeIcon icon={faCheckCircle} className="ml-4 text-green" /></div>,
            },
            {
                name: 'TOEMSA GASTA TAINOO',
                exam: 'Elèves Inspecteur de Police',
                region: 'Est',
                subject: "Conducteurs Automobiles",
                status: <div>ADMIS<FontAwesomeIcon icon={faCheckCircle} className="ml-4 text-green" /></div>,
            },
            {
                name: 'JAFLO EJLANTE',
                exam: 'Elèves Commissaires de Police',
                region: 'Nord-Ouest',
                subject: "Aide Soignants",
                status: <div>ADMIS<FontAwesomeIcon icon={faCheckCircle} className="ml-4 text-green" /></div>,
            },
            {
                name: 'AHALOAOA JAON',
                exam: 'Elèves Commissaires de Police',
                region: 'Littoral',
                subject: "Aide Soignants",
                status: <div>ADMIS<FontAwesomeIcon icon={faCheckCircle} className="ml-4 text-green" /></div>,
            },
            {
                name: 'KIANOA ALA',
                exam: 'Elèves Commissaires de Police',
                region: 'Ouest',
                subject: "Aide Soignants",
                status: <div>ADMIS<FontAwesomeIcon icon={faCheckCircle} className="ml-4 text-green" /></div>,
            },
            {
                name: 'KAHOBAO BONAA',
                exam: 'Elèves Inspecteur de Police',
                region: 'Nord-Ouest',
                subject: "Conducteurs Automobiles",
                status: <div>ADMIS<FontAwesomeIcon icon={faCheckCircle} className="ml-4 text-green" /></div>,
            },
            {
                name: 'AFLIN ALINAA',
                exam: 'Elèves Inspecteur de Police',
                region: 'Nord-Ouest',
                subject: "Musiciens",
                status: <div>ADMIS<FontAwesomeIcon icon={faCheckCircle} className="ml-4 text-green" /></div>,
            },
            {
                name: 'DOMAN AOLON',
                exam: 'Elèves Inspecteur de Police',
                region: 'Centre',
                subject: "Musiciens",
                status: <div>ADMIS<FontAwesomeIcon icon={faCheckCircle} className="ml-4 text-green" /></div>,
            },
        ];
        const tableContent = data.map((item, index) => {
            let inside = [<th className="text-center align-middle" key={`primary${index}`}>{(show === 'All' ? 0 : (page - 1) * show) + index + 1}</th>];
            fields.forEach(({ key, minWidth, fixed }) => {
                inside.push(<td className="align-middle text-nowrap" style={updateObject({ minWidth, borderColor: '#DEE2E6' }, fixed ? { position: 'sticky', right: 0, backgroundColor: '#F4F4F4' } : {})} key={key}>{item[key]}</td>);
            });

            return <tr className="align-middle" key={index + 1}>{inside}</tr>;
        });
        const resultsTabContent = <div>
            <div className="mb-3 mb-md-4 pb-2 pb-md-3">
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <div className={`d-flex align-items-center text-secondary rounded-4`}>
                            <div className="border-right border-border-50">
                                <div className="px-2 px-md-3 py-1 py-md-2 text-300 h-100 rounded-left-4 bg-lightblue text-16 text-md-20 text-xxl-25">{"Afficher"}</div>
                            </div>

                            <Input type="select" name="show" className={`text-16 text-md-20 text-xxl-25 px-2 px-md-3 py-1 py-md-2 text-center rounded-left-0 rounded-right-4 h-100 d-block text-reset border border-2 border-lightblue bg-lightblue`} style={{ width: '6rem' }}>
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                                <option value="All">{"Tout"}</option>
                            </Input>
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <div className="d-none d-sm-block pr-sm-4 pr-xxl-5">
                            <Input type="text" name="ref" placeholder="ID Exam" className="text-secondary text-16 text-md-20 text-xxl-25 rounded-10 border-0 bg-soft py-2 py-md-3 px-3 px-md-4 px-xxl-5" />
                        </div>

                        <div>
                            <a href="#" className="btn btn-orange py-1 py-md-2 py-xxl-3 pl-1 pl-md-2 pl-xxl-3 pr-3 pr-md-4 pr-xxl-5 d-flex align-items-center">
                                <div className="text-white mr-2 mr-md-3">
                                    <i className="fad fa-cloud-download-alt text-16 text-md-20 text-xxl-25" />
                                </div>

                                <div className="text-500 text-16 text-md-20 text-xxl-25">Exporter</div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="d-sm-none pt-3">
                    <Input type="text" name="ref" placeholder="ID Exam" className="text-secondary text-16 text-md-20 text-xxl-25 rounded-10 border-0 bg-soft py-2 py-md-3 px-3 px-md-4 px-xxl-5" />
                </div>
            </div>

            <div className="table-responsive scrollbar-blue">
                <Table bordered hover className={`bg-lightblue-15 rounded-10 text-12 text-md-13 text-xxl-14`}>
                    <thead className={"text-secondary"}>
                        <tr>{titles}</tr>
                    </thead>

                    <tbody className={"text-secondary"}>{tableContent}</tbody>
                </Table>
            </div>
        </div>;

        const notices = [
            {
                created_at: convertDate(new Date()),
                title: `Pour le recrutement des 
                Elèves Gardiens de la Paix`
            },
            {
                created_at: convertDate(new Date()),
                title: `Pour le recrutement des Elèves 
                Inspecteurs de Police`,
                recent: true,
            },
            {
                created_at: convertDate(new Date()),
                title: `Pour le recrutement des 
                Elèves Officiers de Police`
            },
            {
                created_at: convertDate(new Date()),
                title: `Pour le recrutement des 
                Elèves Commissaires de Police`
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

        const noticesNavItems = [
            {
                id: '1',
                icon: "fad fa-music",
                name: "Musiciens",
                content: noticesTabContent,
            },
            {
                id: '2',
                icon: "fad fa-car",
                name: "Conducteurs Automobiles",
                content: noticesTabContent,
            },
            {
                id: '3',
                icon: "fad fa-box-open",
                name: "Service Général",
                content: noticesTabContent,
            },
        ];
        const resultsNavItems = [
            {
                id: '1',
                icon: "fad fa-music",
                name: "Musiciens",
                content: resultsTabContent,
            },
            {
                id: '2',
                icon: "fad fa-car",
                name: "Conducteurs Automobiles",
                content: resultsTabContent,
            },
            {
                id: '3',
                icon: "fad fa-box-open",
                name: "Service Général",
                content: resultsTabContent,
            },
            {
                id: '4',
                icon: "fad fa-user-md",
                name: "Aide Soignants",
                content: resultsTabContent,
            },
            {
                id: '5',
                icon: "fad fa-tools",
                name: "Ingénieur Travaux électro-méta",
                content: resultsTabContent,
            },
        ];



        const noticesContent = notices.map(notice => <Notice key={JSON.stringify(notice)} {...notice} />);
        const infosContent = infos.map(info => <Info key={JSON.stringify(info)} {...info} />);

        const noticesNavItemsContent = noticesNavItems.map(navItem => <NavItem key={navItem.id}>
            <NavLink className={"py-2 py-md-3 py-xxl-4 px-3 px-md-4 px-xxl-5 " + (noticesActiveTab === navItem.id ? "active" : "")} onClick={() => { this.noticesToggle(navItem.id); }}>
                <FontAwesomeIcon icon={navItem.icon} className="icon text-18 text-md-23 text-xxl-28" /><span className="text-truncate">{navItem.name}</span>
            </NavLink>
        </NavItem>);
        const noticesTabPanesContent = noticesNavItems.map(navItem => <TabPane tabId={navItem.id} key={navItem.id + Math.random()}>{navItem.content}</TabPane>);

        const resultsNavItemsContent = resultsNavItems.map(navItem => <NavItem key={navItem.id}>
            <NavLink className={"py-2 py-md-3 py-xxl-4 px-3 px-md-4 px-xxl-5 " + (resultsActiveTab === navItem.id ? "active" : "")} onClick={() => { this.resultsToggle(navItem.id); }}>
                <FontAwesomeIcon icon={navItem.icon} className="icon text-18 text-md-23 text-xxl-28" /><span className="text-truncate">{navItem.name}</span>
            </NavLink>
        </NavItem>);
        const resultsTabPanesContent = resultsNavItems.map(navItem => <TabPane tabId={navItem.id} key={navItem.id + Math.random()}>{navItem.content}</TabPane>);



        return <div className="Exams">
            <div className="bg-blue py-5" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5))' }}>
                <div className="container py-5 my-4 text-40 text-700 text-white text-center">
                    Concours

                    <div className="d-flex justify-content-center align-items-center">
                        <div><div className="bg-white" style={{ height: .5, width: 40 }} /></div>

                        <div className="px-2"><div className="rounded-circle bg-white" style={{ height: 8, width: 8 }} /></div>

                        <div><div className="bg-white" style={{ height: .5, width: 40 }} /></div>
                    </div>
                </div>
            </div>


            <Block title="Avis de concours" subtitle="Renseignez-vous sur les recentes publications concernant les concours" fluid>
                <div>
                    <OwlCarousel options={{
                        responsive: {
                            0: { items: 1, autoplay: true, stagePadding: 48, margin: 20, center: true, nav: true, autoWidth: false },
                            600: { items: 2, autoplay: true, stagePadding: 48, margin: 20, center: false, autoWidth: false },
                            1000: { items: 3 },
                            1800: { items: 4 }
                        },
                        center: false,
                        loop: true,
                        dots: false,
                        autoWidth: true,
                        navText: ['<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-left text-blue"></i>', '<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-right text-blue"></i>']
                    }}>
                        {noticesContent}
                    </OwlCarousel>
                </div>


                <div className="mt-4">
                    <div className="container-xxl">
                        <div className="w-100 scrollbar-lightblue">
                            <Nav tabs className="border-bottom flex-nowrap w-100">
                                {noticesNavItemsContent}
                            </Nav>
                        </div>
                    </div>

                    <TabContent activeTab={noticesActiveTab}>
                        {noticesTabPanesContent}
                    </TabContent>
                </div>
            </Block>



            <Block title="Résultats de concours" subtitle="Consultez le statut de votre concours.">
                <div className="py-3 py-md-4 py-xxl-5 bg-lightblue-30 text-secondary text-center">
                    <div className="my-2 my-md-3 my-xxl-4 text-16 text-md-20 text-xxl-25">Veuillez renseigner le champ ID Exam ci-dessous pour une vérification plus rapide</div>
                </div>

                <div className="container-xxl">
                    <div className="w-100 scrollbar-lightblue mb-5 mt-5 pt-3">
                        <Nav tabs className="border-bottom flex-nowrap w-100">
                            {resultsNavItemsContent}
                        </Nav>
                    </div>

                    <TabContent activeTab={resultsActiveTab} className="mt-5">
                        {resultsTabPanesContent}
                    </TabContent>
                </div>
            </Block>



            <Block title="Pour plus d'informations" subtitle="En cas de besoin, veuillez contacter les différents services aux numéros ci-dessous">
                <div className="my-5 row">
                    {infosContent}
                </div>
            </Block>
        </div>;
    }
}

export default withRouter(Exams);