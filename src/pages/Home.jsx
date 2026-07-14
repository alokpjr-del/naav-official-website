import {
  ArrowRight,
  ShoppingBag,
  Utensils,
  Pill,
  Package,
  Star,
} from "lucide-react";
import handleImageError from "../utils/handleImageError";

export default function Home() {
  const services = [
    {
      title: "Food Delivery",
      icon: <Utensils size={34} />,
      desc: "Order delicious food from your favourite local restaurants.",
    },
    {
      title: "Grocery Delivery",
      icon: <ShoppingBag size={34} />,
      desc: "Fresh vegetables, groceries and daily essentials delivered fast.",
    },
    {
      title: "Medicine Delivery",
      icon: <Pill size={34} />,
      desc: "Quick medicine delivery from trusted medical stores.",
    },
    {
      title: "Parcel Delivery",
      icon: <Package size={34} />,
      desc: "Safe parcel pickup and doorstep delivery across Kundapura.",
    },
  ];

  return (
    <div className="bg-white">

      {/* HERO */}

      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <p className="uppercase tracking-widest text-yellow-300 font-semibold">
              Kundapura's Own Delivery App
            </p>

            <h1 className="text-5xl lg:text-6xl font-extrabold mt-5 leading-tight">
              Fast Local Delivery
              <br />
              Anytime, Anywhere.
            </h1>

            <p className="mt-6 text-lg text-green-100 leading-8">
              Order food, groceries, medicines and parcels from trusted local
              businesses with NAAV.
            </p>

            <div className="flex gap-4 mt-10">

              <button className="bg-white text-green-700 px-7 py-4 rounded-xl font-bold hover:scale-105 transition">
                Download App
              </button>

              <button className="border border-white px-7 py-4 rounded-xl flex items-center gap-2 hover:bg-white hover:text-green-700 transition">
                Become Partner
                <ArrowRight size={18}/>
              </button>

            </div>

          </div>

          <div className="flex justify-center">

            <img
              src="/phone.png"
              alt="NAAV App"
              className="w-80 drop-shadow-2xl"
              onError={handleImageError}
            />

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Our Services
          </h2>

          <p className="text-center text-gray-500 mt-3">
            Everything delivered from local businesses.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            {services.map((item) => (

              <div
                key={item.title}
                className="rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition bg-white border"
              >

                <div className="text-green-700">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY CHOOSE */}

      <section className="bg-gray-100 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Why Choose NAAV?
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-14">

            {[
              "Fast Delivery",
              "Trusted Local Partners",
              "Affordable Charges",
              "Customer Support",
            ].map((item) => (

              <div
                key={item}
                className="bg-white rounded-2xl p-8 text-center shadow"
              >

                <Star
                  className="mx-auto text-yellow-500"
                  fill="gold"
                />

                <h3 className="font-bold text-xl mt-5">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}