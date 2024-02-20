import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";

function Layout() {
  const cartItemCount = 5;
  return (
    <div>
      <NavBar cartItemCount={cartItemCount} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
