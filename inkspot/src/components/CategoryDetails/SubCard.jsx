import './SubCard.css'

import { useState, useContext } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";

function SubCard(props) {
    const { language } = useContext(LanguageContext);
    // Get the translations for the Catalog section based on current language
    const t = translations[language];
  
    const [clicked, setClicked] = useState(false);

    const handleCardClick = (e) => {
        setClicked(true);
        if (props.onClick) props.onClick(e);
        setTimeout(() => setClicked(false), 250); // Duration matches CSS animation
    };

    return (
        <>
            <section
                className={`subcard${clicked ? " card-clicked" : ""}`}
                onClick={handleCardClick}
                style={{ cursor: "pointer" }}
            >
                <img className='subcard-image' alt="product-img" src={props.imgsrc} />
                <h2 className='subcard-name'>{props.name}</h2>
                <p className='subcard-description'>{props.details}</p>
                <button className='subcard-button'>{t.cardButton}</button>
            </section>
        </>
    );
}

export default SubCard
