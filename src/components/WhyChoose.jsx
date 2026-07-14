import "./WhyChoose.css";

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

        <div className="why-header">

          <span className="why-tag">
            WHY CHOOSE NAAV
          </span>

          <h2>
            Why Thousands Choose
            <span> NAAV Delivery</span>
          </h2>

          <p>
            NAAV is built exclusively for Kundapura to provide faster,
            affordable and trustworthy local delivery services.
          </p>

        </div>

        <div className="why-grid">

          {features.map((item, index) => (

            <div
              className="why-card"
              key={index}
            >

              <div className="why-icon">
                {item.icon}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;