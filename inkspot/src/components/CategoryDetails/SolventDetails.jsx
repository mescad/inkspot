import React, { useContext } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";

import SubCard from "./SubCard";
import solvent from '../../assets/solvent1.png'
import './SolventDetails.css'


import EuroflexEXTHD_RO from '../../assets/technicals/solvent/TDS - Euroflex EXT HD_RO.pdf'
import EuroflexINTHD_RO from '../../assets/technicals/solvent/TDS - Euroflex INT HD_RO.pdf'
import EuroflexRenflex_RO from "../../assets/technicals/solvent/TDS - RENFLEX_RO.pdf"
import EuroflexUniversal_ENG from '../../assets/technicals/solvent/TDS - EUROFLEX_U_ENG.pdf'
import Euroflex2C_ENG from '../../assets/technicals/solvent/2CFLEXO_ENG.pdf'


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
            {selectedProduct === "EUROFLEX-EXT-HD" && <SubCardDetails title={t.cardTitles.card1} pdfRO={EuroflexEXTHD_RO} pdfRU={EuroflexEXTHD_RO} pdfENG={EuroflexEXTHD_RO} descriptionText={t.descriptionText.card1} characteristicsText={t.characteristicsText.card1}
             sup1={t.applicationList.card1.support1} sup2={t.applicationList.card1.support2} sup3={t.applicationList.card1.support3} sup4={t.applicationList.card1.support4} sup5={t.applicationList.card1.support5} sup6={t.applicationList.card1.support6} />}
            {selectedProduct === "EUROFLEX-INT-HD" && <SubCardDetails title={t.cardTitles.card2} pdfRO={EuroflexINTHD_RO} pdfRU={EuroflexINTHD_RO} pdfENG={EuroflexINTHD_RO} descriptionText={t.descriptionText.card2} characteristicsText={t.characteristicsText.card2}
            sup1={t.applicationList.card2.support1} sup2={t.applicationList.card2.support2} sup3={t.applicationList.card2.support3} sup4={t.applicationList.card2.support4} sup5={t.applicationList.card2.support5} sup6={t.applicationList.card2.support6} />}
            {selectedProduct === "REFLEX" && <SubCardDetails title={t.cardTitles.card3} pdfRO={EuroflexRenflex_RO} pdfRU={EuroflexRenflex_RO} pdfENG={EuroflexRenflex_RO} descriptionText={t.descriptionText.card3} characteristicsText={t.characteristicsText.card3}
            sup1={t.applicationList.card3.support1} sup2={t.applicationList.card3.support2} sup3={t.applicationList.card3.support3} sup4={t.applicationList.card3.support4} sup5={t.applicationList.card3.support5}  />}
            {selectedProduct === "2CFLEXO" && <SubCardDetails title={t.cardTitles.card4} pdfRO={Euroflex2C_ENG} pdfRU={Euroflex2C_ENG} pdfENG={Euroflex2C_ENG} descriptionText={t.descriptionText.card4}  characteristicsText={t.characteristicsText.card4}
            sup1={t.applicationList.card4.support1} sup2={t.applicationList.card4.support2} sup3={t.applicationList.card4.support3} sup4={t.applicationList.card4.support4} sup5={t.applicationList.card4.support5} />}
            {selectedProduct === "EUROFLEXU" && <SubCardDetails title={t.cardTitles.card5} pdfRO={EuroflexUniversal_ENG} pdfRU={EuroflexUniversal_ENG} pdfENG={EuroflexUniversal_ENG} descriptionText={t.descriptionText.card5} characteristicsText={t.characteristicsText.card5}
            sup1={t.applicationList.card5.support1} sup2={t.applicationList.card5.support2} sup3={t.applicationList.card5.support3} sup4={t.applicationList.card5.support4} sup5={t.applicationList.card5.support5} sup6={t.applicationList.card5.support6} sup7={t.applicationList.card5.support7} sup8={t.applicationList.card5.support8}/>}
          </div>
        </div>
      )}
    </div>
    
  );
};

export default SolventDetails;
