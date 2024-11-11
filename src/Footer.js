import React from 'react';
import "./Footer.css";
import EmailForm from './EmailForm';
import Copyright from './Copyright';
import logo from "./images/yen-logo.svg";
import instagramLogo from "./images/instagram-logo.svg";
import facebookLogo from "./images/facebook-logo.svg";
import twitterLogo from "./images/twitter-logo.svg";

export default function Footer() {
    return (
        <div className='Footer'>
            <hr />
            <div className='footerInside'>
              <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-3'>
                        <img src={logo} alt='YEN logo' className='yenLogo img-fluid' />
                    </div>
                    <div className='col-12 col-md-2' id='footerSection'>
                        <h3>About us</h3>
                        <ul>
                            <li><a href='#'>Who we are</a></li>
                            <li><a href='#'>Leadership</a></li>
                        </ul>
                    </div>
                    <div className='col-12 col-md-2' id='footerSection'>
                        <h3>Ministries</h3>
                        <ul>
                            <li><a>Young Ecclesia Worship</a></li>
                            <li><a href='#'>Young Ecclesia Queens</a></li>
                            <li><a href='#'>MOG Channel</a></li>
                        </ul>
                    </div>
                    <div className='col-12 col-md-2' id='socials'>
                        <h3>Connect with us</h3>
                            <a href='https://www.instagram.com/weareyen/' target='_blank' rel='noreferrer'>
                                <img src={instagramLogo} alt='instagram' />
                            </a>
                            <a href='https://www.facebook.com/weareyen' target='_blank' rel='noreferrer'>
                                <img src={facebookLogo} alt='facebook' />
                            </a>
                            <a href='https://x.com/_weareyen' target='_blank' rel='noreferrer'>
                                <img src={twitterLogo} alt='twitter' />
                            </a>
                    </div>
                    <div className='col-12 col-md-3' id='subscribeForm'>
                        <h3 id='subscribe'>Subscribe to our newsletter</h3>
                        <EmailForm />    
                    </div>
                    </div>
                </div>
                <Copyright />
            </div>
        </div>
    )
}