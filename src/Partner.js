import React from 'react';
import './Partner.css';
import heart from './images/partner-heart.svg'

export default function Partner() {
    return (
        <div className="Partner">
        <h2>PARTNER WITH <span className="highlight">US</span></h2>
        <p>Be a part of this move of God Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit, sed do eiusmod tempor
        </p>
        <a href='https://www.google.com' target='_blank' rel="noreferrer"><button>Give</button></a>
        <img src={heart} alt='heart' className='img-fluid d-none d-lg-block' id='partnerHeart' />
        </div>
    )
}