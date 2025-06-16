const connection = require("../db/conn.js");
const index = (req, res) => {
  connection.query("SELECT * FROM movies.movies", (err, results) => {
    if (err) throw err;
    res.json({
      movies: results,
    });
  });
};

module.exports = { index };
