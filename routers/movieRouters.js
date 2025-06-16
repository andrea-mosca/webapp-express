const express = require(`express`);
const router = express.Router();
const connection = require("../db/conn.js");

const { index, show } = require("../controllers/movieController.js");
router.get("/", index);
router.get("/:id", show);

module.exports = router;
