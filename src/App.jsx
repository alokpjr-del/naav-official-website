import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Services from "./components/Services";
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
        <Hero />
        <Stats />
        <Services />
        <About />
        <WhyChoose />
        <Testimonials />
        <Franchise />
        <AppShowcase />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;