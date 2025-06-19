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
  const { id } = req.params;

  const movieSql = `SELECT * FROM movies.movies WHERE id=?`;
  const reviewsSql = `
    SELECT 
      movies.*, 
      reviews.name AS reviewed_name,
      reviews.vote AS review_vote,
      reviews.text AS review_text,
      reviews.created_at,
      reviews.updated_at,
      reviews.id

    FROM movies.movies
    INNER JOIN movies.reviews ON movies.id = reviews.movie_id
    WHERE movies.id = ?
  `;

  connection.query(movieSql, [id], (err, moviesResults) => {
    if (err) return res.status(500).json({ error: "Internal server error" });
    if (moviesResults.length === 0)
      return res.status(404).json({ error: "Resource not found" });

    const movie = moviesResults[0];

    connection.query(reviewsSql, [id], (err, reviewsResults) => {
      if (err)
        return res
          .status(500)
          .json({ message: "Database query failed", error: err });

      movie.reviews = reviewsResults;
      res.json(movie);
    });
  });
};

const storeReview = (req, res) => {
  const { id } = req.params;
  const { name, vote, text } = req.body;
  const storeReviewSql = `
    INSERT INTO movies.reviews (movie_id, name, vote, text) 
    VALUES (?, ?, ?, ?);
  `;
  const storeReviewSqlValue = [id, name, vote, text];
  connection.query(storeReviewSql, storeReviewSqlValue, (err, results) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Database query failed", error: err });
    console.log(results);
    res.status(201).json({ message: "review created", id: results.insertId });
  });
};
module.exports = { index, show, storeReview };
