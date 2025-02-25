import React, { useContext } from "react";
import "./Contacts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";

function Contacts() {
  // Get the current language from the context
  const { language } = useContext(LanguageContext);
  // Get the translations for Contacts
  const t = translations[language].Contacts;

  return (
    <div id='contacts' className="contact-container">
      <div className="contact-card">
        <h1>{t.title}</h1>

        <div className="contact-info">
          <p>
            <FontAwesomeIcon icon={faPhone} /> +373 (0) 69683324
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> galapac@gmail.com
          </p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder={t.form.namePlaceholder} required />
          <input type="email" placeholder={t.form.emailPlaceholder} required />
          <input type="tel" placeholder={t.form.phonePlaceholder} required />
          <button type="submit">{t.form.sendButton}</button>
        </form>

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

        <p className="copyright">{t.copyright}</p>
      </div>
    </div>
  );
}

export default Contacts;
