import CreateProductReview from "./CreateProductReview";
import { Product } from "../types/product";
import ProductReviews from "./ProductReviews";
import { useState } from "react";
import { Review } from "../pages/api/review";

interface ProductDetailPageProps {
  product: Product;
  reviews: Review[];
  onProductReviewCreated?: (review: Review) => void;
}

const ProductDetailPage = (props: ProductDetailPageProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <h1>{props.product.name}</h1>
      </div>

      <img src={props.product.image_url} />
      <p>{props.product.description}</p>

      <h3>Reviews</h3>
      {props.reviews.length > 0 ? (
        <ProductReviews reviews={props.reviews} />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
            color: "var(--text-light)",
            backgroundColor: "var(--accent-bg)",
            marginBottom: "1rem",
          }}
        >
          <p>No reviews found! Be the first to leave a review.</p>
        </div>
      )}

      <hr style={{ width: "100%", marginBlockEnd: "0.5rem" }} />

      <p>Leave a review</p>
      <CreateProductReview
        onProductReviewCreated={(review) => {
          props.onProductReviewCreated && props.onProductReviewCreated(review);
        }}
        productId={props.product.id}
      />
    </div>
  );
};

export default ProductDetailPage;
