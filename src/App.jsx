import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Product from "./pages/product";

import WelcomePopup from "./components/PopUp/WelcomePopup";

function App() {
  return (
    <div className="App">
      <WelcomePopup />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product-item" element={<Product />} />
            <Route path="product/:productId" element={<Product />} />
          </Route>
          <Route path="*" element={<h1>404 no encontrado</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
