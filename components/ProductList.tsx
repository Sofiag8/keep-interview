import React from "react";
import ProductItem from "./ProductItem";
import type { Product } from "../types/product";

interface ProductListProps {
  products: Product[];
}

const ProductList = (props: ProductListProps) => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        {props.products.map((result) => (
          <ProductItem key={result.id} product={result} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
