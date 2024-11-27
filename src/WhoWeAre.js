import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './WhoWeAre.css';
import PartnerBlue from './PartnerBlue';
import blueball from "./images/blue-ball.svg";
import orangeball from "./images/orange-ball.svg";
import pictureCollage from './images/yen-picture-collage.svg';
import founderOne from './images/founder-one.svg';

export default function WhoWeAre() {

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
        <div className='WhoWeAre'>
            <header className='aboutHeader'>
                <img src={orangeball} alt="blue ball" className="img-fluid d-none d-lg-block" id="aboutSecondBall" />
                <h1>
                    WHO WE <span className='highlight'>ARE</span>
                </h1>
                <img src={blueball} alt="blue ball" className="img-fluid d-none d-lg-block" id="aboutThirdBall" />
            </header>
            <img src={blueball} alt="blue ball" className="img-fluid d-none d-lg-block" id="aboutFirstBall" />
            
            <section className='aboutUs'>
                <h2 className='mb-3'>
                    ABOUT US
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                </p>
                <img src={pictureCollage} alt='collage' className='img-fluid mt-4' />
            </section>

            <section className='founders' id='founders'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5'>
                            <img src={founderOne} alt='founder' className='img-fluid' />
                        </div>
                        <div className='col-md-7 aboutFounderOne'>
                            <h3 className='mb-3'>MEET PASTOR ODUDU ESSIEN</h3>
                            <p>
                                Pastor Odudu Essien is the President and founder of Young Ecclesia Nation.
                                He is a teens Pastor with over 7 years of experience in ministering to and
                                training teenagers across the world in the knowledge of Christ. He is passionate
                                about seeing young adults reconciled to God, fulfilling purpose and walking in
                                the supernatural. He is married to Joy Essien and is blessed with two beautiful
                                daughters.
                            </p>
                        </div>
                    </div>
                    <div className='row aboutFounderTwoSection'>
                        <div className='col-md-7 aboutFounderTwo'>
                            <h3 className='mb-3'>MEET JOY ESSIEN</h3>
                            <p>
                                Joy Deborah Essien, is a Certified Teens Coach, A Mental Health First Aider and
                                an Author. She has 8 years experience in mentoring, coaching adolescents. She is
                                the founder of The Teenage White Hat Company with a mission to partner with Schools
                                and Parents in educating young people and equipping them with the right tools to
                                navigate the adolescent stages and also chaperones a christian teen girl's ministry
                                called 'Ecclesia Queens' where she empower girls to be women of purpose and sound
                                reasoning. reasoning. She has written two books, Breaking Free - a self- help manual
                                for teens struggling with pornography addiction and 'Crushes and Dating: What every
                                teenager should know.’
                            </p>
                        </div>
                        <div className='col-md-5'>
                            <img src={founderOne} alt='founder' className='img-fluid' id='founderImage' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='partnerBlue'>
                <PartnerBlue />
            </section>
        </div>
    )
}