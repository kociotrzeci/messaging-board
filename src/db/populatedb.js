const { Client } = require("pg");
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 10 ),
  message VARCHAR (1023),
  timestamp TIMESTAMP
);

INSERT INTO messages (username, message, timestamp) 
VALUES
  ('Bryan', 'test', CURRENT_TIMESTAMP - INTERVAL '8 hours'),
  ('Odin', 'hello there', CURRENT_TIMESTAMP - INTERVAL '2 hours'),
  ('kocio', 'i was here',  CURRENT_TIMESTAMP);
`;

console.log(process.env.DB_NAME);
async function populateDB() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

module.exports = { populateDB };
