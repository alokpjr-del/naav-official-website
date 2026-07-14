import "./About.css";
import aboutImage from "../assets/2048_858@3x.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Left Image */}

        <div className="about-image">

          <img
            src={aboutImage}
            alt="About NAAV"
          />

        </div>

        {/* Right Content */}

        <div className="about-content">

          <span className="section-tag">
            ABOUT NAAV
          </span>

          <h2>
            Kundapura's Trusted
            <span> Local Delivery Partner</span>
          </h2>

          <p>
            NAAV Delivery Service is a home-grown delivery platform
            built exclusively for Kundapura. Our mission is to connect
            local businesses with local customers through fast,
            affordable and reliable delivery.
          </p>

          <p>
            From delicious restaurant meals to groceries,
            medicines, fresh vegetables, fruits and parcel delivery,
            NAAV provides everything you need from your favourite
            local stores in one easy-to-use platform.
          </p>

          <div className="about-grid">

            <div className="about-card">

              <div className="icon">
                🚀
              </div>

              <div>

                <h3>Fast Delivery</h3>

                <p>
                  Quick doorstep delivery across Kundapura.
                </p>

              </div>

            </div>

            <div className="about-card">

              <div className="icon">
                🛍️
              </div>

              <div>

                <h3>Local Stores</h3>

                <p>
                  Supporting local restaurants and businesses.
                </p>

              </div>

            </div>

            <div className="about-card">

              <div className="icon">
                💰
              </div>

              <div>

                <h3>Affordable Pricing</h3>

                <p>
                  Lower delivery charges with no hidden costs.
                </p>

              </div>

            </div>

            <div className="about-card">

              <div className="icon">
                ❤️
              </div>

              <div>

                <h3>Customer First</h3>

                <p>
                  Friendly support and reliable service every day.
                </p>

              </div>

            </div>

          </div>

          <div className="about-buttons">

            <a
              href="#services"
              className="about-btn"
            >
              Explore Services
            </a>

            <a
              href="#contact"
              className="about-outline"
            >
              Contact Us
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;