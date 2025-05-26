
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

import Catalog from './components/Catalog/Catalog';
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About';

import { LanguageProvider } from "./components/Translations/LanguageContext";

function App() {
  return (
    <>
    
    <LanguageProvider>
    
    <Navbar/>
    <Hero/>
    <Catalog/>
    <About/>
    <Contacts/>
    <Footer/>
    </LanguageProvider> 


  
    
    
    
    </>
  );
}

export default App;
