import { GetServerSideProps, NextPage } from "next";
import fetch from "node-fetch";
import ErrorPage from "next/error";
import ProductDetailPage from "../../components/ProductDetailPage";
import { Product } from "../../types/product";
import { useEffect, useState } from "react";
import { Review } from "../api/review";

/**
 * 1. Client requests the `/products/[id]` page
 * 2. `getServerSideProps` is executed to fetch the props
 * 3. Return returns React `props` to the NextPage component.
 */
export const getServerSideProps: GetServerSideProps = async ({
  params,
  query,
  res,
}) => {
  try {
    const { id } = query;
    // Fetch product data from API
    const result = await fetch(`http://localhost:5003/api/product/${id}`);
    const data = (await result.json()) as Product;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};

const ProductListingPage: NextPage<{ data: Product }> = (props) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  if (!props.data) {
    return <ErrorPage statusCode={404} />;
  }

  useEffect(() => {
    // Fetch reviews for this product
    fetch(`/api/review?productId=${props.data.id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data.reviews as Review[]));
  }, []);

  return (
    <ProductDetailPage
      onProductReviewCreated={(review) => {
        setReviews([...reviews, review]);
      }}
      product={props.data}
      reviews={reviews}
    />
  );
};

export default ProductListingPage;
