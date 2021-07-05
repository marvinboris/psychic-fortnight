import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import OwlCarousel from 'react-owl-carousel2';

import Block from '../../../components/UI/Police/Block';
import Formula from '../../../components/UI/Police/Formula';
import Post from '../../../components/UI/Police/Post';
import Info from '../../../components/UI/Police/Info';

import { convertDate } from '../../../shared/utility';

import './Media.css';

import Post1 from '../../../assets/images/president@2x.png';
import Post2 from '../../../assets/images/Soustraction 9@2x.png';
import Post3 from '../../../assets/images/un-policier-promu@2x.png';
import Post4 from '../../../assets/images/drc-police@2x.png';

class Media extends Component {
    render() {
        const posts = [
            {
                title: 'Nouveaux Passports',
                created_at: convertDate(new Date('2017-03-08')),
                body: "You've finally reached this point in your life- you've bought your first home, moved into your very own apartment, moved out of the dorm room or you're finally downsizing after all of your kids have left the nest.",
                photo: Post1,
            },
            {
                title: "Lutte contre le terrorisme",
                created_at: convertDate(new Date('2017-03-03')),
                body: "You've finally reached this point in your life- you've bought your first home, moved into your very own apartment, moved out of the dorm room or you're finally downsizing after all of your kids have left the nest.",
                photo: Post2,
            },
            {
                title: 'Nouveaux titres identitaires',
                created_at: convertDate(new Date('2017-03-01')),
                body: "You've finally reached this point in your life- you've bought your first home, moved into your very own apartment, moved out of the dorm room or you're finally downsizing after all of your kids have left the nest.",
                photo: Post3,
            },
            {
                title: 'Recrutement Police',
                created_at: convertDate(new Date('2017-03-01')),
                body: "You've finally reached this point in your life- you've bought your first home, moved into your very own apartment, moved out of the dorm room or you're finally downsizing after all of your kids have left the nest.",
                photo: Post4,
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

        const blogContent = posts.map(post => <Post simple key={JSON.stringify(post)} {...post} />);
        const othersContent = others.map(other => <Formula key={JSON.stringify(other)} {...other} />);
        const infosContent = infos.map(info => <Info key={JSON.stringify(info)} {...info} />);

        return <div className="Media">
            <div className="bg-blue py-5" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5))' }}>
                <div className="container py-5 my-4 text-40 text-700 text-white text-center">
                    Médias

                    <div className="d-flex justify-content-center align-items-center">
                        <div><div className="bg-white" style={{ height: .5, width: 40 }} /></div>

                        <div className="px-2"><div className="rounded-circle bg-white" style={{ height: 8, width: 8 }} /></div>

                        <div><div className="bg-white" style={{ height: .5, width: 40 }} /></div>
                    </div>
                </div>
            </div>



            <Block title="Publications" color="soft" subtitle="Restez informé. Profitez des dernières infos de la Police">
                <OwlCarousel options={{ responsive: { 0: { items: 1 }, 600: { items: 2 }, 900: { items: 3 } }, center: false, loop: true, dots: false }}>
                    {blogContent}
                </OwlCarousel>
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

export default withRouter(Media);