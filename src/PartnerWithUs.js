import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './PartnerWithUs.css';
import PartnerBlueGive from './PartnerBlueGive';
import blueball from "./images/blue-ball.svg";
import orangeball from "./images/orange-ball.svg";
import pictureCollage from './images/yen-picture-collage.svg';

export default function PartnerWithUs() {

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
        <div className='PartnerWithUs'>
            <header className='partnerHeader' id='partnerWithUs'>
                <img src={orangeball} alt="blue ball" className="img-fluid d-none d-lg-block" id="aboutSecondBall" />
                <h1>
                    PARTNER WITH <span className='highlight'>US</span>
                </h1>
                <img src={blueball} alt="blue ball" className="img-fluid d-none d-lg-block" id="aboutThirdBall" />
            </header>
            <img src={blueball} alt="blue ball" className="img-fluid d-none d-lg-block" id="aboutFirstBall" />
            
            <section className='giving'>
                <h2 className='mb-3'>
                    WHEN WE GIVE
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <img src={pictureCollage} alt='collage' className='img-fluid mt-4' />
            </section>

            <section className='partnerBlue'>
                <PartnerBlueGive />
            </section>
        </div>
    )
}