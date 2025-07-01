import { useContext } from 'react';
import '../About/About.css';

import bocika from '../../assets/bocika.png';

import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";

function About(){
  // Get the current language from the context
  const { language } = useContext(LanguageContext);
  // Get the translations for Contacts
  const t = translations[language].About;
    return(

        <section className="about" id='about'>


        <div className="about-text">
            <h1>{t.aboutUs}</h1>
            <p style={{ whiteSpace: "pre-line" }}>

                {t.aboutDescription}
            </p>



        </div>
        <div className="about-img">
            <img src={bocika} alt="About Us" />


        </div>




        </section>
    );
}


export default About;