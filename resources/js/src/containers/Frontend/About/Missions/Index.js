import React from 'react';
import { Component } from 'react';

import Title from '../../../../components/UI/Police/Title';
import Block from '../../../../components/UI/Police/Block';
import Info from '../../../../components/UI/Police/Info';

import Img from '../../../../assets/images/drc-police@2x.png';

const Condition = ({ children }) => <div className="d-flex">
    <div><i className="fad fa-check-circle text-blue mr-3 text-15 text-md-20 text-xxl-25" /></div>

    <div>{children}</div>
</div>;

class Missions extends Component {
    render() {
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

        const infosContent = infos.map(info => <Info key={JSON.stringify(info)} {...info} />);

        return <div className="About Missions">
            <Title>Missions de la DGSN</Title>



            <Block left title="Missions de la DGSN">
                <div className="row">
                    <div className="col-xl-8 text-10 text-md-13 text-xxl-16 text-secondary">
                        <p>
                            Sous l’autorité du Président de la République, Chef Suprême des Forces de Police, la Sûreté Nationale se définit comme un Corps de Commandement et d’Administration. Elle est composée d’unités territoriales (Postes et Commissariats de Sécurité Publique, Commissariats Centraux) qui sont des forces de première catégorie et des unités spécialisées telles que le Commandement Central des Groupements Mobiles d’Intervention (CCGMI), le Groupement Spécial d’Opérations (GSO) et les Groupements Mobiles d’Intervention (GMI) qui constituent des forces de deuxième catégorie. Elle assure des missions spécifiques, déclinées dans <strong>l’article 3</strong> du Décret <strong>n°2012/540 du 19 Novembre 2012</strong> portant organisation de la Délégation Générale à la Sûreté Nationale de la manière suivante :
                        </p>

                        <div className="py-3 py-md-4 py-xxl-5 my-2 my-md-3 pl-3 pl-md-4 pl-xxl-5 ml-3 ml-md-4 ml-xxl-5">
                            <Condition>La Sûreté Nationale a pour mission fondamentale d’assurer le respect et la protection des institutions, des libertés publiques, des personnes et des biens ;</Condition>
                            <Condition>Elle assure le respect de l’exécution des lois et règlements ;</Condition>
                            <Condition>Elle concourt à l’exercice de la Police administrative et de la Police judiciaire ;</Condition>
                            <Condition>Elle concourt en outre à la Défense Nationale.</Condition>
                        </div>

                        <p>
                            <strong>L’article 4</strong> de ce même Décret dispose que la Sûreté Nationale est chargée :
                        </p>

                        <div className="py-3 py-md-4 py-xxl-5 my-2 my-md-3 pl-3 pl-md-4 pl-xxl-5 ml-3 ml-md-4 ml-xxl-5">
                            <Condition>De la sécurité intérieure et extérieure de l’Etat ;</Condition>
                            <Condition>De la recherche, de la constatation des infractions aux lois pénales et de la conduite de leurs auteurs devant les juridictions répressives ;</Condition>
                            <Condition>Du maintien de l’ordre et de la paix publics, de la protection, de la sécurité et de la salubrité publiques, plus particulièrement dans les agglomérations urbaines ;</Condition>
                            <Condition>De la lutte contre la criminalité nationale, internationale et transnationale ;</Condition>
                            <Condition>De la recherche du renseignement ;</Condition>
                            <Condition>Des missions d’information, de sécurité, de protection et d’intervention comportant des contacts avec les populations, dans le cadre de la Défense Nationale ;</Condition>
                            <Condition>De la sécurisation de la nationalité camerounaise.</Condition>
                        </div>
                    </div>

                    <div className="col-xl-4 d-flex justify-content-between flex-column">
                        <div className="mb-3 mb-md-4 mb-xxl-5">
                            <div className="embed-responsive embed-responsive-4by3 position-relative overflow-hidden rounded-15">
                                <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, backgroundImage: 'url("' + Img + '")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} />
                            </div>
                        </div>

                        <div>
                            <div className="embed-responsive embed-responsive-4by3 position-relative overflow-hidden rounded-15">
                                <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, backgroundImage: 'url("' + Img + '")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} />
                            </div>
                        </div>
                    </div>
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

export default Missions;