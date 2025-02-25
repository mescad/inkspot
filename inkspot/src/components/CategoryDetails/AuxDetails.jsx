import React, { useContext } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";
import bucket20 from "../../assets/bucket20.png";
import "./BocikaDetails.css"; // Or adjust the CSS file as needed

const AuxDetails = () => {
  // Get the current language from the context
  const { language } = useContext(LanguageContext);
  // Access translations for AuxDetails
  const t = translations[language].AuxDetails;

  return (
    <div className="product-details">
      <h2>{t.productTitle}</h2>

      <div className="bocika-grid">
        <div className="bocika-card ac1">
          <h2>{t.cardTitles.card1}</h2>
          <img className="bocika-170" src={bucket20} alt={t.cardTitles.card1} />
        </div>

        <div className="bocika-card ac2">
          <h2>{t.cardTitles.card2}</h2>
          <img className="bocika-170" src={bucket20} alt={t.cardTitles.card2} />
        </div>

        <div className="bocika-card ac3">
          <h2>{t.cardTitles.card3}</h2>
          <img className="bocika-170" src={bucket20} alt={t.cardTitles.card3} />
        </div>

        <div className="bocika-card ac4">
          <h2>{t.cardTitles.card4}</h2>
          <img className="bocika-170" src={bucket20} alt={t.cardTitles.card4} />
        </div>

        <div className="bocika-card ac5">
          <h2>{t.cardTitles.card5}</h2>
          <img className="bocika-170" src={bucket20} alt={t.cardTitles.card5} />
        </div>
      </div>
    </div>
  );
};

export default AuxDetails;
