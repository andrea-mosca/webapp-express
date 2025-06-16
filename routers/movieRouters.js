const express = require(`express`);
const router = express.Router();
const connection = require("../db/conn.js");

router.get(`/`, (req, res) => {
  connection.query("SELECT * FROM movies.movies", (err, results) => {
    if (err) throw err;
    res.json({
      movies: results,
    });
  });
});

module.exports = router;
