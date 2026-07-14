import "./Testimonials.css";
import SectionHeader from "./SectionHeader";

const reviews = [
  {
    name: "Prakash",
    place: "Kundapura",
    review:
      "Very fast delivery. Food arrived hot and fresh. Highly recommended!",
  },
  {
    name: "Sneha",
    place: "Kundapura",
    review:
      "Best local delivery app. Grocery and medicine delivery is excellent.",
  },
  {
    name: "Ramesh",
    place: "Kundapura",
    review:
      "Affordable delivery charges and very friendly delivery partners.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">

      <SectionHeader
        className="title"
        eyebrow="CUSTOMER REVIEWS"
        title={
          <>
            Loved by
            <span> Kundapura</span>
          </>
        }
        description="Thousands of happy customers trust NAAV every day."
      />

      <div className="review-grid">

        {reviews.map((item, index) => (

          <div className="review-card" key={index}>

            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>

            <p>"{item.review}"</p>

            <h4>{item.name}</h4>

            <span>{item.place}</span>

          </div>

        ))}

      </div>

    </section>
  );
}