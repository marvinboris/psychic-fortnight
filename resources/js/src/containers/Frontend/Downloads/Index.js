import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import OwlCarousel from 'react-owl-carousel2';

import Block from '../../../components/UI/Police/Block';
import Formula from '../../../components/UI/Police/Formula';
import Info from '../../../components/UI/Police/Info';

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
        const infos = [
            {
                name: 'Service de renseignement',
                icon: faPhone,
                info: '+237 123 456 890'
            },
            {
                name: 'Assistance',
                icon: faEnvelope,
                info: 'support@dgsn.cm'
            },
            {
                name: 'Autres Besoins',
                icon: faEnvelope,
                info: 'contact@dgsn.cm'
            },
        ];

        const formulaeContent = formulae.map(formula => <Formula key={JSON.stringify(formula)} {...formula} />);
        const othersContent = others.map(other => <Formula key={JSON.stringify(other)} {...other} />);
        const infosContent = infos.map(info => <Info key={JSON.stringify(info)} {...info} />);

        return <div className="Downloads">
            <div className="bg-blue py-5" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5))' }}>
                <div className="container py-5 my-4 text-40 text-700 text-white text-center">
                    Téléchargements

                    <div className="d-flex justify-content-center align-items-center">
                        <div><div className="bg-white" style={{ height: .5, width: 40 }} /></div>

                        <div className="px-2"><div className="rounded-circle bg-white" style={{ height: 8, width: 8 }} /></div>

                        <div><div className="bg-white" style={{ height: .5, width: 40 }} /></div>
                    </div>
                </div>
            </div>



            <Block title="Formulaires Administratifs" color="soft" subtitle="Trouvez ci-joint le formulaires nécessaires pour vous servir de guide">
                <div className="d-none d-lg-flex row justify-content-center">
                    {formulaeContent}
                </div>

                <div className="d-lg-none">
                    <OwlCarousel options={{ responsive: { 0: { items: 1 }, 800: { items: 2 }, 1000: { items: 3 }, 1800: { items: 4 } }, center: false, loop: true, dots: false }}>
                        {formulaeContent}
                    </OwlCarousel>
                </div>
            </Block>



            <Block title="Autres Documents" subtitle="Vous n’avez pas trouvé le document que vous recherchez ? Vérifiez ici">
                <div className="d-none d-lg-flex row justify-content-center">
                    {othersContent}
                </div>

                <div className="d-lg-none">
                    <OwlCarousel options={{ responsive: { 0: { items: 1 }, 800: { items: 2 }, 1000: { items: 3 }, 1800: { items: 4 } }, center: false, loop: true, dots: false }}>
                        {othersContent}
                    </OwlCarousel>
                </div>
            </Block>


            <Block title="Pour plus d'informations" subtitle="En cas de besoin, veuillez contacter les différents services aux numéros ci-dessous">
                <div className="my-5 row">
                    {infosContent}
                </div>
            </Block>
        </div>;
    }
}

export default withRouter(Downloads);