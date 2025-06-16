const connection = require("../db/conn.js");

const index = (req, res) => {
  const movieSql = "SELECT * FROM movies.movies";
  connection.query(movieSql, (err, results) => {
    if (err) return res.status(500).json({ error: "Internal server error" });
    res.json({
      movies: results,
    });
  });
};

const show = (req, res) => {
  const movieSql = "SELECT * FROM movies.movies WHERE id=?";
  const { id } = req.params;

  connection.query(movieSql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: "Internal server error" });
    if (!results.length)
      return res.status(404).json({ error: "Resource not found" });
    res.json({
      movie: results[0],
    });
  });
};

module.exports = { index, show };
