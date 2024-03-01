import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/Card/card";
import products from "../productData";

function Product() {
  let { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = new Promise((resolve) => {
      setTimeout(() => {
        const productData = products.find((p) => p.id === parseInt(productId));
        resolve(productData);
      }, 100);
    });

    fetchProduct.then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [productId]);

  if (loading) {
    return <p>Cargando detalles del producto...</p>;
  }

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <ProductCard
      product={product}
      onAddToCart={() => {
        /* Función futura para carrito*/
      }}
    />
  );
}

export default Product;
