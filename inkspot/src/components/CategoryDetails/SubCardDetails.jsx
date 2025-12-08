import React, { useContext, useMemo, useState } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";
import './SubCardDetails.css'
import { useCart } from "../Cart/CartContext";

function SubCardDetails({productId, productImage, shortDescription, pdfRO,pdfRU,pdfENG,title,descriptionText,characteristicsText,sup1,sup2,sup3,sup4,sup5,sup6, onClose}){
  // Consume the current language from the global context
  const { language } = useContext(LanguageContext);
  const globalTranslations = translations[language];
  // Access the translations for the current language for SolventDetails
  const t = globalTranslations.SolventDetails;
  const { addItem, items, showNotification } = useCart();
  const [pendingSelections, setPendingSelections] = useState({});
  const baseProductId = productId || title;

  // Define the order of colors (keys matching your translations)
  const colorsOrder = [
    "cyan",
    "magenta",
    "yellow",
    "black",
    "white",
    "violet",
    "green",
    "blue",
    "purple",
    "rhodamine",
    "warmred",
    "orange",
    "others",
  ];

  const handleColorSelect = (colorKey) => {
    setPendingSelections((prev) => {
      const next = { ...prev };
      next[colorKey] = (next[colorKey] || 0) + 1;
      return next;
    });
  };

  const cartColorCounts = useMemo(() => {
    if (!baseProductId) {
      return {};
    }
    return items.reduce((acc, item) => {
      if (item.id.startsWith(`${baseProductId}-`)) {
        const colorKey = item.id.substring(baseProductId.length + 1);
        if (colorKey) {
          acc[colorKey] = (acc[colorKey] || 0) + item.quantity;
        }
      }
      return acc;
    }, {});
  }, [items, baseProductId]);

  const hasPendingSelections = Object.keys(pendingSelections).length > 0;

  const handleAddToCart = () => {
    if (!hasPendingSelections) return;

    Object.entries(pendingSelections).forEach(([colorKey, count]) => {
      addItem({
        id: `${baseProductId}-${colorKey}`,
        name: `${title} - ${t.colorNames[colorKey]}`,
        description: shortDescription || descriptionText,
        image: productImage || "",
        category: t.productTitle,
        quantity: count,
      });
    });
    showNotification(globalTranslations.cartSuccess || globalTranslations.cartAddSuccess || "Items added to cart");
    setPendingSelections({});
  };

  const pendingSummary = Object.entries(pendingSelections)
    .map(([colorKey, count]) => `${count} × ${t.colorNames[colorKey]}`)
    .join(", ");

  const openPDF = (pdfPath) => {
    window.open(pdfPath, '_blank', 'noopener,noreferrer');
  };




  const supports = [sup1, sup2, sup3, sup4, sup5, sup6].filter(Boolean);

    return(




    <div className="product-details">
      {onClose && (
        <button type="button" className="product-go-back-button" onClick={onClose} aria-label="Go back">
          ←
        </button>
      )}
      <h2 className="solv-subcard-title">{title}</h2>

      <section className="prod-info">
        <div className="prod-main">

        <div className="prod-description">
          <h3>{t.descriptionTitle}</h3>
          <div className="prod-description-content">
            {productImage && (
              <img 
                src={productImage} 
                alt={title} 
                className="prod-description-image"
              />
            )}
            <p>{descriptionText}</p>
          </div>
        </div>
        <div className="prod-charact">
          <h3>{t.characteristicsTitle}</h3>
          <p>{characteristicsText}</p>
        </div>
        </div>
      
        <div className="prod-technical">
          <h3>{t.technicalTitle}</h3>
          <ul>
            <li>{t.technicalList.producer}</li>
            <li>{t.technicalList.mass}</li>
            <li>{t.technicalList.validity}</li>
            <li>{t.technicalList.caution}</li>
          </ul>
          <h3>{t.applicationTitle}</h3>
          <ul>
            {supports.map((sup, index) => (
              <li key={index}>{sup}</li>
            ))}
          </ul>

          <h2 className="pdf-title">{t.downloadFiles}</h2>
          <div className="pdf-downloads">
          <button type="button" className='pdf-button' onClick={() => openPDF(pdfRO)}>RO</button>
          <button type="button" className='pdf-button' onClick={() => openPDF(pdfRU)}>RUS</button>
          <button type="button" className='pdf-button' onClick={() => openPDF(pdfENG)}>ENG</button>

          </div>
   
        </div>
      </section>

      <div className="color-select-wrapper">
        <p className="color-selection-help">{globalTranslations.colorPrompt}</p>
        <section className="color-grid">
          {colorsOrder.map((color) => (
            <button
              type="button"
              key={color}
              className="color-card"
              onClick={() => handleColorSelect(color)}
              aria-pressed={false}
            >
              {((cartColorCounts[color] || 0) + (pendingSelections[color] || 0)) ? (
                <span className="color-count-badge">
                  {(cartColorCounts[color] || 0) + (pendingSelections[color] || 0)}
                </span>
              ) : null}
              <div className={`palete palete-${color}`}></div>
              <div className="palete-description">{t.colorNames[color]}</div>
            </button>
          ))}
        </section>

        <div className="color-selection-panel">
          {hasPendingSelections ? (
            <p className="color-selection-current">
              {globalTranslations.colorSelectedLabel}:{" "}
              <span>{pendingSummary}</span>
            </p>
          ) : null}
          <button
            type="button"
            className="color-add-button"
            onClick={handleAddToCart}
            disabled={!hasPendingSelections}
          >
            {globalTranslations.addToCart}
          </button>
        </div>
      </div>
      </div>
    
    
    
    );
}

export default SubCardDetails