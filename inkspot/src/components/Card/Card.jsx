
import "./Card.css";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";
import React, { useContext } from "react";
import { useCart } from "../Cart/CartContext";

function Card(props) {

  const { language } = useContext(LanguageContext);
  // Access the translations for the current language for SolventDetails
  const t = translations[language];
  const { addItem } = useCart();

  const handleViewDetails = (event) => {
    event.stopPropagation();
    if (props.onClick) {
      props.onClick(event);
    }
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
  };


  return (
    <>
      <section
        className={`card ${props.className || ""}`}
        onClick={props.onClick}
       style={{ cursor: "pointer" }}
      >
        
        <img className='card-image' alt="product-img" src={props.imgsrc} />
        <h2 className='card-name'>{props.name}</h2>
        <p className='card-description'>{props.details}</p>
        <div className='card-actions'>
          <button type='button' className='card-button' onClick={handleViewDetails}>{t.cardButton}</button>
          
        </div>
       
        


        

      </section>
    </>
  );
}

export default Card;
