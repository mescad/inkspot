import React, { useContext,useState } from "react";
import "./Contacts.css";

import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";

import emailjs from 'emailjs-com';

function Contacts() {
  // Get the current language from the context
  const { language } = useContext(LanguageContext);
  // Get the translations for Contacts
  const t = translations[language].Contacts;


  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Use your EmailJS credentials
    emailjs.send(
      'service_lvqft9e',    // replace with your EmailJS service ID
      'template_7ux4m7e',   // replace with your EmailJS template ID
      form,
      'Gbeee8cyyDAvaiV5V'        // replace with your EmailJS user/public key
    )
    .then((result) => {
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', phone: '' });
    }, (error) => {
      setStatus('Failed to send message. Please try again later.');
    });
  };

  return (
    <div id='contacts' className="contact-container">
      
        <h1>{t.title}</h1>

        

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder={t.form.namePlaceholder} required value={form.name} // HIGHLIGHTED
          onChange={handleChange} />
          <input type="email" name="email" placeholder={t.form.emailPlaceholder} required value={form.email} // HIGHLIGHTED
          onChange={handleChange}/>
          <input type="tel" name="phone" placeholder={t.form.phonePlaceholder} required value={form.phone} // HIGHLIGHTED
          onChange={handleChange}/>
          <button type="submit">{t.form.sendButton}</button>
        </form>
        {status && <p>{status}</p>}

       
      
    </div>
  );
}

export default Contacts;
