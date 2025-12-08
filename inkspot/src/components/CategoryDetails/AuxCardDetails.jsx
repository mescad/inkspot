import './AuxCardDetails.css'
import React, { useContext } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";

import OptionCard from './OptionCard';

function AuxCardDetails({pdfRO,pdfRU,pdfENG,productTitle,descriptionText,productImage, onClose}){


  // Consume the current language from the global context
  const { language } = useContext(LanguageContext);
  // Access the translations for the current language for SolventDetails
  const t = translations[language].SolventDetails;

  const openPDF = (pdfPath) => {
    window.open(pdfPath, '_blank', 'noopener,noreferrer');
  };
    return(
        

<div className="product-details">
      {onClose && (
        <button type="button" className="product-go-back-button" onClick={onClose} aria-label="Go back">
          ←
        </button>
      )}
      <h2 className='subcard-title'>{productTitle}</h2>

      <section className="prod-info">
      <div className="prod-main">
        <div className="prod-description">
          <h3>{t.descriptionTitle}</h3>
          <div className="prod-description-content">
            {productImage && (
              <img 
                src={productImage} 
                alt={productTitle} 
                className="prod-description-image"
              />
            )}
            <p>{descriptionText}</p>
          </div>
        </div>
        <div className="prod-charact">
          <h3>Characteistici</h3>
          <p>{descriptionText}</p>
        </div>
</div>

        <div className="prod-technical">
          <h3>{t.technicalTitle}</h3>
          <ul>
            <li>{t.technicalList.producer}</li>
            <li>{t.technicalList.mass}</li>
            <li>{t.technicalList.temperature}</li>
          </ul>
          <h3>Applications</h3>
          <ul>
            <li>{t.technicalList.producer}</li>
            <li>{t.technicalList.mass}</li> 
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

        <h2 className='options-title'>{t.worksBestWith}</h2>
        <div className='option-list'>
        <OptionCard name={'Euroflex EXT HD'}/>
        <OptionCard name={'Euroflex INT HD'}/>
        <OptionCard name={'RENFLEX'}/>
        </div>

       




      </section>
      
      </div>


        
    );
}



export default AuxCardDetails