import React from 'react';
import NavBar from './components/Navbar/NavBar';
import Carrousel from './components/Banner/Carrousel';
import ItemList from './components/Products/ItemList';
import ProductSection from './components/ProductAdd/ProductSection';

function App() {
  
  const cartItemCount = 5;

  return (
    <div className="App">
      <NavBar cartItemCount={cartItemCount} />
      <Carrousel />
      <ProductSection />
    
      {/* ...otros componentes */}
    </div>
  );
}

export default App;