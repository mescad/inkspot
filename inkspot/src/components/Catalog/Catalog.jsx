import "./Catalog.css";
import Card from "../Card/Card";

import apa from "../../assets/apa.png";
import solvent from "../../assets/solvent.png";
import aux from "../../assets/aux.png";
import bocika from "../../assets/bocika.png";
import bocika180 from "../../assets/bocika180.png"
import bocika170 from "../../assets/bocika170.png"

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
            onClick={() => setSelectedProduct("solvent")}
          />
          <Card
            name={t.apaCard}
            imgsrc={apa}
            onClick={() => setSelectedProduct("apa")}
          />
          <Card
            name={t.bocikaCard}
            imgsrc={bocika180}
            onClick={() => setSelectedProduct("bocika")}
          />
          <Card
            name={t.auxCard}
            imgsrc={bocika170}
            onClick={() => setSelectedProduct("aux")}
          />
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              ✖
            </button>

            {/* Render the selected product details component */}
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
