import React, { useContext } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";
import "./ApaDetails.css";

const ApaDetails = () => {
  // Consume the current language from context
  const { language } = useContext(LanguageContext);
  // Get the translations for the current language for ApaDetails
  const t = translations[language].ApaDetails;

  // Helper function to render a grid of color cards
  const renderColorGrid = (colorKeys) => (
    <section className="color-grid">
      {colorKeys.map((color) => (
        <div key={color} className="color-card">
          <div className={`palete palete-${color}`}></div>
          <div className="palete-description">{t.colorNames[color]}</div>
        </div>
      ))}
    </section>
  );

  // Define the order of color keys you want to show
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

  return (
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

      <h2 className="color-title">{t.colorTitles.hirtie}</h2>
      {renderColorGrid(colorsOrder)}

      <h2 className="color-title">{t.colorTitles.carton}</h2>
      {renderColorGrid(colorsOrder)}

      <h2 className="color-title">{t.colorTitles.pahare}</h2>
      {renderColorGrid(colorsOrder)}

      <h2 className="color-title">{t.colorTitles.caiete}</h2>
      {renderColorGrid(colorsOrder)}

      <h2 className="color-title">{t.colorTitles.servetele}</h2>
      {renderColorGrid(colorsOrder)}
    </div>
  );
};

export default ApaDetails;
