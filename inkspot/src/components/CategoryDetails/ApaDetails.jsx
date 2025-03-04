import React, { useContext, useState } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";
import "./ApaDetails.css";
import SubCard from "./SubCard";
import AuxCardDetails from "./AuxCardDetails";
import apa from "../../assets/apa.png";

const ApaDetails = () => {
  // Consume the current language from context
  const { language } = useContext(LanguageContext);
  // Get the translations for the current language for ApaDetails
  const t = translations[language].ApaDetails;

   
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const closeModal = () => {
    setSelectedProduct(null); // Close the modal when clicking outside
  };

  return (
    <div className="apa-grid">
<SubCard className="solvent-card"
            name={t.cardTitles.card1}
            imgsrc={apa}
            details='Profesional and industrial grade solvent based flexographic inks'
            onClick={() => setSelectedProduct("solvent")}
            />
<SubCard className="solvent-card"
            name={t.cardTitles.card2}
            imgsrc={apa}
            details='Profesional and industrial grade solvent based flexographic inks'
            onClick={() => setSelectedProduct("solvent")}
            />
     <SubCard className="solvent-card"
            name={t.cardTitles.card3}
            imgsrc={apa}
            details='Profesional and industrial grade solvent based flexographic inks'
            onClick={() => setSelectedProduct("solvent")}
            />

    <SubCard className="solvent-card"
            name={t.cardTitles.card4}
            imgsrc={apa}
            details='Profesional and industrial grade solvent based flexographic inks'
            onClick={() => setSelectedProduct("solvent")}
            />
     <SubCard className="solvent-card"
            name={t.cardTitles.card5}
            imgsrc={apa}
            details='Profesional and industrial grade solvent based flexographic inks'
            onClick={() => setSelectedProduct("solvent")}
            />
     <SubCard 
            name={t.cardTitles.card6}
            imgsrc={apa}
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


    
   
  );
};

export default ApaDetails;
