import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "productos"));
      const products = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductData(products);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return <ItemList products={productData} />;
};

export default ItemListContainer;
