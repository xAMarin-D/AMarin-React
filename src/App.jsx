import React from 'react';
import NavBar from './components/Navbar/NavBar';
import Carrousel from './components/Banner/Carrousel';
import ProductSection from './components/ProductAdd/ProductSection';
import Footer from './components/Footer/Footer';

function App() {
  
  const cartItemCount = 5;

  return (
    <div className="App">
      <NavBar cartItemCount={cartItemCount} />
      <Carrousel />
      <ProductSection />
      <Footer />
    
      {/* ...otros componentes */}
    </div>
  );
}

export default App;