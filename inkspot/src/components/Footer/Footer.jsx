import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";
import { useContext } from "react";

function Footer() {
  // Get the current language from the context
  const { language } = useContext(LanguageContext);
  // Get the translations for Contacts
  const t = translations[language].Contacts;

  return (
    <div className="footer">
      <div className="footer-container">

        <div className="company">
            <h1>Galapac SRL</h1>
            <h2>Premium flexographic inks for your business</h2>



        </div>

      <div className="quicklinks">
        <h1>Quick links</h1>
        <h2>Abouts us</h2>
        <h2>Products</h2>
        <h2>Contact us</h2>
      </div>

      <div className="contact-info">
        <h1>Contact info</h1>
        <p>
          <FontAwesomeIcon icon={faPhone} /> +373 (0) 69683324
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> galapac@gmail.com
        </p>
      </div>

      <div className="socials">
        <h1>Follow us</h1>

<div className="social-icons">

<a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>

</div>
       


      </div>


      </div>



      <p className="copyright">{t.copyright}</p>
    </div>
  );
}

export default Footer;
