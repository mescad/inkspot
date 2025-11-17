import React, { useContext,useState } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";
import cube from "../../assets/cube.png";
import bocika from "../../assets/bocika170.png";
import bocika180 from "../../assets/bocika180.png";
import "./BocikaDetails.css";
import SubCard from "./SubCard";
import BocikaCardDetails from "./BocikaCardDetails";

import flexoSecurityPDF_RO from '../../assets/technicals/bocika/SolventFlexoGalapac_RO.pdf'
import flexoTechnicalPDF_ENG from '../../assets/technicals/bocika/SolventFlexoTechnical80-20.pdf'

import ethilAcetateSecurityPDF_RO from "../../assets/technicals/bocika/MSDS ACETAT DE ETIL.pdf"
import ethilAcetateTechnicalPDF_ENG from "../../assets/technicals/bocika/TDS ACETAT DE ETIL -EN.pdf"

import metoxiSecurityPDF_RO from '../../assets/technicals/bocika/Fisa tehnica Metoxipropanol.pdf'
import metoxiTechnicalPDF_ENG from '../../assets/technicals/bocika/TDS METOXIPROPANOL -EN.pdf'

import etoxiSecurityPDF_RO from "../../assets/technicals/bocika/MSDS ETOXIPROPANOL - 1-ETOXI-2-PROPANOL.pdf"
import etoxiTechnicalPDF_ENG from "../../assets/technicals/bocika/TDS SOLVENT ETOSSIPROPANOL-EN.pdf"

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
          {selectedProduct === "flexo-cube" && <BocikaCardDetails productTitle={t.cardTitles.card1} descriptionText={t.descriptionText.card1} 
          pdfSecRO={flexoSecurityPDF_RO} pdfSecRU={flexoSecurityPDF_RO} pdfSecENG={flexoSecurityPDF_RO} 
          pdfTechRO={flexoTechnicalPDF_ENG} pdfTechRU={flexoTechnicalPDF_ENG} pdfTechENG={flexoTechnicalPDF_ENG} 
          downloadFilesSecurity={t.downloadFilesSecurity}
          param1={t.param1.card1} key1={t.key1.card1}
          param2={t.param2.card1} key2={t.key2.card1}
          param3={t.param3.card1} key3={t.key3.card1}/>}
          {selectedProduct === "flexo-bocika" && <BocikaCardDetails productTitle={t.cardTitles.card2} descriptionText={t.descriptionText.card2} 
          pdfSecRO={flexoSecurityPDF_RO} pdfSecRU={flexoSecurityPDF_RO} pdfSecENG={flexoSecurityPDF_RO}
          pdfTechRO={flexoTechnicalPDF_ENG} pdfTechRU={flexoTechnicalPDF_ENG} pdfTechENG={flexoTechnicalPDF_ENG} 
          downloadFilesSecurity={t.downloadFilesSecurity} 
          param1={t.param1.card2} key1={t.key1.card2}
          param2={t.param2.card2} key2={t.key2.card2}
          param3={t.param3.card2} key3={t.key3.card2} />}
          {selectedProduct === "ethil-acetate" && <BocikaCardDetails productTitle={t.cardTitles.card3} descriptionText={t.descriptionText.card3} 
          pdfSecRO={ethilAcetateSecurityPDF_RO} pdfSecRU={ethilAcetateSecurityPDF_RO} pdfSecENG={ethilAcetateSecurityPDF_RO} 
          pdfTechRO={ethilAcetateTechnicalPDF_ENG} pdfTechRU={ethilAcetateTechnicalPDF_ENG} pdfTechENG={ethilAcetateTechnicalPDF_ENG}
          downloadFilesSecurity={t.downloadFilesSecurity}
          param1={t.param1.card3} key1={t.key1.card3}
          param2={t.param2.card3} key2={t.key2.card3}
          param3={t.param3.card3} key3={t.key3.card3} />}
          {selectedProduct === "metoxi" && <BocikaCardDetails productTitle={t.cardTitles.card4} descriptionText={t.descriptionText.card4} 
          pdfSecRO={metoxiSecurityPDF_RO} pdfSecRU={metoxiSecurityPDF_RO} pdfSecENG={metoxiSecurityPDF_RO}
          pdfTechRO={metoxiTechnicalPDF_ENG} pdfTechRU={metoxiTechnicalPDF_ENG} pdfTechENG={metoxiTechnicalPDF_ENG} 
          downloadFilesSecurity={t.downloadFilesSecurity}
          param1={t.param1.card4} key1={t.key1.card4}
          param2={t.param2.card4} key2={t.key2.card4}
          param3={t.param3.card4} key3={t.key3.card4}  />}
          {selectedProduct === "ethoxi" && <BocikaCardDetails productTitle={t.cardTitles.card5} descriptionText={t.descriptionText.card5} 
          pdfSecRO={etoxiSecurityPDF_RO} pdfSecRU={etoxiSecurityPDF_RO} pdfSecENG={etoxiSecurityPDF_RO}
          pdfTechRO={etoxiTechnicalPDF_ENG} pdfTechRU={etoxiTechnicalPDF_ENG} pdfTechENG={etoxiTechnicalPDF_ENG} 
          downloadFilesSecurity={t.downloadFilesSecurity}
          param1={t.param1.card5} key1={t.key1.card5}
          param2={t.param2.card5} key2={t.key2.card5}
          param3={t.param3.card5} key3={t.key3.card5} />}
        </div>
      </div>
    )}
  </div>
  );
};

export default BocikaDetails;
