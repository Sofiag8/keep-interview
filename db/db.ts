require("dotenv").config();

// Sets up a connection pool to a Postgres database
// To query the database:
// ```
// import db from 'db'
// const result = await db.query('SELECT * FROM "user" WHERE email=$1', ['jane@example.com'])
// ```
const { Pool } = require("pg");

const connectionString = process.env.DB_URL;
const pool = new Pool({
  connectionString,
});

/**
 * Performs a database query with the SQL text and arguments. Can use SQL
 * parameters with $1 $2 $3 etc. and passing in the arguments as an array.
 *
 * @param text SQL query to execute
 * @param params SQL parameters
 * @example Select statement:
 * ```
 * const result = await query('SELECT * FROM "user" WHERE email=$1', ['jane@example.com'])
 * ```
 * @example INSERT statement:
 * ```
 * const result = await query('INSERT INTO "user"(name, email) VALUES($1, $2)', ['brianc', 'brian.m.carlson@gmail.com'])
 * ```
 */
const query = async (text: string, params?: string[]) => {
  return new Promise((resolve, reject) => {
    const executionParams = params ? params : [];
    console.log("[db/db.ts] Executing query:", text, executionParams);
    pool.query(text, executionParams, (err, res) => {
      if (err) {
        return reject(err);
      }
      if (res) {
        resolve(res.rows);
      }
    });
  });
};

export default { query };
