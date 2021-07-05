import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faArrowAltCircleRight, faIdCard, faPassport } from '@fortawesome/free-solid-svg-icons';

import Block from '../../../components/UI/Police/Block';
import Service from '../../../components/UI/Police/Service';
import Formula from '../../../components/UI/Police/Formula';
import Post from '../../../components/UI/Police/Post';

import { convertDate } from '../../../shared/utility';

import './Home.css';

import Img1 from '../../../assets/images/Policiers_à_vélo_au_défilé_à_Douala.png';

import ImgFlag from '../../../assets/images/Groupe 529@2x.png';

import Post1 from '../../../assets/images/Soustraction 8@2x.png';
import Post2 from '../../../assets/images/Soustraction 9@2x.png';
import Post3 from '../../../assets/images/Soustraction 11@2x.png';

class Home extends Component {
    render() {
        const services = [
            {
                name: 'Solliciter un passeport',
                icon: faPassport,
                description: `Check out our API integration 
                documentation here. Try it and
                start using. Our API is very 
                secured.  `
            },
            {
                name: 'Vérifier un passeport',
                icon: faPassport,
                description: `Check out our API integration 
                documentation here. Try it and
                start using. Our API is very 
                secured.  `
            },
            {
                name: 'Titres identitaires disponibles',
                icon: faIdCard,
                description: `Check out our API integration 
                documentation here. Try it and
                start using. Our API is very 
                secured.  `
            },
            {
                name: 'Solliciter un passport',
                icon: faPassport,
                description: `Check out our API integration 
                documentation here. Try it and
                start using. Our API is very 
                secured.  `
            },
        ];
        const formulae = [
            {
                title: "Copie Carte Nationale D’Identité",
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: "Certificat De Perte",
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: "Certificat D’Individualité",
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: "Procuration",
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: "Fiche De Renseignement",
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: "Certificat De Toise",
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: "Certificat De Vente",
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: 'Autorisation Parentale',
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
        ];
        const posts = [
            {
                title: 'The 3 Tricks that Quickly Became Rules',
                created_at: convertDate(new Date('2017-03-08')),
                body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. perspiciatis unde omnis iste ",
                photo: Post1,
            },
            {
                title: "Decorating When You're Starting Out or Starting Over",
                created_at: convertDate(new Date('2017-03-03')),
                body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. perspiciatis unde omnis iste ",
                photo: Post2,
            },
            {
                title: 'What does your favorite dining chair say about you?',
                created_at: convertDate(new Date('2017-03-01')),
                body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. perspiciatis unde omnis iste ",
                photo: Post3,
            },
        ];

        const servicesContent = services.map(service => <Service key={JSON.stringify(service)} {...service} />);
        const formulaeContent = formulae.map(formula => <Formula key={JSON.stringify(formula)} {...formula} />);
        const blogContent = posts.map(post => <Post key={JSON.stringify(post)} {...post} />);

        return <div className="Home">
            <div className="banner d-flex flex-column text-white" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url("' + Img1 + '")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container flex-fill d-flex flex-column">
                    <div className="row flex-fill align-items-center">
                        <div className="col-xxl-7 col-xl-9 col-lg-10">
                            <div className="px-4 py-5 px-md-5 rounded rounded-30 txt-block position-relative">
                                <div className="position-absolute d-lg-none" style={{ top: 48, left: 0 }}>
                                    <img src={ImgFlag} alt="Drapeau" style={{ height: 80 }} />
                                </div>

                                <div className="p-md-4">
                                    <div className="text-11 d-md-none text-300">DÉLÉGATION GÉNÉRALE À LA SÛRETÉ NATIONALE</div>
                                    <div className="text-20 d-none d-md-block text-300">DÉLÉGATION GÉNÉRALE À LA SÛRETÉ NATIONALE</div>

                                    <div className="text-700 d-inline-block mb-4">
                                        <div className="text-24 d-md-none mb-3">POLICE CAMEROUNAISE</div>
                                        <div className="text-50 d-none d-md-block mb-3">POLICE CAMEROUNAISE</div>

                                        <div className="position-relative bg-border-50" style={{ height: 1 }}>
                                            <div className="position-absolute rounded-pill bg-white ml-5" style={{ height: 10, width: 70, top: '50%', transform: 'translateY(-50%)' }}>
                                                <div className="bg-darkblue rounded-circle position-absolute" style={{ height: 6, width: 6, top: 2, left: 2 }} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-9 d-md-none mb-5"> Nous vous demandons de bien vouloir parcourir notre site afin de prendre connaissance sur les Mises à jours récentes et informations concernant nos services.</div>
                                    <div className="text-16 d-none d-md-block mb-5"> Nous vous demandons de bien vouloir parcourir notre site afin de prendre connaissance sur les Mises à jours récentes et informations concernant nos services.</div>

                                    <div className="d-flex">
                                        <div className="mr-2 mr-md-3">
                                            <Input type="search" name="search" placeholder="Rechercher tout ici..." className="d-md-none" size="sm" />
                                            <Input type="search" name="search" placeholder="Rechercher tout ici..." className="d-none d-md-block" size="lg" />
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <Button color="blue" className="d-md-none" size="sm">Rechercher<FontAwesomeIcon icon={faArrowAltCircleRight} className="ml-2 ml-md-3 ml-xl-4" fixedWidth /></Button>
                                            <Button color="blue" className="d-none d-md-inline" size="lg">Rechercher<FontAwesomeIcon icon={faArrowAltCircleRight} className="ml-2 ml-md-3 ml-xl-4" fixedWidth /></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <Block title="Nos Services" subtitle="Veuillez choisir un des liens rapides pour un accès direct">
                <div className="d-none d-lg-flex row justify-content-center">
                    {servicesContent}
                </div>

                <div className="d-lg-none">
                    <div className="row">
                        <div className="col-12 p-0">
                            <OwlCarousel options={{ responsive: { 0: { items: 1, autoplay: true, stagePadding: 32, center: true }, 600: { items: 2 }, 1300: { items: 4 } }, center: false, loop: true, dots: false }}>
                                {servicesContent}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </Block>



            <Block title="Nos Actualites" color="soft" subtitle="Consultez les dernières actualités sur notre site officiel">
                <div className="row">
                    <div className="col-12 p-0">
                        <OwlCarousel options={{ responsive: { 0: { items: 1, autoplay: true, stagePadding: 32, center: true }, 600: { items: 2 }, 900: { items: 3 } }, center: false, loop: true, dots: false }}>
                            {blogContent}
                        </OwlCarousel>
                    </div>
                </div>
            </Block>



            <Block title="Formulaires Administratifs" subtitle="Simplifiez-vous la tache en consultant les formulaires administratifs dont vous avez besoin.">
                <div className="text-right mb-4">
                    <Link to="/formulae" className="btn btn-link">Liste complète<FontAwesomeIcon icon={faAngleDoubleRight} className="ml-2" /></Link>
                </div>

                <div className="d-none d-lg-flex row justify-content-center">
                    {formulaeContent}
                </div>

                <div className="d-lg-none">
                    <div className="row">
                        <div className="col-12 p-0">
                            <OwlCarousel options={{ responsive: { 0: { items: 1, autoplay: true, stagePadding: 32, center: true }, 800: { items: 2 }, 1000: { items: 3 }, 1800: { items: 4 } }, center: false, loop: true, dots: false }}>
                                {formulaeContent}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </Block>
        </div>;
    }
}

export default withRouter(Home);