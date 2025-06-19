const express = require(`express`);
const router = express.Router();
const connection = require("../db/conn.js");

const {
  index,
  show,
  storeReview,
} = require("../controllers/movieController.js");
router.get("/", index);
router.get("/:id", show);
router.post("/:id/reviews", storeReview);
module.exports = router;
