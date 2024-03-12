import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePopup from "./components/PopUp/WelcomePopup";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Product from "./pages/product";
import Arrivals from "./pages/arrivals";
import MenCategory from "./pages/men";
import AccCategory from "./pages/accesories";
import WmnCategory from "./pages/women";
import Cart from "./pages/cart";

function App() {
  const [cart, setCart] = useState([]);

  const removeFromCart = (itemIndex) => {
    setCart((currentCart) =>
      currentCart.filter((item, index) => index !== itemIndex)
    );
  };

  const addToCart = (product, quantity) => {
    const newItems = Array(quantity).fill(product);
    setCart((currentCart) => [...currentCart, ...newItems]);
  };

  return (
    <div className="App">
      <WelcomePopup />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout cartItemCount={cart.length} />}>
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  setCart={setCart}
                  removeFromCart={removeFromCart}
                />
              }
            />
            <Route index element={<Home />} />
            <Route
              path="product/:productId"
              element={<Product onAddToCart={addToCart} />}
            />
            <Route path="arrivals" element={<Arrivals />} />
            <Route path="men" element={<MenCategory />} />
            <Route path="women" element={<WmnCategory />} />
            <Route path="accesories" element={<AccCategory />} />
            <Route path="/cart" element={<Cart cart={cart} />} />
          </Route>
          <Route path="*" element={<h1>404 no encontrado</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
