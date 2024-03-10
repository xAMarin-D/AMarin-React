import Carrousel from "../components/Banner/Carrousel";
import ProductSection from "../components/ProductAdd/ProductSection";

function Home() {
  return (
    <div>
      <Carrousel />
      <ProductSection category="Arrivals" />
    </div>
  );
}

export default Home;
