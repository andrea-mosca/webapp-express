// IMPORTS
const express = require(`express`);
const app = express();
const port = 3000;

// MIDDELWARES
app.use(express.static(`public`));
app.use(express.json());

// ROUTES
app.get(`/`, (req, res) => {
  res.json({ message: "messaggio nel backend" });
});

// LISTEN
app.listen(port, () => {
  console.log(`server in ascolto su http://localhost:3000`);
});
