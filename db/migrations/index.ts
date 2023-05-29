import { addProductsMigration } from "./addProducts";
import { createReviewTable } from "./createReviewTable";

const executeMigrations = async () => {
  await addProductsMigration();
  await createReviewTable();
};

executeMigrations();
