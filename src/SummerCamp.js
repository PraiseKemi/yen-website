import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Faqs from './Faqs';
import './SummerCamp.css';
import flyer from "./images/summer-camp-flyer.svg";
import blueball from "./images/blue-ball.svg";
import orangeball from "./images/orange-ball.svg";
import calendar from './images/calendar-icon.svg';
import clock from './images/clock-icon.svg';
import locationIcon from './images/location-icon.svg';
import email from './images/black-email-icon.svg';
import instagram from './images/instagram-logo.svg';
import twitter from './images/twitter-logo.svg';

export default function SummerCamp() {

    const location = useLocation();
    
    useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    }, [location]);

    return (
        <div className='SummerCamp'>
            <header className='summerCampHeader' id='summerCampHeader'>
                <img src={orangeball} alt="blue ball" className="img-fluid d-none d-lg-block" id="aboutSecondBall" />
                <h1>
                    REGISTER FOR <span className='highlight'>SUMMER CAMP</span>
                </h1>
                <img src={blueball} alt="blue ball" className="img-fluid d-none d-lg-block" id="aboutThirdBall" />
            </header>
            <img src={blueball} alt="blue ball" className="img-fluid d-none d-lg-block" id="aboutFirstBall" />

            <section className='eventDetails'>
                <div className='container'>
                    <div className='row'>
                        <div className='summerCampRegister col-md-5'>
                            <img src={flyer} alt="Summer Camp" className="img-fluid" />
                            <a href='https://www.instagram.com/weareyen/?hl=en' target='_blank' rel="noreferrer" id='registerLink'><button id='registerButton'>Register Now</button></a>
                        </div>
                        <div className='col-md-7 ms-4 summerCampDescription'>
                            <h2>YEN Summer Camp 2025</h2>
                            <p className='summerCampDetails'><img src={calendar} alt='calendar' id='descriptionIcon' />22nd to 25th July 2025</p>
                            <p className='summerCampDetails'><img src={clock} alt='clock' id='descriptionIcon'  />12pm</p>
                            <p className='summerCampDetails'><img src={locationIcon} alt='location' id='descriptionIcon'  />Redemption Camp</p>
                            <hr className='line' />
                            <h3>About this event</h3>
                            <p>
                                Lorem ipsum lorem ipsum  Lorem ipsum lorem ipsum
                                lorem ipsum lorem ipsum lorem ipsumLorem ipsum lorem ipsum
                                lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
                            </p>
                            <hr className='line' />
                            <h3 className='d-none d-md-block'>Direction</h3>
                            <iframe className='d-none d-md-block' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.5300466205435!2d3.4651206744822356!3d6.826863619564762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bc6d2350b131b%3A0xe8380a8ea9aabcff!2sThe%20Redeemed%20Christian%20Church%20Of%20God%2C%20The%20Youth%20Place!5e0!3m2!1sen!2sng!4v1737477725084!5m2!1sen!2sng" title='Summer camp venue map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <hr className='d-none d-md-block line' />
                            <div className='contact'>
                                <h3>Contact Us</h3>
                                <div id='contactIcons'>
                                <a href='https://www.instagram.com/weareyen/' target='_blank' rel='noreferrer'>
                                    <img src={instagram} alt='instagram' />
                                </a>
                                <a href='https://x.com/_weareyen' target='_blank' rel='noreferrer'>
                                    <img src={twitter} alt='twitter' />
                                </a>
                                <a href="mailto:example@email.com" target='_blank' rel='noreferrer'>
                                    <img src={email} alt='email' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className='secondLine' />

            <section className='faqsHeader'>
                <h1>FREQUENTLY ASKED QUESTIONS</h1>
                <Faqs />
            </section>
        </div>
    )
}