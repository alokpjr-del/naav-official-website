import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import About from "./components/About";
import Restaurants from "./components/Restaurants";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import Franchise from "./components/Franchise";
import AppShowcase from "./components/AppShowcase";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Restaurants />
        <WhyChoose />
        <Testimonials />
        <Franchise />
        <AppShowcase />
      </main>

      <Footer />
    </div>
  );
}

export default App;
