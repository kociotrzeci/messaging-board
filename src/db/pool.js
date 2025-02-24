const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });
module.exports = new Pool({
  host: "localhost",
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});
