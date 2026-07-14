import "./Services.css";

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

        <div className="services-header">

          <span className="section-tag">
            OUR SERVICES
          </span>

          <h2>
            Everything You Need,
            <br />
            Delivered by <span>NAAV</span>
          </h2>

          <p>
            Food, Grocery, Medicine, Parcel, Dry Fruits and
            Spices — all delivered from trusted local stores
            through one simple app.
          </p>

        </div>

        <div className="services-grid">

          {services.map((item, index) => (
            <div
              className="service-card"
              key={index}
              style={{
                animationDelay: `${index * 0.12}s`,
              }}
            >
              <div className="service-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <button className="service-btn">
                Learn More →
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}