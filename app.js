// IMPORTS
const express = require("express");
const port = 3000;
const movieRouter = require("./routers/movieRouters");
const { notFound, errorHandler } = require("./middlewares/errors.js");
app = express();
// MIDDELWARES
app.use(express.static(`public`));
app.use(express.json());

// ROUTES
app.use("/movies", movieRouter);

// ERRORS MIDDLEWARE
app.use(notFound);
app.use(errorHandler);

// LISTEN
app.listen(port, () => {
  console.log(`server in ascolto su http://localhost:3000`);
});
