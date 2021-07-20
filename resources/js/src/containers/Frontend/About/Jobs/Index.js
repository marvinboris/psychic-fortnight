import React from 'react';
import { Component } from 'react';

import Title from '../../../../components/UI/Police/Title';
import Block from '../../../../components/UI/Police/Block';
import Info from '../../../../components/UI/Police/Info';

import Img from '../../../../assets/images/drc-police@2x.png';

class Jobs extends Component {
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

        return <div className="About Jobs">
            <Title>Nos Métiers</Title>



            <Block left title="Police Camerounaise" subtitle="Un corps de métier accessible à tous">
                <div className="row">
                    <div className="col-xl-8 text-secondary">
                        <p>
                            Il n’est pas un secret de souligner que depuis quelques années déjà, la Police camerounaise qui est résolument tournée vers la modernité, essaie autant que faire ce peu, dans son organisation comme dans son fonctionnement, d’évoluer selon les normes et standards internationaux. La Délégation Générale à la Sûreté Nationale a, dans le cadre des  derniers recrutements, que ce soit au niveau de l’Ecole nationale Supérieure de Police de Yaoundé ou du Centre d’Instruction et d’Application de la police de Mutengene, ouvert les concours aux jeunes qualifiés dans divers domaines. C’est le cas des recrues ayant des bases dans les domaines aussi riches que variés tels que la médecine et les soins infirmiers ; l’ingénierie ; la Communication ; les télécommunications ; la mécanique ; l’électromécanique ; le génie civil ; l’hôtellerie et la restauration ; l’industrie d’habillement ; les métiers du bois ; les métiers du froid et climatisations ; la musique ; etc…
                        </p>

                        <p>
                            Il s’agit véritablement d’une Police de métiers dont les missions devraient couvrir tous les aspects socio-professionnels et ceux liés aux préoccupations étatiques. Le but recherché dans l’esprit du Chef de Corps de la Sûreté Nationale est de faire de notre Police, une structure avant-gardiste, toujours à la pointe des NTIC et prête à servir, à protéger les personnes et leurs biens dans le strict respect des libertés publiques et des droits de l’Homme. Mais également dans l’observation stricte des règles d’éthique et de déontologie.
                        </p>

                        <p>
                            Du point de vue pratique, il est question de faire de la Police, un Corps plus proche des populations pour lesquelles elle est au service avec loyalisme et dévouement. Il s’agit d’une Police plus citoyenne au service des Institutions Républicaines ainsi que des personnes qui les incarnent.
                        </p>
                    </div>

                    <div className="col-xl-4 d-flex justify-content-between flex-column h-100">
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

export default Jobs;