import React, { useContext } from "react";
import "./Contacts.css";

import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";

function Contacts() {
  // Get the current language from the context
  const { language } = useContext(LanguageContext);
  // Get the translations for Contacts
  const t = translations[language].Contacts;

  return (
    <div id='contacts' className="contact-container">
      
        <h1>{t.title}</h1>

        

        <form className="contact-form">
          <input type="text" placeholder={t.form.namePlaceholder} required />
          <input type="email" placeholder={t.form.emailPlaceholder} required />
          <input type="tel" placeholder={t.form.phonePlaceholder} required />
          <button type="submit">{t.form.sendButton}</button>
        </form>

       
      
    </div>
  );
}

export default Contacts;
