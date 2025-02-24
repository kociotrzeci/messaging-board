const { Router } = require("express");

const controller = require("../controllers/controllers");

const router = Router();
router.get("/", controller.indexGet);
router.get("/new", controller.newGet);
router.post("/new", controller.newPost);

module.exports = { router };
