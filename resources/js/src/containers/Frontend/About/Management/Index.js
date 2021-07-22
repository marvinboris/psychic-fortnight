import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router';
import OwlCarousel from 'react-owl-carousel2';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

import Chevrons from '../../../../components/UI/Chevrons';

import Title from '../../../../components/UI/Police/Title';
import Block from '../../../../components/UI/Police/Block';
import Notice from '../../../../components/UI/Police/Notice';
import Info from '../../../../components/UI/Police/Info';

import { convertDate } from '../../../../shared/utility';

import './Management.css';

const Li = ({ children }) => <div className="d-flex align-items-center">
    <div className="text-10 text-md-13 text-xxl-16"><i className="fad fa-check-double text-green mr-3" />{children}</div>
</div>;

class Management extends Component {
    state = {
        noticesActiveTab: '1',
    }

    noticesToggle = tab => this.setState({ noticesActiveTab: tab })

    render() {
        const {
            noticesActiveTab
        } = this.state;

        const noticesTabContent = <div className="row">
            <div className="col-12 bg-lightblue-30 py-5">
                <div className="container-xxl text-left text-500 text-blue text-24 text-md-32 text-xxl-40 my-3">
                    Missions
                </div>
            </div>

            <div className="col-12 pt-4 pt-md-5 text-secondary">
                <div className="container-xxl">
                    <p className="text-12 text-md-15 text-xxl-18">
                        Les Gardiens de la Paix sont chargés d’assurer sous le commandement de
                        leurs supérieurs hiérarchiques :
                    </p>

                    <div className="pt-3 pt-md-4 pt-xxl-5 mt-2 mt-md-3 pl-3 pl-md-4 pl-xxl-5 ml-3 ml-md-4 ml-xxl-5">
                        <Li>Le maintien de l’ordre, de la paix, de la tranquillité et de la salubrité publics ;</Li>
                        <Li>La sécurité des personnes et des biens ;</Li>
                        <Li>La garde des points sensibles, des personnalités et des édifices publics ;</Li>
                        <Li>L’information générale ;</Li>
                        <Li>L’exécution des tâches administratives et techniques courantes ;</Li>
                        <Li>L’entretien des infrastructures et des matériels de Service.</Li>
                    </div>
                </div>
            </div>
        </div>;

        const notices = [
            {
                created_at: convertDate(new Date()),
                title: `Cadre des Gardiens 
                de la paix`
            },
            {
                created_at: convertDate(new Date()),
                title: `Cadre des Inspecteurs 
                de la Police`,
                recent: true,
            },
            {
                created_at: convertDate(new Date()),
                title: `Cadre des Officiers 
                de Police`
            },
            {
                created_at: convertDate(new Date()),
                title: `Cadre des Commissaires 
                de Police`
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
                name: "Missions",
                content: noticesTabContent,
            },
            {
                id: '2',
                name: "Conditions d’accès",
                content: noticesTabContent,
            },
            {
                id: '3',
                name: "Profil de carrière",
                content: noticesTabContent,
            },
        ];



        const noticesContent = notices.map(notice => <Notice key={JSON.stringify(notice)} {...notice} />);
        const infosContent = infos.map(info => <Info key={JSON.stringify(info)} {...info} />);

        const noticesNavItemsContent = noticesNavItems.map(navItem => <NavItem key={navItem.id}>
            <NavLink className={"py-2 py-md-3 py-xxl-4 px-3 px-md-4 px-xxl-5 " + (noticesActiveTab === navItem.id ? "active" : "")} onClick={() => { this.noticesToggle(navItem.id); }}>
                <span className="text-truncate">{navItem.name}</span>
            </NavLink>
        </NavItem>);
        const noticesTabPanesContent = noticesNavItems.map(navItem => <TabPane tabId={navItem.id} key={navItem.id + Math.random()}>{navItem.content}</TabPane>);



        return <div className="Management">
            <Title>Cadres de la sûreté nationale</Title>


            <Block color="soft" title="Cadres de la sûreté nationale" subtitle="Tout ce que vous devez connaître sur les cadres de la Sureté Nationale" fluid>
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
                        <div className="d-flex border-bottom align-items-center">
                            <div id="notices" className="scrollbar-hidden flex-fill">
                                <Nav tabs className="border-0 flex-nowrap">
                                    {noticesNavItemsContent}
                                </Nav>
                            </div>

                            <Chevrons id="notices" />
                        </div>
                    </div>

                    <TabContent activeTab={noticesActiveTab}>
                        {noticesTabPanesContent}
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

export default withRouter(Management);