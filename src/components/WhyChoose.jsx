import "./WhyChoose.css";
import SectionHeader from "./SectionHeader";
import FeatureCard from "./FeatureCard";

function WhyChoose() {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast Delivery",
      description:
        "Get your favourite food, groceries, medicines and parcels delivered quickly across Kundapura."
    },
    {
      icon: "💰",
      title: "Affordable Delivery",
      description:
        "Enjoy lower delivery charges with transparent pricing and no hidden fees."
    },
    {
      icon: "🏪",
      title: "Support Local Business",
      description:
        "We proudly partner with restaurants, supermarkets and local shops in Kundapura."
    },
    {
      icon: "🛵",
      title: "Professional Delivery",
      description:
        "Our delivery partners ensure safe, fast and reliable doorstep delivery every time."
    },
    {
      icon: "📱",
      title: "Easy Ordering",
      description:
        "Order food, groceries, medicines and more from a single app with a simple interface."
    },
    {
      icon: "❤️",
      title: "Customer First",
      description:
        "Your satisfaction is our priority with friendly support and quality local service."
    }
  ];

  return (
    <section className="whychoose" id="whychoose">

      <div className="why-container">

        <SectionHeader
          className="why-header"
          eyebrowClassName="why-tag"
          eyebrow="WHY CHOOSE NAAV"
          title={
            <>
              Why Thousands Choose
              <span> NAAV Delivery</span>
            </>
          }
          description="NAAV is built exclusively for Kundapura to provide faster, affordable and trustworthy local delivery services."
        />

        <div className="why-grid">

          {features.map((item, index) => (
            <FeatureCard
              key={index}
              className="why-card"
              iconClassName="why-icon"
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;