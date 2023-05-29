import { NextPage } from "next";
import type { Product } from "../../types/product";
import { useEffect, useState } from "react";
import ProductList from "../../components/ProductList";
import PageStepper from "../../components/PageStepper";
import { GetProductsResponse } from "../api/product/index";

const LIMIT = 10;

const ProductsPage: NextPage<{ data: Product[] }> = (props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(100);

  useEffect(() => {
    fetch(`/api/product?page=${currentPage}&take=${LIMIT}`)
      .then((data) => data.json())
      .then((_response) => {
        const response = _response as GetProductsResponse;
        setProducts(response.products);
        setCurrentPage(response.page);
        setTotalPages(response.pages);
      });
  }, [currentPage]);

  const onNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const onPrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const onSelectPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Products</h1>
      <p>Challenge 1: Implement API-based pagination to fetch products data.</p>
      {/* PageStepper assumes that the first page is 1 and the last page is provided by `totalPages` */}
      <PageStepper
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
        onSelectPage={onSelectPage}
      />
      <ProductList products={products} />
      <PageStepper
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
        onSelectPage={onSelectPage}
      />
    </div>
  );
};

export default ProductsPage;
