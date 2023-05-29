import db from "../db";
import { faker } from "@faker-js/faker";

// Define the Product schema
const createProductTable = `
  CREATE TABLE IF NOT EXISTS product(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    price DECIMAL(10, 2),
    image_url TEXT
  )
`;

// Generate fake data
const generateFakeData = async () => {
  const result = await db.query("SELECT count(*) as count FROM product");
  if (result[0].count >= 100) {
    console.log("Already populated data, skipping...");
    return;
  }
  const total = 100;
  for (let i = 0; i < total; i++) {
    const name = faker.commerce.productName();
    const description = faker.commerce.productDescription();
    const price = faker.commerce.price();
    const image_url = faker.image.url();
    console.log(`[${i + 1}/100] Inserting product ${name}...`);
    await db.query(
      `INSERT INTO product (name, description, price, image_url) VALUES ($1, $2, $3, $4)`,
      [name, description, price, image_url]
    );
  }
};

// Run the script
export const addProductsMigration = async () => {
  console.log("Running db/migrations/addProduct migration...");
  try {
    console.log('Creating "product" table if it doesn\'t exist...');
    await db.query(createProductTable);
    console.log('Completed - Creating "product" table if it doesn\'t exist...');
    console.log('Generating fake data into the "product" table...');
    await generateFakeData();
    console.log('Completed - Generating fake data into the "product" table...');
    console.log(
      "✅ db/migrations/addProduct successful, product table created"
    );
  } catch (err) {
    console.error("❌ Error with db/migrations/addProduct migration", err);
  }
};
