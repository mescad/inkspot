
import './Hero.css'

import { useContext } from "react";
import { LanguageContext } from "../Translations/LanguageContext";
import translations from "../Translations/translations";

function Hero(){

    const { language } = useContext(LanguageContext);
    const t = translations[language]; // Get the text for the current language

    return(
        <>
        
        <div className="hero">
          
            {/*<img className="heroimage" alt="heroimage" src={heroImg}/>*/}
            <div className="hero-group">   
            <h1 className="hero-title">{t.heroTitle}</h1>
            <h2 className="hero-subtitle">Discover our premium selection of high-quality flexographic inks designed for professional printing and artistic excellence</h2>
            <button className="hero-button">Browse Collection</button>
            </div>
        </div>
        
        
        
        
        
        </>
    );
}

export default Hero