
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";
import Contacts from "./components/Contacts/Contacts";
import About from "./components/About/About";
import CartDrawer from "./components/Cart/CartDrawer";
import CartNotification from "./components/Cart/CartNotification";
import Checkout from "./components/Checkout/Checkout";

import { LanguageProvider } from "./components/Translations/LanguageContext";
import { CartProvider } from "./components/Cart/CartContext";

function HomePage() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen((prev) => !prev);
  const closeCart = () => setIsCartOpen(false);

  return (
    <>
      <Navbar onCartToggle={toggleCart} />
      <Hero />
      <Catalog />
      <About />
      <Contacts />
      <Footer />
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
      <CartNotification />
    </>
  );
}

function App() {
  return (
    <Router>
      <LanguageProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;
