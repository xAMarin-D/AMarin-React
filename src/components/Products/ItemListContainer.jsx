import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import products from "../../productData";

const ItemListContainer = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(products);
        }, 100);
      });
    };

    fetchProducts().then((data) => {
      setProductData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return <ItemList products={productData} />;
};

export default ItemListContainer;
