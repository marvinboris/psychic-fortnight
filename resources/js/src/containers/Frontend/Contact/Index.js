import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router';

import Title from '../../../components/UI/Police/Title';
import Block from '../../../components/UI/Police/Block';
import Region from '../../../components/UI/Police/Region';


import './Contact.css';

class Contact extends Component {
    render() {
        const regions = [
            {
                name: 'Centre',
                info: `Délégation Régionale de la Sûreté Nationale : <strong>222 23 26 53</strong><br />
                Division Régionale de la Police Judiciaire : <strong>222 23 04 22</strong><br />
                Groupement Mobile d’Intervention N°01 : <strong>222 21 24 04</strong><br />
                Aéroport International de Yaoundé Nsimalen : <strong>222 23 36 02</strong>`
            },
            {
                name: 'LITTORAL',
                info: `Délégation Régionale de la Sûreté Nationale : <strong>233 43 77 32</strong><br /> 
                Division Régionale de la Police Judiciaire : <strong>233 42 19 99 </strong><br />
                Groupement Mobile d’intervention N°02 : <strong>233 42 00 99 </strong><br />
                Aéroport International de Douala : <strong>233 42 37 58</strong>`
            },
            {
                name: 'ADAMAOUA',
                info: `Délégation Régionale de la Sûreté Nationale : <strong>222 25 14 83</strong><br /> 
                Division Régionale de la Police Judiciaire : <strong>222 25 23 59 </strong><br />
                Commissariat Central : <strong>222 25 12 49 </strong><br />
                Groupement Mobile d’interventions : <strong>222 25 10 87</strong>`
            },
            {
                name: 'EST',
                info: `Délégation Régionale de la Sûreté Nationale : <strong>222 24 15 36</strong><br /> 
                Division Régionale de la Police Judiciaire : <strong>222 24 16 37 </strong><br />
                Commissariat Central : <strong>222 24 11 60 </strong><br />
                Groupement Mobile d’interventions : <strong>222 24 12 90</strong>`
            },
            {
                name: 'EXTRÊME - NORD​',
                info: `Délégation Régionale de la Sûreté Nationale :  <strong>222 29 15 01 </strong><br />
                Division Régionale de la Police Judiciaire : <strong>222 29 32 82 </strong><br />
                Commissariat Central : <strong>222 29 25 99 </strong><br />
                Groupement Mobile d’interventions : <strong>222 29 12 02</strong>`
            },
            {
                name: 'NORD',
                info: `Délégation Régionale de la Sûreté Nationale : <strong>222 27 22 65</strong><br />
                Division Régionale de la Police Judiciaire : <strong>222 27 14 11</strong><br />
                Commissariat Central : <strong>222 27 14 11</strong><br />
                Groupement Mobile d’interventions : <strong>222 27 20 88</strong>`
            },
            {
                name: 'NORD - OUEST​',
                info: `Délégation Régionale de la Sûreté Nationale : <strong>233 36 11 86  </strong><br />
                Division Régionale de la Police Judiciaire : <strong>233 36 12 57 </strong><br />
                Commissariat Central : <strong>233 36 11 44 </strong><br />
                Groupement Mobile d’interventions : <strong>233 36 12 14</strong>`
            },
            {
                name: 'OUEST',
                info: `Délégation Régionale de la Sûreté Nationale : <strong>233 44 14 19 </strong><br />
                Division Régionale de la Police Judiciaire : <strong>233 44 12 24 </strong><br />
                Commissariat Central : <strong>233 44 14 09 </strong><br />
                Groupement Mobile d’interventions : <strong>233 44 14 97</strong>`
            },
            {
                name: 'SUD',
                info: `Délégation Régionale de la Sûreté Nationale : <strong>222 28 33 92</strong><br />
                Division Régionale de la Police Judiciaire : <strong>222 28 35 24</strong>`
            },
            {
                name: 'SUD - OUEST​',
                info: `Délégation Régionale de la Sûreté Nationale : <strong>222 24 15 36 </strong><br />
                Division Régionale de la Police Judiciaire : <strong>222 24 16 37 </strong><br />
                Commissariat Central : <strong>222 24 11 60 </strong><br />
                Groupement Mobile d’interventions : <strong>222 24 12 90</strong>`
            },
        ];

        const regionsContent = regions.map(region => <Region key={Math.random() + JSON.stringify(region)} {...region} />);


        return <div className="Contact">
            <Title>Contacts</Title>


            <Block title="Contact DGSN" subtitle="Direction Générale">
                <div className="rounded-15 bg-white overflow-hidden">
                    <div className="bg-lightblue-50 py-2 py-md-3 py-xxl-4 px-3 px-md-4 px-xxl-5">
                        <div className="text-nightblue text-700 text-16 text-md-20 text-xxl-25 text-uppercase">TEL:</div>

                        <div className="row text-secondary text-12 text-md-16 text-xxl-20">
                            <div className="col-md-6">
                                <div>Direction de la Police Judiciaire (DPJ) :  <strong>222 23 24 11</strong></div>
                                <div>Groupement Spécial d’opérations (GSO) : <strong>222 30 65 15</strong></div>
                                <div>Numéro d’utilité publique de la DGSN : <strong>1 500</strong></div>
                            </div>

                            <div className="col-md-6">
                                <div>Équipes Spéciales d’interventions Rapides (ESIR) : <strong>117</strong> ou <strong>17</strong></div>
                                <div>Compagnie de Sécurisation des Diplomates :  (CSD) : <strong>120</strong></div>
                            </div>
                        </div>
                    </div>

                    <div className="embed-responsive embed-responsive-21by9 d-none d-sm-block position-relative">
                        <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0 }}>
                            <iframe width="100%" height="100%" src="//maps.google.com/maps?width=700&amp;height=150&amp;hl=en&amp;q=Délégation+Générale+à+la+Sûreté+Nationale+(DGSN)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                        </div>
                    </div>

                    <div className="embed-responsive embed-responsive-4by3 d-sm-none position-relative">
                        <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0 }}>
                            <iframe width="100%" height="100%" src="//maps.google.com/maps?width=700&amp;height=150&amp;hl=en&amp;q=Délégation+Générale+à+la+Sûreté+Nationale+(DGSN)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                        </div>
                    </div>
                </div>
            </Block>



            <Block color="transparent" title="Nous Contacter par Région" subtitle="Autres représentations de la DGSN">
                <div className="row">
                    {regionsContent}
                </div>
            </Block>
        </div>;
    }
}

export default withRouter(Contact);