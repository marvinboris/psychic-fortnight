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

import ImgFlag from '../../../assets/images/Groupe 35@2x.png';

import Post1 from '../../../assets/images/Soustraction 8@2x.png';
import Post2 from '../../../assets/images/Soustraction 9@2x.png';
import Post3 from '../../../assets/images/Soustraction 11@2x.png';

class Home extends Component {
    render() {
        const services = [
            {
                name: 'Titres identitaires',
                icon: "fad fa-id-card",
                description: `Check out our API integration 
                documentation here. Try it and
                start using. Our API is very 
                secured.  `
            },
            {
                name: 'Vérifier un document',
                icon: "fad fa-file-check",
                description: `Check out our API integration 
                documentation here. Try it and
                start using. Our API is very 
                secured.  `
            },
            {
                name: 'Solliciter un passeport',
                icon: "fad fa-passport",
                description: `Check out our API integration 
                documentation here. Try it and
                start using. Our API is very 
                secured.  `
            },
            {
                name: 'Solliciter un visa',
                icon: "fad fa-stamp",
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
            <div className="banner full-height-app d-flex flex-column text-white bg-img" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url("' + Img1 + '")' }}>
                <div className="container-xxl flex-fill d-flex flex-column">
                    <div className="row flex-fill align-items-center">
                        <div className="col-md-7">
                            <div className="px-4 py-5 px-xxl-5 d-flex align-items-stretch txt-block">
                                <div className="position-relative my-0 my-md-4 my-xxl-5">
                                    <img src={ImgFlag} className="position-absolute h-100" alt="Drapeau" />
                                </div>

                                <div className="px-md-4 py-md-3 py-xxl-4">
                                    <div className="text-11 text-md-15 text-xxl-20 text-300">DÉLÉGATION GÉNÉRALE À LA SÛRETÉ NATIONALE</div>

                                    <div className="text-700 d-inline-block mb-4">
                                        <div className="text-24 text-md-37 text-xxl-50 mb-3">POLICE CAMEROUNAISE</div>

                                        <div className="position-relative bg-white" style={{ height: .5 }}>
                                            <div className="position-absolute rounded-pill bg-white ml-5" style={{ height: 10, width: 70, top: '50%', transform: 'translateY(-50%)' }}>
                                                <div className="bg-darkblue rounded-circle position-absolute" style={{ height: 6, width: 6, top: 2, left: 2 }} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-12 text-md-18 text-xxl-25"> Nous vous demandons de bien vouloir parcourir notre site afin de prendre connaissance sur les Mises à jours récentes et informations concernant nos services.</div>
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



            <Block title="Nos Actualites" color="soft" subtitle="Consultez les dernières actualités sur notre site officiel">
                <div className="row">
                    <div className="col-12 p-0">
                        <OwlCarousel options={{
                            responsive: {
                                0: { items: 1, autoplay: true, stagePadding: 48, margin: 20, center: true },
                                600: { items: 2, autoplay: true, stagePadding: 48, margin: 20, center: false },
                                1100: { items: 3 }
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
            </Block>



            <div className="py-3 py-md-4 py-xxl-5 text-white text-center bg-img" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url("' + Img1 + '")' }}>
                <div className="py-3 py-md-4 py-xxl-5 my-2 my-md-3 my-xxl-4 container-xxl">
                    <div className="d-flex flex-column align-items-center mb-3 mb-md-4">
                        <div className="text-40 text-md-60 text-xxl-80 text-700 text-montserrat pb-2 pb-md-3">CONCOURS DE POLICE</div>

                        <div className="position-relative bg-white rounded-pill" style={{ width: 115, height: 5 }}>
                            <div className="position-absolute bg-white border border-blue border-7 rounded-circle" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 30, height: 30 }} />
                        </div>
                    </div>

                    <div className="text-14 text-md-17 text-xxl-20 pb-2 pb-md-3 mb-3 mb-md-4">La Police Camerounaise lance son concours pour le recrutement. Cliquez sur le bouton ci-dessous pour en savoir plus</div>

                    <div>
                        <Link to="/" className="btn btn-white d-inline-flex align-items-center text-secondary rounded-pill py-1 py-md-2 py-xxl-3 pl-3 pl-md-4 pl-xxl-5 pr-2 pr-md-3 pr-xxl-4 text-14 text-md-17 text-xxl-20">
                            <div>Lire la suite</div>

                            <div><i className="fad fa-chevron-circle-right text-blue text-18 text-md-24 text-xxl-30 ml-2 ml-md-3 ml-xxl-4 d-block" /></div>
                        </Link>
                    </div>
                </div>
            </div>



            <Block title="Formulaires Administratifs" subtitle="Simplifiez-vous la tache en consultant les formulaires administratifs dont vous avez besoin.">
                <div className="text-right mb-4">
                    <Link to="/formulae" className="btn btn-link text-yellow">Liste complète<FontAwesomeIcon icon={faAngleDoubleRight} className="ml-2" /></Link>
                </div>

                <div className="d-none d-lg-flex row justify-content-center">
                    {formulaeContent}
                </div>

                <div className="d-lg-none">
                    <div className="row">
                        <div className="col-12 p-0">
                            <OwlCarousel options={{
                                responsive: {
                                    0: { items: 1, autoplay: true, stagePadding: 48, margin: 20, center: true, nav: true },
                                    600: { items: 2, autoplay: true, stagePadding: 48, margin: 20, center: false },
                                    1000: { items: 3 },
                                    1800: { items: 4 }
                                },
                                center: false,
                                loop: true,
                                dots: false,
                                navText: ['<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-left text-blue"></i>', '<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-right text-blue"></i>']
                            }}>
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