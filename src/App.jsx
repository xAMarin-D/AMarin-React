import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import WelcomePopup from "./components/PopUp/WelcomePopup";

function App() {
  return (
    <div className="App">
      <WelcomePopup />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
