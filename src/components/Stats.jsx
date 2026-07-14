export default function Stats() {
  const stats = [
    { number: "100+", title: "Restaurant Partners" },
    { number: "10K+", title: "Happy Customers" },
    { number: "25+", title: "Delivery Partners" },
    { number: "24/7", title: "Customer Support" },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>NAAV in Numbers</h2>

      <div style={styles.grid}>
        {stats.map((item, index) => (
          <div key={index} style={styles.card}>
            <h1>{item.number}</h1>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
    background: "#ffffff",
    textAlign: "center",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    maxWidth: "1100px",
    margin: "auto",
  },
  card: {
    padding: "30px",
    borderRadius: "15px",
    background: "#f8f8f8",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },
};