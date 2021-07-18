import React from 'react';
import { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';

import Title from '../../../../components/UI/Police/Title';
import Block from '../../../../components/UI/Police/Block';
import Info from '../../../../components/UI/Police/Info';
import Personality from '../../../../components/UI/Police/Personality';

import Img from '../../../../assets/images/drc-police@2x.png';
import Personality1 from '../../../../assets/images/president@2x.png';
import Personality2 from '../../../../assets/images/Soustraction 9@2x.png';
import Personality3 from '../../../../assets/images/un-policier-promu@2x.png';
import Personality4 from '../../../../assets/images/drc-police@2x.png';

class Genesis extends Component {
    render() {
        const personalities = [
            {
                name: 'M. Martin MBARGA NGUELE',
                job: 'Commissaire Divisionnaire',
                started_at: new Date(),
                photo: Personality1,
            },
            {
                name: 'M. Martin MBARGA NGUELE',
                job: 'Commissaire Divisionnaire',
                started_at: new Date(),
                ended_at: new Date(),
                photo: Personality2,
            },
            {
                name: 'M. Paul Thomas PONDI',
                job: 'Commissaire Divisionnaire',
                started_at: new Date(),
                ended_at: new Date(),
                photo: Personality3,
            },
            {
                name: 'M. Paul Thomas PONDI',
                job: 'Commissaire Divisionnaire',
                started_at: new Date(),
                ended_at: new Date(),
                photo: Personality4,
            },
        ];
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

        const personalitiesContent = personalities.map(personality => <Personality key={Math.random() + JSON.stringify(personality)} {...personality} />);
        const infosContent = infos.map(info => <Info key={JSON.stringify(info)} {...info} />);

        return <div className="About Genesis">
            <Title>Genèse</Title>



            <Block left title="La Genèse de la DGSN">
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

                        <p>
                            De 1984 à 1989 et de 1991 à 1996, la Délégation Générale à la Sûreté Nationale sera transformée en Secrétariat d’Etat à la Sécurité Intérieure dirigé respectivement par Messieurs Denis EKANI et Jean FOCHIVE. C’est le Décret n°96/034 du 1er Mars 1996 portant « création de la Délégation Générale à la Sûreté Nationale » et signé du Président de la République, Son  Excellence Paul BIYA, qui lui confère sa dernière appellation. Depuis le 30 août 2010, elle a à sa tête, Martin MBARGA NGUELE qui, il faut le mentionner, est à son deuxième passage comme Délégué Général à la Sûreté Nationale après celui du 22 août 1983 au 04 août 1984. Malgré toutes ces multiples mutations dans la forme, le fond est toujours resté le même, les missions également. Notamment, la protection des institutions et la sécurisation des personnes et de leurs biens.
                        </p>
                    </div>

                    <div className="col-xl-4 d-flex justify-content-between flex-column h-100">
                        <div>
                            <div className="embed-responsive embed-responsive-1by1 position-relative overflow-hidden rounded-15">
                                <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, backgroundImage: 'url("' + Img + '")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </Block>



            <Block color="soft" title="DGSN Successifs" subtitle="Liste chronologique des DGSN">
                <div className="row">
                    <div className="col-12 px-0">
                        <OwlCarousel options={{
                            responsive: {
                                0: { items: 1, autoplay: true, stagePadding: 48, margin: 20, center: true },
                                600: { items: 2, autoplay: true, stagePadding: 48, margin: 20, center: false },
                                900: { items: 3 },
                                1300: { items: 4 },
                            },
                            center: false,
                            loop: true,
                            dots: false,
                            nav: true,
                            navText: ['<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-left text-blue"></i>', '<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-right text-blue"></i>']
                        }}>
                            {personalitiesContent}
                        </OwlCarousel>
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

export default Genesis;