import "./CartDrawer.css";
import { useCart } from "./CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";

const CartDrawer = ({ isOpen, onClose }) => {
  const { items, incrementItem, decrementItem, removeItem, clearCart, itemCount } = useCart();
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const navigate = useNavigate();

  // Helper function to extract color from product ID
  const getColorFromId = (productId) => {
    if (!productId) return null;
    
    // List of known color keys
    const colorKeys = [
      "cyan", "magenta", "yellow", "black", "white", "violet", 
      "green", "blue", "purple", "rhodamine", "warmred", "warmRed", 
      "orange", "others"
    ];
    
    // Check if this is from SubCardDetails (format: baseProductId-colorKey)
    // or ApaSubCardDetails (format: baseProductId-categoryKey-colorKey)
    const parts = productId.split('-');
    
    // Try to find a color key in the ID
    for (let i = parts.length - 1; i >= 0; i--) {
      if (colorKeys.includes(parts[i])) {
        return parts[i];
      }
    }
    
    return null;
  };

  // Check if product is from SubCardDetails or ApaSubCardDetails
  const isColorProduct = (productId) => {
    if (!productId) return false;
    // Check if ID contains known product prefixes
    const colorProductPrefixes = [
      "solvent-euroflex-ext-hd",
      "solvent-euroflex-int-hd",
      "solvent-reflex",
      "solvent-2cflexo",
      "solvent-euroflexu",
      "apa-eurokraft-vht",
      "apa-eurokraft-rt",
      "apa-eurokraft-fl",
      "apa-eurokraft-gloss",
      "apa-euraqua-mail",
      "apa-euraqua-sp"
    ];
    
    return colorProductPrefixes.some(prefix => productId.startsWith(prefix + '-'));
  };

  if (!isOpen) {
    return null;
  }

  const hasItems = items.length > 0;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <aside className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <header className="cart-header">
          <div>
            <h2>{t.cart}</h2>
            <p className="cart-subtitle">
              {itemCount} {t.cartItemsLabel || ""}
            </p>
          </div>
          <button type="button" className="cart-close" onClick={onClose}>
            ✖
            <span className="sr-only">{t.cartClose}</span>
          </button>
        </header>

        <div className="cart-items">
          {hasItems ? (
            items.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-header">
                  <div className="cart-item-image-wrapper">
                    {item.image && (
                      <img className="cart-item-image" src={item.image} alt={item.name} />
                    )}
                    {isColorProduct(item.id) && getColorFromId(item.id) && (
                      <div className={`cart-color-indicator palete palete-${getColorFromId(item.id)}`}></div>
                    )}
                  </div>
                  <div className="cart-item-details">
                    <p className="cart-item-name">{item.name}</p>
                    {item.description && (
                      <p className="cart-item-description">{item.description}</p>
                    )}
                  </div>
                </div>
                <div className="cart-item-actions">
                  <div className="cart-quantity-controls" aria-label={t.cartQuantityLabel}>
                    <button
                      type="button"
                      aria-label={t.cartDecrease}
                      onClick={() => decrementItem(item.id)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      aria-label={t.cartIncrease}
                      onClick={() => incrementItem(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="cart-remove"
                    onClick={() => removeItem(item.id)}
                  >
                    {t.cartRemove}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="cart-empty">{t.cartEmpty}</p>
          )}
        </div>

        <footer className="cart-footer">
          <button
            type="button"
            className="cart-clear"
            onClick={clearCart}
            disabled={!hasItems}
          >
            {t.cartClear}
          </button>
          <button
            type="button"
            className="cart-checkout"
            disabled={!hasItems}
            onClick={() => {
              if (hasItems) {
                navigate("/checkout");
                onClose();
              }
            }}
          >
            {t.cartCheckout}
          </button>
        </footer>
      </aside>
    </div>
  );
};

export default CartDrawer;

