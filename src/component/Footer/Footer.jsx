import React from 'react';
import ContactForm from "../ContactForm/ContactForm.jsx";

import '../../global.css'
import './style.css'

import Email from "./Images/email.svg"
import Phone from "./Images/phone.svg"
import Location from "./Images/location.svg"

import Facebook from "./Images/facebook.svg"
import Instagram from "./Images/instagram.svg"
import Twitter from "./Images/twitter.svg"
import Tiktok from "./Images/tiktok.svg"

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className='contactUs'>
                    <h2 className='footer__title footer__title-contactUs'>Contact Us</h2>
                    <ContactForm />
                </div>
                <div className='info'>
                    <h2 className='footer__title footer__title-info'>Info</h2>
                    <ul className='info__list'>
                        <li className='info__item'>
                            <img className='info__icon' src={Location} alt="Location" />
                            <p className='info__text'>Suite 101 Blaauwberg Mall, Marine Circle, Table View, 7441</p>
                        </li>
                        <li className='info__item'>
                            <img className='info__icon' src={Phone} alt="Phone" />
                            <p className='info__text'>+1 (421)-255-7860</p>
                        </li>
                        <li className='info__item'>
                            <img className='info__icon' src={Email} alt="Email" />
                            <p className='info__text'>tbt@gmail.com</p>
                        </li>
                    </ul>
                </div>

                <div className='follow'>
                        <h2 className='footer__title footer__title-follow'>Follow Us</h2>
                        <ul className='follow__list'>
                            <li className='follow__item'>
                                <a className='follow__link' href="https://uk-ua.facebook.com/">
                                    <img className='follow__icon' src={Facebook} alt="Facebook" />
                                    <h3 className='follow__name'>Facebook</h3>
                                </a>
                            </li>
                            <li className='follow__item'>
                                <a className='follow__link' href="https://www.instagram.com/">
                                    <img className='follow__icon' src={Instagram} alt="Instagram" />
                                    <h3 className='follow__name'>Instagram</h3>
                                </a>
                            </li>
                            <li className='follow__item'>
                                <a className='follow__link' href="https://twitter.com/">
                                    <img className='follow__icon' src={Twitter} alt="Twitter" />
                                    <h3 className='follow__name'>Twitter</h3>
                            </a>
                            </li>
                            <li className='follow__item'>
                                <a className='follow__link' href="https://www.tiktok.com/">
                                    <img className='follow__icon' src={Tiktok} alt="Tiktok" />
                                    <h3 className='follow__name'>Tiktok</h3>
                                </a>
                            </li>
                        </ul>
                    </div>
                
            </div>
            <div className='footerDown'>
                <p className='footerDown__text'>© 2023 Cocktail. Developer by <span className='footerDown__span'>BelEnaM</span> </p>    
            </div>
        </footer>
    )
}