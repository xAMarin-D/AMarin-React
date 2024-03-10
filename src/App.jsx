import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Product from "./pages/product";
import Arrivals from "./pages/arrivals";

import WelcomePopup from "./components/PopUp/WelcomePopup";
import MenCategory from "./pages/men";
import WmnCategory from "./pages/women";
import AccCategory from "./pages/accesories";

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
            <Route path="/arrivals" element={<Arrivals />} />
            <Route path="/men" element={<MenCategory />} />
            <Route path="/women" element={<WmnCategory />} />
            <Route path="/accesories" element={<AccCategory />} />
          </Route>
          <Route path="*" element={<h1>404 no encontrado</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
