import { NextApiHandler } from "next";
import db from "../../../db/db";

const productById: NextApiHandler = async (req, res) => {
  try {
    const id = req.url?.split("/").slice(-1)[0];
    const result = await db.query('SELECT * FROM "product" WHERE id=$1', [
      id as string,
    ]);
    if (Array.isArray(result) && result.length === 1) {
      res.status(200).json(result[0]);
    } else {
      res.status(404).end();
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default productById;
