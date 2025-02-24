const express = require("express");
const app = express();
const path = require("node:path");
const PORT = 3000;
const viewsPath = path.join(__dirname, "views");
const publicPath = path.join(__dirname, "public");
const { router } = require("./routers/routers.js");

app.set("views", viewsPath);
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
