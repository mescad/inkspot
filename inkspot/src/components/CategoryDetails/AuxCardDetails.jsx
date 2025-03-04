import './AuxCardDetails'
import React, { useContext } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";

function AuxCardDetails(props){


  // Consume the current language from the global context
  const { language } = useContext(LanguageContext);
  // Access the translations for the current language for SolventDetails
  const t = translations[language].SolventDetails;


    return(
        

<div className="product-details">
      <h2>{t.productTitle}</h2>
      <section className="prod-info">
        <div className="prod-description">
          <h3>{t.descriptionTitle}</h3>
          <p>{t.descriptionText}</p>
        </div>
        <div className="prod-technical">
          <h3>{t.technicalTitle}</h3>
          <ul>
            <li>{t.technicalList.producer}</li>
            <li>{t.technicalList.mass}</li>
            <li>{t.technicalList.temperature}</li>
          </ul>
        </div>
      </section>
      
      </div>


        
    );
}



export default AuxCardDetails