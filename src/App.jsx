import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Services from "./components/Services";
import Restaurants from "./components/Restaurants";
import AppShowcase from "./components/AppShowcase";
import Franchise from "./components/Franchise";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">

      {/* Navigation */}
      <Navbar />

      <main>

        {/* Hero */}
        <Hero />

        {/* About */}
        <About />

        {/* Why Choose */}
        <WhyChoose />

        {/* Services */}
        <Services />

        {/* Restaurants */}
        <Restaurants />

        {/* App Showcase */}
        <AppShowcase />

        {/* Franchise */}
        <Franchise />

        {/* Testimonials */}
        <Testimonials />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;