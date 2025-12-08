import "./Catalog.css";
import Card from "../Card/Card";

import apa from "../../assets/apa.png";
import solvent from "../../assets/solvent1.png";
import aux from "../../assets/barel.png";
import bocika from "../../assets/bocika.png";


import AuxDetails from "../CategoryDetails/AuxDetails";
import BocikaDetails from "../CategoryDetails/BocikaDetails";
import SolventDetails from "../CategoryDetails/SolventDetails";
import ApaDetails from "../CategoryDetails/ApaDetails";

import solvent2 from "../../assets/solvent2.png";
import apa2 from "../../assets/apa2.png";
import lamination2 from "../../assets/lamination2.png";
import bioadesiv from "../../assets/bioadesiv.png";
import cube2 from "../../assets/cube2.png";
import ethyl2 from "../../assets/ethyl2.png";
import apa31 from "../../assets/apa3.2.png";
import solvent31 from "../../assets/solvent3.2.png";

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
      <div className="catalog" id="catalog">
        <h1>{t.catalogTitle}</h1>

        <div className="product-catalog">
          <Card
            className="solvent-card"
            name={t.solventCard}
            imgsrc={solvent31}
            details={t.solventCardDescription}
            onClick={() => setSelectedProduct("solvent")}
            productData={{
              id: "catalog-solvent",
              name: t.solventCard,
              description: t.solventCardDescription,
              image: solvent,
              category: t.catalogTitle,
            }}
          />
          <Card
           className="apa-card"
            name={t.apaCard}
            imgsrc={apa31}
            details={t.apaCardDescription}
            onClick={() => setSelectedProduct("apa")}
            productData={{
              id: "catalog-apa",
              name: t.apaCard,
              description: t.apaCardDescription,
              image: apa,
              category: t.catalogTitle,
            }}
          />
          <Card
            className="bocika-card"
            name={t.bocikaCard}
            imgsrc={ethyl2}
            details={t.bocikaCardDescription}
            onClick={() => setSelectedProduct("bocika")}
            productData={{
              id: "catalog-bocika",
              name: t.bocikaCard,
              description: t.bocikaCardDescription,
              image: bocika,
              category: t.catalogTitle,
            }}
          />
          <Card
            className="aux-card"
            name={t.auxCard}
            imgsrc={lamination2}
            details={t.auxCardDescription}  
            onClick={() => setSelectedProduct("aux")}
            productData={{
              id: "catalog-aux",
              name: t.auxCard,
              description: t.auxCardDescription,
              image: aux,
              category: t.catalogTitle,
            }}
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
