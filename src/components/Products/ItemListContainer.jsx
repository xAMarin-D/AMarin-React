import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

const ItemListContainer = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "productos"));
      const productList = querySnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((product) => !category || product.Categoria === category);
      setProducts(productList);
      setLoading(false);
    };

    fetchProducts();
  }, [category]);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return <ItemList products={products} />;
};

export default ItemListContainer;
