import React from 'react';
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

import { convertDate, convertTime } from '../../../../shared/utility';

import ImgPost from '../../../../assets/images/un-policier-promu@2x.png';
import ImgPicture from '../../../../assets/images/Soustraction 9@2x.png';
import ImgSelection1 from '../../../../assets/images/Soustraction 8@2x.png';
import ImgSelection2 from '../../../../assets/images/Soustraction 9@2x.png';
import ImgSelection3 from '../../../../assets/images/Soustraction 11@2x.png';
import ImgSelection4 from '../../../../assets/images/un-policier-promu@2x.png';

const Category = ({ name, number }) => <div className="d-flex justify-content-between align-items-center text-500 text-secondary mb-2">
    <div className="text-12 text-md-16 text-xxl-20">{name}</div>

    <div>
        <div className="rounded-4 bg-lightblue text-blue text-10 text-md-13 text-xxl-16 d-flex justify-content-center align-items-center bg-img" style={{ height: 27, width: 50 }}>{number > 9 ? number : '0' + number}</div>
    </div>
</div>;

const Post = ({ title, body, created_at, photo }) => <div className={"text-dark bg-white"}>
    <div className={"p-3 rounded-15 bg-lightblue-20"}>
        <div className="pt-4 pb-4 pr-4 text-blue text-700 text-16 text-md-20 text-xxl-25">Vidéos Récentes</div>

        <div className={"embed-responsive embed-responsive-4by3 position-relative rounded-15 overflow-hidden mb-4"} style={{ backgroundImage: 'url("' + photo + '")' }}>
            <div className="position-absolute w-100 h-100 bg-black-70 d-flex justify-content-center align-items-center" style={{ top: 0, left: 0 }}>
                <div>
                    <i className="fad fa-play-circle text-white text-42 text-md-52 text-xxl-62" />
                </div>
            </div>
        </div>

        <div className="my-3 text-uppercase text-truncate text-500 w-100 pb-2 border-bottom border-border text-darkblue">
            <i className="fad fa-film text-red text-14 text-md-15 text-xxl-16 mr-2" />

            <span className="text-14 text-md-17 text-xxl-20">{title}</span>
        </div>

        <div className="text-300 text-secondary mb-3">
            <div className="text-12 text-md-13 text-xxl-14">{body}</div>
        </div>

        <div className={"d-flex mb-4 justify-content-start"}>
            <div className="d-inline-flex align-items-center mr-3 rounded bg-green-20 text-green p-1">
                <div className="pr-1 border-right border-green-50 mr-1 text-14"><i className="fad fa-calendar px-1" /></div>

                <div className="px-1 text-9">{convertDate(created_at)}</div>
            </div>

            <div className="d-inline-flex align-items-center rounded bg-orange-20 text-orange p-1">
                <div className="pr-1 border-right border-orange-50 mr-1 text-14"><i className="fad fa-clock px-1" /></div>

                <div className="px-1 text-9">{convertTime(created_at)}</div>
            </div>
        </div>
    </div>
</div>;

const Picture = ({ title, body, photo }) => <div className="text-dark bg-white">
    <div className="p-3 rounded-15 bg-lightblue-20">
        <div className="pt-4 pb-4 pr-4 text-blue text-700 text-16 text-md-20 text-xxl-25">Notre Galérie</div>

        <div className={"embed-responsive embed-responsive-4by3 position-relative rounded-15 overflow-hidden mb-4 bg-img"} style={{ backgroundImage: 'url("' + photo + '")' }} />

        <div className="my-3 text-center text-truncate text-500 w-100 pb-2 border-bottom border-border text-darkblue">
            <span className="text-14 text-md-17 text-xxl-20">{title}</span>
        </div>

        <div className="text-300 text-center text-secondary mb-3">
            <div className="text-12 text-md-13 text-xxl-14">{body}</div>
        </div>
    </div>
</div>;

const Selection = ({ items }) => {
    const itemsContent = items.map(item => <div key={JSON.stringify(item)} className="d-flex mb-3">
        <div className="pr-3">
            <div className="embed-responsive embed-responsive-4by3 position-relative rounded-8 overflow-hidden" style={{ width: 109 }}>
                <div className="position-absolute w-100 h-100 bg-img" style={{ top: 0, left: 0, backgroundImage: 'url("' + item.photo + '")' }} />
            </div>
        </div>

        <div className="text-10 text-md-12 text-xxl-14 text-300 text-secondary text-ellipsis-4">{item.body}</div>
    </div>);

    return <div className="rounded-15 bg-white overflow-hidden">
        <div className="py-4 px-4 text-blue text-700 text-16 text-md-20 text-xxl-25 bg-lightblue-20">Sélection</div>

        <div className="bg-blue pt-4"></div>

        <div className="p-4 bg-lightblue-20">{itemsContent}</div>
    </div>
};

export default ({ }) => {
    const categories = [
        {
            name: 'Police Judiciaire',
            number: 3,
        },
        {
            name: 'Groupement',
            number: 3,
        },
        {
            name: 'Communiqué Presse',
            number: 2,
        },
        {
            name: 'Opérations DGSN',
            number: 11,
        },
        {
            name: 'Actu DGSN',
            number: 7,
        },
        {
            name: 'Actions de la DGSN',
            number: 4,
        },
        {
            name: 'Technologie',
            number: 2,
        },
    ];
    const items = [
        {
            photo: ImgSelection1,
            body: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. perspiciatis… unde omnis iste `
        },
        {
            photo: ImgSelection2,
            body: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. perspiciatis… unde omnis iste `
        },
        {
            photo: ImgSelection3,
            body: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. perspiciatis… unde omnis iste `
        },
        {
            photo: ImgSelection4,
            body: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. perspiciatis… unde omnis iste `
        },
    ];

    const categoriesContent = categories.map(category => <Category key={Math.random() + JSON.stringify(category)} {...category} />);

    return <>
        <div className="mb-3">
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <i className="fad fa-search text-16 text-md-21 text-xxl-26" />
                    </InputGroupText>
                </InputGroupAddon>

                <Input type="search" name="search" className="text-12 text-md-15 text-xxl-18" placeholder="Rechercher..." />
            </InputGroup>
        </div>

        <div className="mb-4 bg-white">
            <div className="rounded-15 bg-lightblue-20 p-3 p-md-4">
                <div className="py-3 py-md-4 mb-3 mb-md-4 text-16 text-md-20 text-xxl-25 text-700 text-blue">Catégories</div>

                <div className="mb-3 mb-md-4">
                    {categoriesContent}
                </div>
            </div>
        </div>

        <div className="mb-4">
            <Post
                created_at={new Date()}
                photo={ImgPost}
                title="Cérémonie de remise de grades"
                body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. perspiciatis unde omnis iste" />
        </div>

        <div className="mb-4">
            <Picture
                photo={ImgPicture}
                title="Cérémonie de remise de grades"
                body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. perspiciatis unde omnis iste" />
        </div>

        <div className="mb-4">
            <Selection items={items} />
        </div>
    </>;
}