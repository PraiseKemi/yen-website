import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Partner from "./Partner";
import Footer from "./Footer";
import NavBar from './NavBar';
import WhoWeAre from './WhoWeAre';
import heroimage from "./images/home-hero-section.png";
import welcomeimage from "./images/home-welcome-section.svg";
import eventsimage from "./images/events-image.svg";
import blueball from "./images/blue-ball.svg";
import orangeball from "./images/orange-ball.svg";
import headphones from "./images/home-sermons-headphones.svg";

export default function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
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
              <img src={heroimage} alt="girls praying" className="img-fluid d-none d-md-block float-end" />
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
          <div className="col-md-4">
            <img src={eventsimage} alt="YEN event" className="img-fluid" />
              <div className="eventDescription">
                <h3>Young Ministers Conference</h3>
                <a href='#' target='_blank' rel="noreferrer">
                  <button id="disabledButtonFirst">UPCOMING</button>
                </a>
                <img src={blueball} alt="blue ball" className="img-fluid d-none d-lg-block" id="firstBall" />
            </div>
          </div>
          <div className="col-md-4">
            <img src={eventsimage} alt="YEN event" className="img-fluid" />
              <div className="eventDescription">
                <h3>Summer Camp 2025</h3>
                <img src={orangeball} alt="orange ball" className="img-fluid d-none d-lg-block" id="secondBall" />
                <a href='#' target='_blank' rel="noreferrer">
                  <button id="disabledButton">UPCOMING</button>
                </a>
            </div>
          </div>
          <div className="col-md-4">
            <img src={eventsimage} alt="YEN event" className="img-fluid" />
              <div className="eventDescription">
                <h3>School of Hard Knox</h3>
                <a href='https://www.google.com' target='_blank' rel="noreferrer">
                  <button id="activeButton">READ MORE</button>
                </a>
                <img src={blueball} alt="blue ball" className="img-fluid d-none d-lg-block" id="thirdBall" />
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
        <img src={headphones} alt='headphones' className='img-fluid d-none d-lg-block' id='sermonHeadphones' />
      </section>

      <section className="homeMinistries">
        <h2>MINISTRIES IN YEN</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        <div className="container">
        <div className="row gx-5 ministryListing">
          <div className="col-md-4">
            <img src={eventsimage} alt="YEN event" className="img-fluid" />
              <div className="ministryDescription">
                <h3>Ecclesia Queens</h3>
                <a href='https://www.google.com' target='_blank' rel="noreferrer">
                  <button id="ministryButton">Read more</button>
                </a>
                <img src={blueball} alt="blue ball" className="img-fluid d-none d-lg-block" id="firstBallTwo" />
            </div>
          </div>
          <div className="col-md-4">
            <img src={eventsimage} alt="YEN event" className="img-fluid" />
              <div className="ministryDescription">
                <h3>Young Ecclesia Worship</h3>
                <img src={orangeball} alt="orange ball" className="img-fluid d-none d-lg-block" id="secondBallTwo" />
                <a href='https://www.google.com' target='_blank' rel="noreferrer">
                  <button id="ministryButtonSecond">Read more</button>
                </a>
            </div>
          </div>
          <div className="col-md-4">
            <img src={eventsimage} alt="YEN event" className="img-fluid" />
              <div className="ministryDescription">
                <h3>School of Hard Knox</h3>
                <a href='#' target='_blank' rel="noreferrer">
                  <button id="disabledButton">UPCOMING</button>
                </a>
                <img src={blueball} alt="blue ball" className="img-fluid d-none d-lg-block" id="thirdBallTwo" />
            </div>
          </div>
          </div>
        </div>
      </section>

      <section>
        <Partner />
      </section>
              
     </>
    }
  />
      <Route path="/who-we-are" element={<WhoWeAre />} />
      </Routes>                

      <footer>
        <Footer />
      </footer>
           
    </div>
    </Router>  
  );
}
