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
  const t = translations[language].Footer;

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="footer">
      <div className="footer-container">

        <div className="company">
            <h1>Galapac SRL</h1>
            <h2>{t.footerCompDescription}</h2>



        </div>

      <div className="quicklinks">
        <h1>{t.footerQuickLinks}</h1>
        <button className="footer-link" onClick={() => handleScroll('about')}>{t.footerAboutUs}</button>
          <button className="footer-link" onClick={() => handleScroll('catalog')}>{t.footerProducts}</button>
          <button className="footer-link" onClick={() => handleScroll('contacts')}>{t.footerContactUs}</button>
      </div>

      <div className="contact-info">
        <h1>{t.footerContactInfo}</h1>
        <p>
          <FontAwesomeIcon icon={faPhone} /> +373 (0) 69683324
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> galapac@gmail.com
        </p>
      </div>

      <div className="socials">
        <h1>{t.footerFollowUs}</h1>

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
