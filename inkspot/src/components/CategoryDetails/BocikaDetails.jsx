import React, { useContext,useState } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";
import cube from "../../assets/cube.png";
import bocika from "../../assets/bocika170.png";
import bocika180 from "../../assets/bocika180.png";
import "./BocikaDetails.css";
import SubCard from "./SubCard";
import AuxCardDetails from "./AuxCardDetails";

const BocikaDetails = () => {
  // Get the current language from context
  const { language } = useContext(LanguageContext);
  // Access the translations for BocikaDetails based on the current language
  const t = translations[language].BocikaDetails;


   
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const closeModal = () => {
    setSelectedProduct(null); // Close the modal when clicking outside
  };

  return (
   
  <div className="bocika-grid">

  <SubCard className="solvent-card"
          name={t.cardTitles.card1}
          imgsrc={cube}
          details='Profesional and industrial grade solvent based flexographic inks'
          onClick={() => setSelectedProduct("solvent")}
          />
   <SubCard className="solvent-card"
          name={t.cardTitles.card2}
          imgsrc={bocika180}
          details='Profesional and industrial grade solvent based flexographic inks'
          onClick={() => setSelectedProduct("solvent")}
          />

  <SubCard className="solvent-card"
          name={t.cardTitles.card3}
          imgsrc={bocika}
          details='Profesional and industrial grade solvent based flexographic inks'
          onClick={() => setSelectedProduct("solvent")}
          />
   <SubCard className="solvent-card"
          name={t.cardTitles.card4}
          imgsrc={bocika}
          details='Profesional and industrial grade solvent based flexographic inks'
          onClick={() => setSelectedProduct("solvent")}
          />
   <SubCard className="solvent-card"
          name={t.cardTitles.card5}
          imgsrc={bocika}
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

export default BocikaDetails;
