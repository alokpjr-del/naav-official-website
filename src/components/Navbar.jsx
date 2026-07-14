import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/NAAV LOGO.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        <div className="logo">
          <img src={logo} alt="NAAV Logo" />
        </div>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#franchise">Franchise</a>
          <a href="#contact">Contact</a>

          <button className="nav-btn">
            Download App
          </button>
        </nav>

        <div
          className="menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

      </div>
    </header>
  );
}

export default Navbar;