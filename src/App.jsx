import React from 'react';
import NavBar from './components/Navbar/NavBar';
import Carrousel from './components/Banner/Carrousel';
import ProductSection from './components/ProductAdd/ProductSection';
import Footer from './components/Footer/Footer';
import WelcomePopup from './components/PopUp/WelcomePopup';

function App() {
  
  const cartItemCount = 5;

  return (
    <div className="App">
      <WelcomePopup />
      <NavBar cartItemCount={cartItemCount} />
      <Carrousel />
      <ProductSection />
      <Footer />
    
      {/* Add more components :D */}
    </div>
  );
}

export default App;