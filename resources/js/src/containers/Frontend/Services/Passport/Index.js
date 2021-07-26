import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router';
import { Nav, NavItem, NavLink, TabContent, TabPane, Input } from 'reactstrap';

import Chevrons from '../../../../components/UI/Chevrons';

import Title from '../../../../components/UI/Police/Title';
import Block from '../../../../components/UI/Police/Block';

import './Passport.css';

import ImgGP from '../../../../assets/images/green-passport@2x.png';
import ImgRP from '../../../../assets/images/red-passport@2x.png';
import ImgBP from '../../../../assets/images/brown-passport@2x.png';

const Li = ({ children, check = "fas fa-badge-check" }) => <div className="d-flex">
    <div><i className={check + " text-darkgreen mr-3 text-15 text-md-20 text-xxl-25"} /></div>

    <div>{children}</div>
</div>;

class Passport extends Component {
    state = {
        activeTab: '1',
    }

    toggle = tab => this.setState({ activeTab: tab })

    render() {
        const { activeTab } = this.state;

        const pdBefsUp = [
            "Le Président de la République ;",
            "Le Premier Président de la Cour Suprême",
            "Les anciens Premiers Ministres",
            "Le Président du Sénat ;",
            "Le Président du Conseil Constitutionnel",
            "Les anciens Ministres des Relations Extérieures",
            "Le Président de l’Assemblée Nationale ;",
            "Le Procureur Général près la Cour Suprême",
            "Les Membres du Bureau du Sénat",
            "Le Premier Ministre ;",
            "Les anciens Chefs d’Etat",
            "Les Membres du Bureau de l’Assemblée Nationale",
            "Le Président du Conseil Economique et Social",
            "Les Membres du Gouvernement et assimilés pendant la durée de leurs fonctions",
            "Les Présidents des Conseils Régionaux",
        ];
        const pdBefsDown = [
            "Les Membres du Conseil Constitutionnel",
            "Les responsables non diplomates, en service  au Ministère des Relations Extérieures ayant  au moins rang de Directeur",
            "Les Camerounais occupant dans les  organisations internationales à caractère  universel et régional, les fonctions de  Secrétaires Généraux, Secrétaires Généraux  Adjoints et Directeurs",
            "Les responsables en service à la Présidence de la République ayant au moins rang d’Attaché",
            "Toute autre personnalité agréée par le Président de la République",
            "Les responsables dans les Services du Premier Ministre ayant au moins rang d’Attaché",
            "Les Camerounais occupant dans les organisations sous régionales, les fonctions de Secrétaires Généraux et de Secrétaires Généraux Adjoints",
            "Les Officiers Généraux durant leur période d’activité",
            "Les Conseillers, Secrétaires et Attachés d’Ambassade relevant de la Chancellerie",
            "Les fonctionnaires du cadre des Diplomates",
        ];
        const pdOtherBefsUp = [
            "du Président de la République ;",
            "Du Président du Conseil Economique et Social",
            "Des anciens Chefs d’Etat",
            "Le Président du Sénat ;",
            "Du Premier Président de la Cour Suprême",
            "Des Camerounais occupant dans les organisations internationales à caractère universel et régional, les fonctions de Secrétaires Généraux, Secrétaires Généraux Adjoints et Directeurs;",
            "Le Président de l’Assemblée Nationale ;",
            "Du Président du Conseil Constitutionnel",
            "Du Premier Ministre",
            "Du Procureur Général près la Cour Suprême",
            "Des Camerounais occupant dans les organisations sous régionales, les fonctions de Secrétaires Généraux et Secrétaires Généraux Adjoints;",
            "Des fonctionnaires du cadre des Diplomates ;",
            "des Conseillers, Secrétaires et Attachés d’Ambassade relevant de la Chancellerie.",
        ];
        const pdOtherBefsDown = [
            "De ceux possédant la dignité d’Ambassadeur;",
            "Des fonctionnaires du cadre des Diplomates.",
        ];
        const psBefs = [
            "les fonctionnaires civils et militaires ou les agents de l’Etat attachés aux Missions Diplomatiques et aux Postes Consulaires Camerounais, ainsi que leurs conjoints et enfants mineurs non émancipés;",
            "les Conseillers Economiques, Culturels et Financiers auprès des Missions Diplomatiques et leurs Adjoints, ainsi que leurs conjoints et enfants mineurs non émancipés ;",
            "les Secrétaires Généraux des départements ministériels ;",
            "les fonctionnaires du cadre des Attachés des Affaires Etrangères ;",
            "les titulaires d’une mission gouvernementale à l’étranger, conférée par le Président de la République ;",
            "les Courriers Diplomatiques ;",
            "les Attachés de Défense et les Attachés de Défense Adjoints ;",
            "les Conseillers Militaires et les Attachés  Spécialisés Terre, Air, Mer et Gendarmerie ;",
            "toute autre personnalité agréée par le  Président de la République.",
        ];
        const psOtherBefs = [
            "les fonctionnaires civils et militaires, ainsi que les agents de l’Etat voyageant pour des raisons de service ;",
            "les parlementaires, à l’exception des membres des bureaux du Sénat et de l’Assemblée Nationale qui ont droit aux passeports diplomatiques ;",
            "les responsables des établissements et entreprises à caractère public, ainsi que leurs collaborateurs, jusqu’au rang de Chef de Service ;",
            "les Camerounais occupant dans les organisations internationales à caractère universel et régional, les fonctions de Directeurs-Adjoints jusqu’au rang de Chef de Service, ainsi que leurs conjoints et enfants mineurs non émancipés",
            "les Camerounais occupant dans les organisations sous régionales, les fonctions de Directeurs jusqu’au rang de Chef de Service, ainsi que leurs conjoints et enfants mineurs non émancipés.",
        ];

        const pdBefsUpContent = pdBefsUp.map(item => <div className="col-xl-4 col-md-6" key={item + Math.random()}><Li check="fad fa-check-square">{item}</Li></div>)
        const pdBefsDownContent = pdBefsDown.map(item => <div className="col-xl-4 col-md-6" key={item + Math.random()}><Li check="fad fa-check-square">{item}</Li></div>)
        const pdOtherBefsUpContent = pdOtherBefsUp.map(item => <div className="col-xl-4 col-md-6" key={item + Math.random()}><Li check="fal fa-check-square">{item}</Li></div>)
        const pdOtherBefsDownContent = pdOtherBefsDown.map(item => <div className="col-xl-4 col-md-6" key={item + Math.random()}><Li check="fal fa-check-square">{item}</Li></div>)
        const psBefsContent = psBefs.map(item => <div className="col-md-6" key={item + Math.random()}><Li check="fad fa-check-square">{item}</Li></div>)
        const psOtherBefsContent = psOtherBefs.map(item => <div className="col-xl-4 col-md-6" key={item + Math.random()}><Li check="fal fa-check-square">{item}</Li></div>)

        const navItems = [
            {
                id: '1',
                name: "Passeport Biométrique Ordinaire",
                color: 'green',
                content: <>
                    <div className="my-3 my-md-4 my-xxl-5 py-3 py-md-4 py-xxl-5">
                        <div className="container-xxl">
                            <div className="row justify-content-between mb-2 mb-md-3 mb-xxl-4 pb-1 pb-md-2 pb-xxl-3">
                                <div className="col-md-8 col-xxl-9 text-secondary">
                                    <div>
                                        <div className="d-flex align-items-center">
                                            <div className="pr-2 pr-md-3 bg-white">
                                                <div className="text-darkgreen rounded-8 bg-darkgreen-10 text-40 text-700 p-2 p-md-3 p-xxl-4">
                                                    <div className="px-1 px-md-2 px-xxl-3">{'1#'}</div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="text-darkgreen text-700 text-25 text-md-30 text-xxl-35">{"Passeport Ordinaire"}</div>

                                                <div className="text-darkgreen text-300 text-16 text-md-20 text-xxl-25">{"Pièces à fournir par type de demande"}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-3 pt-md-4 pt-xxl-5">
                                        Le passeport ordinaire est un document de voyage délivré par la Délégation Générale à la Sûreté Nationale (DGSN)
                                        disponible pour tous les citoyens camerounais  sur leur demande. Pour procéder à une demande de passeport
                                        ordinaire, le demandeur doit au préalable faire un pré-enrôlement sur le site Web <span className="text-blue text-500">https://www.passcam.cm</span>.
                                        Une fois le processus de pré-enrôlement terminé, une fiche d’information est créée. Celle-ci devra être utilisée
                                        lors de la procédure d’enrôlement dans le centre choisi.
                                    </div>
                                </div>

                                <div className="col-md-3 col-xxl-2">
                                    <div className="px-3 px-md-4 px-xxl-5">
                                        <img className="img-fluid" src={ImgGP} alt="Exemple de passeport vert" />
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div>
                            <div className="container-xxl d-flex align-items-center border-bottom">
                                <div className="p-2 p-md-3 p-xxl-4 bg-blue rounded-top-4 text-white text-700 text-23 text-md-28 text-xxl-33">
                                    <div className="px-1 px-md-2 px-xxl-3 px-2 px-md-3 px-xxl-4">
                                        01.
                                    </div>
                                </div>

                                <div className="text-20 text-md-25 text-xxl-30 text-blue text-700 pl-1 pl-md-2 pl-xxl-3">
                                    Citoyen résidant au Cameroun<span className="text-300 text-darkblue ml-2 ml-md-3 ml-xxl-4">(Première Demande)</span>
                                </div>
                            </div>

                            <div className="bg-blue pl-3 pl-md-4 pl-xxl-5">
                                <div className="d-flex align-items-stretch justify-content-between container-xxl">
                                    <div className="pl-3 pl-md-4 pl-xxl-5 ml-2 ml-md-3 ml-xxl-4 py-2 py-md-3 py-xxl-4 d-flex align-items-center text-16 text-md-20 text-xxl-25 text-white">
                                        Demandeur mineur de moins de 15 ans
                                    </div>

                                    <div>
                                        <Input type="select" name="option" style={{ maxWidth: 450 }} className="h-100 border-0 bg-darkblue text-secondary text-16 text-md-20 text-xxl-25 px-3 px-md-4 px-xxl-5">
                                            <option>Sélectionez une option</option>
                                        </Input>
                                    </div>
                                </div>
                            </div>

                            <div className="p-3 p-md-4 p-xxl-5 bg-soft">
                                <div className="container-xxl">
                                    <div className="p-3 p-md-4 p-xxl-5 mx-2 mx-md-3 mx-xxl-4 my-md-1 my-xxl-2">
                                        <div className="mb-1 mb-md-2 mb-xxl-3 pb-3 pb-md-4 pb-xxl-5">
                                            <Li>Le récépissé imprimé durant la phase de pré-enrôlement ;</Li>
                                            <Li>Une photocopie certifiée conforme de l’acte de naissance ;</Li>
                                            <Li>Un justificatif de la profession de l’enfant, s’il y a lieu ;</Li>
                                            <Li>Une autorisation parentale de l’un des parents, ou du tuteur légal ou d’un détenteur d’une procuration dûment légalisée ;</Li>
                                            <Li>Une photocopie certifiée conforme de la CNI de l’un des parents, du tuteur légal ou du détenteur d’une procuration pouvant agir en lieu et place des parents.</Li>
                                        </div>

                                        <div className="text-15 text-md-17 text-xxl-20 d-flex align-items-stretch">
                                            <div className="mr-2 mr-md-3 mr-xxl-4 rounded-6 btn btn-orange text-white text-15 text-md-17 text-xxl-20 text-500 px-3 px-md-4 px-xxl-5 py-2 py-md-3 py-xxl-4 d-flex align-items-center">
                                                <i className="fad fa-cloud-download text-darkblue mr-2 mr-md-3" />Télécharger le fichier
                                            </div>

                                            <div className="rounded-6 btn btn-blue text-white text-15 text-md-17 text-xxl-20 text-500 px-3 px-md-4 px-xxl-5 d-flex align-items-center">Enrôler</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="mt-3 mt-md-4 mt-xxl-5 pt-3 pt-md-4 pt-xxl-5">
                            <div className="container-xxl d-flex align-items-center border-bottom">
                                <div className="p-2 p-md-3 p-xxl-4 bg-blue rounded-top-4 text-white text-700 text-23 text-md-28 text-xxl-33">
                                    <div className="px-1 px-md-2 px-xxl-3 px-2 px-md-3 px-xxl-4">
                                        02.
                                    </div>
                                </div>

                                <div className="text-20 text-md-25 text-xxl-30 text-blue text-700 pl-1 pl-md-2 pl-xxl-3">
                                    Citoyen résidant à l’étranger<span className="text-300 text-darkblue ml-2 ml-md-3 ml-xxl-4">(Première Demande)</span>
                                </div>
                            </div>

                            <div className="bg-blue pl-3 pl-md-4 pl-xxl-5">
                                <div className="d-flex align-items-stretch justify-content-between container-xxl">
                                    <div className="pl-3 pl-md-4 pl-xxl-5 ml-2 ml-md-3 ml-xxl-4 py-2 py-md-3 py-xxl-4 d-flex align-items-center text-16 text-md-20 text-xxl-25 text-white">
                                        Demandeur mineur de moins de 15 ans
                                    </div>

                                    <div>
                                        <Input type="select" name="option" style={{ maxWidth: 450 }} className="h-100 border-0 bg-darkblue text-secondary text-16 text-md-20 text-xxl-25 px-3 px-md-4 px-xxl-5">
                                            <option>Sélectionez une option</option>
                                            <option>Demandeur mineur âgé de 15 à 21 ans :</option>
                                            <option>Demandeurs mineurs émancipés</option>
                                            <option>Demandeur âgé de plus de 21 ans</option>
                                            <option>Femmes mariées de plus de 21 ans</option>
                                        </Input>
                                    </div>
                                </div>
                            </div>

                            <div className="p-3 p-md-4 p-xxl-5 bg-soft">
                                <div className="container-xxl">
                                    <div className="p-3 p-md-4 p-xxl-5 mx-2 mx-md-3 mx-xxl-4 my-md-1 my-xxl-2">
                                        <div className="mb-1 mb-md-2 mb-xxl-3 pb-3 pb-md-4 pb-xxl-5">
                                            <Li>Le récépissé imprimé durant la phase de pré-enrôlement ;</Li>
                                            <Li>Une photocopie certifiée conforme de l’acte de naissance ;</Li>
                                            <Li>Un justificatif de la profession de l’enfant, s’il y a lieu ;</Li>
                                            <Li>Une autorisation parentale de l’un des parents, ou du tuteur légal ou d’un détenteur d’une procuration dûment légalisée ;</Li>
                                            <Li>Une photocopie certifiée conforme de la CNI de l’un des parents, du tuteur légal ou du détenteur d’une procuration pouvant agir en lieu et place des parents.</Li>
                                        </div>

                                        <div className="text-15 text-md-17 text-xxl-20 d-flex align-items-stretch">
                                            <div className="mr-2 mr-md-3 mr-xxl-4 rounded-6 btn btn-orange text-white text-15 text-md-17 text-xxl-20 text-500 px-3 px-md-4 px-xxl-5 py-2 py-md-3 py-xxl-4 d-flex align-items-center">
                                                <i className="fad fa-cloud-download text-darkblue mr-2 mr-md-3" />Télécharger le fichier
                                            </div>

                                            <div className="rounded-6 btn btn-blue text-white text-15 text-md-17 text-xxl-20 text-500 px-3 px-md-4 px-xxl-5 d-flex align-items-center">Enrôler</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="my-3 my-md-4 my-xxl-5 py-3 py-md-4 py-xxl-5">
                        <div className="container-xxl">
                            <div className="mb-2 mb-md-3 mb-xxl-4 pb-1 pb-md-2 pb-xxl-3">
                                <div>
                                    <div className="d-flex align-items-center">
                                        <div className="pr-2 pr-md-3 bg-white">
                                            <div className="text-darkgreen rounded-8 bg-darkgreen-10 text-40 text-700 p-2 p-md-3 p-xxl-4">
                                                <div className="px-1 px-md-2 px-xxl-3">{'2#'}</div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="text-darkgreen text-700 text-25 text-md-30 text-xxl-35">{"Renouvellement de passeport ordinaire selon les cas"}</div>

                                            <div className="text-darkgreen text-300 text-16 text-md-20 text-xxl-25">{"Pièces à fournir"}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div>
                            <div className="bg-blue pl-3 pl-md-4 pl-xxl-5">
                                <div className="d-flex align-items-stretch justify-content-between container-xxl">
                                    <div className="pl-3 pl-md-4 pl-xxl-5 ml-2 ml-md-3 ml-xxl-4 py-2 py-md-3 py-xxl-4 d-flex align-items-center text-16 text-md-20 text-xxl-25 text-white">
                                        Détérioration, Péremption, Passeport plein
                                    </div>

                                    <div>
                                        <Input type="select" name="option" style={{ maxWidth: 450 }} className="h-100 border-0 bg-darkblue text-secondary text-16 text-md-20 text-xxl-25 px-3 px-md-4 px-xxl-5">
                                            <option>Sélectionez une option</option>
                                            <option>Perte, Vol</option>
                                            <option>Changement de filiation</option>
                                            <option>Changement de nom</option>
                                            <option>Correction</option>
                                        </Input>
                                    </div>
                                </div>
                            </div>



                            <div className="p-3 p-md-4 p-xxl-5 bg-soft">
                                <div className="container-xxl">
                                    <div className="p-3 p-md-4 p-xxl-5 mx-2 mx-md-3 mx-xxl-4 my-md-1 my-xxl-2">
                                        <div className="mb-1 mb-md-2 mb-xxl-3 pb-3 pb-md-4 pb-xxl-5">
                                            <Li>Le récépissé imprimé durant la phase de pré-enrôlement ;</Li>
                                            <Li>Une photocopie certifiée conforme de l’acte de naissance ;</Li>
                                            <Li>Un justificatif de la profession de l’enfant, s’il y a lieu ;</Li>
                                            <Li>Une autorisation parentale de l’un des parents, ou du tuteur légal ou d’un détenteur d’une procuration dûment légalisée ;</Li>
                                            <Li>Une photocopie certifiée conforme de la CNI de l’un des parents, du tuteur légal ou du détenteur d’une procuration pouvant agir en lieu et place des parents.</Li>
                                        </div>

                                        <div className="text-15 text-md-17 text-xxl-20 d-flex align-items-stretch">
                                            <div className="mr-2 mr-md-3 mr-xxl-4 rounded-6 btn btn-orange text-white text-15 text-md-17 text-xxl-20 text-500 px-3 px-md-4 px-xxl-5 py-2 py-md-3 py-xxl-4 d-flex align-items-center">
                                                <i className="fad fa-cloud-download text-darkblue mr-2 mr-md-3" />Télécharger le fichier
                                            </div>

                                            <div className="rounded-6 btn btn-blue text-white text-15 text-md-17 text-xxl-20 text-500 px-3 px-md-4 px-xxl-5 d-flex align-items-center">Enrôler</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            },
            {
                id: '2',
                name: "Passeport Biométrique Diplomatique",
                color: 'red',
                content: <>
                    <div className="my-3 my-md-4 my-xxl-5 py-3 py-md-4 py-xxl-5">
                        <div className="container-xxl">
                            <div className="row justify-content-between mb-2 mb-md-3 mb-xxl-4 pb-1 pb-md-2 pb-xxl-3">
                                <div className="col-md-8 col-xxl-9 text-secondary">
                                    <div>
                                        <div className="d-flex align-items-center">
                                            <div className="pr-2 pr-md-3 bg-white">
                                                <div className="text-blue rounded-8 bg-lightblue-15 text-40 text-700 p-2 p-md-3 p-xxl-4">
                                                    <div className="px-1 px-md-2 px-xxl-3">
                                                        <i className="fad fa-passport" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="text-blue text-700 text-25 text-md-30 text-xxl-35">{"Passeport Diplomatique"}</div>

                                                <div className="text-blue text-300 text-16 text-md-20 text-xxl-25">{"Composition du dossier"}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-3 pt-md-4 pt-xxl-5">
                                        Le passeport diplomatique est délivré par le Ministre des Relations Extérieures, à la demande des
                                        diplomates de carrière ou de l’autorité compétente, le cas échéant
                                    </div>
                                </div>

                                <div className="col-md-3 col-xxl-2">
                                    <div className="px-3 px-md-4 px-xxl-5">
                                        <img className="img-fluid" src={ImgRP} alt="Exemple de passeport diplomatique" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="p-3 p-md-4 p-xxl-5 bg-soft">
                                <div className="container-xxl">
                                    <div className="p-3 p-md-4 p-xxl-5 mx-2 mx-md-3 mx-xxl-4 my-md-1 my-xxl-2">
                                        <div className="mb-1 mb-md-2 mb-xxl-3 pb-3 pb-md-4 pb-xxl-5">
                                            <Li>une photocopie certifiée conforme de l’acte de naissance ;</Li>
                                            <Li>une photocopie certifiée conforme de la carte nationale d’identité ;</Li>
                                            <Li>une photocopie de l’acte de nomination ou du décret d’intégration ;</Li>
                                            <Li>une photocopie certifiée conforme de l’acte de mariage, le cas échéant ;</Li>
                                            <Li>une photocopie certifiée conforme de l’acte de naissance de l’enfant mineur.</Li>
                                        </div>

                                        <div className="mb-1 mb-md-2 mb-xxl-3 pb-3 pb-md-4 pb-xxl-5">
                                            <span className="text-700">NB :</span> La délivrance du passeport diplomatique est gratuite
                                        </div>

                                        <div className="text-15 text-md-17 text-xxl-20 d-flex align-items-stretch">
                                            <div className="mr-2 mr-md-3 mr-xxl-4 rounded-6 btn btn-orange text-white text-15 text-md-17 text-xxl-20 text-500 px-3 px-md-4 px-xxl-5 py-2 py-md-3 py-xxl-4 d-flex align-items-center">
                                                <i className="fad fa-cloud-download text-darkblue mr-2 mr-md-3" />Télécharger le fichier
                                            </div>

                                            <div className="rounded-6 btn btn-blue text-white text-15 text-md-17 text-xxl-20 text-500 px-3 px-md-4 px-xxl-5 d-flex align-items-center">Enrôler</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <Block color="transparent" title="Bénéficiaires" subtitle="Le passeport diplomatique est accordé, pour leurs déplacements à l’étranger, aux personnalités ci-après désignées:" fluid>
                        <div className="p-3 p-md-4 p-xxl-5 bg-soft row">
                            <div className="col-12">
                                <div className="container-xxl">
                                    <div className="p-3 p-md-4 p-xxl-5 mx-2 mx-md-3 mx-xxl-4 my-md-1 my-xxl-2">
                                        <div className="mb-1 mb-md-2 mb-xxl-3 pb-3 pb-md-4 pb-xxl-5 row">
                                            {pdBefsUpContent}
                                        </div>

                                        <div className="row">
                                            {pdBefsDownContent}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Block>



                    <Block color="transparent" title="Autres Bénéficiaires" subtitle="Ont également droit au passeport diplomatique, les conjoints et enfants mineurs non émancipés :">
                        <div className="container-xxl">
                            <div className="p-3 p-md-4 p-xxl-5 mx-2 mx-md-3 mx-xxl-4 my-md-1 my-xxl-2">
                                <div className="mb-1 mb-md-2 mb-xxl-3 pb-3 pb-md-4 pb-xxl-5 row">
                                    {pdOtherBefsUpContent}
                                </div>

                                <div className="mb-1 mb-md-2 mb-xxl-3 pb-3 pb-md-4 pb-xxl-5">
                                    <div className="rounded-15 bg-black-10 p-3 p-md-4 p-xxl-5 text-secondary text-500 text-center">
                                        Les passeports diplomatiques des personnels rejoignant leur administration d’origine ou admis à faire valoir leurs droits à la retraite,
                                        ainsi que ceux de leurs conjoints et enfants mineurs, sont restitués au Ministère des Relations Extérieures à l’exception:
                                    </div>
                                </div>

                                <div className="row">
                                    {pdOtherBefsDownContent}
                                </div>
                            </div>
                        </div>
                    </Block>
                </>
            },
            {
                id: '3',
                name: "Passport Biométrique De Service",
                color: 'brown',
                content: <>
                    <div className="my-3 my-md-4 my-xxl-5 py-3 py-md-4 py-xxl-5">
                        <div className="container-xxl">
                            <div className="row justify-content-between mb-2 mb-md-3 mb-xxl-4 pb-1 pb-md-2 pb-xxl-3">
                                <div className="col-md-8 col-xxl-9 text-secondary">
                                    <div>
                                        <div className="d-flex align-items-center">
                                            <div className="pr-2 pr-md-3 bg-white">
                                                <div className="text-blue rounded-8 bg-lightblue-15 text-40 text-700 p-2 p-md-3 p-xxl-4">
                                                    <div className="px-1 px-md-2 px-xxl-3">
                                                        <i className="fad fa-passport" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="text-blue text-700 text-25 text-md-30 text-xxl-35">{"Passport de Service"}</div>

                                                <div className="text-blue text-300 text-16 text-md-20 text-xxl-25">{"Composition du dossier"}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-3 pt-md-4 pt-xxl-5">
                                        Le passeport de service est délivré à tout ressortissant camerounais qui, n’ayant pas droit à un passeport diplomatique,
                                        est chargé d’une mission permanente à l’étranger, ou est appelé de par ses fonctions, à effectuer fréquemment des
                                        missions à l’étranger pour le compte du Gouvernement. Il est délivré par le Délégué Général à la Sûreté Nationale, à la
                                        demande de l’autorité compétente.
                                    </div>
                                </div>

                                <div className="col-md-3 col-xxl-2">
                                    <div className="px-3 px-md-4 px-xxl-5">
                                        <img className="img-fluid" src={ImgBP} alt="Exemple de passeport de service" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="p-3 p-md-4 p-xxl-5 bg-soft">
                                <div className="container-xxl">
                                    <div className="p-3 p-md-4 p-xxl-5 mx-2 mx-md-3 mx-xxl-4 my-md-1 my-xxl-2">
                                        <div className="mb-1 mb-md-2 mb-xxl-3 pb-3 pb-md-4 pb-xxl-5">
                                            <Li>une photocopie certifiée conforme de l’acte de naissance ;</Li>
                                            <Li>une photocopie certifiée conforme de la carte nationale d’identité ;</Li>
                                            <Li>une photocopie de l’ordre de mission ;</Li>
                                            <Li>une photocopie de l’acte de nomination ou d’affectation ;</Li>
                                            <Li>une photocopie certifiée conforme de l’acte de mariage pour la femme mariée.</Li>
                                        </div>

                                        <div className="mb-1 mb-md-2 mb-xxl-3 pb-3 pb-md-4 pb-xxl-5">
                                            <span className="text-700">NB :</span> La délivrance du passeport de service est gratuite
                                        </div>

                                        <div className="text-15 text-md-17 text-xxl-20 d-flex align-items-stretch">
                                            <div className="mr-2 mr-md-3 mr-xxl-4 rounded-6 btn btn-orange text-white text-15 text-md-17 text-xxl-20 text-500 px-3 px-md-4 px-xxl-5 py-2 py-md-3 py-xxl-4 d-flex align-items-center">
                                                <i className="fad fa-cloud-download text-darkblue mr-2 mr-md-3" />Télécharger le fichier
                                            </div>

                                            <div className="rounded-6 btn btn-blue text-white text-15 text-md-17 text-xxl-20 text-500 px-3 px-md-4 px-xxl-5 d-flex align-items-center">Enrôler</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <Block color="transparent" title="Bénéficiaires" subtitle="Le passeport diplomatique est accordé, pour leurs déplacements à l’étranger, aux personnalités ci-après désignées:" fluid>
                        <div className="p-3 p-md-4 p-xxl-5 bg-soft row">
                            <div className="col-12">
                                <div className="container-xxl">
                                    <div className="p-3 p-md-4 p-xxl-5 mx-2 mx-md-3 mx-xxl-4 my-md-1 my-xxl-2">
                                        <div className="row">
                                            <div className="col-xxl-8 col-xl-9 col-lg-10 col-md-11">
                                                <div className="row">
                                                    {psBefsContent}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Block>



                    <Block color="transparent" title="Autres Bénéficiaires" subtitle="Ont également droit à un passeport de service, pour leurs déplacements à l’étranger, pendant la durée de leur mission:">
                        <div className="container-xxl">
                            <div className="p-3 p-md-4 p-xxl-5 mx-2 mx-md-3 mx-xxl-4 my-md-1 my-xxl-2">
                                <div className="row">
                                    {psOtherBefsContent}
                                </div>
                            </div>
                        </div>
                    </Block>
                </>
            },
        ];



        const navItemsContent = navItems.map(navItem => <NavItem key={navItem.id}>
            <NavLink className={"py-2 py-md-3 py-xxl-4 px-3 px-md-4 px-xxl-5 " + navItem.color + " " + (activeTab === navItem.id ? "active" : "")} onClick={() => { this.toggle(navItem.id); }}>
                <span className="text-truncate text-500 text-14 text-md-17 text-xxl-20">{navItem.name}</span>
            </NavLink>
        </NavItem>);
        const tabPanesContent = navItems.map(navItem => <TabPane tabId={navItem.id} key={navItem.id + Math.random()}>{navItem.content}</TabPane>);



        return <div className="Passport">
            <Title>Passeports Biométriques</Title>



            <Block color="transparent" title="Demande de passeport" subtitle="Veuillez choisir un type de passeport afin de poursuivre" fluid>
                <div className="row">
                    <div className="col-12 bg-soft">
                        <div className="container-xxl d-flex align-items-center">
                            <div id="verification" className="scrollbar-hidden flex-fill">
                                <Nav tabs className="border-0 flex-nowrap">
                                    {navItemsContent}
                                </Nav>
                            </div>

                            <Chevrons id="verification" />
                        </div>
                    </div>

                    <TabContent className="col-12 p-0" activeTab={activeTab}>
                        {tabPanesContent}
                    </TabContent>
                </div>
            </Block>
        </div>;
    }
}

export default withRouter(Passport);