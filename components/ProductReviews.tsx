import { Review as ReviewType } from "../pages/api/review";
import Review from "./Review";

interface Props {
  reviews: ReviewType[];
}

const ProductReviews = ({ reviews }: Props) => {
  return (
    <>
      {reviews.map((review) => (
        <div key={review.id}>
          <Review review={review} />
        </div>
      ))}
    </>
  );
};

export default ProductReviews;
