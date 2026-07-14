import { Bike, Check, Search, ShoppingBag } from "lucide-react";
import "./About.css";
import aboutImage from "../assets/2048 _ 858@3x.png";

function About() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Find what you need",
      description: "Browse restaurants, stores and everyday essentials near you.",
    },
    {
      number: "02",
      icon: ShoppingBag,
      title: "Place your order",
      description: "Choose your favourites and confirm everything in a few taps.",
    },
    {
      number: "03",
      icon: Bike,
      title: "Relax while we deliver",
      description: "A local delivery partner brings your order right to your door.",
    },
  ];

  return (
    <section className="about" id="how-it-works">
      <div className="about-container">
        <div className="about-image">
          <div className="about-image-frame">
            <img src={aboutImage} alt="Local products available through NAAV" />
          </div>
          <div className="about-image-card">
            <span><Check size={18} /></span>
            <div>
              <strong>Simple from start to finish</strong>
              <p>Local ordering without the clutter.</p>
            </div>
          </div>
        </div>

        <div className="about-content">
          <span className="about-tag">How it works</span>
          <h2>
            Local delivery made
            <span> refreshingly easy.</span>
          </h2>
          <p className="about-lead">
            NAAV connects you to the places you already know and trust, then
            gets your order moving with a dependable local delivery network.
          </p>

          <div className="about-steps">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article className="about-step" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <span className="step-icon"><Icon size={21} /></span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
