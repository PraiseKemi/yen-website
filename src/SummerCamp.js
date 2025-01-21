import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SummerCamp.css';
import flyer from "./images/summer-camp-flyer.svg";
import blueball from "./images/blue-ball.svg";
import orangeball from "./images/orange-ball.svg";

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
                        <div className='col-md-5'>
                            <img src={flyer} alt="Summer Camp" className="img-fluid" />
                        </div>
                        <div className='col-md-7'></div>
                    </div>
                </div>
            </section>
        </div>
    )
}