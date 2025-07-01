import React, { useContext } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";
import './ApaSubCardDetails.css'

function ApaSubCardDetails({pdfRO,pdfRU,pdfENG,productTitle,descriptionText}){
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
     <h2>{t.colorTitles.hirtie}</h2>
      
      {renderColorGrid(colorsOrder)}
      </div>
      <div className="color-group">
     <h2>{t.colorTitles.pahare}</h2>
      
      {renderColorGrid(colorsOrder)}
      </div>
      <div className="color-group">
     <h2>{t.colorTitles.carton}</h2>
      
      {renderColorGrid(colorsOrder)}
      </div>
      <div className="color-group">
     <h2>{t.colorTitles.servetele}</h2>
      
      {renderColorGrid(colorsOrder)}
      </div>
      <div className="color-group">
     <h2>{t.colorTitles.caiete}</h2>
      
      {renderColorGrid(colorsOrder)}
      </div>
      
      </div>
    
    
    
    );
}

export default ApaSubCardDetails