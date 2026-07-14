import "./Franchise.css";
import SectionHeader from "./SectionHeader";

const plans = [
  {
    title: "Starter Franchise",
    price: "₹5 Lakhs",
    button: "Apply Now",
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
    featured: true,
    button: "Join Now",
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
    button: "Partner With Us",
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

      <SectionHeader
        className="franchise-header"
        eyebrow="FRANCHISE OPPORTUNITIES"
        title={
          <>
            Start Your Own
            <span> NAAV Delivery Business</span>
          </>
        }
        description="Become a part of Kundapura's fastest growing delivery network."
      />

      <div className="franchise-grid">

        {plans.map((plan, index) => (
          <div
            className={`franchise-card ${plan.featured ? "featured" : ""}`}
            key={index}
          >

            <h3>{plan.title}</h3>

            <div className="price">
              {plan.price}
            </div>

            <ul>
              {plan.features.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>

            <button>{plan.button}</button>

          </div>
        ))}

      </div>

    </section>
  );
}