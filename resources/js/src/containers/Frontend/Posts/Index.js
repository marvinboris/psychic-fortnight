import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import OwlCarousel from 'react-owl-carousel2';

import Menu from './Menu';

import Title from '../../../components/UI/Police/Title';
import Block from '../../../components/UI/Police/Block';
import Post from '../../../components/UI/Police/Post';

import { convertDate } from '../../../shared/utility';

import './Posts.css';

import Post1 from '../../../assets/images/Soustraction 8@2x.png';
import Post2 from '../../../assets/images/Soustraction 9@2x.png';
import Post3 from '../../../assets/images/Soustraction 11@2x.png';

class Posts extends Component {
    render() {
        const posts = [
            {
                title: 'The 3 Tricks that Quickly Became Rules',
                created_at: convertDate(new Date('2017-03-08')),
                body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. perspiciatis unde omnis iste ",
                photo: Post1,
            },
            {
                title: "Decorating When You're Starting Out or Starting Over",
                created_at: convertDate(new Date('2017-03-03')),
                body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. perspiciatis unde omnis iste ",
                photo: Post2,
            },
            {
                title: 'What does your favorite dining chair say about you?',
                created_at: convertDate(new Date('2017-03-01')),
                body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. perspiciatis unde omnis iste ",
                photo: Post3,
            },
            {
                title: 'The 3 Tricks that Quickly Became Rules',
                created_at: convertDate(new Date('2017-03-08')),
                body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. perspiciatis unde omnis iste ",
                photo: Post1,
            },
            {
                title: "Decorating When You're Starting Out or Starting Over",
                created_at: convertDate(new Date('2017-03-03')),
                body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. perspiciatis unde omnis iste ",
                photo: Post2,
            },
            {
                title: 'What does your favorite dining chair say about you?',
                created_at: convertDate(new Date('2017-03-01')),
                body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. perspiciatis unde omnis iste ",
                photo: Post3,
            },
            {
                title: 'The 3 Tricks that Quickly Became Rules',
                created_at: convertDate(new Date('2017-03-08')),
                body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. perspiciatis unde omnis iste ",
                photo: Post1,
            },
            {
                title: "Decorating When You're Starting Out or Starting Over",
                created_at: convertDate(new Date('2017-03-03')),
                body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. perspiciatis unde omnis iste ",
                photo: Post2,
            },
        ];

        const postsContent = posts.map(post => <div key={Math.random() + JSON.stringify(post)} className="col-lg-6 px-0"><Post soft {...post} /></div>);



        return <div className="Posts">
            <Title>Actualités</Title>



            <Block left title="Nos Actualités" subtitle="Consultez nos dernières actualités">
                <div className="row">
                    <div className="col-xl-9 col-lg-8 col-md-7">
                        <div className="d-none d-md-flex row">
                            {postsContent}
                        </div>

                        <div className="d-md-none">
                            <div className="row">
                                <div className="col-12 p-0">
                                    <OwlCarousel options={{
                                        responsive: {
                                            0: { items: 1, autoplay: true, stagePadding: 48, margin: 20, center: true },
                                            600: { items: 2, autoplay: true, stagePadding: 48, margin: 20, center: false },
                                            1100: { items: 3 }
                                        },
                                        center: false,
                                        loop: true,
                                        dots: false,
                                        nav: true,
                                        navText: ['<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-left text-blue"></i>', '<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-right text-blue"></i>']
                                    }}>
                                        {postsContent}
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-5">
                        <Menu />
                    </div>
                </div>
            </Block>
        </div>;
    }
}

export default withRouter(Posts);