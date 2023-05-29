import { useEffect, useState } from "react";
import Star from "./Star";

interface StarRatingProps {
  editable?: boolean;
  rating?: number;
  onChange?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
  editable = true,
  rating: defaultRating = 0,
  onChange,
}) => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [rating, setRating] = useState<number>(defaultRating);

  useEffect(() => {
    setRating(defaultRating);
  }, [defaultRating]);

  const handleStarClick = (index: number) => {
    if (editable) {
      setRating(index);
      if (onChange) {
        onChange(index);
      }
    }
  };

  const handleStarHover = (index: number) => {
    if (editable) {
      setHoveredStar(index);
    }
  };

  const handleMouseLeave = () => {
    if (editable) {
      setHoveredStar(null);
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "row" }}
      onMouseLeave={handleMouseLeave}
    >
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          onClick={() => handleStarClick(index + 1)}
          onMouseEnter={() => handleStarHover(index + 1)}
          style={{ cursor: editable ? "pointer" : "default" }}
        >
          <Star
            fill={
              (hoveredStar !== null ? index < hoveredStar : index < rating)
                ? "gold"
                : "grey"
            }
          />
        </div>
      ))}
    </div>
  );
};

export default StarRating;
