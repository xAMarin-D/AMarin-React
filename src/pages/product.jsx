import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/Card/card";
import products from "../productData";

function Product() {
  let { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productData = products.find((p) => p.id === parseInt(productId));
    setProduct(productData);
  }, [productId]);

  return (
    <div>
      {product ? (
        <ProductCard
          product={product}
          onAddToCart={() => {
            /* Funcion Futura */
          }}
        />
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
}

export default Product;
