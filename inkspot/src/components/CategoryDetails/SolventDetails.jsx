import React, { useContext } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";

import SubCard from "./SubCard";
import solvent from '../../assets/solvent.png'
import './SolventDetails.css'


import EuroflexEXTHD_RO from '../../assets/technicals/solvent/TDS - Euroflex EXT HD_RO.pdf'
import EuroflexINTHD_RO from '../../assets/technicals/solvent/TDS - Euroflex INT HD_RO.pdf'
import EuroflexRenflex_RO from "../../assets/technicals/solvent/TDS - RENFLEX_RO.pdf"
import EuroflexUniversal_RO from '../../assets/technicals/solvent/TDS - EUROFLEX UNIVERSAL OPV_EN.pdf'
import Euroflex2C_RO from '../../assets/technicals/solvent/TDS - Euroflex OP OPV 20-EN (1).pdf'


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
            name={t.cardTitles.card1}
            imgsrc={solvent}
            details={t.cardDescription.card1}
            onClick={() => setSelectedProduct("EUROFLEX-EXT-HD")}
            />
     <SubCard className="solvent-card"
            name={t.cardTitles.card2}
            imgsrc={solvent}
            details={t.cardDescription.card2}
            onClick={() => setSelectedProduct("EUROFLEX-INT-HD")}
            />

    <SubCard className="solvent-card"
            name={t.cardTitles.card3}
            imgsrc={solvent}
            details={t.cardDescription.card3}
            onClick={() => setSelectedProduct("REFLEX")}
            />
     <SubCard className="solvent-card"
            name={t.cardTitles.card4}
            imgsrc={solvent}
            details={t.cardDescription.card4}
            onClick={() => setSelectedProduct("2CFLEXO")}
            />
     <SubCard className="solvent-card"
            name={t.cardTitles.card5}
            imgsrc={solvent}
            details={t.cardDescription.card5}
            onClick={() => setSelectedProduct("EUROFLEXU")}
            />

   



      {/* Modal Overlay */}
      {selectedProduct && (
        <div className="solventcard-modal-overlay" onClick={closeModal}>
          <div className="solventcard-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="solventcard-close-button" onClick={closeModal}>
              ✖
            </button>

            {/* Render the selected product details component */}
            {selectedProduct === "EUROFLEX-EXT-HD" && <SubCardDetails title={t.cardTitles.card1} pdfRO={EuroflexEXTHD_RO} pdfRU={EuroflexEXTHD_RO} pdfENG={EuroflexEXTHD_RO} descriptionText={t.descriptionText.card1} />}
            {selectedProduct === "EUROFLEX-INT-HD" && <SubCardDetails title={t.cardTitles.card2} pdfRO={EuroflexINTHD_RO} pdfRU={EuroflexINTHD_RO} pdfENG={EuroflexINTHD_RO} descriptionText={t.descriptionText.card2} />}
            {selectedProduct === "REFLEX" && <SubCardDetails title={t.cardTitles.card3} pdfRO={EuroflexRenflex_RO} pdfRU={EuroflexRenflex_RO} pdfENG={EuroflexRenflex_RO} descriptionText={t.descriptionText.card3} />}
            {selectedProduct === "2CFLEXO" && <SubCardDetails title={t.cardTitles.card4} pdfRO={Euroflex2C_RO} pdfRU={Euroflex2C_RO} pdfENG={Euroflex2C_RO} descriptionText={t.descriptionText.card4} />}
            {selectedProduct === "EUROFLEXU" && <SubCardDetails title={t.cardTitles.card5} pdfRO={EuroflexUniversal_RO} pdfRU={EuroflexUniversal_RO} pdfENG={EuroflexUniversal_RO} descriptionText={t.descriptionText.card5} />}
          </div>
        </div>
      )}
    </div>
    
  );
};

export default SolventDetails;
