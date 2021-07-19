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
                    <div className="col-xl-8">
                        <p>
                            Monsieur <strong>Martin  MBARGA NGUELE</strong> est le <strong>Délégué Général à la Sûreté Nationale depuis le 31 Août  2010</strong>. Policier de carrière, il connaît parfaitement la fonction puisque c’est son deuxième passage à cette charge après celui de 1983-1984. Sa longue carrière dans la diplomatie, lui a procuré une expérience du vécu qui fait de lui un acteur averti et expérimenté.
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

                        <p>
                            Bref une Police résolument tournée vers sa population. Le moins que l’on puisse dire, c’est que sous l’ère Martin MBARGA NGUELE, les choses changent positivement et les populations témoignent leur satisfaction.
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



            <Block left color="soft" title="L’orientation stratégique et opérationnelle de la Police Camerounaise">
                <p>
                    Force régulière chargée concurremment avec d’autres Forces, d’assurer le respect et la protection des institutions, des libertés, des personnes et des biens ; du maintien de l’ordre public et de la paix sociale ; de la lutte contre la criminalité nationale, internationale et transnationale ; de la recherche du renseignement ; de la surveillance des frontières et de la sécurisation  de la nationalité camerounaise,
                </p>

                <p>
                    <strong>La Sûreté Nationale est à l’avant-garde de la lutte contre la criminalité transfrontalière. Sous la Très Haute impulsion du Chef de l’Etat, implémenté par Le Délégué Général à la Sûreté Nationale,  l’action policière connaît depuis 2012, une nouvelle orientation stratégique et opérationnelle pour permettre à ce Corps d’élite de se mouvoir d’une manière efficace.  </strong>
                </p>

                <p>
                    A cet égard, il convient de relever parmi ce train de mesures :
                </p>

                <p>
                    <strong className="text-blue">Au plan stratégique:</strong>
                </p>

                <div className="py-3 py-md-4 py-xxl-5 my-2 my-md-3 pl-3 pl-md-4 pl-xxl-5 ml-3 ml-md-4 ml-xxl-5">
                    <Condition>Le renforcement de la couverture sécuritaire nationale par la création de nouvelles unités de Police dans les localités frontalières du Cameroun. Ainsi, 25 nouveaux postes-frontières ont été créés dans les Régions de l’Adamaoua, de l’Est, de l’Extrême-Nord, du Nord et du Sud. De même, plusieurs postes-frontières ont été érigés en unités de sécurité publique ;</Condition>
                    <Condition>La mise en expérimentation d’un système de vidéo surveillance, pour mieux surveiller nos frontières (Garoua-Boulaï, Kousseri, Waza et Kye-Ossi) ; et veiller davantage sur les populations urbaines des villes de Yaoundé et Douala pour ne citer que celles-là ;</Condition>
                    <Condition>La mise en place des numéros gratuits d’utilité publique pour : favoriser les dénonciations aux tracasseries policières ; donner les informations capitales ; renseigner utile ; appeler à l’aide. Ces numéros sont le 117, le 120 et le 1500 qui est directement supervisé par le Délégué Général en personne ;</Condition>
                    <Condition>La création du Cours Supérieur de Sécurité Intérieure du Cameroun (CSSIC) en vue de renforcer les capacités des fonctionnaires de la Sûreté Nationale dans la maîtrise des défis sécuritaires contemporains ;</Condition>
                    <Condition>L’ajustement technique de la carte nationale d’identité en vue d’une meilleure sécurisation de la nationalité camerounaise ;</Condition>
                    <Condition>La politique de constitution des unités mixtes pour lutter contre certaines formes de criminalité internationale, avec la création par décret n° 2014/413 du 22 octobre 2014, des Cellules Aéroportuaires Anti-Trafics (CAAT) dans les aéroports internationaux du Cameroun ;</Condition>
                    <Condition>Le renforcement de la coopération bilatérale avec les Etats limitrophes par la signature des accords de coopération policière.</Condition>
                </div>

                <p>
                    <strong className="text-blue">Au plan opérationnel:</strong>
                </p>

                <div className="py-3 py-md-4 py-xxl-5 my-2 my-md-3 pl-3 pl-md-4 pl-xxl-5 ml-3 ml-md-4 ml-xxl-5">
                    <Condition>Le renforcement des capacités opérationnelles par la dotation récente des moyens d’intervention avec l’acquisition des véhicules adéquats à toutes les unités du territoire national ;</Condition>
                    <Condition>Le renforcement des capacités d’intervention du (GSO) Groupement Spécial d’Opérations par la dotation des « combinaisons Robocops de déminage » ;</Condition>
                    <Condition>La dotation du matériel à la technologie de pointe de dernière génération à la Division des Transmissions pour les réseaux de Communication et de Télécommunication ;</Condition>
                    <Condition>Le recrutement plus de 10.000 policiers. Un recrutement encadré par le mérite qui vise le rajeunissement et le renforcement considérable des effectifs de la Sûreté Nationale ;</Condition>
                    <Condition>L’informatisation de ce processus est une grande première dans les concours administratifs. Cette informatisation vise à garantir l’égalité de chance pour tous ;</Condition>
                    <Condition>L’extension des bases de données criminelles d’INTERPOL dans les postes-frontières afin de permettre le contrôle en temps réel par les agents de première ligne ;</Condition>
                    <Condition>L’adhésion du Cameroun au programme INTERPOL de gestion des frontières afin de renforcer, par une formation appropriée et des opérations de police, les capacités des services nationaux chargés de l’application de la loi dans la sécurisation des frontières nationales ;</Condition>
                    <Condition>L’acquisition des équipements sophistiqués de lutte contre le terrorisme et la criminalité ;</Condition>
                    <Condition>L’effectivité du fonctionnement du système intelligent de vidéosurveillance qui est un outil moderne de surveillance en zone urbaine et frontalière et de facilitation des investigations criminelles ;</Condition>
                    <Condition>Les hôtels de Police dont les travaux sont achevés pour certains et en cours pours d’autres, permettront d’améliorer considérablement le cadre et le confort de travail des fonctionnaires de Police ;</Condition>
                    <Condition>La réhabilitation de plusieurs unités de Police qui se poursuit sur toute l’étendue du territoire national ;</Condition>
                    <Condition>La mise à la disposition progressive des unités opérationnelles, des moyens roulants afin d’accroitre leur rendement.</Condition>
                </div>

                <p>
                    Voilà autant de mesures, développées aussi bien au plan national qu’international, qui consacrent l’adaptation stratégique et opérationnelle de la Police Camerounaise face à la criminalité transfrontalière.
                </p>
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