import React, { useContext, useState } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";
import bucket20 from "../../assets/bucket20.png";
import "./BocikaDetails.css"; // Or adjust the CSS file as needed
import AuxCardDetails from "./AuxCardDetails";
import SubCard from "./SubCard";

import washingPDF_RO from '../../assets/technicals/aux/TDS SOLUTIE SPALARE ANILOXI SOLVENT-RO.PDF'
import catalystPDF_RO from '../../assets/technicals/aux/catalizator_RO.pdf'
import adhesivePDF_RO from '../../assets/technicals/aux/Adeziv-Laminare_RO.pdf'
import waxPDF_RO from '../../assets/technicals/aux/wax_RO.pdf'
import varnishPDF_RO from '../../assets/technicals/aux/TDS - SOLUTIE DE varnish_RO.pdf'
import primerPDF_RO from '../../assets/technicals/aux/PRIMER 2C PU 907020111.pdf'
import bioadhesivePDF_RO from '../../assets/technicals/aux/bioadeziv-laminare.doc'


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
        details={t.cardDescription.card1}
        onClick={() => setSelectedProduct("washing")}
        />
 <SubCard className="solvent-card"
        name={t.cardTitles.card2}
        imgsrc={bucket20}
        details={t.cardDescription.card2}
        onClick={() => setSelectedProduct("catalyst")}
        />

<SubCard className="solvent-card"
        name={t.cardTitles.card3}
        imgsrc={bucket20}
        details={t.cardDescription.card3}
        onClick={() => setSelectedProduct("adhesive")}
        />
 <SubCard className="solvent-card"
        name={t.cardTitles.card4}
        imgsrc={bucket20}
        details={t.cardDescription.card4}
        onClick={() => setSelectedProduct("wax")}
        />
 <SubCard className="solvent-card"
        name={t.cardTitles.card5}
        imgsrc={bucket20}
        details={t.cardDescription.card5}
        onClick={() => setSelectedProduct("varnish")}
        />
<SubCard className="solvent-card"
        name={t.cardTitles.card6}
        imgsrc={bucket20}
        details={t.cardDescription.card6}
        onClick={() => setSelectedProduct("primer")}
        />
 <SubCard className="solvent-card"
        name={t.cardTitles.card7}
        imgsrc={bucket20}
        details={t.cardDescription.card7}
        onClick={() => setSelectedProduct("bioadhesive")}
        />





  {/* Modal Overlay */}
  {selectedProduct && (
    <div className="solventcard-modal-overlay" onClick={closeModal}>
      <div className="solventcard-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="solventcard-close-button" onClick={closeModal}>
          ✖
        </button>

        {/* Render the selected product details component */}
        {selectedProduct === "washing" && <AuxCardDetails productTitle={t.cardTitles.card1} descriptionText={t.descriptionText.card1} pdfRO={washingPDF_RO} pdfRU={washingPDF_RO} pdfENG={washingPDF_RO} />}
        {selectedProduct === "catalyst" && <AuxCardDetails productTitle={t.cardTitles.card2} descriptionText={t.descriptionText.card2} pdfRO={catalystPDF_RO} pdfRU={catalystPDF_RO} pdfENG={catalystPDF_RO} />}
        {selectedProduct === "adhesive" && <AuxCardDetails productTitle={t.cardTitles.card3} descriptionText={t.descriptionText.card3} pdfRO={adhesivePDF_RO} pdfRU={adhesivePDF_RO} pdfENG={adhesivePDF_RO}  />}
        {selectedProduct === "wax" && <AuxCardDetails productTitle={t.cardTitles.card4} descriptionText={t.descriptionText.card4} pdfRO={waxPDF_RO} pdfRU={waxPDF_RO} pdfENG={waxPDF_RO}  />}
        {selectedProduct === "varnish" && <AuxCardDetails productTitle={t.cardTitles.card5} descriptionText={t.descriptionText.card5} pdfRO={varnishPDF_RO} pdfRU={varnishPDF_RO} pdfENG={varnishPDF_RO}  />}
        {selectedProduct === "primer" && <AuxCardDetails productTitle={t.cardTitles.card6} descriptionText={t.descriptionText.card6} pdfRO={primerPDF_RO} pdfRU={primerPDF_RO} pdfENG={primerPDF_RO}  />}
        {selectedProduct === "bioadhesive" && <AuxCardDetails productTitle={t.cardTitles.card7} descriptionText={t.descriptionText.card7} pdfRO={bioadhesivePDF_RO} pdfRU={bioadhesivePDF_RO} pdfENG={bioadhesivePDF_RO}  />}
      </div>
    </div>
  )}
</div>
    </div>
  );
};

export default AuxDetails;
