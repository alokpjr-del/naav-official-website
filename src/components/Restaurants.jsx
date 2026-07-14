import { ArrowUpRight, MapPin, Store } from "lucide-react";
import "./Restaurants.css";

const partners = [
  {
    initials: "CS",
    name: "Coastal & Seafood",
    category: "Restaurants",
    description: "Kundapura favourites, coastal classics and fresh local flavours.",
    accent: "brand",
  },
  {
    initials: "PV",
    name: "Pure Vegetarian",
    category: "Restaurants",
    description: "Wholesome meals and vegetarian favourites from nearby kitchens.",
    accent: "gold",
  },
  {
    initials: "BG",
    name: "Biryani & Grills",
    category: "Restaurants",
    description: "Biryani, grills and satisfying meals for every kind of craving.",
    accent: "brand",
  },
  {
    initials: "CB",
    name: "Cafes & Bakeries",
    category: "Restaurants",
    description: "Coffee, quick bites, baked treats and desserts from local favourites.",
    accent: "gold",
  },
  {
    initials: "GE",
    name: "Grocery & Essentials",
    category: "Local stores",
    description: "Fresh produce, pantry staples and everything needed for the day.",
    accent: "brand",
  },
  {
    initials: "PW",
    name: "Pharmacy & Wellness",
    category: "Local stores",
    description: "Health, personal care and wellness essentials from nearby stores.",
    accent: "gold",
  },
];

export default function Restaurants() {
  return (
    <section className="restaurants" id="restaurants">
      <div className="restaurants-container">
        <div className="restaurants-header">
          <div>
            <span className="restaurants-tag">
              <Store size={15} />
              Local partners
            </span>
            <h2>
              Kundapura&apos;s favourites,
              <span> all in one place.</span>
            </h2>
          </div>
          <p>
            Discover trusted restaurants, stores and pharmacies near you, each
            delivered by NAAV&apos;s dependable local network.
          </p>
        </div>

        <div className="restaurants-grid">
          {partners.map((partner) => (
            <article className="restaurant-card" key={partner.name}>
              <div className="restaurant-top">
                <span className={`restaurant-avatar avatar-${partner.accent}`}>
                  {partner.initials}
                </span>
                <span className="restaurant-category">{partner.category}</span>
              </div>

              <h3>{partner.name}</h3>
              <p className="restaurant-description">{partner.description}</p>

              <div className="restaurant-meta">
                <span>
                  <MapPin size={15} />
                  Kundapura
                </span>
                <span className="restaurant-open">Local delivery</span>
              </div>

              <a className="restaurant-link" href="#offers">
                View local offers
                <ArrowUpRight size={17} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
