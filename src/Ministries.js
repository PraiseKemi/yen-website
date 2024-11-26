import React from 'react';
import './Ministries.css';
import blueball from "./images/blue-ball.svg";
import orangeball from "./images/orange-ball.svg";
import ecclesiaQueens from './images/ecclessia-queens-picture.svg';
import yewPicture from './images/yew-picture.svg';
import orangeLine from './images/orange-dotted-line.svg';

export default function Ministries() {
    return (
        <div className='Ministries'>
            <header className='ministriesHeader'>
                <img src={orangeball} alt="blue ball" className="img-fluid d-none d-lg-block" id="ministriesSecondBall" />
                <h1>
                    MINISTRIES IN <span className='highlight'>YEN</span>
                </h1>
                <img src={blueball} alt="blue ball" className="img-fluid d-none d-lg-block" id="ministriesThirdBall" />
            </header>
            <img src={blueball} alt="blue ball" className="img-fluid d-none d-lg-block" id="ministriesFirstBall" />

            <section className='ministryArms'>
                <div className='container'>
                    <div className='row ministryArmOneSection'>
                        <div className='col-md-5'>
                            <img src={ecclesiaQueens} alt='ecclesia queens' className='img-fluid' />
                            <h3 className='mb-3 ministryTitleOne'>ECCLESIA QUEENS</h3>
                        </div>
                        <div className='col-md-7 ministryArmOne'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dLorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliquaLorem Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dLorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliquaLoremLorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dLorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliquaLorem
                            </p>
                            <a href='https://www.google.com' target='_blank' rel="noreferrer">
                                <button className='mt-3 ministryButton'>Join community</button>
                            </a>
                        </div>
                    </div>
                    <img src={orangeLine} alt='line' className='img-fluid d-none d-lg-block' id='orangeLine' />
                    <div className='row mt-5 ministryArmTwoSection'>
                        <div className='col-md-7 ministryArmTwo'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dLorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliquaLoremLorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dLorem
                                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliquaLorem
                            </p>
                            <a href='https://www.google.com' target='_blank' rel="noreferrer">
                                <button className='mt-4 ministryButtonTwo'>Join community</button>
                            </a>
                        </div>
                        <div className='col-md-5'>
                            <img src={yewPicture} alt='young ecclesia worship' className='img-fluid' />
                            <h3 className='mb-3 ministryTitleTwo'>YOUNG ECCLESIA
                                <br />
                                WORSHIP
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}