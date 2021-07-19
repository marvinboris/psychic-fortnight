import React, { Component } from 'react';
import { connect } from 'react-redux';

import Title from '../../../../components/UI/Police/Title';
import Block from '../../../../components/UI/Police/Block';

import Menu from '../Menu';

import ImgPost from '../../../../assets/images/Soustraction 8@2x.png';

const Condition = ({ children }) => <div className="d-flex">
    <div><i className="fad fa-check-circle text-blue mr-3 text-15 text-md-20 text-xxl-25" /></div>

    <div>{children}</div>
</div>;

const LilBlock = ({ title, children }) => <div className="mb-4">
    <div className="mb-4 text-700 text-25 text-md-30 text-xxl-35 text-nightblue">{title}</div>

    <div>{children}</div>
</div>;

class Show extends Component {
    render() {
        const post = {
            title: 'Message du Président à la Nation',
            body: ``,
            photo: ImgPost,
        };

        return <div className="Posts Show">
            <Title>Actualités</Title>



            <Block left title={post.title} subtitle="Consultez nos dernières actualités">
                <div className="row">
                    <div className="col-xl-9 col-lg-8 col-md-7">
                        <div className="embed-responsive embed-responsive-21by9 position-relative rounded-30 overflow-hidden mb-3 mb-md-4">
                            <div className="position-absolute w-100 h-100 bg-img" style={{ top: 0, left: 0, backgroundImage: 'url("' + post.photo + '")' }}>
                                <div className="position-absolute mt-3 mt-md-4 mt-xxl-5 mr-3 mr-md-4 mr-xxl-5" style={{ top: 0, right: 0 }}>
                                    <a href="#" className="btn btn-light rounded-circle" style={{ width: 36, height: 36 }}>
                                        <i className="fad fa-share-alt" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="text-12 text-md-16 text-xxl-20">
                            <LilBlock title="Titre du paragraphe">
                                Il n’est pas un secret de souligner que depuis quelques années déjà, la Police camerounaise qui est résolument tournée vers la modernité, essaie autant que faire ce peu, dans son organisation comme dans son fonctionnement, d’évoluer selon les normes et standards internationaux. La Délégation Générale à la Sûreté Nationale a, dans le cadre des  derniers recrutements, que ce soit au niveau de l’Ecole nationale Supérieure de Police de Yaoundé ou du Centre d’Instruction et d’Application de la police de Mutengene, ouvert les concours aux jeunes qualifiés dans divers domaines. C’est le cas des recrues ayant des bases dans les domaines aussi riches que variés tels que la médecine et les soins infirmiers ; l’ingénierie ; la Communication ; les télécommunications ; la mécanique ; l’électromécanique ; le génie civil ; l’hôtellerie et la restauration ; l’industrie d’habillement ; les métiers du bois ; les métiers du froid et climatisations ; la musique ; etc…
                                <br /><br />
                                Il s’agit véritablement d’une Police de métiers dont les missions devraient couvrir tous les aspects socio-professionnels et ceux liés aux préoccupations étatiques. Le but recherché dans l’esprit du Chef de Corps de la Sûreté Nationale est de faire de notre Police, une structure avant-gardiste, toujours à la pointe des NTIC et prête à servir, à protéger les personnes et leurs biens dans le strict respect des libertés publiques et des droits de l’Homme. Mais également dans l’observation stricte des règles d’éthique et de déontologie.
                                <br /><br />
                                Du point de vue pratique, il est question de faire de la Police, un Corps plus proche des populations pour lesquelles elle est au service avec loyalisme et dévouement. Il s’agit d’une Police plus citoyenne au service des Institutions Républicaines ainsi que des personnes qui les incarnent.
                            </LilBlock>

                            <LilBlock title="Message aux jeunes">
                                Il n’est pas un secret de souligner que depuis quelques années déjà, la Police camerounaise qui est résolument tournée vers la modernité, essaie autant que faire ce peu, dans son organisation comme dans son fonctionnement, d’évoluer selon les normes et standards internationaux. La Délégation Générale à la Sûreté Nationale a, dans le cadre des  derniers recrutements, que ce soit au niveau de l’Ecole nationale Supérieure de Police de Yaoundé ou du Centre d’Instruction et d’Application de la police de Mutengene, ouvert les concours aux jeunes qualifiés dans divers domaines. C’est le cas des recrues ayant des bases dans les domaines aussi riches que variés tels que la médecine et les soins infirmiers ; l’ingénierie ; la Communication ; les télécommunications ; la mécanique ; l’électromécanique ; le génie civil ; l’hôtellerie et la restauration ; l’industrie d’habillement ; les métiers du bois ; les métiers du froid et climatisations ; la musique ; etc…
                                <br /><br />
                                Il s’agit véritablement d’une Police de métiers dont les missions devraient couvrir tous les aspects socio-professionnels et ceux liés aux préoccupations étatiques. Le but recherché dans l’esprit du Chef de Corps de la Sûreté Nationale est de faire de notre Police, une structure avant-gardiste, toujours à la pointe des NTIC et prête à servir, à protéger les personnes et leurs biens dans le strict respect des libertés publiques et des droits de l’Homme. Mais également dans l’observation stricte des règles d’éthique et de déontologie.
                                <br /><br />
                                Du point de vue pratique, il est question de faire de la Police, un Corps plus proche des populations pour lesquelles elle est au service avec loyalisme et dévouement. Il s’agit d’une Police plus citoyenne au service des Institutions Républicaines ainsi que des personnes qui les incarnent.
                            </LilBlock>

                            <LilBlock title="Mission Cités pour la jeunesse">
                                <p>
                                    Malgré toutes ces multiples mutations dans la forme, le fond est toujours resté le même, les missions également. Notamment, la protection des institutions et la sécurisation des personnes et de leurs biens.
                                </p>

                                <div className="py-3 py-md-4 py-xxl-5 my-2 my-md-3 pl-3 pl-md-4 pl-xxl-5 ml-3 ml-md-4 ml-xxl-5">
                                    <Condition>De la sécurité intérieure et extérieure de l’Etat ;</Condition>
                                    <Condition>De la recherche, de la constatation des infractions aux lois pénales et de la conduite de leurs auteurs devant les juridictions répressives ;</Condition>
                                    <Condition>Du maintien de l’ordre et de la paix publics, de la protection, de la sécurité et de la salubrité publiques, plus particulièrement dans les agglomérations urbaines ;</Condition>
                                    <Condition>De la lutte contre la criminalité nationale, internationale et transnationale ;</Condition>
                                    <Condition>De la recherche du renseignement ;</Condition>
                                    <Condition>Des missions d’information, de sécurité, de protection et d’intervention comportant des contacts avec les populations, dans le cadre de la Défense Nationale.</Condition>
                                </div>
                            </LilBlock>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-5">
                        <Menu />
                    </div>
                </div>
            </Block>
        </div>;
    }
}

export default connect()(Show);