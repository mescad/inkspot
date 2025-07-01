
import './Card.css'
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";
import React, { useContext } from 'react';

function Card(props) {

  const { language } = useContext(LanguageContext);
  // Access the translations for the current language for SolventDetails
  const t = translations[language];


  return (
    <>
      <section className="card" onClick={props.onClick} style={{ cursor: "pointer" }}>
        
        <img className='card-image' alt="product-img" src={props.imgsrc} />
        <h2 className='card-name'>{props.name}</h2>
        <p className='card-description'>{props.details}</p>
        <button className='card-button'>{t.cardButton}</button>
       
        


        

      </section>
    </>
  );
}

export default Card;
