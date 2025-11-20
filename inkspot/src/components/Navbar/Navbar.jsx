import { useContext, useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";
import "./Navbar.css";
import logo from '../../assets/newlogo.png'

import usFlag from "../../assets/uk-flag.png"; // English
import roFlag from "../../assets/ro-flag.png"; // Romana
import ruFlag from "../../assets/ru-flag.png"; // Rusa
import { useCart } from "../Cart/CartContext";

function Navbar({ onCartToggle }) {
  const { language, setLanguage } = useContext(LanguageContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { itemCount } = useCart();
  const location = useLocation();

  // Get current translations
  const t = translations[language];

  const flags = {
    English: usFlag,
    Romana: roFlag,
    Rusa: ruFlag,
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  const handleContactsClick = () => {
    const contactsSection = document.getElementById("contacts");
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAboutClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      // If already on home page, scroll to top
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Otherwise, Link will handle navigation
  };

  return (
    <nav className="navbar">
      <Link to="/" onClick={handleHomeClick} className="nav-logo-link">
        <div className="nav-group">
          <img className='nav-logo' alt='logo' src={logo}/>
          <h1 className="nav-title">Galapac</h1>
        </div>
      </Link>
     
      <div className="nav-options">
        <Link to="/" onClick={handleHomeClick} className="nav-home-link">
          <h2>{t.navbarHome}</h2>
        </Link>
        
        <h2 className="contacts" onClick={handleContactsClick}>{t.contacts}</h2>
        <h2 className="about-us" onClick={handleAboutClick}>{t.navbarAbout}</h2>
        <button
          type="button"
          className="cart-trigger"
          onClick={onCartToggle}
        >
          <span className="cart-icon" role="img" aria-label="cart">🛒</span>
          <span className="cart-label">{t.cart}</span>
          {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
        </button>
        <div className="dropdown" ref={dropdownRef}>
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            <img src={flags[language]} alt={language} title={language} className="flag" />
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              {Object.entries(flags).map(([lang, flagImg]) => (
                <div key={lang} className="dropdown-item" onClick={() => handleLanguageChange(lang)}>
                  <img src={flagImg} alt={lang} title={lang} className="flag" />
                  <span>{lang}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
