import React, { useContext } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";
import './SubCardDetails.css'

function SubCardDetails({pdfRO,pdfRU,pdfENG,title,descriptionText,characteristicsText,sup1,sup2,sup3,sup4,sup5,sup6}){
  // Consume the current language from the global context
  const { language } = useContext(LanguageContext);
  // Access the translations for the current language for SolventDetails
  const t = translations[language].SolventDetails;

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
    "warmred",
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




  const supports = [sup1, sup2, sup3, sup4, sup5, sup6].filter(Boolean);

    return(




    <div className="product-details">
      <h2 className="solv-subcard-title">{title}</h2>

      <section className="prod-info">
        <div className="prod-main">

        <div className="prod-description">
          <h3>{t.descriptionTitle}</h3>
          <p>{descriptionText}</p>
        </div>
        <div className="prod-charact">
          <h3>{t.characteristicsTitle}</h3>
          <p>{characteristicsText}</p>
        </div>
        </div>
      
        <div className="prod-technical">
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



      {renderColorGrid(colorsOrder)}
      </div>
    
    
    
    );
}

export default SubCardDetails