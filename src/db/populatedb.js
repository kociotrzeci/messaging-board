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
  ('Bryan', 'test', CURRENT_TIMESTAMP),
  ('Odin', 'hello there', CURRENT_TIMESTAMP - INTERVAL '2 hours'),
  ('kociotrzeci', 'i was here',  CURRENT_TIMESTAMP - INTERVAL '8 hours');
`;

console.log(process.env.DB_NAME);
async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost:5432/${process.env.DB_NAME}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
