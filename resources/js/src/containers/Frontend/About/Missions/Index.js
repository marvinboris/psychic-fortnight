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
                            Après un Arrêté du Haut Commissaire du Cameroun, les premiers Services de Police de notre pays ont vu le jour en 1925, avec la création du Commissariat de Douala. Par la suite, le Haut-Commissariat de la République Française a signé le 1er Juin 1946, un Arrêté « portant réorganisation de la Sûreté Nationale dans les territoires du Cameroun ». Le 31 Août de la même année, un autre Arrêté « portant transformation du Corps de la Police indigène…, en Corps de Gardiens de la Paix et de la Sécurité Publique » est signé. Ce dernier texte constitue l’acte de naissance de notre Police en uniforme. C’est en 1947 que survient la création de la Direction de la Sûreté, couplée avec l’organisation d’un service spécialisé.
                            Il convient de préciser qu’avant 1959, la Police Camerounaise était divisée en deux principales entités, celle du Cameroun Occidental dénommée « West Cameroon Police Force », avec pour quartier général Buea et celle du Cameroun Oriental basée à Yaoundé. La « West Cameroon Police Force » était calquée sur le modèle Britannique.
                        </p>

                        <p>
                            C’est avec la nomination de Jean Marie EVINA EDJO’O comme Directeur de la Sécurité que les deux Polices vont fusionner, ceci bien avant le Référendum du 11 Février 1961. C’est ainsi que de 1959 à 1969, on connaîtra une période transitoire au cours de laquelle les polices des deux Etats fédérés étaient dirigées par le Premier Ministre ou le Ministre de l’Intérieur.
                        </p>

                        <p>
                            Le 03 Mai 1969, un Décret Présidentiel portant création de la Délégation Générale à la Sûreté Nationale réorganisera les forces de Police avec comme premier Chef de Corps Paul PONDI. Toutefois, il faut relever qu’il existe à cette période, une Police en tenue chargée du Maintien de l’Ordre et, celle en civil œuvrant en matière de Police Judiciaire et de Renseignements. Ces deux branches vont fusionner en 1979.
                        </p>

                        <p>
                            De 1984 à 1989 et de 1991 à 1996, la Délégation Générale à la Sûreté Nationale sera transformée en Secrétariat d’Etat à la Sécurité Intérieure dirigé respectivement par Messieurs Denis EKANI et Jean FOCHIVE.
                        </p>

                        <p>
                            C’est le Décret n°96/034 du 1er Mars 1996 portant « création de la Délégation Générale à la Sûreté Nationale » et signé du Président de la République, Son  Excellence Paul BIYA, qui lui confère sa dernière appellation.
                        </p>

                        <p>
                            Depuis le 30 août 2010, elle a à sa tête, Martin MBARGA NGUELE qui, il faut le mentionner, est à son deuxième passage comme Délégué Général à la Sûreté Nationale après celui du 22 août 1983 au 04 août 1984.
                        </p>

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

                        <p>
                            De 1984 à 1989 et de 1991 à 1996, la Délégation Générale à la Sûreté Nationale sera transformée en Secrétariat d’Etat à la Sécurité Intérieure dirigé respectivement par Messieurs Denis EKANI et Jean FOCHIVE. C’est le Décret n°96/034 du 1er Mars 1996 portant « création de la Délégation Générale à la Sûreté Nationale » et signé du Président de la République, Son  Excellence Paul BIYA, qui lui confère sa dernière appellation. Depuis le 30 août 2010, elle a à sa tête, Martin MBARGA NGUELE qui, il faut le mentionner, est à son deuxième passage comme Délégué Général à la Sûreté Nationale après celui du 22 août 1983 au 04 août 1984. Malgré toutes ces multiples mutations dans la forme, le fond est toujours resté le même, les missions également. Notamment, la protection des institutions et la sécurisation des personnes et de leurs biens.
                        </p>
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