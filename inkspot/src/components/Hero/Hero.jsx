import heroImg from "../../assets/hero2.png"
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
            <img className="heroimage" alt="heroimage" src={heroImg}/>
            <h1 className="hero-title">{t.heroTitle}</h1>
            
        </div>
        
        
        
        
        
        </>
    );
}

export default Hero