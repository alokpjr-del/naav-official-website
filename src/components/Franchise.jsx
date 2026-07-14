import { ArrowRight, Check, Crown } from "lucide-react";
import "./Franchise.css";

const plans = [
  {
    title: "Starter Franchise",
    price: "₹5 Lakhs",
    description: "For entrepreneurs launching their first local hub.",
    button: "Apply now",
    features: [
      "1 Delivery Hub",
      "Food, Grocery & Parcel Setup",
      "Technology Access",
      "Training & Onboarding",
      "Marketing Starter Kit",
      "3 Months Support",
    ],
  },
  {
    title: "Growth Franchise",
    price: "₹10 Lakhs",
    description: "For partners scaling across multiple neighbourhoods.",
    featured: true,
    button: "Join now",
    features: [
      "Up to 3 Delivery Hubs",
      "Complete Technology Suite",
      "Vendor Management",
      "Brand Marketing Support",
      "Business Dashboard",
      "Priority Support",
    ],
  },
  {
    title: "Enterprise Franchise",
    price: "₹25 Lakhs",
    description: "For operators expanding across cities.",
    button: "Partner with us",
    features: [
      "Multi City Operations",
      "Dedicated Account Manager",
      "Custom Technology",
      "Premium Marketing",
      "Business Consulting",
      "Analytics Dashboard",
    ],
  },
];

export default function Franchise() {
  return (
    <section className="franchise" id="franchise">
      <div className="franchise-container">
        <div className="franchise-header">
          <span className="franchise-tag">Franchise opportunities</span>
          <h2>
            Build your own
            <span> NAAV delivery business.</span>
          </h2>
          <p>
            Join Kundapura&apos;s fastest growing delivery network with a plan
            built around your ambitions.
          </p>
        </div>

        <div className="franchise-grid">
          {plans.map((plan) => (
            <article
              className={`franchise-card ${plan.featured ? "featured" : ""}`}
              key={plan.title}
            >
              {plan.featured && (
                <span className="franchise-flag">
                  <Crown size={14} fill="currentColor" />
                  Most popular
                </span>
              )}

              <h3>{plan.title}</h3>
              <p className="franchise-desc">{plan.description}</p>

              <div className="franchise-price">
                {plan.price}
                <span>one-time</span>
              </div>

              <ul>
                {plan.features.map((item) => (
                  <li key={item}>
                    <span className="franchise-check">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <button type="button" className="franchise-btn">
                {plan.button}
                <ArrowRight size={17} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
