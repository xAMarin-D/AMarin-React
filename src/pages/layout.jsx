import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";

function Layout() {
  const cartItemCount = 5;
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <NavBar cartItemCount={cartItemCount} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
