import { ArrowRight, BadgePercent, Gift, Sparkles, Truck, Wallet } from "lucide-react";
import "./WhyChoose.css";

const offers = [
  {
    icon: Truck,
    badge: "In the app",
    title: "Welcome offers",
    description:
      "Explore introductory savings available to customers getting started with NAAV.",
    accent: "brand",
  },
  {
    icon: BadgePercent,
    badge: "Local partners",
    title: "Everyday grocery value",
    description:
      "Discover partner-led value on fresh produce and daily essentials nearby.",
    accent: "gold",
  },
  {
    icon: Wallet,
    badge: "Every order",
    title: "Clear delivery pricing",
    description:
      "See delivery charges before confirming, with a simple and transparent checkout.",
    accent: "brand",
  },
  {
    icon: Gift,
    badge: "Limited-time",
    title: "Seasonal local specials",
    description:
      "Find changing offers from restaurants and neighbourhood stores in one place.",
    accent: "gold",
  },
];

function WhyChoose() {
  return (
    <section className="offers" id="offers">
      <div className="offers-container">
        <div className="offers-header">
          <span className="offers-tag">
            <Sparkles size={15} />
            Offers &amp; savings
          </span>
          <h2>
            More reasons to order
            <span> with NAAV.</span>
          </h2>
          <p>
            Enjoy ongoing offers built for Kundapura, from free first deliveries
            to everyday savings on the essentials you love.
          </p>
        </div>

        <div className="offers-grid">
          {offers.map((offer) => {
            const Icon = offer.icon;

            return (
              <article className="offer-card" key={offer.title}>
                <span className={`offer-icon offer-icon-${offer.accent}`}>
                  <Icon size={22} />
                </span>
                <span className="offer-badge">{offer.badge}</span>
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
              </article>
            );
          })}
        </div>

        <div className="offers-banner">
          <div>
            <strong>Ready to save on your next order?</strong>
            <p>Download NAAV and unlock local offers across Kundapura.</p>
          </div>
          <a href="#restaurants" className="offers-banner-btn">
            Browse partners
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
