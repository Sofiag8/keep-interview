import { Review as ReviewType } from "../pages/api/review";
import StarRating from "./StarRating";

interface Props {
  review: ReviewType;
}

const Review = ({ review }: Props) => {
  debugger;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "8px",
        padding: "1rem",
        backgroundColor: "var(--accent-bg)",
        marginBottom: "0.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <StarRating editable={false} rating={review.rating} />
        <span>{new Date(review.createdAt).toISOString()}</span>
      </div>
      <p>{review.comment}</p>
    </div>
  );
};

export default Review;
