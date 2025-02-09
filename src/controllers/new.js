const { Router } = require("express");
const newRouter = Router();
const { messages } = require("../controllers/index.js");
newRouter.get("/", (req, res) => {
  res.render("new");
});
newRouter.post("/", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  console.log(`${req.body.name} sent message: ${req.body.message}`);
  res.redirect("/");
});

module.exports = newRouter;
