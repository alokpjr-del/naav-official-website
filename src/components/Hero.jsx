import {
  ArrowRight,
  Bike,
  Clock3,
  MapPin,
  ShieldCheck,
  ShoppingBag,
  Star,
  Utensils,
} from "lucide-react";
import "./Hero.css";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-left">
          <span className="hero-tag">
            <MapPin size={15} />
            Made in Kundapura, for Kundapura
          </span>

          <h1>
            Your neighbourhood,
            <span> delivered.</span>
          </h1>

          <p>
            From a hot coastal meal to last-minute groceries and medicines,
            NAAV brings Kundapura&apos;s trusted local businesses to your door.
          </p>

          <div className="hero-buttons">
            <a href="#services" className="primary-btn">
              Explore services
              <ArrowRight size={18} />
            </a>

            <a href="#how-it-works" className="secondary-btn">
              See how it works
            </a>
          </div>

          <div className="hero-proof">
            <div className="proof-avatars" aria-hidden="true">
              <span>NK</span>
              <span>AP</span>
              <span>RS</span>
            </div>
            <div>
              <div className="proof-rating">
                <Star size={15} fill="currentColor" />
                <strong>Local. Fast. Dependable.</strong>
              </div>
              <span>Trusted by customers across Kundapura</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-visual">
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />

            <div className="hero-image-wrap">
              <span className="hero-image-label">NAAV express</span>
              <img src={heroImage} alt="NAAV delivery app experience" />
            </div>

            <div className="floating-card hero-food-card">
              <span className="floating-icon">
                <Utensils size={18} />
              </span>
              <span>
                <small>Craving something?</small>
                Local food, on the way
              </span>
            </div>

            <div className="floating-card hero-time-card">
              <Clock3 size={18} />
              Fast local delivery
            </div>

            <div className="floating-card hero-store-card">
              <span className="floating-icon floating-icon-gold">
                <ShoppingBag size={18} />
              </span>
              <span>
                <small>One simple app</small>
                Food, grocery & more
              </span>
            </div>

            <div className="hero-trust-card">
              <span><ShieldCheck size={18} /> Trusted stores</span>
              <span><Bike size={18} /> Local riders</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
