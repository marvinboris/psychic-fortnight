import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import OwlCarousel from 'react-owl-carousel2';

import Block from '../../../components/UI/Police/Block';
import Info from '../../../components/UI/Police/Info';

import './Exams.css';

class Exams extends Component {
    render() {
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

        const infosContent = infos.map(info => <Info key={JSON.stringify(info)} {...info} />);

        return <div className="Exams">
            <div className="bg-blue py-5" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5))' }}>
                <div className="container py-5 my-4 text-40 text-700 text-white text-center">
                    Concours

                    <div className="d-flex justify-content-center align-items-center">
                        <div><div className="bg-white" style={{ height: .5, width: 40 }} /></div>

                        <div className="px-2"><div className="rounded-circle bg-white" style={{ height: 8, width: 8 }} /></div>

                        <div><div className="bg-white" style={{ height: .5, width: 40 }} /></div>
                    </div>
                </div>
            </div>





            <Block title="Pour plus d'informations" subtitle="En cas de besoin, veuillez contacter les différents services aux numéros ci-dessous">
                <div className="my-5 row">
                    {infosContent}
                </div>
            </Block>
        </div>;
    }
}

export default withRouter(Exams);