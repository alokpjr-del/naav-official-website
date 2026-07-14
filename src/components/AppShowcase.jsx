import "./AppShowcase.css";
import handleImageError from "../utils/handleImageError";

import slide1 from "../assets/Slide 1.png";
import slide2 from "../assets/Slide 2.png";
import slide3 from "../assets/Slide 3.png";
import slide4 from "../assets/Slide 4.png";
import slide5 from "../assets/Slide 5.png";
import slide6 from "../assets/Slide 6.png";

export default function AppShowcase() {
  const screens = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
  ];

  return (
    <section className="showcase">

      <div className="showcase-title">

        <span>NAAV MOBILE APP</span>

        <h2>
          Everything You Need
          <br />
          <strong>In One App</strong>
        </h2>

        <p>
          Food • Grocery • Medicine • Parcel • Dry Fruits • Spices
        </p>

      </div>

      <div className="showcase-grid">

        {screens.map((image, index) => (

          <div className="phone-card" key={index}>

            <img
              src={image}
              alt={`NAAV App ${index + 1}`}
              onError={handleImageError}
            />

          </div>

        ))}

      </div>

    </section>
  );
}