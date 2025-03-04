import React, { useContext } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";

import SubCard from "./SubCard";
import solvent from '../../assets/solvent.png'
import './SolventDetails.css'


import { useState } from "react";
import SubCardDetails from "./SubCardDetails";


const SolventDetails = () => {
  // Consume the current language from the global context
  const { language } = useContext(LanguageContext);
  // Access the translations for the current language for SolventDetails
  const t = translations[language].SolventDetails;

  


  
   
  
    const [selectedProduct, setSelectedProduct] = useState(null);
  
    const closeModal = () => {
      setSelectedProduct(null); // Close the modal when clicking outside
    };
  
 
 

  return (




  <div className="solvent-grid">

    <SubCard className="solvent-card"
            name={t.cardTitles.card2}
            imgsrc={solvent}
            details='Profesional and industrial grade solvent based flexographic inks'
            onClick={() => setSelectedProduct("solvent")}
            />
     <SubCard className="solvent-card"
            name={t.cardTitles.card3}
            imgsrc={solvent}
            details='Profesional and industrial grade solvent based flexographic inks'
            onClick={() => setSelectedProduct("solvent")}
            />

    <SubCard className="solvent-card"
            name={t.cardTitles.card4}
            imgsrc={solvent}
            details='Profesional and industrial grade solvent based flexographic inks'
            onClick={() => setSelectedProduct("solvent")}
            />
     <SubCard className="solvent-card"
            name={t.cardTitles.card5}
            imgsrc={solvent}
            details='Profesional and industrial grade solvent based flexographic inks'
            onClick={() => setSelectedProduct("solvent")}
            />
     <SubCard className="solvent-card"
            name={t.cardTitles.card6}
            imgsrc={solvent}
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
            {selectedProduct === "solvent" && <SubCardDetails />}
            {selectedProduct === "apa" && <SubCardDetails />}
            {selectedProduct === "bocika" && <SubCardDetails />}
            {selectedProduct === "aux" && <SubCardDetails />}
          </div>
        </div>
      )}
    </div>
    
  );
};

export default SolventDetails;
