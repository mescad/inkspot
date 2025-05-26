import React, { useContext,useState } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";
import cube from "../../assets/cube.png";
import bocika from "../../assets/bocika170.png";
import bocika180 from "../../assets/bocika180.png";
import "./BocikaDetails.css";
import SubCard from "./SubCard";
import AuxCardDetails from "./AuxCardDetails";

import flexoPDF_RO from '../../assets/technicals/bocika/Fisa tehnica Metoxipropanol.pdf'
import ethilAcetatePDF_RO from "../../assets/technicals/bocika/MSDS ACETAT DE ETIL.pdf"
import metoxiPDF_RO from '../../assets/technicals/bocika/Fisa tehnica Metoxipropanol.pdf'
import etoxiPDF_RO from "../../assets/technicals/bocika/MSDS ETOXIPROPANOL - 1-ETOXI-2-PROPANOL.pdf"

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
          details={t.cardDescription.card1}
          onClick={() => setSelectedProduct("flexo-cube")}
          />
   <SubCard className="solvent-card"
          name={t.cardTitles.card2}
          imgsrc={bocika180}
          details={t.cardDescription.card2}
          onClick={() => setSelectedProduct("flexo-bocika")}
          />

  <SubCard className="solvent-card"
          name={t.cardTitles.card3}
          imgsrc={bocika}
          details={t.cardDescription.card3}
          onClick={() => setSelectedProduct("ethil-acetate")}
          />
   <SubCard className="solvent-card"
          name={t.cardTitles.card4}
          imgsrc={bocika}
          details={t.cardDescription.card4}
          onClick={() => setSelectedProduct("metoxi")}
          />
   <SubCard className="solvent-card"
          name={t.cardTitles.card5}
          imgsrc={bocika}
          details={t.cardDescription.card5}
          onClick={() => setSelectedProduct("ethoxi")}
          />

 



    {/* Modal Overlay */}
    {selectedProduct && ( 
      <div className="solventcard-modal-overlay" onClick={closeModal}>
        <div className="solventcard-modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="solventcard-close-button" onClick={closeModal}>
            ✖
          </button>

          {/* Render the selected product details component */}
          {selectedProduct === "flexo-cube" && <AuxCardDetails productTitle={t.cardTitles.card1} descriptionText={t.descriptionText.card1} pdfRO={flexoPDF_RO} pdfRU={flexoPDF_RO} pdfENG={flexoPDF_RO}/>}
          {selectedProduct === "flexo-bocika" && <AuxCardDetails productTitle={t.cardTitles.card2} descriptionText={t.descriptionText.card2} pdfRO={flexoPDF_RO} pdfRU={flexoPDF_RO} pdfENG={flexoPDF_RO} />}
          {selectedProduct === "ethil-acetate" && <AuxCardDetails productTitle={t.cardTitles.card3} descriptionText={t.descriptionText.card3} pdfRO={ethilAcetatePDF_RO} pdfRU={ethilAcetatePDF_RO} pdfENG={ethilAcetatePDF_RO} />}
          {selectedProduct === "metoxi" && <AuxCardDetails productTitle={t.cardTitles.card4} descriptionText={t.descriptionText.card4} pdfRO={metoxiPDF_RO} pdfRU={metoxiPDF_RO} pdfENG={metoxiPDF_RO} />}
          {selectedProduct === "ethoxi" && <AuxCardDetails productTitle={t.cardTitles.card5} descriptionText={t.descriptionText.card5} pdfRO={etoxiPDF_RO} pdfRU={etoxiPDF_RO} pdfENG={etoxiPDF_RO} />}
        </div>
      </div>
    )}
  </div>
  );
};

export default BocikaDetails;
