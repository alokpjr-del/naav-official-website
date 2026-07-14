import { Quote, Star } from "lucide-react";
import "./Testimonials.css";

const reviews = [
  {
    name: "Prakash",
    place: "Kundapura",
    initials: "PK",
    review:
      "Very fast delivery. Food arrived hot and fresh. Highly recommended!",
    accent: "brand",
  },
  {
    name: "Sneha",
    place: "Kundapura",
    initials: "SN",
    review:
      "Best local delivery app. Grocery and medicine delivery is excellent.",
    accent: "gold",
  },
  {
    name: "Ramesh",
    place: "Kundapura",
    initials: "RM",
    review:
      "Affordable delivery charges and very friendly delivery partners.",
    accent: "brand",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="testimonials-tag">Customer reviews</span>
          <h2>
            Loved across
            <span> Kundapura.</span>
          </h2>
          <p>Real feedback from customers who order with NAAV every day.</p>
        </div>

        <div className="review-grid">
          {reviews.map((item) => (
            <article className="review-card" key={item.name}>
              <span className="review-quote">
                <Quote size={22} fill="currentColor" />
              </span>

              <div className="review-stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="review-text">{item.review}</p>

              <div className="review-person">
                <span className={`review-avatar avatar-${item.accent}`}>
                  {item.initials}
                </span>
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.place}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
