import React, { useContext } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";
import './ApaSubCardDetails.css'

function ApaSubCardDetails({pdfRO,pdfRU,pdfENG,productTitle,descriptionText,sup1,sup2,sup3,sup4,char1,char2,char3,char4,char5}){
  // Consume the current language from the global context
  const { language } = useContext(LanguageContext);
  // Access the translations for the current language for SolventDetails
  const t = translations[language].ApaDetails;

  // Define the order of colors (keys matching your translations)
  const colorsOrder = [
    "cyan",
    "magenta",
    "yellow",
    "black",
    "white",
    "violet",
    "green",
    "blue",
    "purple",
    "rhodamine",
    "warmRed",
    "orange",
    "others",
  ];


  
  
  // Helper to render a grid of color cards
  const renderColorGrid = (colors) => (
    <section className="color-grid">
      {colors.map((color) => (
        <div key={color} className="color-card">
          <div className={`palete palete-${color}`}></div>
          <div className="palete-description">{t.colorNames[color]}</div>
        </div>
      ))}
    </section>
  );

  const openPDF = (pdfPath) => {
    window.open(pdfPath, '_blank', 'noopener,noreferrer');
  };
  const supports = [sup1, sup2, sup3, sup4].filter(Boolean);
  const charact = [char1, char2, char3, char4].filter(Boolean);

    return(




    <div className="apa-product-details">
      <h2 className ='apa-subcard-title'>{productTitle}</h2>
    
      <section className="apa-prod-info">
        <div className="apa-prod-main">

        <div className="apa-prod-description">
          <h3>{t.descriptionTitle}</h3>
          <p>{descriptionText}</p>
        </div>
        <div className="apa-prod-charact">
          <h3>{t.characteristicsTitle}</h3>
          <ul>
            {charact.map((charact, index) => (
              <li key={index}>{charact}</li>
            ))}
          </ul>
        </div>
        </div>

        <div className="apa-prod-technical">
          <h3>{t.technicalTitle}</h3>
          <ul>
            <li>{t.technicalList.producer}</li>
            <li>{t.technicalList.mass}</li>
            <li>{t.technicalList.validity}</li>
            <li>{t.technicalList.caution}</li>   
          </ul>

          <h3>{t.applicationTitle}</h3>
          <ul>
            {supports.map((sup, index) => (
              <li key={index}>{sup}</li>
            ))}
          </ul>

          <h2 className="pdf-title">{t.downloadFiles}</h2>
          <div className="pdf-downloads">
          <button type="button" className='pdf-button' onClick={() => openPDF(pdfRO)}>RO</button>
          <button type="button" className='pdf-button' onClick={() => openPDF(pdfRU)}>RUS</button>
          <button type="button" className='pdf-button' onClick={() => openPDF(pdfENG)}>ENG</button>

          </div>
        </div>
      </section>

      <div className="color-group">
     <h2 className="apa-grid-prodtype">{t.colorTitles.hirtie}</h2>
      {renderColorGrid(colorsOrder)}
      </div>

      <div className="color-group">
     <h2 className="apa-grid-prodtype">{t.colorTitles.pahare}</h2>
      {renderColorGrid(colorsOrder)}
      </div>

      <div className="color-group">
     <h2 className="apa-grid-prodtype">{t.colorTitles.carton}</h2>
      {renderColorGrid(colorsOrder)}
      </div>

      <div className="color-group">
     <h2 className="apa-grid-prodtype">{t.colorTitles.servetele}</h2>
      {renderColorGrid(colorsOrder)}
      </div>

      <div className="color-group">
     <h2 className="apa-grid-prodtype">{t.colorTitles.caiete}</h2> 
      {renderColorGrid(colorsOrder)}
      </div>
      
      </div>
    
    
    
    );
}

export default ApaSubCardDetails