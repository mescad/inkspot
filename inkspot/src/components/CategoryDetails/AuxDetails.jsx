import React, { useContext, useState, useMemo } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";
import bucket20 from "../../assets/bucket20.png";
import "./BocikaDetails.css"; // Or adjust the CSS file as needed
import AuxCardDetails from "./AuxCardDetails";
import SubCard from "./SubCard";
import { useCart } from "../Cart/CartContext";

import washingPDF_RO from '../../assets/technicals/aux/TDS SOLUTIE SPALARE ANILOXI SOLVENT-RO.PDF'
import catalystPDF_RO from '../../assets/technicals/aux/catalizator_RO.pdf'
import adhesivePDF_RO from '../../assets/technicals/aux/Adeziv-Laminare221_RO.doc'
import waxPDF_RO from '../../assets/technicals/aux/wax_RO.pdf'
import varnishPDF_RO from '../../assets/technicals/aux/TDS - EUROFLEX UNIVERSAL OPV_EN VARNISH.pdf'
import primerPDF_RO from '../../assets/technicals/aux/PRIMER 2C PU 907020111.pdf'
import bioadhesivePDF_RO from '../../assets/technicals/aux/BIOADESIV-CLICHE-ENG.pdf'


const AuxDetails = () => {
  // Get the current language from the context
  const { language } = useContext(LanguageContext);
  // Access translations for AuxDetails
  const t = translations[language].AuxDetails;
  const { items } = useCart();

  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const closeModal = () => {
    setSelectedProduct(null); // Close the modal when clicking outside
  };

  // Calculate badge counts for each product
  const productBadgeCounts = useMemo(() => {
    const counts = {};
    const productIds = [
      "aux-washing",
      "aux-catalyst",
      "aux-adhesive",
      "aux-wax",
      "aux-varnish",
      "aux-primer",
      "aux-bioadhesive",
    ];

    productIds.forEach((productId) => {
      const total = items.reduce((sum, item) => {
        if (item.id === productId || item.id.startsWith(`${productId}-`)) {
          return sum + item.quantity;
        }
        return sum;
      }, 0);
      counts[productId] = total;
    });

    return counts;
  }, [items]);

  return (
    <div className="product-details">
     

      <div className="bocika-grid">

<SubCard className="solvent-card"
        name={t.cardTitles.card1}
        imgsrc={bucket20}
        details={t.cardDescription.card1}
        onClick={() => setSelectedProduct("washing")}
        productId="aux-washing"
        category={t.productTitle}
        badgeCount={productBadgeCounts["aux-washing"] || 0}
        />
 <SubCard className="solvent-card"
        name={t.cardTitles.card2}
        imgsrc={bucket20}
        details={t.cardDescription.card2}
        onClick={() => setSelectedProduct("catalyst")}
        productId="aux-catalyst"
        category={t.productTitle}
        badgeCount={productBadgeCounts["aux-catalyst"] || 0}
        />

<SubCard className="solvent-card"
        name={t.cardTitles.card3}
        imgsrc={bucket20}
        details={t.cardDescription.card3}
        onClick={() => setSelectedProduct("adhesive")}
        productId="aux-adhesive"
        category={t.productTitle}
        badgeCount={productBadgeCounts["aux-adhesive"] || 0}
        />
 <SubCard className="solvent-card"
        name={t.cardTitles.card4}
        imgsrc={bucket20}
        details={t.cardDescription.card4}
        onClick={() => setSelectedProduct("wax")}
        productId="aux-wax"
        category={t.productTitle}
        badgeCount={productBadgeCounts["aux-wax"] || 0}
        />
 <SubCard className="solvent-card"
        name={t.cardTitles.card5}
        imgsrc={bucket20}
        details={t.cardDescription.card5}
        onClick={() => setSelectedProduct("varnish")}
        productId="aux-varnish"
        category={t.productTitle}
        badgeCount={productBadgeCounts["aux-varnish"] || 0}
        />
<SubCard className="solvent-card"
        name={t.cardTitles.card6}
        imgsrc={bucket20}
        details={t.cardDescription.card6}
        onClick={() => setSelectedProduct("primer")}
        productId="aux-primer"
        category={t.productTitle}
        badgeCount={productBadgeCounts["aux-primer"] || 0}
        />
 <SubCard className="solvent-card"
        name={t.cardTitles.card7}
        imgsrc={bucket20}
        details={t.cardDescription.card7}
        onClick={() => setSelectedProduct("bioadhesive")}
        productId="aux-bioadhesive"
        category={t.productTitle}
        badgeCount={productBadgeCounts["aux-bioadhesive"] || 0}
        />





  {/* Modal Overlay */}
  {selectedProduct && (
    <div className="solventcard-modal-overlay" onClick={closeModal}>
      <div className="solventcard-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="solventcard-close-button" onClick={closeModal}>
          ✖
        </button>

        {/* Render the selected product details component */}
        {selectedProduct === "washing" && <AuxCardDetails productTitle={t.cardTitles.card1} descriptionText={t.descriptionText.card1} pdfRO={washingPDF_RO} pdfRU={washingPDF_RO} pdfENG={washingPDF_RO} onClose={closeModal} />}
        {selectedProduct === "catalyst" && <AuxCardDetails productTitle={t.cardTitles.card2} descriptionText={t.descriptionText.card2} pdfRO={catalystPDF_RO} pdfRU={catalystPDF_RO} pdfENG={catalystPDF_RO} onClose={closeModal} />}
        {selectedProduct === "adhesive" && <AuxCardDetails productTitle={t.cardTitles.card3} descriptionText={t.descriptionText.card3} pdfRO={adhesivePDF_RO} pdfRU={adhesivePDF_RO} pdfENG={adhesivePDF_RO} onClose={closeModal} />}
        {selectedProduct === "wax" && <AuxCardDetails productTitle={t.cardTitles.card4} descriptionText={t.descriptionText.card4} pdfRO={waxPDF_RO} pdfRU={waxPDF_RO} pdfENG={waxPDF_RO} onClose={closeModal} />}
        {selectedProduct === "varnish" && <AuxCardDetails productTitle={t.cardTitles.card5} descriptionText={t.descriptionText.card5} pdfRO={varnishPDF_RO} pdfRU={varnishPDF_RO} pdfENG={varnishPDF_RO} onClose={closeModal} />}
        {selectedProduct === "primer" && <AuxCardDetails productTitle={t.cardTitles.card6} descriptionText={t.descriptionText.card6} pdfRO={primerPDF_RO} pdfRU={primerPDF_RO} pdfENG={primerPDF_RO} onClose={closeModal} />}
        {selectedProduct === "bioadhesive" && <AuxCardDetails productTitle={t.cardTitles.card7} descriptionText={t.descriptionText.card7} pdfRO={bioadhesivePDF_RO} pdfRU={bioadhesivePDF_RO} pdfENG={bioadhesivePDF_RO} onClose={closeModal} />}
      </div>
    </div>
  )}
</div>
    </div>
  );
};

export default AuxDetails;
