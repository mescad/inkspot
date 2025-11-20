import "./SubCard.css";

import { useState, useContext } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";
import { useCart } from "../Cart/CartContext";

function SubCard(props) {
  const { language } = useContext(LanguageContext);
  // Get the translations for the Catalog section based on current language
  const t = translations[language];
  const { addItem, showNotification } = useCart();
  const showAddButton = props.hideAddButton !== true;

  const [clicked, setClicked] = useState(false);

  const handleCardClick = (e) => {
    setClicked(true);
    if (props.onClick) props.onClick(e);
    setTimeout(() => setClicked(false), 250); // Duration matches CSS animation
  };

  const handleViewDetails = (event) => {
    event.stopPropagation();
    setClicked(true);
    if (props.onClick) {
      props.onClick(event);
    }
    setTimeout(() => setClicked(false), 250);
  };

  const handleAddToCart = (event) => {
    event.stopPropagation();
    addItem(
      props.productData || {
        id: props.productId || props.name,
        name: props.name,
        description: props.details,
        image: props.imgsrc,
        category: props.category,
      }
    );
    showNotification(t.cartSuccess || t.cartAddSuccess || "Items added to cart");
  };

  return (
    <section
      className={`subcard${clicked ? " card-clicked" : ""}`}
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      {props.badgeCount > 0 && (
        <span className="subcard-badge">{props.badgeCount}</span>
      )}
      <img className="subcard-image" alt="product-img" src={props.imgsrc} />
      <h2 className="subcard-name">{props.name}</h2>
      <p className="subcard-description">{props.details}</p>
      <div className="subcard-actions">
        <button type="button" className="subcard-button" onClick={handleViewDetails}>
          {t.cardButton}
        </button>
        {showAddButton && (
          <button
            type="button"
            className="subcard-button subcard-secondary-button"
            onClick={handleAddToCart}
          >
            {t.addToCart}
          </button>
        )}
      </div>
    </section>
  );
}

export default SubCard;
