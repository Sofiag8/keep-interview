import React, { useState } from "react";
import Star from "./Star";
import StarRating from "./StarRating";
import { Review } from "../pages/api/review";

interface CreateProductReviewProps {
  productId: string;
  onProductReviewCreated?: (review: Review) => void;
}

const CreateProductReview = ({
  productId,
  onProductReviewCreated,
}: CreateProductReviewProps) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0); // [1, 2, 3, 4, 5]
  const handleSubmit = (e) => {
    e.preventDefault();

    if (review.trim() === "" || rating === 0) {
      return;
    }

    fetch(`/api/review`, {
      method: "POST",
      body: JSON.stringify({ review, rating, productId }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        onProductReviewCreated(data.review as Review);
        setReview("");
        setRating(0);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <StarRating rating={rating} editable={true} onChange={setRating} />
      <textarea
        placeholder="Write a review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default CreateProductReview;
