import React from 'react';
import './PartnerBlueGive.css';
import aboutHeart from './images/partner-heart.svg'

export default function PartnerBlue() {
    return (
        <div className="PartnerBlue">
        <h2>PARTNER WITH <span className="highlight">US</span></h2>
        <p>Be a part of this move of God Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit, sed do eiusmod tempor
        </p>
        <a href='https://www.instagram.com/weareyen/?hl=en' target='_blank' rel="noreferrer"><button>Give</button></a>
        <img src={aboutHeart} alt='heart' className='img-fluid d-none d-lg-block' id='partnerBlueHeart' />
        </div>
    )
}