import { NextApiHandler } from "next";
import db from "../../db/db";

export interface Review {
  id: string;
  productId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

/**
 * POST /api/review
 *
 * Your API must return receive data in this format.
 */
interface CreateReviewData {
  productId: string;
  rating: number;
  comment: string;
}

/**
 * POST /api/review
 *
 * Your API must return a response in this format.
 */
interface CreateReviewResponse {
  success: boolean;
  review: Review;
}

/**
 * GET /api/review
 *
 * Gets a list of reviews for a product
 *
 * Your API must return receive data in this format.
 */
interface GetReviewsQuery {
  productId: string;
}

/**
 * GET /api/review
 *
 * Gets a list of reviews for a product
 *
 * Your API must return a response in this format.
 */
interface GetReviewsResponse {
  success: boolean;
  reviews: Review[];
}

const reviewEndpointHandler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const result = (await db.query( `INSERT INTO review (productId, rating, comment, timestamp)
    VALUES ($1, $2, $3, $4) RETURNING id, productId, rating, comment, timestamp as "createdAt"`,
    [req.body.productId, req.body.rating, req.body.review, new Date()]))
    const response: GetReviewsResponse = {
      success: true,
      reviews: result[0]
    }
    res.status(200).json(response);
  }
};

export default reviewEndpointHandler;
