import db from "../db";

const queryCreateReviewTable = `
  CREATE TYPE rating_enum as enum('1', '2', '3', '4', '5');
  CREATE TABLE IF NOT EXISTS review(
    id SERIAL PRIMARY KEY,
    productId INT,
    rating rating_enum,
    comment TEXT,
    timestamp TIMESTAMP
  )
`;

export const createReviewTable = async () => {
  console.log("Running db/migrations/createReviewTable migration...");
  try {
    console.log('Creating "review" table if it doesn\'t exist...');
    await db.query(queryCreateReviewTable);
    console.log('Completed - Creating "review" table if it doesn\'t exist...');
  } catch (err) {
    console.error("❌ Error with db/migrations/addReview migration", err);
  }
  console.log("Completed db/migrations/createReviewTable migration.");
};
