import "./Hero.css";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* Left Content */}

        <div className="hero-left">

          <span className="hero-tag">
            🚀 Kundapura's Own Delivery Platform
          </span>

          <h1>
            Fast, Reliable &
            <span> Local Delivery</span>
            <br />
            at Your Doorstep.
          </h1>

          <p>
            NAAV Delivery connects customers with restaurants,
            groceries, medicines and local stores across Kundapura.
            Experience lightning-fast delivery, affordable prices,
            and trusted local service — all in one app.
          </p>

          <div className="hero-buttons">

            <a href="#services" className="primary-btn">
              Explore Services
            </a>

            <a href="#about" className="secondary-btn">
              Learn More
            </a>

          </div>

          <div className="hero-stats">

            <div className="stat-card">
              <h2>30+</h2>
              <p>Partner Stores</p>
            </div>

            <div className="stat-card">
              <h2>15 Min</h2>
              <p>Average Delivery</p>
            </div>

            <div className="stat-card">
              <h2>1000+</h2>
              <p>Happy Customers</p>
            </div>

          </div>

        </div>

        {/* Right Image */}

        <div className="hero-right">

          <img
            src={heroImage}
            alt="NAAV Delivery"
          />

          <div className="floating-card card1">
            🍔 Food Delivery
          </div>

          <div className="floating-card card2">
            🛒 Grocery
          </div>

          <div className="floating-card card3">
            💊 Medicines
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;