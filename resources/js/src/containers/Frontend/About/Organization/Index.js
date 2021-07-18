import React from 'react';
import { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';

import Title from '../../../../components/UI/Police/Title';
import Block from '../../../../components/UI/Police/Block';
import Info from '../../../../components/UI/Police/Info';
import Member from '../../../../components/UI/Police/Member';

class Organization extends Component {
    twoDigits = number => number < 10 ? ("0" + number) : number

    render() {
        const cabinet = [
            {
                title: 'Le Secrétaire particulier',
                description: `Placé sous l’autorité du Chef de Secrétariat 
                Particulier ayant rang de chef de service de 
                l’Administration Centrale, le Secrétariat 
                Particulier est  chargé des affaires réservées 
                du Délégué Général à la Sûreté Nationale.`,
            },
            {
                title: 'La Cellule du Courrier et de la Traduction',
                description: `Placé sous l’autorité du Chef de Secrétariat 
                Particulier ayant rang de chef de service de 
                l’Administration Centrale, le Secrétariat 
                Particulier est  chargé des affaires réservées 
                du Délégué Général à la Sûreté Nationale.`,
            },
            {
                title: "L'Inspection Générale de la Sûreté Nationale",
                description: `Placé sous l’autorité du Chef de Secrétariat 
                Particulier ayant rang de chef de service de 
                l’Administration Centrale, le Secrétariat 
                Particulier est  chargé des affaires réservées 
                du Délégué Général à la Sûreté Nationale.`,
            },
            {
                title: "L'Inspection Générale de la Sûreté Nationale",
                description: `Placé sous l’autorité du Chef de Secrétariat 
                Particulier ayant rang de chef de service de 
                l’Administration Centrale, le Secrétariat 
                Particulier est  chargé des affaires réservées 
                du Délégué Général à la Sûreté Nationale.`,
            },
        ];
        const centralAdministration = [
            {
                title: 'Le Secrétaire particulier',
                description: `Placé sous l’autorité du Chef de Secrétariat 
                Particulier ayant rang de chef de service de 
                l’Administration Centrale, le Secrétariat 
                Particulier est  chargé des affaires réservées 
                du Délégué Général à la Sûreté Nationale.`,
            },
            {
                title: 'La Cellule du Courrier et de la Traduction',
                description: `Placé sous l’autorité du Chef de Secrétariat 
                Particulier ayant rang de chef de service de 
                l’Administration Centrale, le Secrétariat 
                Particulier est  chargé des affaires réservées 
                du Délégué Général à la Sûreté Nationale.`,
            },
            {
                title: "L'Inspection Générale de la Sûreté Nationale",
                description: `Placé sous l’autorité du Chef de Secrétariat 
                Particulier ayant rang de chef de service de 
                l’Administration Centrale, le Secrétariat 
                Particulier est  chargé des affaires réservées 
                du Délégué Général à la Sûreté Nationale.`,
            },
            {
                title: "L'Inspection Générale de la Sûreté Nationale",
                description: `Placé sous l’autorité du Chef de Secrétariat 
                Particulier ayant rang de chef de service de 
                l’Administration Centrale, le Secrétariat 
                Particulier est  chargé des affaires réservées 
                du Délégué Général à la Sûreté Nationale.`,
            },
        ];
        const decentralizedServices = [
            {
                title: 'Le Secrétaire particulier',
                description: `Placé sous l’autorité du Chef de Secrétariat 
                Particulier ayant rang de chef de service de 
                l’Administration Centrale, le Secrétariat 
                Particulier est  chargé des affaires réservées 
                du Délégué Général à la Sûreté Nationale.`,
            },
            {
                title: 'La Cellule du Courrier et de la Traduction',
                description: `Placé sous l’autorité du Chef de Secrétariat 
                Particulier ayant rang de chef de service de 
                l’Administration Centrale, le Secrétariat 
                Particulier est  chargé des affaires réservées 
                du Délégué Général à la Sûreté Nationale.`,
            },
            {
                title: "L'Inspection Générale de la Sûreté Nationale",
                description: `Placé sous l’autorité du Chef de Secrétariat 
                Particulier ayant rang de chef de service de 
                l’Administration Centrale, le Secrétariat 
                Particulier est  chargé des affaires réservées 
                du Délégué Général à la Sûreté Nationale.`,
            },
            {
                title: "L'Inspection Générale de la Sûreté Nationale",
                description: `Placé sous l’autorité du Chef de Secrétariat 
                Particulier ayant rang de chef de service de 
                l’Administration Centrale, le Secrétariat 
                Particulier est  chargé des affaires réservées 
                du Délégué Général à la Sûreté Nationale.`,
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

        const cabinetContent = cabinet.map((member, index) => <Member rank={this.twoDigits(index + 1)} key={Math.random() + JSON.stringify(member)} {...member} />);
        const centralAdministrationContent = centralAdministration.map((member, index) => <Member rank={this.twoDigits(index + 1)} key={Math.random() + JSON.stringify(member)} {...member} />);
        const decentralizedServicesContent = decentralizedServices.map((member, index) => <Member rank={this.twoDigits(index + 1)} key={Math.random() + JSON.stringify(member)} {...member} />);
        const infosContent = infos.map(info => <Info key={JSON.stringify(info)} {...info} />);

        return <div className="About Organization">
            <Title>Organisation de la DGSN</Title>



            <Block title="Cabinet de la DGSN" subtitle="Le Cabinet du Délégué Général à la Sûreté Nationale">
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
                            {cabinetContent}
                        </OwlCarousel>
                    </div>
                </div>
            </Block>



            <Block color="soft" title="L'Administration Centrale" subtitle="Le Cabinet du Délégué Général à la Sûreté Nationale">
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
                            {centralAdministrationContent}
                        </OwlCarousel>
                    </div>
                </div>
            </Block>



            <Block color="transparent" title="Les Services Déconcentrés" subtitle="Les Services Déconcentrés comprennent">
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
                            {decentralizedServicesContent}
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

export default Organization;