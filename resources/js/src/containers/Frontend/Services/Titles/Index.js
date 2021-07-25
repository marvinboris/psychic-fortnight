import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router';
import { Nav, NavItem, NavLink, TabContent, TabPane, Input } from 'reactstrap';

import Chevrons from '../../../../components/UI/Chevrons';

import Title from '../../../../components/UI/Police/Title';
import Block from '../../../../components/UI/Police/Block';
import Fees from '../../../../components/UI/Police/Fees';

import './Titles.css';

import ImgCNI from '../../../../assets/images/CNI-1536x1039@2x.png';
import ImgCS from '../../../../assets/images/SEJOUR-1536x1039@2x.png';
import ImgCRes from '../../../../assets/images/SEJOUR-1536x1039@2x.png';

const Li = ({ children }) => <div className="d-flex">
    <div><i className="fad fa-badge-check text-darkgreen mr-3 text-15 text-md-20 text-xxl-25" /></div>

    <div>{children}</div>
</div>;

class Titles extends Component {
    state = {
        activeTab: '1',
    }

    toggle = tab => this.setState({ activeTab: tab })

    render() {
        const { activeTab } = this.state;

        const csFees = [
            {
                amount: 30000,
                description: `Etudiants, élèves ou 
                enfants mineurs ;`,
            },
            {
                amount: 120000,
                description: `Pour les Africains
                Majeurs`,
            },
            {
                amount: 200000,
                description: `Pour les 
                Français `,
            },
            {
                amount: 250000,
                description: `Pour les autres 
                Nationalités `,
            },
            {
                amount: 0,
                description: `Pour les assimilés 
                aux membres du 
                corps diplomatiques`,
            },
        ];
        const cresFees = [
            {
                amount: 60000,
                description: `Pour les religieux et 
                conjoints légitimes 
                de camerounais`,
            },
            {
                amount: 250000,
                description: `Pour les Africains
                Majeurs`,
            },
            {
                amount: 500000,
                description: `Pour les 
                Français `,
            },
            {
                amount: 700000,
                description: `Pour les autres 
                Nationalités `,
            },
            {
                amount: 0,
                description: `Pour les assimilés 
                aux membres du 
                corps diplomatiques`,
            },
        ];

        const csFeesContent = csFees.map(fees => <Fees key={Math.random() + JSON.stringify(fees)} {...fees} />);
        const cresFeesContent = cresFees.map(fees => <Fees key={Math.random() + JSON.stringify(fees)} {...fees} />);

        const navItems = [
            {
                id: '1',
                name: "Carte Nationale D’Identité",
                content: <div className="my-3 my-md-4 my-xxl-5 py-3 py-md-4 py-xxl-5">
                    <div className="container-xxl">
                        <div className="d-flex align-items-center">
                            <div className="pr-2 pr-md-3 bg-white">
                                <div className="text-blue rounded-8 bg-lightblue-15 text-40 text-700 p-2 p-md-3 p-xxl-4">
                                    <div className="px-1 px-md-2 px-xxl-3">{'1#'}</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-blue text-700 text-25 text-md-30 text-xxl-35">{"Carte Nationale D’Identité"}</div>

                                <div className="text-black text-300 text-16 text-md-20 text-xxl-25">{"Composition du dossier"}</div>
                            </div>
                        </div>

                        <div className="row mb-2 mb-md-3 mb-xxl-4 pb-1 pb-md-2 pb-xxl-3">
                            <div className="col-md-8 col-xxl-9 pt-3 pt-md-4 pt-xxl-5 text-secondary">
                                D’après l’article 5 du décret N°2016/375 du 04 août 2016 fixant les caractéristiques et les modalités d’établissement
                                et de délivrance de la Carte Nationale d’Identité, la possession et la détention de la Carte Nationale d’Identité
                                sont obligatoires pour tout citoyen âgé de 18 ans révolus, sur toute l’étendue du territoire national.
                                <br /><br />
                                Son titulaire est tenu de la présenter à toutes réquisitions des agents habilités.
                                Sa validité est de <strong className="text-blue text-700">10 ans</strong>.
                            </div>

                            <div className="col-md-4 col-xxl-3">
                                <img className="img-fluid" src={ImgCNI} alt="Exemple de CNI" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="container-xxl d-flex align-items-center border-bottom">
                            <div className="p-2 p-md-3 p-xxl-4 bg-blue rounded-top-4 text-white text-23 text-md-28 text-xxl-33">
                                <div className="px-1 px-md-2 px-xxl-3 px-2 px-md-3 px-xxl-4">
                                    <i className="fad fa-passport" />
                                </div>
                            </div>

                            <div className="text-20 text-md-25 text-xxl-30 text-blue text-700 pl-1 pl-md-2 pl-xxl-3">
                                Composition du dossier
                            </div>
                        </div>

                        <div className="bg-blue pl-3 pl-md-4 pl-xxl-5">
                            <div className="d-flex align-items-stretch justify-content-between container-xxl">
                                <div className="pl-3 pl-md-4 pl-xxl-5 ml-2 ml-md-3 ml-xxl-4 py-2 py-md-3 py-xxl-4 d-flex align-items-center text-16 text-md-20 text-xxl-25 text-white">
                                    En cas de première demande
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
                                        <Li>Un certificat de nationalité ;</Li>
                                        <Li>une copie certifiée conforme d’acte de naissance ou une copie certifiée conforme d’un extrait d’acte de naissance ou une copie certifiée conforme d’un jugement supplétif d’acte de naissance ou un livret familial signé des autorités compétentes ;</Li>
                                        <Li>l’ancienne carte nationale d’identité, le cas échéant ;</Li>
                                        <Li>une copie d’acte de mariage, pour les femmes mariées ;</Li>
                                        <Li>une pièce justificative de la profession, s’il y a lieu ;</Li>
                                        <Li>un certificat de nationalité signé du Président du Tribunal de Première Instance.</Li>
                                    </div>

                                    <div className="d-flex align-items-stretch text-15 text-md-17 text-xxl-20">
                                        <div className="mr-2 mr-md-3 mr-xxl-4 bg-orange rounded-6 px-3 px-md-4 px-xxl-5 py-1 py-md-2 text-300 text-montserrat">
                                            <div className="text-black">Frais</div>

                                            <div className="text-white"><span className="text-700 text-28 text-md-34 text-xxl-40">2800</span> FCFA</div>
                                        </div>

                                        <div className="rounded-6 btn btn-blue text-white text-15 text-md-17 text-xxl-20 text-500 px-3 px-md-4 px-xxl-5 d-flex align-items-center">Commencer</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            },
            {
                id: '2',
                name: "Carte de Séjour",
                content: <div className="my-3 my-md-4 my-xxl-5 py-3 py-md-4 py-xxl-5">
                    <div className="container-xxl">
                        <div className="d-flex align-items-center">
                            <div className="pr-2 pr-md-3 bg-white">
                                <div className="text-blue rounded-8 bg-lightblue-15 text-40 text-700 p-2 p-md-3 p-xxl-4">
                                    <div className="px-1 px-md-2 px-xxl-3">{'2#'}</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-blue text-700 text-25 text-md-30 text-xxl-35">{"Carte de Séjour"}</div>

                                <div className="text-black text-300 text-16 text-md-20 text-xxl-25">{"Composition du dossier"}</div>
                            </div>
                        </div>

                        <div className="row mb-2 mb-md-3 mb-xxl-4 pb-1 pb-md-2 pb-xxl-3">
                            <div className="col-md-8 col-xxl-9 pt-3 pt-md-4 pt-xxl-5 text-secondary">
                                D’après l’article 32 du décret N°2016/373 du 04 août 2016 modifiant et complétant certaines dispositions du
                                décret N°2007/255 du 04 septembre 2007 fixant les modalités d’application de la loi N°97/012 du 10  janvier 1997
                                relative aux conditions d’entrée , de séjour et de sortie des étrangers, la carte de séjour est un document
                                d’identification délivré à l’étranger admis régulièrement en séjour au Cameroun. Sa validité est de <span className="text-700 text-blue">deux ans</span>.
                            </div>

                            <div className="col-md-4 col-xxl-3">
                                <img className="img-fluid" src={ImgCS} alt="Exemple de Carte de Séjour" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="container-xxl d-flex align-items-center border-bottom">
                            <div className="p-2 p-md-3 p-xxl-4 bg-blue rounded-top-4 text-white text-23 text-md-28 text-xxl-33">
                                <div className="px-1 px-md-2 px-xxl-3 px-2 px-md-3 px-xxl-4">
                                    <i className="fad fa-passport" />
                                </div>
                            </div>

                            <div className="text-20 text-md-25 text-xxl-30 text-blue text-700 pl-1 pl-md-2 pl-xxl-3">
                                Composition du dossier
                            </div>
                        </div>

                        <div className="bg-blue pl-3 pl-md-4 pl-xxl-5">
                            <div className="d-flex align-items-stretch justify-content-center container-xxl">
                                <div className="pl-3 pl-md-4 pl-xxl-5 ml-2 ml-md-3 ml-xxl-4 py-2 py-md-3 py-xxl-4 d-flex align-items-center text-16 text-md-20 text-xxl-25 text-white">
                                    Sa délivrance est subordonnée à la production par l’étranger des pièces suivantes:
                                </div>
                            </div>
                        </div>

                        <div className="p-3 p-md-4 p-xxl-5 bg-soft">
                            <div className="container-xxl">
                                <div className="p-3 p-md-4 p-xxl-5 mx-2 mx-md-3 mx-xxl-4 my-md-1 my-xxl-2">
                                    <div className="mb-1 mb-md-2 mb-xxl-3 pb-3 pb-md-4 pb-xxl-5">
                                        <Li>Une photocopie certifiée conforme datant de moins de trois (03) mois du passeport en cours de validité, revêtu du visa long séjour ;</Li>
                                        <Li>un certificat de domicile, délivré par l’autorité administrative ou le Commissaire de Police territorialement compétent, revêtu du visa préalable et obligatoire du Chef de quartier ou de village ;</Li>
                                        <Li>un extrait de Casier Judiciaire Spécial ;</Li>
                                        <Li>un certificat d’imposition ou d’un reçu d’acquittement de l’impôt libératoire, ou encore d’une photocopie conforme du titre de patente valable pour l’exercice budgétaire en cours ;</Li>
                                        <Li>une pièce justificative de la profession, s’il y a lieu ;</Li>
                                        <Li>le paiement du droit de timbre fixé par la loi des finances ;</Li>
                                        <Li>les justificatifs du séjour.</Li>
                                    </div>

                                    <div className="text-15 text-md-17 text-xxl-20">
                                        <div className="text-secondary text-22 text-md-26 text-xxl-30 mb-2 mb-md-3 mb-xxl-4">Frais :</div>

                                        <div className="row">
                                            {csFeesContent}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            },
            {
                id: '3',
                name: "Carte de Résident",
                content: <div className="my-3 my-md-4 my-xxl-5 py-3 py-md-4 py-xxl-5">
                    <div className="container-xxl">
                        <div className="d-flex align-items-center">
                            <div className="pr-2 pr-md-3 bg-white">
                                <div className="text-blue rounded-8 bg-lightblue-15 text-40 text-700 p-2 p-md-3 p-xxl-4">
                                    <div className="px-1 px-md-2 px-xxl-3">{'3#'}</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-blue text-700 text-25 text-md-30 text-xxl-35">{"Carte de Résident"}</div>

                                <div className="text-black text-300 text-16 text-md-20 text-xxl-25">{"Composition du dossier"}</div>
                            </div>
                        </div>

                        <div className="row mb-2 mb-md-3 mb-xxl-4 pb-1 pb-md-2 pb-xxl-3">
                            <div className="col-md-8 col-xxl-9 pt-3 pt-md-4 pt-xxl-5 text-secondary">
                                D’après les dispositions N°2016/373 du 04 août 2016 modifiant et complétant certaines dispositions du décret
                                N°2007/255 du 04 septembre 2007 fixant les modalités d’application de la loi N°97/012 du 10  janvier 1997
                                relative aux conditions d’entrée , de séjour et de sortie des étrangers, la carte de résident est un document
                                d’identification délivrée à l’étranger admis comme résident au Cameroun. Sa validité est de 10 ans.
                            </div>

                            <div className="col-md-4 col-xxl-3">
                                <img className="img-fluid" src={ImgCRes} alt="Exemple de Carte de Résident" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="container-xxl d-flex align-items-center border-bottom">
                            <div className="p-2 p-md-3 p-xxl-4 bg-blue rounded-top-4 text-white text-23 text-md-28 text-xxl-33">
                                <div className="px-1 px-md-2 px-xxl-3 px-2 px-md-3 px-xxl-4">
                                    <i className="fad fa-passport" />
                                </div>
                            </div>

                            <div className="text-20 text-md-25 text-xxl-30 text-blue text-700 pl-1 pl-md-2 pl-xxl-3">
                                Composition du dossier
                            </div>
                        </div>

                        <div className="bg-blue pl-3 pl-md-4 pl-xxl-5">
                            <div className="d-flex align-items-stretch justify-content-between container-xxl">
                                <div className="pl-3 pl-md-4 pl-xxl-5 ml-2 ml-md-3 ml-xxl-4 py-2 py-md-3 py-xxl-4 d-flex align-items-center text-16 text-md-20 text-xxl-25 text-white">
                                    Pour l’étranger en séjour ou admis comme Résident :
                                </div>

                                <div>
                                    <Input type="select" name="option" style={{ maxWidth: 450 }} className="h-100 border-0 bg-darkblue text-secondary text-16 text-md-20 text-xxl-25 px-3 px-md-4 px-xxl-5">
                                        <option>Sélectionez une option</option>
                                        <option>Pour les membres des congrégations religieuses non soumis à l’imposition</option>
                                        <option>Pour le conjoint d’une personne de nationalité camerounaise</option>
                                    </Input>
                                </div>
                            </div>
                        </div>

                        <div className="p-3 p-md-4 p-xxl-5 bg-soft">
                            <div className="container-xxl">
                                <div className="p-3 p-md-4 p-xxl-5 mx-2 mx-md-3 mx-xxl-4 my-md-1 my-xxl-2">
                                    <div className="mb-1 mb-md-2 mb-xxl-3 pb-3 pb-md-4 pb-xxl-5">
                                        <Li>D’une carte de séjour renouvelée pour la troisième fois ou d’une carte de résident, au moins un (01) mois avant l’échéance de sa validité ;</Li>
                                        <Li>d’un certificat de domicile, délivré par l’autorité administrative ou le Commissaire de Police territorialement compétent, revêtu du visa préalable et obligatoire du Chef de quartier ou de village ;</Li>
                                        <Li>d’un extrait de Casier Judiciaire Spécial  ;</Li>
                                        <Li>d’une photocopie certifiée conforme du passeport en cours de validité datant de moins de (03) mois, vêtu du visa long séjour ;</Li>
                                        <Li>du paiement du droit de timbre fixé par la loi des finances ;</Li>
                                        <Li>d’un certificat d’imposition ou d’un reçu d’acquittement de l’impôt libératoire, ou encore, d’une photocopie conforme du titre de patente valable pour l’exercice budgétaire en cours.</Li>
                                    </div>

                                    <div className="text-15 text-md-17 text-xxl-20">
                                        <div className="text-secondary text-22 text-md-26 text-xxl-30 mb-2 mb-md-3 mb-xxl-4">Frais :</div>

                                        <div className="row">
                                            {cresFeesContent}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            },
            {
                id: '4',
                name: "Carte de Refugié",
                content: <div className="my-3 my-md-4 my-xxl-5 py-3 py-md-4 py-xxl-5">
                    <div className="container-xxl">
                        <div className="d-flex align-items-center">
                            <div className="pr-2 pr-md-3 bg-white">
                                <div className="text-blue rounded-8 bg-lightblue-15 text-40 text-700 p-2 p-md-3 p-xxl-4">
                                    <div className="px-1 px-md-2 px-xxl-3">{'4#'}</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-blue text-700 text-25 text-md-30 text-xxl-35">{"Carte de Refugié"}</div>

                                <div className="text-black text-300 text-16 text-md-20 text-xxl-25">{"Composition du dossier"}</div>
                            </div>
                        </div>

                        <div className="row mb-2 mb-md-3 mb-xxl-4 pb-1 pb-md-2 pb-xxl-3">
                            <div className="col-md-8 col-xxl-9 pt-3 pt-md-4 pt-xxl-5 text-secondary">
                                D’après l’article 32 du décret N°2016/373 du 04 août 2016 modifiant et complétant certaines dispositions du
                                décret N°2007/255 du 04 septembre 2007 fixant les modalités d’application de la loi N°97/012 du 10  janvier 1997
                                relative aux conditions d’entrée , de séjour et de sortie des étrangers, la carte de séjour est un document
                                d’identification délivré à l’étranger admis régulièrement en séjour au Cameroun. Sa validité est de <span className="text-700 text-blue">deux ans</span>.
                            </div>

                            <div className="col-md-4 col-xxl-3">
                                <img className="img-fluid" src={ImgCS} alt="Exemple de Carte de Séjour" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="container-xxl d-flex align-items-center border-bottom">
                            <div className="p-2 p-md-3 p-xxl-4 bg-blue rounded-top-4 text-white text-23 text-md-28 text-xxl-33">
                                <div className="px-1 px-md-2 px-xxl-3 px-2 px-md-3 px-xxl-4">
                                    <i className="fad fa-passport" />
                                </div>
                            </div>

                            <div className="text-20 text-md-25 text-xxl-30 text-blue text-700 pl-1 pl-md-2 pl-xxl-3">
                                Composition du dossier
                            </div>
                        </div>

                        <div className="bg-blue pl-3 pl-md-4 pl-xxl-5">
                            <div className="d-flex align-items-stretch justify-content-center container-xxl">
                                <div className="pl-3 pl-md-4 pl-xxl-5 ml-2 ml-md-3 ml-xxl-4 py-2 py-md-3 py-xxl-4 d-flex align-items-center text-16 text-md-20 text-xxl-25 text-white">
                                    La délivrance de la carte de réfugié est subordonnée à la production par l’étranger, des pièces suivantes :
                                </div>
                            </div>
                        </div>

                        <div className="p-3 p-md-4 p-xxl-5 bg-soft">
                            <div className="container-xxl">
                                <div className="p-3 p-md-4 p-xxl-5 mx-2 mx-md-3 mx-xxl-4 my-md-1 my-xxl-2">
                                    <div className="mb-1 mb-md-2 mb-xxl-3 pb-3 pb-md-4 pb-xxl-5">
                                        <Li>La carte d’identification, délivrée par le Haut-Commissariat des Nations Unies pour les réfugiés ;</Li>
                                        <Li>une attestation de réfugiés délivrée par le Ministre des Relations Extérieures.</Li>
                                        <Li>Le renouvellement de la carte de réfugié est subordonné à la production, par l’étranger, des pièces suivantes :</Li>

                                        <div className="ml-2 ml-md-3 ml-xxl-4">
                                            <Li>l’ancienne attestation de réfugié, un (01) mois au moins avant l’échéance de sa validité ;</Li>
                                            <Li>l’ancienne carte de réfugié, un (01) mois au moins avant l’échéance de sa validité.</Li>
                                        </div>
                                    </div>

                                    <div className="text-15 text-md-17 text-xxl-20">
                                        <div className="text-secondary text-22 text-md-26 text-xxl-30 mb-2 mb-md-3 mb-xxl-4">Frais :</div>

                                        <div className="text-16 text-md-17 text-xxl-18 text-blue py-3 py-md-4 py-xxl-5 px-2 px-md-3 px-xxl-4 bg-blue-10 rounded-15 d-inline-block">
                                            La délivrance et le renouvellement de la Carte de Réfugié sont exonérés
                                            de droits de timbre.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            },
        ];



        const navItemsContent = navItems.map(navItem => <NavItem key={navItem.id}>
            <NavLink className={"py-2 py-md-3 py-xxl-4 px-3 px-md-4 px-xxl-5 " + (activeTab === navItem.id ? "active" : "")} onClick={() => { this.toggle(navItem.id); }}>
                <span className="text-truncate text-500 text-14 text-md-17 text-xxl-20">{navItem.name}</span>
            </NavLink>
        </NavItem>);
        const tabPanesContent = navItems.map(navItem => <TabPane tabId={navItem.id} key={navItem.id + Math.random()}>{navItem.content}</TabPane>);



        return <div className="Titles">
            <Title>Titres identitaires</Title>



            <Block color="transparent" title="Solliciter un titre identitaire" subtitle="Veuillez choisir un titre identitaire afin de poursuivre" fluid>
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

export default withRouter(Titles);