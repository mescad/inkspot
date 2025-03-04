import React, { useContext, useState } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";
import bucket20 from "../../assets/bucket20.png";
import "./BocikaDetails.css"; // Or adjust the CSS file as needed
import AuxCardDetails from "./AuxCardDetails";
import SubCard from "./SubCard";

const AuxDetails = () => {
  // Get the current language from the context
  const { language } = useContext(LanguageContext);
  // Access translations for AuxDetails
  const t = translations[language].AuxDetails;


   
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const closeModal = () => {
    setSelectedProduct(null); // Close the modal when clicking outside
  };

  return (
    <div className="product-details">
      <h2>{t.productTitle}</h2>

      <div className="bocika-grid">

<SubCard className="solvent-card"
        name={t.cardTitles.card1}
        imgsrc={bucket20}
        details='Profesional and industrial grade solvent based flexographic inks'
        onClick={() => setSelectedProduct("solvent")}
        />
 <SubCard className="solvent-card"
        name={t.cardTitles.card2}
        imgsrc={bucket20}
        details='Profesional and industrial grade solvent based flexographic inks'
        onClick={() => setSelectedProduct("solvent")}
        />

<SubCard className="solvent-card"
        name={t.cardTitles.card3}
        imgsrc={bucket20}
        details='Profesional and industrial grade solvent based flexographic inks'
        onClick={() => setSelectedProduct("solvent")}
        />
 <SubCard className="solvent-card"
        name={t.cardTitles.card4}
        imgsrc={bucket20}
        details='Profesional and industrial grade solvent based flexographic inks'
        onClick={() => setSelectedProduct("solvent")}
        />
 <SubCard className="solvent-card"
        name={t.cardTitles.card5}
        imgsrc={bucket20}
        details='Profesional and industrial grade solvent based flexographic inks'
        onClick={() => setSelectedProduct("solvent")}
        />
<SubCard className="solvent-card"
        name={t.cardTitles.card6}
        imgsrc={bucket20}
        details='Profesional and industrial grade solvent based flexographic inks'
        onClick={() => setSelectedProduct("solvent")}
        />
 <SubCard className="solvent-card"
        name={t.cardTitles.card7}
        imgsrc={bucket20}
        details='Profesional and industrial grade solvent based flexographic inks'
        onClick={() => setSelectedProduct("solvent")}
        />





  {/* Modal Overlay */}
  {selectedProduct && (
    <div className="solventcard-modal-overlay" onClick={closeModal}>
      <div className="solventcard-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="solventcard-close-button" onClick={closeModal}>
          ✖
        </button>

        {/* Render the selected product details component */}
        {selectedProduct === "solvent" && <AuxCardDetails />}
        {selectedProduct === "apa" && <AuxCardDetails />}
        {selectedProduct === "bocika" && <AuxCardDetails />}
        {selectedProduct === "aux" && <AuxCardDetails />}
      </div>
    </div>
  )}
</div>
    </div>
  );
};

export default AuxDetails;
