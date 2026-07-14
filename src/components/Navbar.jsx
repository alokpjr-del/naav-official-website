import { useState } from "react";
import { Compass, Menu, X } from "lucide-react";
import "./Navbar.css";
import logo from "../assets/NAAV LOGO.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <a className="nav-logo" href="#home" onClick={closeMenu}>
          <img src={logo} alt="NAAV Logo" />
        </a>

        <nav
          aria-label="Primary navigation"
          className={menuOpen ? "nav-links active" : "nav-links"}
        >
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#how-it-works" onClick={closeMenu}>How it works</a>
          <a href="#whychoose" onClick={closeMenu}>Why NAAV</a>
          <a href="#franchise" onClick={closeMenu}>Franchise</a>

          <a className="nav-btn" href="#services" onClick={closeMenu}>
            <Compass size={17} strokeWidth={2.4} />
            Explore NAAV
          </a>
        </nav>

        <button
          type="button"
          className="menu"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
