import './App.css';
import heroimage from "./home-hero-section.png";
import welcomeimage from "./home-welcome-section.svg";

function App() {
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
              <button className="communityButton">Join Community</button>
              <button className="learnButton">Learn more</button>
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
    </div>
  );
}

export default App;
