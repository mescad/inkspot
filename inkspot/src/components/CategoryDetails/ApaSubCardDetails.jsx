import React, { useContext, useMemo, useState } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";
import './ApaSubCardDetails.css'
import { useCart } from "../Cart/CartContext";

function ApaSubCardDetails({productId, productImage, shortDescription, pdfRO,pdfRU,pdfENG,productTitle,descriptionText,sup1,sup2,sup3,sup4,char1,char2,char3,char4,char5, onClose}){
  // Consume the current language from the global context
  const { language } = useContext(LanguageContext);
  const globalTranslations = translations[language];
  // Access the translations for the current language for ApaDetails
  const t = translations[language].ApaDetails;
  const { addItem, items, showNotification } = useCart();
  const baseProductId = productId || productTitle;

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
    "warmRed",
    "orange",
    "others",
  ];

  // Define the 5 categories
  const categories = [
    { key: "hirtie", title: t.colorTitles.hirtie },
    { key: "pahare", title: t.colorTitles.pahare },
    { key: "carton", title: t.colorTitles.carton },
    { key: "servetele", title: t.colorTitles.servetele },
    { key: "caiete", title: t.colorTitles.caiete },
  ];

  // State for pending selections: { category-color: count }
  const [pendingSelections, setPendingSelections] = useState({});
  // State for expanded categories
  const [expandedCategories, setExpandedCategories] = useState({});

  const handleColorSelect = (categoryKey, colorKey) => {
    const selectionKey = `${categoryKey}-${colorKey}`;
    setPendingSelections((prev) => {
      const next = { ...prev };
      next[selectionKey] = (next[selectionKey] || 0) + 1;
      return next;
    });
  };

  const toggleCategory = (categoryKey) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryKey]: !prev[categoryKey],
    }));
  };

  // Get cart counts per category-color combination
  const cartColorCounts = useMemo(() => {
    if (!baseProductId) {
      return {};
    }
    return items.reduce((acc, item) => {
      if (item.id.startsWith(`${baseProductId}-`)) {
        const parts = item.id.substring(baseProductId.length + 1).split('-');
        if (parts.length >= 2) {
          const categoryKey = parts[0];
          const colorKey = parts.slice(1).join('-');
          const selectionKey = `${categoryKey}-${colorKey}`;
          acc[selectionKey] = (acc[selectionKey] || 0) + item.quantity;
        }
      }
      return acc;
    }, {});
  }, [items, baseProductId]);

  // Calculate total count per category (cart + pending)
  const getCategoryCount = (categoryKey) => {
    let total = 0;
    colorsOrder.forEach((color) => {
      const selectionKey = `${categoryKey}-${color}`;
      total += (cartColorCounts[selectionKey] || 0) + (pendingSelections[selectionKey] || 0);
    });
    return total;
  };

  const hasPendingSelections = Object.keys(pendingSelections).length > 0;

  const handleAddToCart = () => {
    if (!hasPendingSelections) return;

    Object.entries(pendingSelections).forEach(([selectionKey, count]) => {
      const [categoryKey, ...colorParts] = selectionKey.split('-');
      const colorKey = colorParts.join('-');
      const categoryTitle = categories.find(cat => cat.key === categoryKey)?.title || categoryKey;
      
      addItem({
        id: `${baseProductId}-${categoryKey}-${colorKey}`,
        name: `${productTitle} - ${categoryTitle} - ${t.colorNames[colorKey]}`,
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
    .map(([selectionKey, count]) => {
      const [categoryKey, ...colorParts] = selectionKey.split('-');
      const colorKey = colorParts.join('-');
      const categoryTitle = categories.find(cat => cat.key === categoryKey)?.title || categoryKey;
      return `${count} × ${categoryTitle} - ${t.colorNames[colorKey]}`;
    })
    .join(", ");

  // Helper to render a grid of color cards for a specific category
  const renderColorGrid = (colors, categoryKey) => (
    <section className="color-grid">
      {colors.map((color) => {
        const selectionKey = `${categoryKey}-${color}`;
        const totalCount = (cartColorCounts[selectionKey] || 0) + (pendingSelections[selectionKey] || 0);
        return (
          <button
            type="button"
            key={color}
            className="color-card"
            onClick={() => handleColorSelect(categoryKey, color)}
            aria-pressed={false}
          >
            {totalCount > 0 ? (
              <span className="color-count-badge">
                {totalCount}
              </span>
            ) : null}
            <div className={`palete palete-${color}`}></div>
            <div className="palete-description">{t.colorNames[color]}</div>
          </button>
        );
      })}
    </section>
  );

  const openPDF = (pdfPath) => {
    window.open(pdfPath, '_blank', 'noopener,noreferrer');
  };
  const supports = [sup1, sup2, sup3, sup4].filter(Boolean);
  const charact = [char1, char2, char3, char4].filter(Boolean);

    return(




    <div className="apa-product-details">
      {onClose && (
        <button type="button" className="product-go-back-button" onClick={onClose} aria-label="Go back">
          ←
        </button>
      )}
      <h2 className ='apa-subcard-title'>{productTitle}</h2>
    
      <section className="apa-prod-info">
        <div className="apa-prod-main">

        <div className="apa-prod-description">
          <h3>{t.descriptionTitle}</h3>
          <div className="apa-prod-description-content">
            {productImage && (
              <img 
                src={productImage} 
                alt={productTitle} 
                className="apa-prod-description-image"
              />
            )}
            <p>{descriptionText}</p>
          </div>
        </div>
        <div className="apa-prod-charact">
          <h3>{t.characteristicsTitle}</h3>
          <ul>
            {charact.map((charact, index) => (
              <li key={index}>{charact}</li>
            ))}
          </ul>
        </div>
        </div>

        <div className="apa-prod-technical">
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

      {categories.map((category) => {
        const isExpanded = expandedCategories[category.key];
        const categoryCount = getCategoryCount(category.key);
        return (
          <div key={category.key} className="color-group">
            <button
              type="button"
              className="color-category-header"
              onClick={() => toggleCategory(category.key)}
              aria-expanded={isExpanded}
            >
              <span className={`category-chevron ${isExpanded ? 'expanded' : ''}`}>
                ▼
              </span>
              <div className="category-title-wrapper">
                <h2 className="apa-grid-prodtype">{category.title}</h2>
                {categoryCount > 0 && (
                  <span className="category-count-badge">
                    {categoryCount}
                  </span>
                )}
              </div>
              <span className={`category-chevron ${isExpanded ? 'expanded' : ''}`}>
                ▼
              </span>
            </button>
            <div className={`color-grid-container ${isExpanded ? 'expanded' : ''}`}>
              {renderColorGrid(colorsOrder, category.key)}
            </div>
          </div>
        );
      })}

      <div className="color-select-wrapper">
        <p className="color-selection-help">{globalTranslations.colorPrompt}</p>
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

export default ApaSubCardDetails