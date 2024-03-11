import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ cartItemCount }) => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <NavBar cartItemCount={cartItemCount} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
