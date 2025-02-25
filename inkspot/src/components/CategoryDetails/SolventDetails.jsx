import React, { useContext } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";
import "./ApaDetails.css";

const SolventDetails = () => {
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
      {renderColorGrid(colorsOrder)}
    </div>
  );
};

export default SolventDetails;
