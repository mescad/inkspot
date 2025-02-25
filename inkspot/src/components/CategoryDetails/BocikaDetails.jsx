import React, { useContext } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";
import cube from "../../assets/cube.png";
import bocika from "../../assets/bocika170.png";
import bocika180 from "../../assets/bocika180.png";
import "./BocikaDetails.css";

const BocikaDetails = () => {
  // Get the current language from context
  const { language } = useContext(LanguageContext);
  // Access the translations for BocikaDetails based on the current language
  const t = translations[language].BocikaDetails;

  return (
    <div className="product-details">
      <h2>{t.productTitle}</h2>
      <div className="bocika-grid">
        <div className="bocika-card bc1">
          <h2>{t.cardTitles.card1}</h2>
          <img className="cube" src={cube} alt={t.cardTitles.card1} />
        </div>
        <div className="bocika-card bc2">
          <h2>{t.cardTitles.card2}</h2>
          <img className="bocika-170" src={bocika} alt={t.cardTitles.card2} />
        </div>
        <div className="bocika-card bc3">
          <h2>{t.cardTitles.card3}</h2>
          <img className="bocika-170" src={bocika180} alt={t.cardTitles.card3} />
        </div>
        <div className="bocika-card bc4">
          <h2>{t.cardTitles.card4}</h2>
          <img className="bocika-170" src={bocika180} alt={t.cardTitles.card4} />
        </div>
        <div className="bocika-card bc5">
          <h2>{t.cardTitles.card5}</h2>
          <img className="bocika-170" src={bocika180} alt={t.cardTitles.card5} />
        </div>
      </div>
    </div>
  );
};

export default BocikaDetails;
