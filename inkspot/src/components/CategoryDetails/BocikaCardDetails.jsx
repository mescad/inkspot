import './BocikaCardDetails.css'
import React, { useContext } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";

import OptionCard from './OptionCard';

function BocikaCardDetails({pdfSecRO,pdfSecRU,pdfSecENG,pdfTechRO,pdfTechRU,pdfTechENG,productTitle,descriptionText,downloadFilesSecurity,param1,key1,param2,key2,param3,key3, onClose}){


  // Consume the current language from the global context
  const { language } = useContext(LanguageContext);
  // Access the translations for the current language for SolventDetails
  const t = translations[language].SolventDetails;

  const bt=translations[language].BocikaDetails;

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
          <p>{descriptionText}</p>
        </div>
        <div className="prod-charact">
          <h3>{bt.consistency}</h3>
          <ul>
            <li>{param1}: {key1}</li>
            <li>{param2}: {key2}</li>
            <li>{param3}: {key3}</li>
          </ul>
        </div>
</div>

        <div className="prod-technical">
          <h3>{t.technicalTitle}</h3>
          <ul>
            <li>{t.technicalList.producer}</li>
            <li>{t.technicalList.mass}</li>
            <li>{t.technicalList.temperature}</li>
          </ul>
         

          <h2 className="pdf-title">{downloadFilesSecurity}</h2>
          <div className="pdf-downloads">
          <button type="button" className='pdf-button' onClick={() => openPDF(pdfSecRO)}>RO</button>
          <button type="button" className='pdf-button' onClick={() => openPDF(pdfSecRU)}>RUS</button>
          <button type="button" className='pdf-button' onClick={() => openPDF(pdfSecENG)}>ENG</button>
          </div>

          <h2 className="pdf-title">{t.downloadFiles}</h2>
          <div className="pdf-downloads">
          <button type="button" className='pdf-button' onClick={() => openPDF(pdfTechRO)}>RO</button>
          <button type="button" className='pdf-button' onClick={() => openPDF(pdfTechRU)}>RUS</button>
          <button type="button" className='pdf-button' onClick={() => openPDF(pdfTechENG)}>ENG</button>
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



export default BocikaCardDetails