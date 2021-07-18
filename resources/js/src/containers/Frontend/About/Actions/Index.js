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

class Actions extends Component {
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

        return <div className="About Actions">
            <Title>La DGSN et ses actions</Title>



            <Block left title="Le Délégué Général">
                <div className="row">
                    <div className="col-xl-8 text-10 text-md-13 text-xxl-16 text-secondary">
                        <p>
                            Monsieur Martin  MBARGA NGUELE est le Délégué Général à la Sûreté Nationale depuis le 31 Août  2010. Policier de carrière, il connaît parfaitement la fonction puisque c’est son deuxième passage à cette charge après celui de 1983-1984. Sa longue carrière dans la diplomatie, lui a procuré une expérience du vécu qui fait de lui un acteur averti et expérimenté.
                        </p>

                        <p>
                            Pour « Redonner ses lettres de noblesses à la Police, son discours a toujours été constant : la rigueur et l’abnégation dans le travail, le respect de la discipline, l’intégrité, l’obligation de réserve, le professionnalisme et le mérite avec insistance ces derniers temps.
                        </p>

                        <p>
                            Monsieur le Délégué Général à la Sûreté Nationale, Martin MBARGA NGUELE travaille et fait travailler ses collaborateurs. La méthode appropriée est le prêche par l’exemple. Une telle débauche d’énergie a suffi par convaincre les réfractaires et les brebis galeuses à se rallier à l’équipe qui gagne.
                        </p>

                        <p>
                            Ce qui a d’ailleurs permis au Chef de Corps de redéfinir les rôles après la distribution des cartes par le Chef de l’Etat, Son Excellence le Président Paul BIYA le 28 janvier 2014.
                        </p>

                        <p>
                            En cinq ans, il a donné un autre visage à la Police. Une Police réconciliée avec elle-même et, surtout avec les populations pour lesquelles elle est au service.  Les policiers actuels sont soucieux des droits de l’Homme et des libertés individuelles ; des contingences logistiques ; de l’environnement dans lequel ils évoluent  et surtout du respect scrupuleux des lois en vigueur.
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

                        <p>
                            De 1984 à 1989 et de 1991 à 1996, la Délégation Générale à la Sûreté Nationale sera transformée en Secrétariat d’Etat à la Sécurité Intérieure dirigé respectivement par Messieurs Denis EKANI et Jean FOCHIVE. C’est le Décret n°96/034 du 1er Mars 1996 portant « création de la Délégation Générale à la Sûreté Nationale » et signé du Président de la République, Son  Excellence Paul BIYA, qui lui confère sa dernière appellation. Depuis le 30 août 2010, elle a à sa tête, Martin MBARGA NGUELE qui, il faut le mentionner, est à son deuxième passage comme Délégué Général à la Sûreté Nationale après celui du 22 août 1983 au 04 août 1984. Malgré toutes ces multiples mutations dans la forme, le fond est toujours resté le même, les missions également. Notamment, la protection des institutions et la sécurisation des personnes et de leurs biens.
                        </p>
                    </div>

                    <div className="col-xl-4 d-flex justify-content-between flex-column h-100">
                        <div className="mb-3 mb-md-4 mb-xxl-5">
                            <div className="embed-responsive embed-responsive-4by3 position-relative overflow-hidden rounded-15">
                                <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, backgroundImage: 'url("' + Img + '")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} />
                            </div>
                        </div>

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

export default Actions;