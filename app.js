// IMPORTS
const express = require(`express`);
const app = express();
const port = 3000;

// MIDDELWARES
app.use(express.static(`public`));
app.use(express.json());

// ROUTES
const connection = require("./db/conn.js");
app.get(`/`, (req, res) => {
  connection.query("SELECT * FROM movies.movies", (err, results) => {
    res.json({
      movies: results,
    });
  });
  //   res.json({ message: "messaggio nel backend" });
});

// LISTEN
app.listen(port, () => {
  console.log(`server in ascolto su http://localhost:3000`);
});
