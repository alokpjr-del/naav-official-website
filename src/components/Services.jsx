import "./Services.css";
import SectionHeader from "./SectionHeader";
import FeatureCard from "./FeatureCard";

export default function Services() {
  const services = [
    {
      icon: "🍔",
      title: "Food Delivery",
      description:
        "Hot & delicious meals from your favourite restaurants delivered quickly across Kundapura.",
    },
    {
      icon: "🥬",
      title: "Grocery Delivery",
      description:
        "Fresh vegetables, fruits and daily essentials delivered to your doorstep.",
    },
    {
      icon: "💊",
      title: "Medicine Delivery",
      description:
        "Get medicines delivered safely from trusted pharmacies within minutes.",
    },
    {
      icon: "📦",
      title: "Parcel Delivery",
      description:
        "Fast, secure and affordable parcel delivery across Kundapura.",
    },
    {
      icon: "🌰",
      title: "Dry Fruits",
      description:
        "Premium quality dry fruits from trusted local stores.",
    },
    {
      icon: "🌿",
      title: "Spices",
      description:
        "Fresh and authentic spices for your everyday cooking.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">

        <SectionHeader
          className="services-header"
          eyebrowClassName="section-tag"
          eyebrow="OUR SERVICES"
          title={
            <>
              Everything You Need,
              <br />
              Delivered by <span>NAAV</span>
            </>
          }
          description="Food, Grocery, Medicine, Parcel, Dry Fruits and Spices — all delivered from trusted local stores through one simple app."
        />

        <div className="services-grid">

          {services.map((item, index) => (
            <FeatureCard
              key={index}
              className="service-card"
              iconClassName="service-icon"
              icon={item.icon}
              title={item.title}
              description={item.description}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <button className="service-btn">
                Learn More →
              </button>
            </FeatureCard>
          ))}

        </div>

      </div>
    </section>
  );
}