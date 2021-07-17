import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';
import { faCircle, faCloudDownloadAlt, faVideo } from '@fortawesome/free-solid-svg-icons';
import OwlCarousel from 'react-owl-carousel2';

import Chevrons from '../../../../components/UI/Chevrons';

import Title from '../../../../components/UI/Police/Title';
import Block from '../../../../components/UI/Police/Block';
import Picture from '../../../../components/UI/Police/Picture';
import Post from '../../../../components/UI/Police/Post';
import Info from '../../../../components/UI/Police/Info';

import { convertDate, convertTime } from '../../../../shared/utility';

import './Media.css';

import Post1 from '../../../../assets/images/president@2x.png';
import Post2 from '../../../../assets/images/Soustraction 9@2x.png';
import Post3 from '../../../../assets/images/un-policier-promu@2x.png';
import Post4 from '../../../../assets/images/drc-police@2x.png';

class Media extends Component {
    state = {
        publishmentsActiveTab: '1',
        galleryActiveTab: '1',
        recordsActiveTab: '1',
    }

    publishmentsToggle = tab => this.setState({ publishmentsActiveTab: tab })

    galleryToggle = tab => this.setState({ galleryActiveTab: tab })

    recordsToggle = tab => this.setState({ recordsActiveTab: tab })

    render() {
        const { publishmentsActiveTab, galleryActiveTab, recordsActiveTab } = this.state;

        const posts = [
            {
                title: 'Nouveaux Passports',
                created_at: convertDate(new Date('2017-03-08')),
                body: "You've finally reached this point in your life- you've bought your first home, moved into your very own apartment, moved out of the dorm room or you're finally downsizing after all of your kids have left the nest.",
                photo: Post1,
            },
            {
                title: "Lutte contre le terrorisme",
                created_at: convertDate(new Date('2017-03-03')),
                body: "You've finally reached this point in your life- you've bought your first home, moved into your very own apartment, moved out of the dorm room or you're finally downsizing after all of your kids have left the nest.",
                photo: Post2,
            },
            {
                title: 'Nouveaux titres identitaires',
                created_at: convertDate(new Date('2017-03-01')),
                body: "You've finally reached this point in your life- you've bought your first home, moved into your very own apartment, moved out of the dorm room or you're finally downsizing after all of your kids have left the nest.",
                photo: Post3,
            },
            {
                title: 'Recrutement Police',
                created_at: convertDate(new Date('2017-03-01')),
                body: "You've finally reached this point in your life- you've bought your first home, moved into your very own apartment, moved out of the dorm room or you're finally downsizing after all of your kids have left the nest.",
                photo: Post4,
            },
        ];
        const pictures = [
            {
                title: "Photo Title goes here",
                description: "Never go on a trip without ceibaCoin, you are almost welcome to book your rooms from our ceibaWallet",
                photo: Post1,
            },
            {
                title: "Photo Title goes here",
                description: "Never go on a trip without ceibaCoin, you are almost welcome to book your rooms from our ceibaWallet",
                photo: Post2,
            },
            {
                title: "Photo Title goes here",
                description: "Never go on a trip without ceibaCoin, you are almost welcome to book your rooms from our ceibaWallet",
                photo: Post3,
            },
            {
                title: "Photo Title goes here",
                description: "Never go on a trip without ceibaCoin, you are almost welcome to book your rooms from our ceibaWallet",
                photo: Post4,
            },
            {
                title: "Photo Title goes here",
                description: "Never go on a trip without ceibaCoin, you are almost welcome to book your rooms from our ceibaWallet",
                photo: Post1,
            },
            {
                title: "Photo Title goes here",
                description: "Never go on a trip without ceibaCoin, you are almost welcome to book your rooms from our ceibaWallet",
                photo: Post2,
            },
            {
                title: "Photo Title goes here",
                description: "Never go on a trip without ceibaCoin, you are almost welcome to book your rooms from our ceibaWallet",
                photo: Post3,
            },
            {
                title: "Photo Title goes here",
                description: "Never go on a trip without ceibaCoin, you are almost welcome to book your rooms from our ceibaWallet",
                photo: Post4,
            },
            {
                title: "Photo Title goes here",
                description: "Never go on a trip without ceibaCoin, you are almost welcome to book your rooms from our ceibaWallet",
                photo: Post1,
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
        const records = [
            {
                title: "Au service de tous et de chacun du 05 12 2020",
                created_at: new Date(),
            },
            {
                title: "Au service de tous et de chacun du 05 12 2020",
                created_at: new Date(),
            },
            {
                title: "Au service de tous et de chacun du 05 12 2020",
                created_at: new Date(),
            },
            {
                title: "Au service de tous et de chacun du 05 12 2020",
                created_at: new Date(),
            },
            {
                title: "Au service de tous et de chacun du 05 12 2020",
                created_at: new Date(),
            },
            {
                title: "Au service de tous et de chacun du 05 12 2020",
                created_at: new Date(),
            },
            {
                title: "Au service de tous et de chacun du 05 12 2020",
                created_at: new Date(),
            },
            {
                title: "Au service de tous et de chacun du 05 12 2020",
                created_at: new Date(),
            },
            {
                title: "Au service de tous et de chacun du 05 12 2020",
                created_at: new Date(),
            },
            {
                title: "Au service de tous et de chacun du 05 12 2020",
                created_at: new Date(),
            },
            {
                title: "Au service de tous et de chacun du 05 12 2020",
                created_at: new Date(),
            },
            {
                title: "Au service de tous et de chacun du 05 12 2020",
                created_at: new Date(),
            },
            {
                title: "Au service de tous et de chacun du 05 12 2020",
                created_at: new Date(),
            },
            {
                title: "Au service de tous et de chacun du 05 12 2020",
                created_at: new Date(),
            },
            {
                title: "Au service de tous et de chacun du 05 12 2020",
                created_at: new Date(),
            },
            {
                title: "Au service de tous et de chacun du 05 12 2020",
                created_at: new Date(),
            },
            {
                title: "Au service de tous et de chacun du 05 12 2020",
                created_at: new Date(),
            },
            {
                title: "Au service de tous et de chacun du 05 12 2020",
                created_at: new Date(),
            },
            {
                title: "Au service de tous et de chacun du 05 12 2020",
                created_at: new Date(),
            },
            {
                title: "Au service de tous et de chacun du 05 12 2020",
                created_at: new Date(),
            },
        ];

        const blogContent = posts.map(post => <Post simple key={Math.random() + JSON.stringify(post)} {...post} />);
        const picturesContent = pictures.map(picture => <Picture key={Math.random() + JSON.stringify(picture)} {...picture} />);
        const infosContent = infos.map(info => <Info key={Math.random() + JSON.stringify(info)} {...info} />);
        const recordsList = records.map((record, index) => <div key={Math.random() + JSON.stringify(record)} className="d-flex align-items-center text-secondary">
            <div className="text-700 text-20 text-md-25 text-xxl-30 mr-1 mr-md-2 mr-xxl-3 text-right" style={{ width: '3rem' }}>{index + 1}.</div>

            <div className="text-10 text-md-13 text-xxl-16 flex-fill">{record.title}</div>

            <div className="text-10 text-md-13 text-xxl-16">{convertDate(record.created_at)} | <span className="text-700">{convertTime(record.created_at)}</span></div>
        </div>);

        const publishmentsContent = <div className="row bg-soft py-3 py-md-4 py-xxl-5">
            <div className="col-12 px-0 my-3 my-md-4 my-xxl-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12 px-0">
                            <OwlCarousel options={{
                                responsive: {
                                    0: { items: 1, autoplay: true, stagePadding: 48, margin: 20, center: true },
                                    600: { items: 2, autoplay: true, stagePadding: 48, margin: 20, center: false },
                                    900: { items: 3 },
                                    1300: { items: 4 },
                                },
                                center: false,
                                loop: true,
                                dots: false,
                                nav: true,
                                navText: ['<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-left text-blue"></i>', '<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-right text-blue"></i>']
                            }}>
                                {blogContent}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>;

        const publishmentsNavItems = [
            {
                id: '1',
                name: "Magazine Servir",
                content: publishmentsContent,
            },
            {
                id: '2',
                name: "Plaquettes",
                content: publishmentsContent,
            },
            {
                id: '3',
                name: "Dépliants",
                content: publishmentsContent,
            },
        ];

        const publishmentsNavItemsContent = publishmentsNavItems.map(navItem => <NavItem key={navItem.id}>
            <NavLink className={"py-2 py-md-3 py-xxl-4 px-3 px-md-4 px-xxl-5 " + (publishmentsActiveTab === navItem.id ? "active" : "")} onClick={() => { this.publishmentsToggle(navItem.id); }}>
                <span className="text-truncate text-500 text-14 text-md-17 text-xxl-20">{navItem.name}</span>
            </NavLink>
        </NavItem>);
        const publishmentsTabPanesContent = publishmentsNavItems.map(navItem => <TabPane tabId={navItem.id} key={navItem.id + Math.random()}>{navItem.content}</TabPane>);

        const galleryContent = <div>
            <div className="d-none d-lg-flex row justify-content-center">
                {picturesContent}
            </div>

            <div className="d-lg-none">
                <div className="row">
                    <div className="col-12 p-0">
                        <OwlCarousel options={{
                            responsive: {
                                0: { items: 1, autoplay: true, stagePadding: 48, margin: 20, center: true },
                                600: { items: 2, autoplay: true, stagePadding: 48, margin: 20, center: false },
                                1000: { items: 3 },
                            },
                            center: false,
                            loop: true,
                            dots: false,
                            nav: true,
                            navText: ['<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-left text-blue"></i>', '<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-right text-blue"></i>']
                        }}>
                            {picturesContent}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>;

        const galleryNavItems = [
            {
                id: '1',
                name: "Tout",
                content: galleryContent,
            },
            {
                id: '2',
                name: "Cérémonies",
                content: galleryContent,
            },
            {
                id: '3',
                name: "Fêtes de la Nation",
                content: galleryContent,
            },
            {
                id: '4',
                name: "La DGSN en service",
                content: galleryContent,
            },
            {
                id: '5',
                name: "Vidéos",
                content: galleryContent,
                icon: faVideo,
            },
        ];

        const galleryNavItemsContent = galleryNavItems.map(navItem => <NavItem key={navItem.id}>
            <NavLink className={"py-1 py-md-2 py-xxl-3 px-3 px-md-4 px-xxl-5 rounded-4 position-relative " + (galleryActiveTab === navItem.id ? "active" : "")} onClick={() => { this.galleryToggle(navItem.id); }}>
                <span className="text-truncate text-500 text-14 text-md-17 text-xxl-20">{navItem.name}</span>

                <div className="position-absolute mr-1 mr-md-2 mr-xxl-3" style={{ top: '50%', right: 0, transform: 'translateY(-50%)' }}>
                    <FontAwesomeIcon icon={faCircle} className="circle text-white text-6 text-md-8 text-xxl-10" />
                </div>
            </NavLink>
        </NavItem>);
        const galleryTabPanesContent = galleryNavItems.map(navItem => <TabPane tabId={navItem.id} key={navItem.id + Math.random()}>{navItem.content}</TabPane>);

        const recordsContent = <div className="row bg-lightblue-15 py-3 py-md-4 py-xxl-5">
            <div className="col-12 my-3 my-md-4 my-xxl-5">
                <div className="container-xxl">
                    <div className="row bg-blue rounded-15 overflow-hidden">
                        <div className="col-xxl-4 col-md-6 px-3 px-md-4 px-xxl-5 py-2 py-md-3 py-xxl-4">
                            <div className="text-right mb-2 mb-md-3 mb-xxl-4">
                                <FontAwesomeIcon icon={faCloudDownloadAlt} className="text-lightblue text-15 text-md-20 text-xxl-25" />
                            </div>

                            <div className="embed-responsive embed-responsive-4by3 position-relative mb-3 mb-md-4 mb-xxl-5">
                                <div className="position-absolute w-100 h-100 rounded-15 bg-black-50 d-flex flex-column justify-content-center align-items-center" style={{ top: 0, left: 0 }}>
                                    <div className="text-white text-15 text-md-20 text-xxl-25 pb-3 pb-md-4 pb-xxl-5">Titre de l'émission ici</div>

                                    <div className="text-blue text-50 text-md-60 text-xxl-70">
                                        <i className="fas fa-radio" />
                                    </div>
                                </div>
                            </div>

                            <div></div>
                        </div>

                        <div className="col-xxl-8 col-md-6 bg-white rounded-top-left-30 px-0 pb-3 pb-md-4 pb-xxl-5">
                            <div className="pl-3 pl-md-4 pl-xxl-5 d-flex flex-column">
                                <div className="bg-blue rounded-bottom-15 rounded-top-left-15 py-2 py-md-3 py-xxl-4 px-3 px-md-4 px-xxl-5 mb-2 mb-md-3 mb-xxl-4 d-flex align-items-center">
                                    <div className="text-yellow text-20 text-md-25 text-xxl-30 mr-2 mr-md-3">
                                        <FontAwesomeIcon icon={faListAlt} />
                                    </div>

                                    <div className="text-white text-18 text-md-23 text-xxl-28">Liste</div>
                                </div>

                                <div className="flex-fill scrollbar-blue mr-2 mr-md-3 mr-xxl-4 ml-3 ml-md-4 ml-xxl-5 pr-1 pr-md-2 pr-xxl-3 records">
                                    {recordsList}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;

        const recordsNavItems = [
            {
                id: '1',
                name: "Au service de tous et de chacun",
                content: recordsContent,
            },
            {
                id: '2',
                name: "Canal Police",
                content: recordsContent,
            },
        ];

        const recordsNavItemsContent = recordsNavItems.map(navItem => <NavItem key={navItem.id}>
            <NavLink className={"py-2 py-md-3 py-xxl-4 px-3 px-md-4 px-xxl-5 " + (recordsActiveTab === navItem.id ? "active" : "")} onClick={() => { this.recordsToggle(navItem.id); }}>
                <span className="text-truncate text-500 text-14 text-md-17 text-xxl-20">{navItem.name}</span>
            </NavLink>
        </NavItem>);
        const recordsTabPanesContent = recordsNavItems.map(navItem => <TabPane tabId={navItem.id} key={navItem.id + Math.random()}>{navItem.content}</TabPane>);

        return <div className="Media">
            <Title>Médias</Title>



            <Block title="Publications" fluid subtitle="Restez informé. Profitez des dernières infos de la Police">
                <div className="container-xxl">
                    <div className="d-flex border-bottom align-items-center">
                        <div id="publishments" className="scrollbar-hidden flex-fill">
                            <Nav tabs className="border-0 flex-nowrap">
                                {publishmentsNavItemsContent}
                            </Nav>
                        </div>

                        <Chevrons id="publishments" />
                    </div>
                </div>

                <div>
                    <TabContent activeTab={publishmentsActiveTab}>
                        {publishmentsTabPanesContent}
                    </TabContent>
                </div>
            </Block>



            <Block color="transparent" title="Galérie" subtitle="Vous n’avez pas trouvé le document que vous recherchez ? Vérifiez ici">
                <div className="container-xxl">
                    <div className="d-flex border-bottom align-items-center mb-3 mb-md-4 mb-xxl-5">
                        <div id="gallery" className="scrollbar-hidden flex-fill">
                            <Nav tabs className="border-0 flex-nowrap">
                                {galleryNavItemsContent}
                            </Nav>
                        </div>

                        <Chevrons id="gallery" />
                    </div>
                </div>

                <div>
                    <TabContent activeTab={galleryActiveTab}>
                        {galleryTabPanesContent}
                    </TabContent>
                </div>
            </Block>



            <Block color="transparent" title="Emissions Radio" fluid subtitle="Toutes nos émissions radio en Replay">
                <div className="container-xxl">
                    <div className="d-flex border-bottom align-items-center">
                        <div id="records" className="scrollbar-hidden flex-fill">
                            <Nav tabs className="border-0 flex-nowrap">
                                {recordsNavItemsContent}
                            </Nav>
                        </div>

                        <Chevrons id="records" />
                    </div>
                </div>

                <div>
                    <TabContent activeTab={recordsActiveTab}>
                        {recordsTabPanesContent}
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

export default withRouter(Media);