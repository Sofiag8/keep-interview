import { NextApiHandler } from "next";
import db from "../../../db/db";
import { Product } from "../../../types/product";

/**
 * GET /api/product
 *
 * Query parameters:
 * - skip: number of products to skip
 * - take: number of products to take (limit)
 */
export type GetProductsQuery = {
  /**
   * Number of products to skip
   */
  page?: number;
  /**
   * Number of products to take (limit)
   */
  take?: number;
};

/**
 * GET /api/product
 *
 * Your API must return a response in this format.
 */
export type GetProductsResponse = {
  /**
   * Number of skipped products
   */
  page: number;
  /**
   * Number of taken products (limit)
   */
  take: number;
  /**
   * Number of products in this page
   * (may be less than `take` if there are not enough products)
   */
  count: number;
  /**
   * Total number of products in the database
   */
  totalCount: number;
  /**
   * Total number of pages
   */
  pages: number;
  /**
   * Products in this page
   */
  products: Product[];
};

// TODO: Make this function perform pagination and return the right response
const productsIndex: NextApiHandler = async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  // Query params
  const query = req.query;
  const offset = (parseInt(query.page, 10) - 1) * parseInt(query.take, 10)

  const count= (await db.query('SELECT COUNT(*) FROM "product"'))
  const result = (await db.query('SELECT * FROM "product" LIMIT $1 OFFSET $2', [query.take, `${offset}` ])) as Product[];
  const response: GetProductsResponse = {
    page: query.page,
    take: query.take,
    count: result.length,
    totalCount: count[0].count,
    pages: parseInt(count[0].count, 10) / query.take,
    products: result,
  };
  res.status(200).json(response);
};

export default productsIndex;
