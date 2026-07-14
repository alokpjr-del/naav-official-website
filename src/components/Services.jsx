import {
  ArrowUpRight,
  Croissant,
  Leaf,
  PackageCheck,
  Pill,
  ShoppingBasket,
} from "lucide-react";
import "./Services.css";

export default function Services() {
  const services = [
    {
      icon: Croissant,
      title: "Food Delivery",
      description:
        "Kundapura favourites, coastal classics and everyday cravings delivered fresh.",
      label: "Most loved",
    },
    {
      icon: ShoppingBasket,
      title: "Grocery Delivery",
      description:
        "Fresh produce, pantry essentials and daily needs from nearby stores.",
      label: "Daily essentials",
    },
    {
      icon: Pill,
      title: "Medicine Delivery",
      description:
        "Convenient doorstep delivery from trusted local pharmacies.",
      label: "Care at home",
    },
    {
      icon: PackageCheck,
      title: "Parcel Delivery",
      description:
        "Reliable local pickup and drop for packages that need to move quickly.",
      label: "Across town",
    },
    {
      icon: Leaf,
      title: "Dry Fruits",
      description:
        "Premium nuts and dry fruits sourced from trusted neighbourhood sellers.",
      label: "Premium picks",
    },
    {
      icon: Leaf,
      title: "Spices",
      description:
        "Authentic spices and kitchen staples for flavourful home cooking.",
      label: "Local flavours",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <div>
            <span className="services-tag">What we deliver</span>
            <h2>
              One app for every
              <span> local need.</span>
            </h2>
          </div>

          <p>Discover Kundapura&apos;s restaurants, stores and essentials through a delivery experience designed around your day.</p>
        </div>

        <div className="services-grid">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <article className="service-card" key={item.title}>
                <div className="service-card-top">
                  <span className="service-icon"><Icon size={26} /></span>
                  <span className="service-label">{item.label}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <a className="service-link" href="#how-it-works">
                  See how it works
                  <ArrowUpRight size={17} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
