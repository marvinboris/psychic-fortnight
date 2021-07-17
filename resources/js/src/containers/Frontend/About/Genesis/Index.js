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
                        <p>Quam quidem partem accusationis admiratus sum et moleste tuli potissimum esse Atratino datam. Neque enim decebat neque aetas illa personalityulabat neque, id quod animadvertere poteratis, pudor patiebatur optimi adulescentis in tali illum oratione versari. Vellem aliquis ex vobis robustioribus hunc male dicendi locum suscepisset; aliquanto liberius et fortius et magis more nostro refutaremus istam male dicendi licentiam. Tecum, Atratine, agam lenius, quod et pudor tuus moderatur orationi meae et meum erga te parentemque tuum beneficium tueri debeo.</p>

                        <p>Quare hoc quidem praeceptum, cuiuscumque est, ad tollendam amicitiam valet; illud potius praecipiendum fuit, ut eam diligentiam adhiberemus in amicitiis comparandis, ut ne quando amare inciperemus eum, quem aliquando odisse possemus. Quin etiam si minus felices in diligendo fuissemus, ferendum id Scipio potius quam inimicitiarum tempus cogitandum putabat.</p>

                        <p>Quare hoc quidem praeceptum, cuiuscumque est, ad tollendam amicitiam valet; illud potius praecipiendum fuit, ut eam diligentiam adhiberemus in amicitiis comparandis, ut ne quando amare inciperemus eum, quem aliquando odisse possemus. Quin etiam si minus felices in diligendo fuissemus, ferendum id Scipio potius quam inimicitiarum tempus cogitandum putabat.</p>

                        <p>Quam quidem partem accusationis admiratus sum et moleste tuli potissimum esse Atratino datam. Neque enim decebat neque aetas illa personalityulabat neque, id quod animadvertere poteratis, pudor patiebatur optimi adulescentis in tali illum oratione versari. Vellem aliquis ex vobis robustioribus hunc male dicendi locum suscepisset; aliquanto liberius et fortius et magis more nostro refutaremus istam male dicendi licentiam. Tecum, Atratine, agam lenius, quod et pudor tuus moderatur orationi meae et meum erga te parentemque tuum beneficium tueri debeo.</p>
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