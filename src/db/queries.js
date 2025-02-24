const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}
async function pushMessage(username, message) {
  await pool.query(
    "INSERT INTO messages (username, message, timestamp) VALUES ($1, $2, CURRENT_TIMESTAMP)",
    [username, message]
  );
}
module.exports = {
  getAllMessages,
  pushMessage,
};
