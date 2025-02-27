const db = require("../db/queries");
const { body, validationResult } = require("express-validator");
const validator = [
  body("username").trim().isLength({ min: 1, max: 10 }).escape(),
  body("message").trim().isLength({ min: 1, max: 1023 }).escape(),
];
async function indexGet(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { messages: messages });
}
async function newGet(req, res) {
  res.render("new");
}
async function newPost(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.redirect("./");
    console.log("validation error");
  }
  console.log(
    "username: " + req.body.username + " message: " + req.body.message
  );
  await db.pushMessage(req.body.username, req.body.message);
  res.redirect("./");
}
module.exports = {
  indexGet,
  newGet,
  newPost,
};
