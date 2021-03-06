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
            <Title>Gen??se</Title>



            <Block left title="La Gen??se de la DGSN">
                <div className="row">
                    <div className="col-xl-8 text-secondary">
                        <p>
                            Apr??s un Arr??t?? du Haut Commissaire du Cameroun, les premiers Services de Police de notre pays ont vu le jour en 1925, avec la cr??ation du Commissariat de Douala. Par la suite, le Haut-Commissariat de la R??publique Fran??aise a sign?? le 1er Juin 1946, un Arr??t?? ?? portant r??organisation de la S??ret?? Nationale dans les territoires du Cameroun ??. Le 31 Ao??t de la m??me ann??e, un autre Arr??t?? ?? portant transformation du Corps de la Police indig??ne???, en Corps de Gardiens de la Paix et de la S??curit?? Publique ?? est sign??. Ce dernier texte constitue l???acte de naissance de notre Police en uniforme. C???est en 1947 que survient la cr??ation de la Direction de la S??ret??, coupl??e avec l???organisation d???un service sp??cialis??.
                            Il convient de pr??ciser qu???avant 1959, la Police Camerounaise ??tait divis??e en deux principales entit??s, celle du Cameroun Occidental d??nomm??e ?? West Cameroon Police Force ??, avec pour quartier g??n??ral Buea et celle du Cameroun Oriental bas??e ?? Yaound??. La ?? West Cameroon Police Force ?? ??tait calqu??e sur le mod??le Britannique.
                        </p>

                        <p>
                            C???est avec la nomination de Jean Marie EVINA EDJO???O comme Directeur de la S??curit?? que les deux Polices vont fusionner, ceci bien avant le R??f??rendum du 11 F??vrier 1961. C???est ainsi que de 1959 ?? 1969, on conna??tra une p??riode transitoire au cours de laquelle les polices des deux Etats f??d??r??s ??taient dirig??es par le Premier Ministre ou le Ministre de l???Int??rieur.
                        </p>

                        <p>
                            Le 03 Mai 1969, un D??cret Pr??sidentiel portant cr??ation de la D??l??gation G??n??rale ?? la S??ret?? Nationale r??organisera les forces de Police avec comme premier Chef de Corps Paul PONDI. Toutefois, il faut relever qu???il existe ?? cette p??riode, une Police en tenue charg??e du Maintien de l???Ordre et, celle en civil ??uvrant en mati??re de Police Judiciaire et de Renseignements. Ces deux branches vont fusionner en 1979.
                        </p>

                        <p>
                            De 1984 ?? 1989 et de 1991 ?? 1996, la D??l??gation G??n??rale ?? la S??ret?? Nationale sera transform??e en Secr??tariat d???Etat ?? la S??curit?? Int??rieure dirig?? respectivement par Messieurs Denis EKANI et Jean FOCHIVE.
                        </p>

                        <p>
                            C???est le D??cret n??96/034 du 1er Mars 1996 portant ?? cr??ation de la D??l??gation G??n??rale ?? la S??ret?? Nationale ?? et sign?? du Pr??sident de la R??publique, Son  Excellence Paul BIYA, qui lui conf??re sa derni??re appellation.
                        </p>

                        <p>
                            Depuis le 30 ao??t 2010, elle a ?? sa t??te, Martin MBARGA NGUELE qui, il faut le mentionner, est ?? son deuxi??me passage comme D??l??gu?? G??n??ral ?? la S??ret?? Nationale apr??s celui du 22 ao??t 1983 au 04 ao??t 1984.
                        </p>

                        <p>
                            Malgr?? toutes ces multiples mutations dans la forme, le fond est toujours rest?? le m??me, les missions ??galement. Notamment, la protection des institutions et la s??curisation des personnes et de leurs biens.
                        </p>

                        <p>
                            De 1984 ?? 1989 et de 1991 ?? 1996, la D??l??gation G??n??rale ?? la S??ret?? Nationale sera transform??e en Secr??tariat d???Etat ?? la S??curit?? Int??rieure dirig?? respectivement par Messieurs Denis EKANI et Jean FOCHIVE. C???est le D??cret n??96/034 du 1er Mars 1996 portant ?? cr??ation de la D??l??gation G??n??rale ?? la S??ret?? Nationale ?? et sign?? du Pr??sident de la R??publique, Son  Excellence Paul BIYA, qui lui conf??re sa derni??re appellation. Depuis le 30 ao??t 2010, elle a ?? sa t??te, Martin MBARGA NGUELE qui, il faut le mentionner, est ?? son deuxi??me passage comme D??l??gu?? G??n??ral ?? la S??ret?? Nationale apr??s celui du 22 ao??t 1983 au 04 ao??t 1984. Malgr?? toutes ces multiples mutations dans la forme, le fond est toujours rest?? le m??me, les missions ??galement. Notamment, la protection des institutions et la s??curisation des personnes et de leurs biens.
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



            <Block color="transparent" title="Pour plus d'informations" subtitle="En cas de besoin, veuillez contacter les diff??rents services aux num??ros ci-dessous">
                <div className="my-5 row">
                    {infosContent}
                </div>
            </Block>
        </div>;
    }
}

export default Genesis;