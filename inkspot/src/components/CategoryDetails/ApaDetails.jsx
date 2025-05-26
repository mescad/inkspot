import React, { useContext, useState } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";
import "./ApaDetails.css";
import SubCard from "./SubCard";
import ApaSubCardDetails from "./ApaSubCardDetails";
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
            details={t.cardDescription.card1}
            onClick={() => setSelectedProduct("Eurokraft VHT")}
            />
<SubCard className="solvent-card"
            name={t.cardTitles.card2}
            imgsrc={apa}
            details={t.cardDescription.card2}
            onClick={() => setSelectedProduct("Eurokraft RT")}
            />
     <SubCard className="solvent-card"
            name={t.cardTitles.card3}
            imgsrc={apa}
            details={t.cardDescription.card3}
            onClick={() => setSelectedProduct("Eurokraft FL")}
            />

    <SubCard className="solvent-card"
            name={t.cardTitles.card4}
            imgsrc={apa}
            details={t.cardDescription.card4}
            onClick={() => setSelectedProduct("Eurokraft Gloss")}
            />
     <SubCard className="solvent-card"
            name={t.cardTitles.card5}
            imgsrc={apa}
            details={t.cardDescription.card5}
            onClick={() => setSelectedProduct("Euraqua MAIL")}
            />
     <SubCard 
            name={t.cardTitles.card6}
            imgsrc={apa}
            details={t.cardDescription.card6}
            onClick={() => setSelectedProduct("Euraqua SP")}
            />

   



      {/* Modal Overlay */}
      {selectedProduct && (
        <div className="solventcard-modal-overlay" onClick={closeModal}>
          <div className="solventcard-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="solventcard-close-button" onClick={closeModal}>
              ✖
            </button>

            {/* Render the selected product details component */}
            {selectedProduct === "Eurokraft VHT" && <ApaSubCardDetails productTitle={t.cardTitles.card1} descriptionText={t.descriptionText.card1} />}
            {selectedProduct === "Eurokraft RT" && <ApaSubCardDetails productTitle={t.cardTitles.card2} descriptionText={t.descriptionText.card2}  />}
            {selectedProduct === "Eurokraft FL" && <ApaSubCardDetails productTitle={t.cardTitles.card3} descriptionText={t.descriptionText.card3}  />}
            {selectedProduct === "Eurokraft Gloss" && <ApaSubCardDetails productTitle={t.cardTitles.card4} descriptionText={t.descriptionText.card4}  />}
            {selectedProduct === "Euraqua MAIL" && <ApaSubCardDetails productTitle={t.cardTitles.card5} descriptionText={t.descriptionText.card5}  />}
            {selectedProduct === "Euraqua SP" && <ApaSubCardDetails productTitle={t.cardTitles.card6} descriptionText={t.descriptionText.card6}  />}
          </div>
        </div>
      )}
    </div>


    
   
  );
};

export default ApaDetails;
