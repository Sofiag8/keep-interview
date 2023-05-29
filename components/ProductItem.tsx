import React from "react";
import { Product } from "../types/product";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <a href={`/products/${product.id}`}>
          <h3>{product.name}</h3>
        </a>
        <p style={{ justifySelf: "flex-end" }}>${product.price}</p>
      </div>
      <span>{product.description}</span>
      <div
        className="horizontal-stack"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
