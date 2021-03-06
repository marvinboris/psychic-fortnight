import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router';
import OwlCarousel from 'react-owl-carousel2';

import Title from '../../../../components/UI/Police/Title';
import Block from '../../../../components/UI/Police/Block';
import Formula from '../../../../components/UI/Police/Formula';
import Info from '../../../../components/UI/Police/Info';

import './Downloads.css';

class Downloads extends Component {
    render() {
        const formulae = [
            {
                title: "Copie Carte Nationale D’Identité",
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: "Certificat De Perte",
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: "Certificat D’Individualité",
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: "Procuration",
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: "Fiche De Renseignement",
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: "Certificat De Toise",
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: "Certificat De Vente",
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: 'Autorisation Parentale',
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
        ];
        const others = [
            {
                title: "Certificat CMR.crl",
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: "Certificat CamCSCA",
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: 'Communiqué N0123',
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: 'Communiqué N4332',
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
        ];
        const docs = [
            {
                title: "Certificat CMR.crl",
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: "Certificat CamCSCA",
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: 'Communiqué N0123',
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
            },
            {
                title: 'Communiqué N4332',
                description: `Simplifiez-vous la tache en consultant 
                les formulaires administratifs dont Vous
                avez besoin. `,
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

        const formulaeContent = formulae.map(formula => <Formula key={JSON.stringify(formula)} {...formula} color="transparent" />);
        const othersContent = others.map(other => <Formula key={JSON.stringify(other)} {...other} />);
        const docsContent = docs.map(doc => <Formula key={JSON.stringify(doc)} {...doc} />);
        const infosContent = infos.map(info => <Info key={JSON.stringify(info)} {...info} />);

        return <div className="About Downloads">
            <Title>Téléchargements</Title>



            <Block title="Formulaires Administratifs" color="soft" subtitle="Trouvez ci-joint le formulaires nécessaires pour vous servir de guide">
                <div className="d-none d-lg-flex row justify-content-center">
                    {formulaeContent}
                </div>

                <div className="d-lg-none">
                    <div className="row">
                        <div className="col-12 p-0">
                            <OwlCarousel options={{
                                responsive: {
                                    0: { items: 1, autoplay: true, stagePadding: 48, margin: 20, center: true, nav: true },
                                    600: { items: 2, autoplay: true, stagePadding: 48, margin: 20, center: false },
                                    1000: { items: 3 },
                                    1800: { items: 4 }
                                },
                                center: false,
                                loop: true,
                                dots: false,
                                navText: ['<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-left text-blue"></i>', '<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-right text-blue"></i>']
                            }}>
                                {formulaeContent}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </Block>



            <Block color="transparent" title="Autres Documents" subtitle="Vous n’avez pas trouvé le document que vous recherchez ? Vérifiez ici">
                <div className="d-none d-lg-flex row justify-content-center">
                    {othersContent}
                </div>

                <div className="d-lg-none">
                    <div className="row">
                        <div className="col-12 p-0">
                            <OwlCarousel options={{
                                responsive: {
                                    0: { items: 1, autoplay: true, stagePadding: 48, margin: 20, center: true, nav: true },
                                    600: { items: 2, autoplay: true, stagePadding: 48, margin: 20, center: false },
                                    1000: { items: 3 },
                                    1800: { items: 4 }
                                },
                                center: false,
                                loop: true,
                                dots: false,
                                navText: ['<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-left text-blue"></i>', '<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-right text-blue"></i>']
                            }}>
                                {othersContent}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </Block>



            <Block color="transparent" title="Documentation" subtitle="Vérifiez autres documents ici">
                <div className="d-none d-lg-flex row justify-content-center">
                    {docsContent}
                </div>

                <div className="d-lg-none">
                    <div className="row">
                        <div className="col-12 p-0">
                            <OwlCarousel options={{
                                responsive: {
                                    0: { items: 1, autoplay: true, stagePadding: 48, margin: 20, center: true, nav: true },
                                    600: { items: 2, autoplay: true, stagePadding: 48, margin: 20, center: false },
                                    1000: { items: 3 },
                                    1800: { items: 4 }
                                },
                                center: false,
                                loop: true,
                                dots: false,
                                navText: ['<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-left text-blue"></i>', '<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-right text-blue"></i>']
                            }}>
                                {docsContent}
                            </OwlCarousel>
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

export default withRouter(Downloads);