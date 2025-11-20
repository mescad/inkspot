import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Cart/CartContext";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import emailjs from 'emailjs-com';
import "./Checkout.css";

const Checkout = () => {
  const { items, incrementItem, decrementItem, removeItem, itemCount, clearCart } = useCart();
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const navigate = useNavigate();

  // Helper function to extract color from product ID
  const getColorFromId = (productId) => {
    if (!productId) return null;
    
    const colorKeys = [
      "cyan", "magenta", "yellow", "black", "white", "violet", 
      "green", "blue", "purple", "rhodamine", "warmred", "warmRed", 
      "orange", "others"
    ];
    
    const parts = productId.split('-');
    
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

  // Function to get translated description for any product
  const getTranslatedItemDescription = (item) => {
    if (!item || !item.id) return item.description || "";
    
    const productId = item.id;
    const colorKeys = ["cyan", "magenta", "yellow", "black", "white", "violet", "green", "blue", "purple", "rhodamine", "warmred", "warmRed", "orange", "others"];
    const categoryKeys = ["hirtie", "pahare", "carton", "servetele", "caiete"];
    
    // Extract base product ID (remove color and category suffixes)
    let baseId = productId;
    const parts = productId.split('-');
    
    // Remove color key from end if present
    if (colorKeys.includes(parts[parts.length - 1])) {
      baseId = parts.slice(0, -1).join('-');
      
      // Check if there's also a category key (ApaSubCardDetails pattern)
      if (parts.length >= 3 && categoryKeys.includes(parts[parts.length - 2])) {
        baseId = parts.slice(0, -2).join('-');
      }
    }
    
    // Map product IDs to translation sections and card keys
    const productTranslationMap = {
      // Solvent-based inks
      "solvent-euroflex-ext-hd": { section: "SolventDetails", cardKey: "card1" },
      "solvent-euroflex-int-hd": { section: "SolventDetails", cardKey: "card2" },
      "solvent-renflex": { section: "SolventDetails", cardKey: "card3" },
      "solvent-reflex": { section: "SolventDetails", cardKey: "card3" },
      "solvent-2cflexo": { section: "SolventDetails", cardKey: "card4" },
      "solvent-euroflexu": { section: "SolventDetails", cardKey: "card5" },
      
      // Water-based inks
      "apa-eurokraft-vht": { section: "ApaDetails", cardKey: "card1" },
      "apa-eurokraft-rt": { section: "ApaDetails", cardKey: "card2" },
      "apa-eurokraft-fl": { section: "ApaDetails", cardKey: "card3" },
      "apa-eurokraft-gloss": { section: "ApaDetails", cardKey: "card4" },
      "apa-euraqua-mail": { section: "ApaDetails", cardKey: "card5" },
      "apa-euraqua-sp": { section: "ApaDetails", cardKey: "card6" },
      
      // Solvents and thinners
      "bocika-flexo-cube": { section: "BocikaDetails", cardKey: "card1" },
      "bocika-flexo-bocika": { section: "BocikaDetails", cardKey: "card2" },
      "bocika-ethyl-acetate": { section: "BocikaDetails", cardKey: "card3" },
      "bocika-metoxi": { section: "BocikaDetails", cardKey: "card4" },
      "bocika-ethoxi": { section: "BocikaDetails", cardKey: "card5" },
      
      // Auxiliary products
      "aux-washing": { section: "AuxDetails", cardKey: "card1" },
      "aux-catalyst": { section: "AuxDetails", cardKey: "card2" },
      "aux-adhesive": { section: "AuxDetails", cardKey: "card3" },
      "aux-wax": { section: "AuxDetails", cardKey: "card4" },
      "aux-varnish": { section: "AuxDetails", cardKey: "card5" },
      "aux-primer": { section: "AuxDetails", cardKey: "card6" },
      "aux-bioadhesive": { section: "AuxDetails", cardKey: "card7" },
    };
    
    const translationInfo = productTranslationMap[baseId];
    
    if (translationInfo) {
      const { section, cardKey } = translationInfo;
      const sectionTranslations = t[section];
      
      if (sectionTranslations?.cardDescription?.[cardKey]) {
        return sectionTranslations.cardDescription[cardKey];
      }
    }
    
    // Fallback to original description
    return item.description || "";
  };

  // Function to translate item name based on current language
  const getTranslatedItemName = (item) => {
    if (!item || !item.id) return item.name || "";
    
    const productId = item.id;
    const colorKeys = ["cyan", "magenta", "yellow", "black", "white", "violet", "green", "blue", "purple", "rhodamine", "warmred", "warmRed", "orange", "others"];
    const categoryKeys = ["hirtie", "pahare", "carton", "servetele", "caiete"];
    
    // Extract base product ID (remove color and category suffixes)
    let baseId = productId;
    const parts = productId.split('-');
    let hasColor = false;
    let hasCategory = false;
    let colorKey = null;
    let categoryKey = null;
    
    // Remove color key from end if present
    if (colorKeys.includes(parts[parts.length - 1])) {
      hasColor = true;
      colorKey = parts[parts.length - 1];
      baseId = parts.slice(0, -1).join('-');
      
      // Check if there's also a category key (ApaSubCardDetails pattern)
      if (parts.length >= 3 && categoryKeys.includes(parts[parts.length - 2])) {
        hasCategory = true;
        categoryKey = parts[parts.length - 2];
        baseId = parts.slice(0, -2).join('-');
      }
    }
    
    // Map product IDs to translation sections and card keys
    const productTranslationMap = {
      // Solvent-based inks
      "solvent-euroflex-ext-hd": { section: "SolventDetails", cardKey: "card1" },
      "solvent-euroflex-int-hd": { section: "SolventDetails", cardKey: "card2" },
      "solvent-renflex": { section: "SolventDetails", cardKey: "card3" },
      "solvent-reflex": { section: "SolventDetails", cardKey: "card3" },
      "solvent-2cflexo": { section: "SolventDetails", cardKey: "card4" },
      "solvent-euroflexu": { section: "SolventDetails", cardKey: "card5" },
      
      // Water-based inks
      "apa-eurokraft-vht": { section: "ApaDetails", cardKey: "card1" },
      "apa-eurokraft-rt": { section: "ApaDetails", cardKey: "card2" },
      "apa-eurokraft-fl": { section: "ApaDetails", cardKey: "card3" },
      "apa-eurokraft-gloss": { section: "ApaDetails", cardKey: "card4" },
      "apa-euraqua-mail": { section: "ApaDetails", cardKey: "card5" },
      "apa-euraqua-sp": { section: "ApaDetails", cardKey: "card6" },
      
      // Solvents and thinners
      "bocika-flexo-cube": { section: "BocikaDetails", cardKey: "card1" },
      "bocika-flexo-bocika": { section: "BocikaDetails", cardKey: "card2" },
      "bocika-ethyl-acetate": { section: "BocikaDetails", cardKey: "card3" },
      "bocika-metoxi": { section: "BocikaDetails", cardKey: "card4" },
      "bocika-ethoxi": { section: "BocikaDetails", cardKey: "card5" },
      
      // Auxiliary products
      "aux-washing": { section: "AuxDetails", cardKey: "card1" },
      "aux-catalyst": { section: "AuxDetails", cardKey: "card2" },
      "aux-adhesive": { section: "AuxDetails", cardKey: "card3" },
      "aux-wax": { section: "AuxDetails", cardKey: "card4" },
      "aux-varnish": { section: "AuxDetails", cardKey: "card5" },
      "aux-primer": { section: "AuxDetails", cardKey: "card6" },
      "aux-bioadhesive": { section: "AuxDetails", cardKey: "card7" },
    };
    
    const translationInfo = productTranslationMap[baseId];
    
    if (translationInfo) {
      const { section, cardKey } = translationInfo;
      const sectionTranslations = t[section];
      
      // Get base product title from translations
      const baseProductTitle = sectionTranslations?.cardTitles?.[cardKey];
      
      if (baseProductTitle) {
        // Build the translated name with color and/or category if present
        let translatedName = baseProductTitle;
        
        if (hasCategory && hasColor) {
          // ApaSubCardDetails: Product - Category - Color
          const categoryTitle = t.ApaDetails?.colorTitles?.[categoryKey] || categoryKey;
          const colorName = t.ApaDetails?.colorNames?.[colorKey] || t.SolventDetails?.colorNames?.[colorKey] || colorKey;
          translatedName = `${baseProductTitle} - ${categoryTitle} - ${colorName}`;
        } else if (hasColor) {
          // SubCardDetails: Product - Color
          const colorName = t.SolventDetails?.colorNames?.[colorKey] || t.ApaDetails?.colorNames?.[colorKey] || colorKey;
          translatedName = `${baseProductTitle} - ${colorName}`;
        }
        
        return translatedName;
      }
    }
    
    // Fallback to original name
    return item.name || "";
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  // Generate a random 5-digit order number
  const [orderNumber, setOrderNumber] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  
  useEffect(() => {
    // Generate random number between 10000 and 99999
    const randomOrderNumber = Math.floor(Math.random() * 90000) + 10000;
    setOrderNumber(randomOrderNumber.toString());
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    
    if (!hasItems) {
      setOrderStatus("Cart is empty");
      return;
    }

    setIsSubmitting(true);
    setOrderStatus("");

    // Format cart items with translated names and quantities
    const orderItems = items.map(item => ({
      name: getTranslatedItemName(item),
      quantity: item.quantity
    }));


    // After you have orderItems = [...{ name, quantity }]
const longestNameLength = Math.max(...orderItems.map(item => item.name.length));

const ordersText = orderItems
  .map((item, index) => {
    // name padded with spaces so quantities visually align in monospace
    const paddedName = item.name.padEnd(longestNameLength + 4, " ");
    return `${index + 1}. ${paddedName}${item.quantity}`;
  })
  .join("\n");


  const ordersHtml = orderItems
  .map((item, index) => `
    <tr style="border-bottom: 1px solid #ddd;">
      <td style="padding: 8px 4px;">${index + 1}</td>
      <td style="padding: 8px 4px;">${item.name}</td>
      <td style="padding: 8px 4px; text-align: right; white-space: nowrap;">${item.quantity}</td>
    </tr>
  `)
  .join("");

    // Prepare email template parameters matching EmailJS template structure
    const templateParams = {
      order_id: orderNumber,          // matches {{order_id}}
      name: formData.name,            // matches {{name}}
      email: formData.email,          // matches {{email}}
      phone: formData.phone,          // matches {{phone}}
      orders: ordersHtml,             // matches {{orders}}
      units: itemCount.toString()     // matches {{units}}
    };

    // Debug logs (optional)
    console.log("=== ORDER DATA ===");
    console.log("Order Number:", orderNumber);
    console.log("Buyer Info:", {
      name: formData.name,
      email: formData.email,
      phone: formData.phone
    });
    console.log("Order Items:", orderItems);
    console.log("Total Items:", itemCount);
    console.log("Orders Text:\n", ordersText);
    console.log("EmailJS Template Parameters:", templateParams);
    console.log("==================");

    // ✅ Send email using EmailJS with flat templateParams object
    emailjs.send(
      'service_lvqft9e',      // EmailJS service ID
      'template_drgbq78',     // EmailJS template ID
      templateParams,         // <-- pass flat object, not {templateParams}
      'Gbeee8cyyDAvaiV5V'     // EmailJS public key
    )
    .then((result) => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", phone: "" });
      setShowSuccessPopup(true);
    }, (error) => {
      setOrderStatus("Failed to place order. Please try again later.");
      setIsSubmitting(false);
      console.error("EmailJS error:", error);
    });
  };


  const handleCartToggle = () => {
    // This can be used if needed, but checkout page might not need cart toggle
  };

  const hasItems = items.length > 0;

  return (
    <div className="checkout-page">
      <Navbar onCartToggle={handleCartToggle} />
      <div className="checkout-content">
        <div className="checkout-container">
          <h1 className="checkout-title">{t.cartCheckout || "Checkout"}</h1>
          
          {hasItems ? (
            <>
              {orderNumber && (
                <div className="checkout-order-number">
                  <p className="checkout-order-label">{t.orderNumber || "Order Number"}:</p>
                  <p className="checkout-order-value">{orderNumber}</p>
                </div>
              )}
              <div className="checkout-items">
                {items.map((item) => (
                  <div className="checkout-item" key={item.id}>
                    <button
                      type="button"
                      className="checkout-remove"
                      aria-label={t.cartRemove}
                      onClick={() => removeItem(item.id)}
                    >
                      ×
                    </button>
                    <div className="checkout-item-header">
                      <div className="checkout-item-left">
                        <div className="checkout-item-image-wrapper">
                          {item.image && (
                            <img 
                              className="checkout-item-image" 
                              src={item.image} 
                              alt={item.name} 
                            />
                          )}
                          {isColorProduct(item.id) && getColorFromId(item.id) && (
                            <div className={`checkout-color-indicator palete palete-${getColorFromId(item.id)}`}></div>
                          )}
                        </div>
                        <div className="checkout-item-details">
                          <p className="checkout-item-name">{getTranslatedItemName(item)}</p>
                          {getTranslatedItemDescription(item) && (
                            <p className="checkout-item-description">{getTranslatedItemDescription(item)}</p>
                          )}
                        </div>
                      </div>
                      <div className="checkout-item-right">
                        <div className="checkout-quantity-controls">
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="checkout-summary">
                <div className="checkout-total">
                  <p className="checkout-total-label">{t.cartItemsLabel || "Total items"}:</p>
                  <p className="checkout-total-value">{itemCount}</p>
                </div>
              </div>

              <form className="checkout-form" onSubmit={handlePlaceOrder}>
                <h2 className="checkout-form-title">{t.checkoutFormTitle || "Contact Information"}</h2>
                <div className="checkout-form-group">
                  <label htmlFor="checkout-name" className="checkout-form-label">
                    {t.checkoutName || "Name"}
                  </label>
                  <input
                    type="text"
                    id="checkout-name"
                    name="name"
                    className="checkout-form-input"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="checkout-form-group">
                  <label htmlFor="checkout-email" className="checkout-form-label">
                    {t.checkoutEmail || "Email"}
                  </label>
                  <input
                    type="email"
                    id="checkout-email"
                    name="email"
                    className="checkout-form-input"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="checkout-form-group">
                  <label htmlFor="checkout-phone" className="checkout-form-label">
                    {t.checkoutPhone || "Phone Number"}
                  </label>
                  <input
                    type="tel"
                    id="checkout-phone"
                    name="phone"
                    className="checkout-form-input"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="checkout-place-order-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (t.orderSubmitting || "Placing Order...") : (t.placeOrder || "Place Order")}
                </button>
                {orderStatus && (
                  <div className={`checkout-order-status ${orderStatus.includes("successfully") ? "success" : "error"}`}>
                    <p>{orderStatus}</p>
                  </div>
                )}
              </form>
            </>
          ) : (
            <div className="checkout-empty">
              <p>{t.cartEmpty}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
      
      {/* Success Popup Modal */}
      {showSuccessPopup && (
        <div className="checkout-success-overlay" onClick={() => setShowSuccessPopup(false)}>
          <div className="checkout-success-popup" onClick={(e) => e.stopPropagation()}>
            <div className="checkout-success-content">
              <div className="checkout-success-icon">✓</div>
              <h2 className="checkout-success-title">
                {t.orderSuccessTitle || "Order"} #{orderNumber} {t.orderSuccessPlaced || "Placed Successfully!"}
              </h2>
              <p className="checkout-success-email-message">
                {t.orderEmailConfirmation || "A copy of your order will be sent to your email address"}
              </p>
              <button
                type="button"
                className="checkout-success-button"
                onClick={() => {
                  setShowSuccessPopup(false);
                  clearCart();
                  navigate("/");
                }}
              >
                {t.returnToHome || "Return to Home"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;

