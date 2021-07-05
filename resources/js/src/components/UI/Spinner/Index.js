import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEgg, faHamburger, faIceCream, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { faPiedPiper } from '@fortawesome/free-brands-svg-icons';

import './Spinner.css';

import ImgLogo from '../../../assets/images/logo-big.png';

export default class Spinner extends Component {
    componentDidMount() {
        // $.getScript("https://kit.fontawesome.com/762c591422.js", function () {
        const ico_anime = $('.ico_item');
        let ico_anime_state = 0;

        function anime_icon() {
            if (ico_anime_state == 0) {
                let current_ico_anime = $(".ico_item_now");
                current_ico_anime.toggleClass("ico_item_now", "");
                ico_anime[0].className += " ico_item_now";
                ico_anime_state = 1;
            } else if (ico_anime_state == 1) {
                let current_ico_anime = $(".ico_item_now");
                current_ico_anime.toggleClass("ico_item_now", "");
                ico_anime[1].className += " ico_item_now";
                ico_anime_state = 2;
            } else if (ico_anime_state == 2) {
                let current_ico_anime = $(".ico_item_now");
                current_ico_anime.toggleClass("ico_item_now", "");
                ico_anime[2].className += " ico_item_now";
                ico_anime_state = 3;
            } else if (ico_anime_state == 3) {
                let current_ico_anime = $(".ico_item_now");
                current_ico_anime.toggleClass("ico_item_now", "");
                ico_anime[3].className += " ico_item_now";
                ico_anime_state = 4;
            } else if (ico_anime_state == 4) {
                let current_ico_anime = $(".ico_item_now");
                current_ico_anime.toggleClass("ico_item_now", "");
                ico_anime[4].className += " ico_item_now";
                ico_anime_state = 0;
            }
        }

        // setInterval(anime_icon, 250);
        // });
    }

    render() {
        return <div className="Spinner">
            <span className="loading_container">
                <span className="logo_anime">
                    <img src={ImgLogo} className="logo_anime_val" />
                </span>

                <br />

                <span className="ico_container">

                </span>
            </span>
        </div>;
    }
}