import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faIdCard, faPassport } from '@fortawesome/free-solid-svg-icons';

import Service from '../../../components/UI/Police/Service';
import Formula from '../../../components/UI/Police/Formula';
import Post from '../../../components/UI/Police/Post';

import './Home.css';

import Img1 from '../../../assets/images/furniture-store-2x1.jpg';

import Post1 from '../../../assets/images/furniture-store-2x1.jpg';
import Post2 from '../../../assets/images/IMG950335-e1525286099916.jpg';
import Post3 from '../../../assets/images/hg-furniturestore.jpg';

import { convertDate } from '../../../shared/utility';

const Block = ({ style, children, full, title, color = 'white', subtitle }) => <div className={full ? "" : ("py-5 bg-" + color)} style={style}>
    {full ? children : <div className="container text-dark">
        <div className="text-center mb-4">
            <div className="h2 text-blue">{title}</div>

            <div className="text-secondary">{subtitle}</div>
        </div>

        {children}
    </div>}
</div>;

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
                title: 'Modern furnishing projects',
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: "Furnishing and complements",
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: 'Which is the best for your home',
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: 'Keeping things minimal',
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: 'Modern furnishing projects',
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: "Furnishing and complements",
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: 'Which is the best for your home',
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: 'Keeping things minimal',
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
        ];
        const posts = [
            {
                title: 'The 3 Tricks that Quickly Became Rules',
                created_at: convertDate(new Date('2017-03-08')),
                body: "You've finally reached this point in your life- you've bought your first home, moved into your very own apartment, moved out of the dorm room or you're finally downsizing after all of your kids have left the nest.",
                photo: Post1,
            },
            {
                title: "Decorating When You're Starting Out or Starting Over",
                created_at: convertDate(new Date('2017-03-03')),
                body: "You've finally reached this point in your life- you've bought your first home, moved into your very own apartment, moved out of the dorm room or you're finally downsizing after all of your kids have left the nest.",
                photo: Post2,
            },
            {
                title: 'What does your favorite dining chair say about you?',
                created_at: convertDate(new Date('2017-03-01')),
                body: "You've finally reached this point in your life- you've bought your first home, moved into your very own apartment, moved out of the dorm room or you're finally downsizing after all of your kids have left the nest.",
                photo: Post3,
            },
        ];

        const servicesContent = services.map(service => <Service key={JSON.stringify(service)} {...service} />);
        const formulaeContent = formulae.map(formula => <Formula key={JSON.stringify(formula)} {...formula} />);
        const blogContent = posts.map(post => <Post key={JSON.stringify(post)} {...post} />);

        return <div className="Home">
            <div className="full-height-app d-flex flex-column text-white" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url("' + Img1 + '")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container flex-fill d-flex flex-column">
                    <div className="row flex-fill align-items-center">
                        <div className="col-xxl-8 col-xl-9 col-lg-10">
                            <div className="p-5 bg-black-50 rounded rounded-30">
                                <div className="p-4">
                                    <div className="text-20 text-300">DÉLÉGATION GÉNÉRALE À LA SÛRETÉ NATIONALE</div>

                                    <div className="text-50 text-700 d-inline-block mb-4">
                                        <div className="mb-3">POLICE CAMEROUNAISE</div>

                                        <div className="position-relative bg-border-50" style={{ height: 1 }}>
                                            <div className="position-absolute rounded-pill bg-white ml-5" style={{ height: 10, width: 70, top: '50%', transform: 'translateY(-50%)' }}>
                                                <div className="bg-darkblue rounded-circle position-absolute" style={{ height: 6, width: 6, top: 2, left: 2 }} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-16 mb-5">
                                        Nous vous demandons de bien vouloir parcourir notre site afin de prendre connaissance
                                        sur les Mises à jours récentes et informations concernant nos services
                                    </div>

                                    <div className="d-flex">
                                        <div className="mr-2 mr-md-3">
                                            <Input type="search" name="search" />
                                        </div>

                                        <div>
                                            <Button color="blue">
                                                Rechercher<FontAwesomeIcon icon={faArrowAltCircleRight} className="ml-2 ml-md-3 ml-xl-4" fixedWidth />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <Block title="Nos Services" subtitle="Veuillez choisir un des liens rapides pour un accès direct">
                <div className="row justify-content-center">
                    {servicesContent}
                </div>
            </Block>



            <Block title="Nos Actualites" color="soft" subtitle="Consultez les dernières actualités sur notre site officiel">
                <OwlCarousel options={{ responsive: { 0: { items: 1 }, 600: { items: 2 }, 900: { items: 3 } }, center: false, loop: true, dots: false }}>
                    {blogContent}
                </OwlCarousel>
            </Block>



            <Block title="Formulaires Administratifs" subtitle="Simplifiez-vous la tache en consultant les formulaires administratifs dont vous avez besoin.">
                <div className="text-right mb-4">
                    <Link to="/blog" className="btn btn-green">Liste complète</Link>
                </div>

                <div className="row justify-content-center">
                    {formulaeContent}
                </div>
            </Block>
        </div>;
    }
}

export default withRouter(Home);