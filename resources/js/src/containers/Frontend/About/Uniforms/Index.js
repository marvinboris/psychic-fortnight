import React from 'react';
import { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';

import Title from '../../../../components/UI/Police/Title';
import Block from '../../../../components/UI/Police/Block';
import Uniform from '../../../../components/UI/Police/Uniform';

import ImgFormalWear1 from '../../../../assets/images/DSC_1046-w-scaled.png';
import ImgFormalWear2 from '../../../../assets/images/tenue-N°1-1-scaled.png';
import ImgFormalWear3 from '../../../../assets/images/DSC_2230w-scaled.png';
import ImgFormalWear4 from '../../../../assets/images/tenue-N°1-2-scaled.png';
import ImgFullWorkClothes1 from '../../../../assets/images/tenue-N°2.png';
import ImgFullWorkClothes2 from '../../../../assets/images/DSC_9942w-scaled.png';
import ImgFullWorkClothes3 from '../../../../assets/images/DSC_0246w-scaled.png';
import ImgFullWorkClothes4 from '../../../../assets/images/DSC_9942w-scaled.png';
import ImgLittleWorkClothes1 from '../../../../assets/images/tenue-N°3-scaled.png';
import ImgLittleWorkClothes2 from '../../../../assets/images/tenue-N°3-1-scaled.png';
import ImgLittleWorkClothes3 from '../../../../assets/images/DSC_0791-scaled.png';
import ImgLittleWorkClothes4 from '../../../../assets/images/DSC_0775z-scaled.png';
import ImgPreserveTheOrder1 from '../../../../assets/images/DSC_2931w.png';
import ImgPreserveTheOrder2 from '../../../../assets/images/tenue-N°4-2.png';
import ImgPreserveTheOrder3 from '../../../../assets/images/tenue-n°4-scaled.png';
import ImgPreserveTheOrder4 from '../../../../assets/images/tenue-N°4-1-scaled.png';

const LilBlock = ({ title, subtitle, content, color = "white" }) => <div className="text-center">
    <div className="container-xxl">
        <div className="bg-white">
            <div className="bg-lightblue-30 text-blue py-3 py-md-4 py-xxl-5 text-24 text-md-32 text-xxl-40 text-500">{title}</div>
        </div>
    </div>

    <div className={"py-3 py-md-4 py-xxl-5 row bg-" + color}>
        <div className="col-12">
            <div className="container-xxl my-2 my-md-3 my-xxl-4 py-1 py-md-2 py-xxl-3">
                <div className="mb-3 mb-md-4 mb-xxl-5 pb-3 pb-md-4 pb-xxl-5">{subtitle}</div>

                <div className="mt-2 mt-md-3 mt-xxl-4">
                    <OwlCarousel options={{
                        responsive: {
                            0: { items: 1, autoplay: true, stagePadding: 48, center: true, nav: true },
                            600: { items: 2, autoplay: true, stagePadding: 48, center: false },
                            1000: { items: 3 },
                            1500: { items: 4 },
                        },
                        center: false,
                        margin: 20,
                        loop: true,
                        dots: false,
                        navText: ['<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-left text-blue"></i>', '<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-right text-blue"></i>']
                    }}>
                        {content}
                    </OwlCarousel>
                </div>
            </div>
        </div>
    </div>
</div>;

class Uniforms extends Component {
    render() {
        const formalWear = [
            {
                title: "Gardien de la paix",
                photo: ImgFormalWear1,
            },
            {
                title: "Inspecteur de police",
                photo: ImgFormalWear2,
            },
            {
                title: "Officier de police",
                photo: ImgFormalWear3,
            },
            {
                title: "Commissaire de police principal",
                photo: ImgFormalWear4,
            },
        ];
        const fullWorkClothes = [
            {
                title: "Gardien de la paix",
                photo: ImgFullWorkClothes1,
            },
            {
                title: "Inspecteur de police",
                photo: ImgFullWorkClothes2,
            },
            {
                title: "Officier de police",
                photo: ImgFullWorkClothes3,
            },
            {
                title: "Commissaire de police principal",
                photo: ImgFullWorkClothes4,
            },
        ];
        const littleWorkClothes = [
            {
                title: "Gardien de la paix",
                photo: ImgLittleWorkClothes1,
            },
            {
                title: "Inspecteur de police",
                photo: ImgLittleWorkClothes2,
            },
            {
                title: "Officier de police",
                photo: ImgLittleWorkClothes3,
            },
            {
                title: "Commissaire de police principal",
                photo: ImgLittleWorkClothes4,
            },
        ];
        const preserveTheOrder = [
            {
                title: "Officier de police 2e grade",
                photo: ImgPreserveTheOrder1,
            },
            {
                title: "Commissaire de police principal",
                photo: ImgPreserveTheOrder2,
            },
            {
                title: "Gardien de la paix principal",
                photo: ImgPreserveTheOrder3,
            },
            {
                title: "Inspecteur de police 2e grade",
                photo: ImgPreserveTheOrder4,
            },
        ];

        const formalWearContent = formalWear.map(uniform => <Uniform key={Math.random() + JSON.stringify(uniform)} {...uniform} />);
        const fullWorkClothesContent = fullWorkClothes.map(uniform => <Uniform key={Math.random() + JSON.stringify(uniform)} {...uniform} />);
        const littleWorkClothesContent = littleWorkClothes.map(uniform => <Uniform key={Math.random() + JSON.stringify(uniform)} {...uniform} />);
        const preserveTheOrderContent = preserveTheOrder.map(uniform => <Uniform key={JSON.stringify(uniform)} {...uniform} />);

        return <div className="About Uniforms">
            <Title>Nos Uniformes</Title>



            <Block fluid title="Uniformes de la DGSN" subtitle="Au regard de l’annexe du Décret N°2012/548 fixant la tenue et le paquetage individuel des fonctionnaires du Corps de la Sûreté Nationale, ainsi que la durée d’utilisation et le descriptif des effets d’habillement et des objets d’équipement, on compte cinq types de tenue à la Sûreté Nationale.">
                <LilBlock
                    color="soft"
                    title="La tenue N°1, dite de CEREMONIE"
                    subtitle="Cette tenue est portée à l’occasion des cérémonies présidées par le Chef de l’Etat ; des prises d’armes marquant la sortie des élèves de l’Ecole Nationale Supérieure de Police et du Centre d’Instruction et d’Application de la Police, ainsi que des cérémonies nuptiales des personnels de la Sûreté Nationale."
                    content={formalWearContent}
                />

                <LilBlock
                    title="La tenue N°2, dite GRANDE TENUE DE TRAVAIL"
                    subtitle="Cette tenue est portée à l’occasion des cérémonies présidées par le Chef de l’Etat ; des prises d’armes marquant la sortie des élèves de l’Ecole Nationale Supérieure de Police et du Centre d’Instruction et d’Application de la Police, ainsi que des cérémonies nuptiales des personnels de la Sûreté Nationale."
                    content={fullWorkClothesContent}
                />

                <LilBlock
                    title="La tenue N°3, dite PETITE TENUE DE TRAVAIL"
                    subtitle="Cette tenue est portée à l’occasion des cérémonies présidées par le Chef de l’Etat ; des prises d’armes marquant la sortie des élèves de l’Ecole Nationale Supérieure de Police et du Centre d’Instruction et d’Application de la Police, ainsi que des cérémonies nuptiales des personnels de la Sûreté Nationale."
                    content={littleWorkClothesContent}
                />

                <LilBlock
                    title="La tenue N°4, dite de MAINTIEN DE L’ORDRE"
                    subtitle="Cette tenue est portée à l’occasion des cérémonies présidées par le Chef de l’Etat ; des prises d’armes marquant la sortie des élèves de l’Ecole Nationale Supérieure de Police et du Centre d’Instruction et d’Application de la Police, ainsi que des cérémonies nuptiales des personnels de la Sûreté Nationale."
                    content={preserveTheOrderContent}
                />
            </Block>
        </div>;
    }
}

export default Uniforms;