import './AuxCardDetails.css'
import React, { useContext } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";

import OptionCard from './OptionCard';

function AuxCardDetails({pdfRO,pdfRU,pdfENG,productTitle,descriptionText}){


  // Consume the current language from the global context
  const { language } = useContext(LanguageContext);
  // Access the translations for the current language for SolventDetails
  const t = translations[language].SolventDetails;

  const openPDF = (pdfPath) => {
    window.open(pdfPath, '_blank', 'noopener,noreferrer');
  };
    return(
        

<div className="product-details">
      <h2>{productTitle}</h2>
      <section className="prod-info">
        <div className="prod-description">
          <h3>{t.descriptionTitle}</h3>
          <p>{descriptionText}</p>
        </div>
        <div className="prod-technical">
          <h3>{t.technicalTitle}</h3>
          <ul>
            <li>{t.technicalList.producer}</li>
            <li>{t.technicalList.mass}</li>
            <li>{t.technicalList.temperature}</li>
          </ul>
          <h2 className="pdf-title">{t.downloadFiles}</h2>
          <div className="pdf-downloads">
          <button type="button" className='pdf-button' onClick={() => openPDF(pdfRO)}>RO</button>
          <button type="button" className='pdf-button' onClick={() => openPDF(pdfRU)}>RUS</button>
          <button type="button" className='pdf-button' onClick={() => openPDF(pdfENG)}>ENG</button>

          </div>
        </div>
      </section>
      <section className='options'>

        <h2>{t.worksBestWith}</h2>
        <div className='option-list'>
        <OptionCard name={'optionx'}/>
        <OptionCard name={'optionx'}/>
        <OptionCard name={'optionx'}/>
        </div>

       




      </section>
      
      </div>


        
    );
}



export default AuxCardDetails