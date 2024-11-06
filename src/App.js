import React from 'react';
import './App.css';
import heroimage from "./home-hero-section.png";
import welcomeimage from "./home-welcome-section.svg";
import eventsimage from "./events-image.svg";
import blueball from "./blue-ball.svg";
import orangeball from "./orange-ball.svg";
import headphones from "./home-sermons-headphones.svg";

export default function App() {
  return (
    <div className="App">
      <header className="AppHeader">
          <div className="row g-0">
            <div className="heroText col-md-6">
              <h1>IGNITING THE YOUNG FOR <span className="highlight">CHRIST</span></h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
              <a href='https://www.google.com' target='_blank' rel="noreferrer">
                <button className="communityButton">Join Community</button>
            </a>
            <a href='https://www.google.com' target='_blank' rel="noreferrer">
              <button className="learnButton">Learn more</button>
            </a>
            </div>
            <div className="heroImage col-md-6">
              <img src={heroimage} alt="girls praying" className="img-fluid float-end" />
            </div>
          </div>
      </header>

      <section className="homeWelcome">
        <h2>WELCOME TO <span className="highlight">YEN</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <br />
          eiusmod tempor
        </p>
        <img src={welcomeimage} alt="yen mission and vision" className="img-fluid" />
      </section>

      <section className="homeEvents">
        <h2>EVENTS YOU DON'T WANT TO MISS</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        <div className="container">
        <div className="row gx-5 eventListing">
          <div className="col-sm-4">
            <img src={eventsimage} alt="YEN event" className="img-fluid" />
              <div className="eventDescription">
                <h3>Young Ministers Conference</h3>
                <a href='https://www.google.com' target='_blank' rel="noreferrer">
                  <button id="disabledButton">UPCOMING</button>
                </a>
                <img src={blueball} alt="blue ball" className="img-fluid" id="firstBall" />
            </div>
          </div>
          <div className="col-sm-4">
            <img src={eventsimage} alt="YEN event" className="img-fluid" />
              <div className="eventDescription">
                <h3>Summer Camp 2025</h3>
                <img src={orangeball} alt="orange ball" className="img-fluid" id="secondBall" />
                <a href='https://www.google.com' target='_blank' rel="noreferrer">
                  <button id="disabledButton">UPCOMING</button>
                </a>
            </div>
          </div>
          <div className="col-sm-4">
            <img src={eventsimage} alt="YEN event" className="img-fluid" />
              <div className="eventDescription">
                <h3>School of Hard Knox</h3>
                <a href='https://www.google.com' target='_blank' rel="noreferrer">
                  <button id="activeButton">READ MORE</button>
                </a>
                <img src={blueball} alt="blue ball" className="img-fluid" id="thirdBall" />
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="sermons">
        <h2>LISTEN TO <span className="highlight">SERMONS</span></h2>
        <p>For your Spiritual growth Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit, sed do eiusmod tempor
        </p>
        <a href='https://www.google.com' target='_blank' rel="noreferrer"><button>Listen now</button></a>
        <img src={headphones} alt='headphones' className='img-fluid' id='sermonHeadphones' />
      </section>
    </div>
  );
}
