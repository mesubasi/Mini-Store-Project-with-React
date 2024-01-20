import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Products({ user }) {
  const [last10Products, setLast10Products] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((res) => setLast10Products(res));
  }, []);
  return (
    <>
      <h2>Products</h2>
      <div className="row row-cols-sm-5 row-cols-md-4">
        {last10Products.map((product) => (
          <ProductCard user={user} key={product.id} item={product} />
        ))}
      </div>
    </>
  );
}

export default Products;
