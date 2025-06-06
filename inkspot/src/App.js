
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

import Catalog from './components/Catalog/Catalog';
import Contacts from './components/Contacts/Contacts';

import { LanguageProvider } from "./components/Translations/LanguageContext";

function App() {
  return (
    <>
    
    <LanguageProvider>
    
    <Navbar/>
    <Hero/>
    <Catalog/>
    <Contacts/>
    </LanguageProvider> 


  
    
    
    
    </>
  );
}

export default App;
