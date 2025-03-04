import "./Catalog.css";
import Card from "../Card/Card";

import apa from "../../assets/apa.png";
import solvent from "../../assets/solvent.png";
import aux from "../../assets/barel.png";
import bocika from "../../assets/bocika.png";


import AuxDetails from "../CategoryDetails/AuxDetails";
import BocikaDetails from "../CategoryDetails/BocikaDetails";
import SolventDetails from "../CategoryDetails/SolventDetails";
import ApaDetails from "../CategoryDetails/ApaDetails";

import { useState, useContext } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";

function Catalog() {
  // Consume the language context
  const { language } = useContext(LanguageContext);
  // Get the translations for the Catalog section based on current language
  const t = translations[language].Catalog;

  const [selectedProduct, setSelectedProduct] = useState(null);

  const closeModal = () => {
    setSelectedProduct(null); // Close the modal when clicking outside
  };

  return (
    <>
      <div className="catalog">
        <h1>{t.catalogTitle}</h1>

        <div className="product-catalog">
          <Card
            className="solvent-card"
            name={t.solventCard}
            imgsrc={solvent}
            details='Profesional and industrial grade solvent based flexographic inks'
            onClick={() => setSelectedProduct("solvent")}
          />
          <Card
            name={t.apaCard}
            imgsrc={apa}
            details='Profesional and industrial grade water based flexographic inks'
            onClick={() => setSelectedProduct("apa")}
          />
          <Card
            name={t.bocikaCard}
            imgsrc={bocika}
            details='Solvents and Thinners for flexographic applications and for surface printing'
            onClick={() => setSelectedProduct("bocika")}
          />
          <Card
            name={t.auxCard}
            imgsrc={aux}
            details='Discover Auxiliary products and supportive products for flexografic print production'
            onClick={() => setSelectedProduct("aux")}
          />
        </div>
      </div>

{/* Conditional Modal Rendering */}
{selectedProduct && (
  <div className="solvent-modal-overlay" onClick={closeModal}>
    <div className="solvent-modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="solvent-close-button" onClick={closeModal}>
        ✖
      </button>
      {selectedProduct === "solvent" && <SolventDetails />}
      {selectedProduct === "apa" && <ApaDetails />}
      {selectedProduct === "bocika" && <BocikaDetails />}
      {selectedProduct === "aux" && <AuxDetails />}
    </div>
  </div>
)}

    </>
  );
}

export default Catalog;
