import { Bike, Layers3, Store, UsersRound } from "lucide-react";
import "./Stats.css";

export default function Stats() {
  const stats = [
    {
      number: "30+",
      title: "Local partners",
      detail: "Restaurants and neighbourhood stores",
      icon: Store,
    },
    {
      number: "1K+",
      title: "Happy customers",
      detail: "Choosing convenient local delivery",
      icon: UsersRound,
    },
    {
      number: "6",
      title: "Delivery categories",
      detail: "Everything essential in one app",
      icon: Layers3,
    },
    {
      number: "100%",
      title: "Local network",
      detail: "Built around Kundapura communities",
      icon: Bike,
    },
  ];

  return (
    <section className="stats-section" aria-label="NAAV in numbers">
      <div className="stats-shell">
        <div className="stats-intro">
          <span>NAAV in numbers</span>
          <p>A growing delivery ecosystem powered by local trust.</p>
        </div>

        <div className="stats-grid">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div className="stats-card" key={item.title}>
                <span className="stats-icon"><Icon size={20} /></span>
                <strong>{item.number}</strong>
                <h2>{item.title}</h2>
                <p>{item.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
