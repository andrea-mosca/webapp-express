const express = require(`express`);
const router = express.Router();
const connection = require("../db/conn.js");

const { index } = require("../controllers/movieController.js");
router.get(`/`, index);

module.exports = router;
